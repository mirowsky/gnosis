import { COLLECTIONS_API_BASE_URL } from "../../../constants";
import { rest } from "msw";
import { blogData } from "./blog.mock";
import { HTTPService, IHTTPClient, HTTPClient } from "src/services";

//fetching after the "window" object is available will be mocked by "mocks/browser.js", fetching before it will be mocked by "mocks/server.js"

const service = new HTTPService({
  baseURL: COLLECTIONS_API_BASE_URL,
  client: new HTTPClient(),
});

const findOneBlog = rest.get(
  `${service.baseURL}/gnosisBlog/:uuid`,
  (req, res, ctx) => {
    const { uuid } = req.params;
    const data = blogData.filter((value, _index) => {
      return value.uuid === (uuid as string);
    });

    return res(ctx.status(200), ctx.json({ ...data[0] }));
  }
);

const findAllBlog = rest.get(
  `${service.baseURL}/gnosisBlog`,
  (req, res, ctx) => {
    return res(ctx.json(blogData));
  }
);

export const blogHandlers = [findOneBlog, findAllBlog];
