import React from "react";
import { BlogCollectionType } from "../../../types";
import {
  BlogPageLayout,
  BlogPageProps as BlogPageLayoutProps,
} from "@workspace/components/pages";
import { GetStaticPaths, GetStaticProps } from "next";
import { convertToSlug } from "@workspace/utility";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { BlogService } from "@workspace/services";

export type BlogPageProps = {
  latest: BlogCollectionType[];
} & Omit<
  BlogPageLayoutProps,
  "BlogSectionProps" | "SocialMediaShareTrayProps" | "sx"
>;

const BlogPage = ({ latest, content, featuredImage, title }: BlogPageProps) => {
  return (
    <BlogPageLayout
      content={content}
      featuredImage={featuredImage}
      title={title}
      SocialMediaShareTrayProps={{
        label: "Compartilhe este post",
        socialMediaList: [
          { icon: Facebook, url: "#" },
          { icon: WhatsApp, url: "#" },
          { icon: Instagram, url: "#" },
        ],
      }}
      BlogSectionProps={{
        items: latest.map((post, index) => {
          return {
            img: {
              alt: post.featuredImage.imageDescription,
              src: post.featuredImage.imageURL,
            },
            readingTime: "10 minutos de leitura",
            tags: ["Medicina"],
            title: post.blogTitle,
          };
        }),
        sectionTitle: "Confira nossos últimos posts",
        ButtonProps: {
          children: "Button",
        },
      }}
    />
  );
};

export default BlogPage;

type BlogStaticPaths = GetStaticPaths<{ slug: string; id: string }>;

export const getStaticPaths: BlogStaticPaths = async (_props) => {
  const blogData = await BlogService.findAll();

  console.log(
    "@@@@@@@@@@",
    blogData.map((val, index) => val.uuid)
  );

  return {
    paths: blogData.map((value, _index) => {
      return {
        params: {
          id: `${value.uuid}`,
          slug: convertToSlug(value.blogTitle),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  Pick<BlogPageProps, "content" | "featuredImage" | "title" | "latest">
> = async ({ params = {} }) => {
  const oneBlogPost = await BlogService.findOne(params.id as string);

  return {
    props: {
      latest: [],
      content: oneBlogPost.blogPost,
      featuredImage: oneBlogPost.featuredImage.imageURL,
      title: oneBlogPost.blogTitle,
    },
  };
};
