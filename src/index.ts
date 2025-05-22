export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const prompt = url.searchParams.get("prompt") || "a futuristic landscape";

    const inputs = { prompt };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
