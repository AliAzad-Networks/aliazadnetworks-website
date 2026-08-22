const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function fetchAPI(path) {
  if (!STRAPI_URL) {
    console.error("Missing NEXT_PUBLIC_STRAPI_API_URL");
    return { data: [] };
  }
  const requestUrl = `${STRAPI_URL}/api/${path}`;
  try {
    const response = await fetch(requestUrl, {
      next: { revalidate: 60 }, // ISR every 60 seconds
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: [] };
  }
}

export async function getBlogPosts() {
  const data = await fetchAPI('blog-posts?populate=*');
  return data?.data || [];
}

export async function getBlogPostBySlug(slug) {
  // Encode the slug to handle special characters
  const encodedSlug = encodeURIComponent(slug);
  const data = await fetchAPI(`blog-posts?filters[slug][$eq]=${encodedSlug}&populate=*`);
  return data?.data?.[0] || null;
}