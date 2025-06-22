"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Play, ZoomIn, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { client } from "@/sanity/lib/client";
import { showcaseEventsQuery } from "@/sanity/lib/showcaseQuery";

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  alt: string;
}

// Updated interface to match the new query structure
interface SanityMediaItem {
  type: "image" | "video";
  alt?: string;
  // For videos
  videoUrl?: string;
  thumbnailUrl?: string;
  thumbnailLqip?: string;
  // For images
  url?: string;
  lqip?: string;
}

interface SanityShowcaseEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  media?: SanityMediaItem[];
}

interface FullscreenModalProps {
  media: MediaItem;
  isOpen: boolean;
  onClose: () => void;
}

function FullscreenModal({ media, isOpen, onClose }: FullscreenModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        {media.type === "video" ? (
          <video
            controls
            autoPlay
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          >
            <source src={media.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={media.url || "/placeholder.svg"}
            alt={media.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        )}
      </div>
    </div>
  );
}

export default function ShowcasePage() {
  const [events, setEvents] = useState<SanityShowcaseEvent[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await client.fetch(showcaseEventsQuery);

        if (!data) {
          throw new Error("No data returned from Sanity");
        }

        const formatted = data.map((event: SanityShowcaseEvent) => ({
          ...event,
          media: (event.media || [])
            .map((m: SanityMediaItem) => {
              // Handle video items
              if (m.type === "video") {
                if (!m.videoUrl) {
                  console.warn("Video item missing video URL", m);
                  return null;
                }

                return {
                  type: "video" as const,
                  url: m.videoUrl,
                  alt: m.alt || "Showcase Video",
                  thumbnail:
                    m.thumbnailUrl || "/video-thumbnail-placeholder.jpg",
                };
              }

              // Handle image items
              if (m.type === "image") {
                if (!m.url) {
                  console.warn("Image item missing URL", m);
                  return null;
                }

                return {
                  type: "image" as const,
                  url: m.url,
                  alt: m.alt || "Showcase Image",
                  thumbnail: m.lqip,
                };
              }

              console.warn("Unknown media type", m);
              return null;
            })
            .filter(Boolean) as MediaItem[],
        }));

        console.log("Formatted events:", formatted); // Debug log
        setEvents(formatted);
      } catch (err) {
        console.error("Error fetching showcase events:", err);
        setError("Failed to load showcase events. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 bg-red-50 rounded-lg max-w-md">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Event Showcase
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our participation in major technology events, conferences,
            and demonstrations showcasing autonomous technologies and AI
            innovations
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {events.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No showcase events found.</p>
            </div>
          ) : (
            events.map((event, eventIndex) => (
              <div key={event._id} className="space-y-8">
                {/* Event Header */}
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-transform: uppercase">
                    {event.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Media Grid */}
                {event.media && event.media.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {(event.media as MediaItem[]).map(
                      (mediaItem, mediaIndex) => (
                        <Card
                          key={mediaIndex}
                          className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
                          onClick={() => setSelectedMedia(mediaItem)}
                        >
                          <div className="relative aspect-video overflow-hidden">
                            {mediaItem.type === "video" ? (
                              <>
                                <div className="relative w-full h-full bg-gray-200">
                                  {mediaItem.thumbnail ? (
                                    <Image
                                      src={mediaItem.thumbnail}
                                      alt={mediaItem.alt || "Showcase media"}
                                      fill
                                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                      <span className="text-white">Video</span>
                                    </div>
                                  )}
                                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                      <Play className="w-8 h-8 text-white ml-1" />
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <Image
                                  src={mediaItem.url || "/placeholder.svg"}
                                  alt={mediaItem.alt}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                  <div className="w-12 h-12 bg-white/0 group-hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                    <ZoomIn className="w-6 h-6 text-white" />
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </Card>
                      )
                    )}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    No media available for this event.
                  </div>
                )}

                {/* Separator */}
                {eventIndex < events.length - 1 && (
                  <div className="flex items-center justify-center pt-12">
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Want to See More?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in our latest projects and innovations? Explore our
            solutions or get in touch to learn more about our autonomous
            technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
              onClick={() => (window.location.href = "/projects")}
            >
              Explore Our Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedMedia && (
        <FullscreenModal
          media={selectedMedia}
          isOpen={!!selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
}
