type ContactRequest = {
  name?: unknown;
  email?: unknown;
  business?: unknown;
  website?: unknown;
  message?: unknown;
  companySite?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const companySite = clean(body.companySite, 200);

  // Honeypot: silently accept bot submissions.
  if (companySite) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const business = clean(body.business, 150);
  const website = clean(body.website, 500);
  const message = clean(body.message, 5000);

  if (!name || !emailPattern.test(email) || !message) {
    return Response.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Email delivery is not configured." },
      { status: 503 },
    );
  }

  const subjectName = name.replace(/[\r\n]+/g, " ");
  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    business ? `Business: ${business}` : "",
    website ? `Website: ${website}` : "",
    "",
    "Project details:",
    message,
  ].filter(Boolean);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "PawCircle LLC Website <onboarding@resend.dev>",
        to: ["pawcirclellc@gmail.com", "reaaland@gmail.com"],
        reply_to: email,
        subject: `PawCircle project inquiry from ${subjectName}`,
        text: details.join("\n"),
      }),
    });

    if (response.ok) {
      return Response.json({ ok: true });
    }

    console.error("Contact form email failed:", response.status);
  } catch {
    console.error("Contact form email request failed.");
  }

  return Response.json(
    { error: "The message could not be delivered." },
    { status: 502 },
  );
}
