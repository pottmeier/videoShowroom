import VideoGallery from "@/components/video/videoGallery";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { User } from "@heroui/user";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Video } from "@/components/video/types";
import { Card, CardBody, CardHeader } from "@heroui/card";
import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";

export default function Home() {
  var imgWidth = 600;
  var imgHeight = 200;
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-16">
        <div className="flex gap-1">
          <Image src="https://media.githubusercontent.com/media/pottmeier/videoShowroom/refs/heads/main/public/images/icw_01.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image src="/videoShowroom/images/icw_02.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image src="https://pottmeier.github.io/videoShowroom/images/Afghans_QR.png" width={imgWidth} height={imgHeight}></Image>
          <Image
            src="https://media.githubusercontent.com/media/pottmeier/videoShowroom/refs/heads/main/public/images/Afghans_UPB.png"
            width={imgWidth}
            height={imgHeight}
          ></Image>
          <Image src="https://media.githubusercontent.com/media/pottmeier/videoShowroom/refs/heads/main/public/images/icw_10.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image src="/images/icw_05.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image src="/images/icw_06.jpeg" width={imgWidth} height={imgHeight}></Image>
        </div>
        <Card className=" p-5 bg-green-900">
          <h1 className={title()}>We are Afghans at UPB</h1>
        </Card>
        <div className="flex items-center gap-6">
          <User
            avatarProps={{
              src: "https://scontent-ham3-1.cdninstagram.com/v/t51.2885-19/354831460_160642980342150_7258654314261955184_n.jpg?_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QGYVVuQ7ipyoyVM8LJjmZQ1UrgM9XQ_NPnHFz0xb9dUKbEkVwdncpXahE9P4j-9u3Ti4OIjrm-CsRj1VjxV2h2w&_nc_ohc=TU7ggGXxk2EQ7kNvwGyYZZt&_nc_gid=e0A5s33-b0keiT_Up8Efiw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfGuJfL_6X1ezxYzYkKBmfDFe8PorX_T8ettEmb7U_7wwA&oe=681947D6&_nc_sid=7a9f4b",
              className: "w-24 h-24",
            }}
            description={
              <Link isExternal href="https://www.instagram.com/afghans_upb/">
                @afghans_upb
              </Link>
            }
            name="Afghan Students @ Uni Paderborn"
          />{" "}
          <Image className="w-32 h-auto" src="images/Afghans_QR.png"></Image>
        </div>
        <Card className="p-5">
          <CardHeader className="justify-center text-center">
            <h1 className="text-4xl">
              Select a category to learn more about Afghanistan!
            </h1>
          </CardHeader>

          <ul className="flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <Card key={item.href} className="bg-green-900">
                <CardHeader className="justify-center text-center">
                  {" "}
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </CardHeader>
                <CardBody className="relative h-full w-full">
                  <Image
                    src={item.picture}
                    alt={item.label}
                    width={150}
                    height={150}
                  />
                </CardBody>
              </Card>
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
}
