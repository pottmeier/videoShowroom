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
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
          <Image
            src="https://i.imgur.com/xFb77sL.jpeg"
            width={imgWidth}
            height={imgHeight}
            className="hidden md:block"
          ></Image>
          <Image
            src="https://i.imgur.com/0x5RCOs.jpeg"
            width={imgWidth}
            height={imgHeight}
            className="hidden md:block"
          ></Image>
          <Image
            src="https://i.imgur.com/turHedx.jpeg"
            width={imgWidth}
            height={imgHeight}
            className="hidden md:block"
          ></Image>
          <Image
            src="https://i.imgur.com/gnrO0Xb.png"
            width={imgWidth}
            height={imgHeight}
            className="w-40 md:block"
          ></Image>
          <Image
            src="https://i.imgur.com/z6CJzMt.jpeg"
            width={imgWidth}
            height={imgHeight}
            className="hidden md:block"
          ></Image>
          <Image
            src="https://i.imgur.com/EFeJunP.jpeg"
            width={imgWidth}
            height={imgHeight}
            className="hidden md:block"
          ></Image>
          <Image
            src="https://i.imgur.com/NfEUDXk.jpeg"
            width={imgWidth}
            height={imgHeight}
            className="hidden md:block"
          ></Image>
        </div>
        <Card className=" p-5 bg-green-900">
          <h1 className={title()}>We are Afghans at UPB</h1>
        </Card>
        <div className="flex items-center gap-6">
          <User
            avatarProps={{
              src: "https://i.imgur.com/gwM4N7L.jpeg",
              className: "w-24 h-24",
            }}
            description={
              <Link isExternal href="https://www.instagram.com/afghans_upb/">
                @afghans_upb
              </Link>
            }
            name="Afghan Students @ Uni Paderborn"
          />{" "}
          <Image
            className="w-32 h-auto"
            src="https://i.imgur.com/wnCj2Ns.png"
          ></Image>
        </div>
        <Card className="p-5">
          <CardHeader className="justify-center text-center mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Select a category to learn more about Afghanistan!
            </h1>
          </CardHeader>

          <ul className="flex flex-wrap gap-4 justify-center ml-2">
            {siteConfig.navItems.map((item) => (
              <NextLink key={item.href} href={item.href} passHref>
                {" "}
                {/* ensures block-level clickable area */}
                <Card className="bg-green-900 hover:opacity-90 transition">
                  <CardHeader className="justify-center text-center">
                    <h2
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                      )}
                    >
                      {item.label}
                    </h2>
                  </CardHeader>
                  <CardBody className="relative h-full w-full flex justify-center">
                    <Image
                      src={item.picture}
                      alt={item.label}
                      width={150}
                      height={150}
                    />
                  </CardBody>
                </Card>
              </NextLink>
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
}
