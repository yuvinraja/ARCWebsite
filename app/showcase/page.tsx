// app/showcase/page.tsx
import { client } from "@/sanity/lib/client";
import { showcaseQuery } from "@/sanity/lib/showcaseQuery";

type ShowcaseItem = {
  _id: string;
  title: string;
  mediaUrl: string;
  mediaType: "image" | "video";
};

export default async function ShowcasePage() {
  const showcaseMedia: ShowcaseItem[] = await client.fetch(showcaseQuery);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcaseMedia.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {item.mediaType === "image" ? (
              <img
                src={item.mediaUrl}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
            ) : (
              <video
                src={item.mediaUrl}
                controls
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
