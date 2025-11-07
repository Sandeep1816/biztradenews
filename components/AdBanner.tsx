export default function AdBanner() {
  return (
    <div className="w-full bg-gray-100 flex justify-center py-4 border-b border-gray-200">
      <img
        src="/images/ads/fitness-banner.jpg" // ✅ renamed file
        alt="Advertisement"
        className=" max-h-24 w-full max-w-6xl h-auto object-cover rounded-md shadow-sm"
      />
    </div>
  );
}
