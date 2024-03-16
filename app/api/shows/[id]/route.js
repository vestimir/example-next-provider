export const dynamic = "force-dynamic";

export async function GET(_request, { params: { id } }) {
  const req = await fetch(
    `https://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=images`
  );
  const results = await req.json();

  return Response.json(results);
}
