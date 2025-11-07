"use client";
import Link from "next/link";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  imageUrl?: string;
  category?: string;
  date?: string;
  slug: string;
};

export default function ArticleCard({
  title,
  excerpt,
  imageUrl,
  category,
  date,
  slug,
}: ArticleCardProps) {
  const image =
    imageUrl && imageUrl.startsWith("http")
      ? imageUrl
      : imageUrl
      ? `https://newsprk-backend.onrender.com${imageUrl}`
      : "/images/placeholder.jpg";

  return (
    <Link
      href={`/post/${slug}`}
      className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500 uppercase font-semibold mb-2">
          {category && (
            <span className="bg-indigo-600 text-white px-2 py-0.5 rounded">
              {category}
            </span>
          )}
          {date && <span>{new Date(date).toLocaleDateString()}</span>}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-700 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {excerpt || "Read this article for more details..."}
        </p>

        <p className="mt-3 text-indigo-600 text-sm font-medium hover:underline">
          Read More →
        </p>
      </div>
    </Link>
  );
}
