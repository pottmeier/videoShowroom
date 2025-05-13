import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

type VideoCardProps = {
  title: string;
  url: string; // The YouTube URL
};

export default function VideoCard({ title, url }: VideoCardProps) {
  function getYouTubeVideoId(url: String) {
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split(/[?&]/)[0];
    }

    if (url.includes("youtube.com/watch")) {
      return url.split("v=")[1]?.split("&")[0];
    }

    if (url.includes("youtube.com/shorts/")) {
      return url.split("shorts/")[1].split(/[?&]/)[0];
    }

    return null;
  }
  // Extract the YouTube video ID from the URL
  const isShort = url.includes("youtube.com/shorts/");
  const videoId = getYouTubeVideoId(url);

  return (
    <Card fullWidth={true} className="w-full max-w-4xl mx-auto">
      <CardHeader>{title}</CardHeader>
      <CardBody className={isShort ? "relative pt-[177.78%]" : "relative pt-[56.25%]"}>
        {" "}
        {/* This keeps the 16:9 aspect ratio */}
        <iframe
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&autohide=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </CardBody>
    </Card>
  );
}
