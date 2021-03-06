import { BlogCollectionType, ThemeStyles } from "@workspace/types";
import { getBlogURL } from "@workspace/utility";
import { useRouter } from "next/router";
import { BlogSection } from "../Blog/BlogSection";

export type BlogProxyProps = {
  items: BlogCollectionType[];
  sx?: ThemeStyles;
};

export const BlogProxy = ({ items = [], sx }: BlogProxyProps) => {
  const router = useRouter();

  return (
    <BlogSection
      sx={sx}
      ButtonProps={{
        children: "Ver mais",
        onClick: () => {},
        disabled: true,
      }}
      items={items.map((post, _index) => {
        return {
          img: {
            alt: post.featuredImage.imageDescription,
            src: post.featuredImage.imageURL,
          },
          readingTime: "10 minutos de leitura",
          tags: ["Medicina"],
          title: post.blogTitle,
          onClick: () => {
            router.push(getBlogURL(post.blogTitle, post.uuid));
          },
        };
      })}
      sectionTitle="Confira nossas últimas postagens"
    />
  );
};
