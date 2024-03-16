export const dynamic = "force-dynamic";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const results = await req.json();

  return Response.json(results);
}
