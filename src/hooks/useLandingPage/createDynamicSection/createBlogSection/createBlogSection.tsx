import { BlogSectionProps } from "@workspace/components/shared";
import { BlogCollectionType } from "@workspace/types";
import { NextRouter } from "next/router";
import { getBlogURL } from "src/utility/getBlogURL";

export const createBlogSection = (
  items: BlogCollectionType[],
  router: NextRouter
): BlogSectionProps => {
  return {
    items: items.map((val, _index) => {
      return {
        img: {
          src: val.featuredImage.imageURL,
          alt: val.featuredImage.imageDescription,
        },
        readingTime: "10 minutos de leitura",
        tags: ["Medicina"],
        title: val.blogTitle,
        onClick: () => {
          router.push(getBlogURL(val.blogTitle, val.uuid));
        },
      };
    }),
    sectionTitle: "Confira nossas últimas postagens.",
    ButtonProps: {
      children: "Ver mais postagens",
      color: "primary",
      onClick: () => {},
    },
    id: "blog_section",
  };
};
