import { IHTTPClient } from "./HTTPClient";

export type HTTPServiceConfig = {
  baseURL: string;
  client: IHTTPClient;
};

export class HTTPService {
  constructor(private readonly _config: HTTPServiceConfig) {}

  get baseURL() {
    return this._config.baseURL;
  }

  get = async <T>(url: string) => {
    return await this._config.client.get<T>(`${this._config.baseURL}/${url}`);
  };
  post = async <T>(
    url: string,
    body: Record<string, unknown>,
    config?: Request
  ) => {
    return await this._config.client.post<T>(
      `${this._config.baseURL}/${url}`,
      body,
      config
    );
  };
}
