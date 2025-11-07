"use client";
import ArticleCard from "./ArticleCard";

type SectionGridProps = {
  title: string;
  posts: any[];
};

export default function SectionGrid({ title, posts }: SectionGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">No articles found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <ArticleCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt || post.content?.substring(0, 120) || ""}
              imageUrl={post.imageUrl}
              category={post.category?.name}
              date={post.publishedAt}
              slug={post.slug}
            />
          ))}
        </div>
      )}
    </section>
  );
}
