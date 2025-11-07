// A small reusable helper to ensure every image URL is valid
export function getSafeImageUrl(url?: string | null): string {
  // Default fallback image (stored in /public/images/)
  const fallback = "/images/fallback.jpg";

  if (!url) return fallback;

  const trimmed = url.trim();

  // Skip invalid or blocked URLs
  if (
    trimmed === "" ||
    trimmed.includes("unsplash.com/photos") || // Unsplash page link
    trimmed.includes("file://") || // local invalid file
    trimmed.startsWith("blob:") // temporary blobs
  ) {
    return fallback;
  }

  // Return valid image URL
  return trimmed;
}
