import React from "react";
import { BlogCollectionType } from "../../../types";
import {
  BlogPageLayout,
  BlogPageProps as BlogPageLayoutProps,
} from "@workspace/components/pages";
import { GetStaticPaths, GetStaticProps } from "next";
import { httpGet, convertToSlug } from "@workspace/utility";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { COLLECTIONS_API_ROUTES } from "@workspace/contants";
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

export const getStaticPaths: BlogStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  const blogData = await httpGet<BlogCollectionType[]>(
    COLLECTIONS_API_ROUTES.blog
  );

  return {
    paths: blogData.map((value, index) => {
      return {
        params: {
          id: value.uuid,
          slug: convertToSlug(value.blogTitle),
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
  const oneBlogPost = await BlogService.findOne(params.id as string);
  const allBlogPosts = await BlogService.findAll();

  console.log(oneBlogPost);

  return {
    props: {
      latest: allBlogPosts,
      content: oneBlogPost.blogPost,
      featuredImage: oneBlogPost.featuredImage.imageURL,
      title: oneBlogPost.blogTitle,
    },
  };
};
