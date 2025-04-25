import VideoCard from "./videocard";

type Video = {
  title: string;
  url: string;
};

type VideoGalleryProps = {
  videos: Video[];
  layout?: "grid" | "stacked";
};

export default function VideoGallery({
  videos,
  layout = "grid",
}: VideoGalleryProps) {
  const isGrid = layout === "grid";

  return (
    <div
      className={`${
        isGrid
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex flex-col gap-6"
      } p-6`}
    >
      {videos.map((video) => (
        <VideoCard key={video.title} title={video.title} url={video.url} />
      ))}
    </div>
  );
}
