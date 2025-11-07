// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// export default nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     // ✅ Allows development even with TS errors
//     ignoreBuildErrors: true,
//   },
//   images: {
//     // ✅ Disable Next.js image optimization if you’re using external URLs directly
//     unoptimized: true,

//     // ✅ Allow remote images from Unsplash, Freepik, and your backend
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "img.freepik.com",
//       },
//       {
//         protocol: "https",
//         hostname: "newsprk-backend.onrender.com",
//       },
//     ],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "newsprk-backend.onrender.com" },
      { protocol: "http", hostname: "localhost" }, // optional for local
    ],
  },
};

export default nextConfig;
