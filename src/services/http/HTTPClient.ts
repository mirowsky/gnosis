import { HTTP } from "src/utility";

export interface IHTTPClient {
  get: <T = unknown>(url: string) => Promise<T>;
  post: <T = unknown>(
    url: string,
    body: Record<string, unknown>,
    config?: Request | undefined
  ) => Promise<T>;
}

export class HTTPClient implements IHTTPClient {
  get: <T = unknown>(url: string) => Promise<T> = HTTP.get;

  post: <T = unknown>(
    url: string,
    body: Record<string, unknown>,
    config?: Request | undefined
  ) => Promise<T> = HTTP.post;
}
