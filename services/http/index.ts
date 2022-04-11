import { HTTP } from "@workspace/utility";

interface IHTTPRequest {
  get: <T = unknown>(url: string) => Promise<T>;
  post: <T = unknown>(
    url: string,
    body: Record<string, unknown>,
    config?: Request | undefined
  ) => Promise<T>;
}

type HTTPServiceConfig = {
  baseURL: string;
};

export class HTTPService implements IHTTPRequest {
  constructor(private readonly _config: HTTPServiceConfig) {}

  get config() {
    return this._config;
  }

  get = async <T>(url: string) => {
    return await HTTP.get<T>(`${this._config.baseURL}/${url}`);
  };
  post = async <T>(
    url: string,
    body: Record<string, unknown>,
    config?: Request
  ) => {
    return await HTTP.post<T>(`${this._config.baseURL}/${url}`, body, config);
  };
}
