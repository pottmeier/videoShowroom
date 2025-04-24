import { title } from "@/components/primitives";
import VideoGallery from "@/components/video/videoGallery";
import { Video } from "@/components/video/types";

export default function weddingsPage() {
  const weddings: Video[] = [
    {
      title: "No Video",
      url: "",
    },
  ];

  return (
    <section className="text-center">
      <h1 className={title()}>Traditional Dances</h1>
      <VideoGallery videos={weddings}></VideoGallery>
    </section>
  );
}
