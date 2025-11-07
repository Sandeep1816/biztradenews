// import SectionGrid from "@/components/SectionGrid";
// import AdBanner from "@/components/AdBanner";

// export default async function Home() {
//   const res = await fetch("https://newsprk-backend.onrender.com/api/posts", {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   const posts = data.data || data;

//   return (
//     <>
//       <AdBanner />
//       <main className="bg-gray-50 min-h-screen">
//         <SectionGrid title="Latest Articles" posts={posts.slice(0, 6)} />
//         <SectionGrid title="Manufacturing Connected" posts={posts.slice(6, 12)} />
//         <SectionGrid title="Videos" posts={posts.slice(12, 18)} />
//       </main>
//     </>
//   );
// }


import SectionGrid from "@/components/SectionGrid";
import AdBanner from "@/components/AdBanner";

export default async function Home() {
  const res = await fetch("https://newsprk-backend.onrender.com/api/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  const posts = data.data || data;

  return (
    <>
      <AdBanner />
      <main className="bg-gray-50 min-h-screen">
        <SectionGrid title="Latest Articles" posts={posts} />
      </main>
    </>
  );
}
