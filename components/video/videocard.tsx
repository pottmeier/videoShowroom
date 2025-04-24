import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

type VideoCardProps = {
  title: string;
  url: string; // The YouTube URL
};

export default function VideoCard({ title, url }: VideoCardProps) {
  // Extract the YouTube video ID from the URL
  const videoId = url.split("v=")[1]?.split("&")[0];

  return (
    <Card fullWidth={true} className="w-full max-w-4xl mx-auto">
      <CardHeader>{title}</CardHeader>
      <CardBody className="relative pt-[56.25%]">
        {" "}
        {/* This keeps the 16:9 aspect ratio */}
        <iframe
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </CardBody>
    </Card>
  );
}
