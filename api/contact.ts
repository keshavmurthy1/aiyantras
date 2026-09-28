type ContactRequest = {
  method?: string;
  body?: unknown;
};

type ContactResponse = {
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => ContactResponse;
  json: (body: unknown) => void;
};

type ContactDetails = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  requirement: string;
};

function environmentVariable(name: string): string | undefined {
  const runtime = globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  };

  return runtime.process?.env?.[name];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function readText(value: unknown, maxLength: number, required = false): string | null {
  if (typeof value !== 'string') return required ? null : '';

  const text = value.trim();
  if (text.length > maxLength || (required && !text)) return null;
  return text;
}

function parseContactDetails(value: unknown): ContactDetails | null {
  if (!isRecord(value)) return null;

  const name = readText(value.name, 120, true);
  const company = readText(value.company, 160, true);
  const role = readText(value.role, 120);
  const email = readText(value.email, 254, true);
  const phone = readText(value.phone, 50);
  const requirement = readText(value.requirement, 5000, true);

  if (!name || !company || !email || !requirement || role === null || phone === null) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  return { name, company, role, email, phone, requirement };
}

export default async function handler(request: ContactRequest, response: ContactResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = environmentVariable('RESEND_API_KEY');
  const from = environmentVariable('CONTACT_FROM_EMAIL');
  if (!apiKey || !from) {
    return response.status(503).json({ error: 'The enquiry service is not configured.' });
  }

  if (!isRecord(request.body)) {
    return response.status(400).json({ error: 'Please check the enquiry details and try again.' });
  }

  const honeypot = readText(request.body.website, 200);
  if (honeypot === null) {
    return response.status(400).json({ error: 'Please check the enquiry details and try again.' });
  }
  if (honeypot) return response.status(200).json({ ok: true });

  const contact = parseContactDetails(request.body);
  if (!contact) {
    return response.status(400).json({ error: 'Please check the enquiry details and try again.' });
  }

  const message = [
    `Name: ${contact.name}`,
    `Company: ${contact.company}`,
    `Role: ${contact.role || 'Not provided'}`,
    `Email: ${contact.email}`,
    `Phone: ${contact.phone || 'Not provided'}`,
    '',
    'Requirement:',
    contact.requirement,
  ].join('\n');

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: ['info@aiyantras.com'],
        reply_to: contact.email,
        subject: 'New website enquiry',
        text: message,
      }),
    });

    if (!result.ok) {
      let providerError = 'No error details returned.';
      try {
        const details = await result.json() as { name?: unknown; message?: unknown };
        if (typeof details.message === 'string') providerError = details.message;
        if (typeof details.name === 'string') providerError = `${details.name}: ${providerError}`;
      } catch {
        providerError = 'Resend returned a non-JSON error response.';
      }
      console.error('Resend rejected contact enquiry', { status: result.status, error: providerError });
      return response.status(502).json({ error: 'We could not send your enquiry. Please try again or email us directly.' });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact email request failed', error instanceof Error ? error.message : 'Unknown network error.');
    return response.status(502).json({ error: 'We could not send your enquiry. Please try again or email us directly.' });
  }
}