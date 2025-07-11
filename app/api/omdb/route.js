export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("s");
  const apiKey = "55bb5776";

  if (!search) {
    return new Response(
      JSON.stringify({ Response: "False", Error: "Paramètre 's' manquant" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}`
  );
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
