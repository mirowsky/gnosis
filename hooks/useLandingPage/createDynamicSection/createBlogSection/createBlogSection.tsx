import { BlogSectionProps } from "@workspace/components/layouts";
import { BlogCollectionType } from "@workspace/types";

export const createBlogSection = (
  items: BlogCollectionType[]
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
