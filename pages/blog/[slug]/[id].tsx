import React from "react";
import { BlogCollectionType } from "../../../types";
import {
  BlogPageLayout,
  BlogPageProps as BlogPageLayoutProps,
} from "@workspace/components/pages";
import { GetStaticPaths, GetStaticProps } from "next";
import { httpGet } from "@workspace/utility";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

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

export const getStaticPaths: BlogStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  const blogData = await httpGet<BlogCollectionType[]>(
    "https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/gnosisBlog"
  );

  return {
    paths: blogData.map((value, index) => {
      return {
        params: {
          id: value.uuid,
          slug: value.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  Pick<BlogPageProps, "content" | "featuredImage" | "title" | "latest">
> = async ({
  defaultLocale,
  locale,
  locales,
  params = {},
  preview,
  previewData,
}) => {
  const data = await httpGet<BlogCollectionType>(
    `https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/gnosisBlog${params.id}`
  );

  const blogData = await httpGet<BlogCollectionType[]>(
    "https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/gnosisBlog"
  );

  return {
    props: {
      latest: blogData,
      content: data.blogPost,
      featuredImage: data.featuredImage.imageURL,
      title: data.blogTitle,
    },
  };
};
