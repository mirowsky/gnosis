import { COLLECTIONS_API_BASE_URL } from "../../../constants";
import { rest } from "msw";
import { blogData } from "./blog.mock";
import { HTTPService, IHTTPClient } from "@workspace/services";

//fetching after the "window" object is available will be mocked by "mocks/browser.js", fetching before it will be mocked by "mocks/server.js"

class HTTPMockClient implements IHTTPClient {
  get: <T = unknown>(url: string) => Promise<T> = async (url) => {
    return await new Promise((resolve, reject) => {});
  };

  post: <T = unknown>(
    url: string,
    body: Record<string, unknown>,
    config?: Request | undefined
  ) => Promise<T> = async (url, body, config) => {
    return await new Promise((resolve, reject) => {});
  };
}

const service = new HTTPService({
  baseURL: COLLECTIONS_API_BASE_URL,
  client: new HTTPMockClient(),
});

const findOneBlog = rest.get(
  `${service.baseURL}/gnosisBlog/:uuid`,
  (req, res, ctx) => {
    const { uuid } = req.params;
    const data = blogData.filter((value, _index) => {
      return value.uuid === (uuid as string);
    });

    console.log(data);
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
