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
          <Image src="/icw_01.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image src="/icw_02.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image src="/icw_08.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image
            src="https://imgur.com/a/40n7emJ"
            width={imgWidth}
            height={imgHeight}
          ></Image>
          <Image src="/icw_10.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image src="/icw_05.jpeg" width={imgWidth} height={imgHeight}></Image>
          <Image src="/icw_06.jpeg" width={imgWidth} height={imgHeight}></Image>
        </div>
        <Card className=" p-5 bg-green-900">
          <h1 className={title()}>We are Afghans at UPB</h1>
        </Card>
        <div className="flex items-center gap-6">
          <User
            avatarProps={{
              src: "https://scontent-cdninstagram-com.translate.goog/v/t51.2885-19/354831460_160642980342150_7258654314261955184_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=instagram.frix6-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QF7NmSjxVTuP0mKA6HabpXBk_hJMsz0xKBAqZtdWrETOp4bdUz3C8EZIi5_3gGAHaE&_nc_ohc=Uq7G0vSJe_gQ7kNvwFxbq2F&_nc_gid=Wm8dHkWq80F3mADL_mun2A&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfHSbNWfBIghqHNyNo6Jk1WDp2jFzkAa7DvQ-4kzRadMBQ&oe=68107DD6&_nc_sid=8b3546&_x_tr_sl=en&_x_tr_tl=ru&_x_tr_hl=ru&_x_tr_pto=wapp",
              className: "w-24 h-24",
            }}
            description={
              <Link isExternal href="https://www.instagram.com/afghans_upb/">
                @afghans_upb
              </Link>
            }
            name="Afghan Students @ Uni Paderborn"
          />{" "}
          <Image className="w-32 h-auto" src="/Afghans_QR.png"></Image>
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
