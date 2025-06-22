// app/showcase/page.tsx
import Image from "next/image";
import { getShowcaseEvent } from "@/sanity/lib/sanityFetch";

export default async function ShowcasePage() {
  const event = await getShowcaseEvent("Ruby Day 2025");

  if (!event) return <p>No media found for Ruby Day 2025</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">{event.title}</h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        {event.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {event.media.map((item: { asset: { _type: string; url: string } }, index: number) => {
          const isVideo = item.asset._type === "sanity.fileAsset";
          return isVideo ? (
            <video key={index} controls className="w-full rounded-xl shadow-md">
              <source src={item.asset.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div key={index} className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={item.asset.url}
                alt={`Media ${index + 1}`}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
