// Ontvangt een Tijdlek-check inzending en stuurt die door naar je n8n-webhook
// (zet TIJDLEK_WEBHOOK_URL in je Vercel environment variables).
// Zonder webhook werkt de flow gewoon door; de lead wordt dan alleen niet doorgestuurd.
export async function POST(req: Request) {
  let data: unknown = {};
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const webhook = process.env.TIJDLEK_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...(data as object), source: "tijdlek-check", site: "touchaiagency.com" }),
      });
    } catch {
      // niet blokkeren op webhook-fouten; lead-UX blijft werken
    }
  }

  return Response.json({ ok: true });
}
