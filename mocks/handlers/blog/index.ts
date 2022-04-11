import { COLLECTIONS_API_ROUTES } from "../../../constants";
import { rest } from "msw";
import { blogData } from "./blog.mock";

//fetching after the "window" object is available will be mocked by "mocks/browser.js", fetching before it will be mocked by "mocks/server.js"

const findOneBlog = rest.get(
  COLLECTIONS_API_ROUTES.blogSingle(":uuid  "),
  (req, res, ctx) => {
    const { uuid } = req.params;
    const data = blogData.filter((value, _index) => {
      console.log(data);
      return value.uuid === (uuid as string);
    });
    return res(ctx.status(200), ctx.json({ ...data[0] }));
  }
);

const findAllBlog = rest.get(COLLECTIONS_API_ROUTES.blog, (req, res, ctx) => {
  return res(ctx.json(blogData));
});

export const blogHandlers = [findOneBlog, findAllBlog];
