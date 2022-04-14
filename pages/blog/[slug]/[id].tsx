import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { convertToSlug } from "@workspace/utility";
import { BlogService } from "@workspace/services";

export type BlogPageProps = {};

const BlogPage = (props: BlogPageProps) => {
  return <div>blog page</div>;
};

export default BlogPage;

type BlogStaticPaths = GetStaticPaths<{ slug: string; id: string }>;

export const getStaticPaths: BlogStaticPaths = async (_props) => {
  const blogData = await BlogService.findAll();

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

export const getStaticProps: GetStaticProps<{}> = async ({ params = {} }) => {
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
