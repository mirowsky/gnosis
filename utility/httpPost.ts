export const httpPost = async <T = unknown>(
  url: string,
  body: Record<string, unknown>,
  config?: Request
): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...config,
    });

    return await response.json();
  } catch (error) {
    throw new Error((error as Error)?.message ?? "POST request error");
  }
};
