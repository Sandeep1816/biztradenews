// ✅ Server Component (Next.js 16 compatible, no "use client")

type Author = {
  id: number;
  name: string;
  bio: string;
  avatarUrl: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
};

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  imageUrl?: string | null;
  author: Author;
  category: Category;
  publishedAt: string;
  views: number;
};

export default async function PostDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // ✅ Fetch post from backend
  const res = await fetch(
    `https://newsprk-backend.onrender.com/api/posts?slug=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Error fetching post.
      </div>
    );
  }

  const data = await res.json();

  // ✅ Pick correct post from API data
  const post: Post | undefined =
    data.data?.find((p: Post) => p.slug === slug) || data.data?.[0];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Post not found.
      </div>
    );
  }

  // ✅ Use DB image or fallback local image
  const image =
    post.imageUrl && post.imageUrl.trim() !== ""
      ? post.imageUrl
      : "/images/blog1.jpg"; // ← local image in public/images/blog1.jpg

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* 🖼️ Post Image */}
      <div className="mb-6">
        <img
          src={image}
          alt={post.title}
          className="w-full h-[420px] object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* 🏷️ Category + Date + Views */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
        {post.category?.name && (
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {post.category.name}
          </span>
        )}
        <span>
          {new Date(post.publishedAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="ml-auto text-gray-400">{post.views} views</span>
      </div>

      {/* 📰 Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
        {post.title}
      </h1>

      {/* 📖 Content */}
      <div
        className="prose prose-lg max-w-none text-gray-800 mb-12"
        dangerouslySetInnerHTML={{
          __html: post.content || "<p>No content available.</p>",
        }}
      />

      {/* 👤 Author Section */}
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm flex items-start gap-5">
        <img
          src={
            post.author?.avatarUrl ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt={post.author?.name || "Author"}
          className="w-20 h-20 rounded-full object-cover border shadow-sm"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1">
            {post.author?.name || "Anonymous Author"}
          </h4>
          <p className="text-gray-600 text-sm mb-3">
            {post.author?.bio ||
              "A passionate writer bringing insightful perspectives to the readers of Newsprk."}
          </p>
          <p className="text-xs text-gray-400">
            Published on {new Date(post.publishedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </article>
  );
}
