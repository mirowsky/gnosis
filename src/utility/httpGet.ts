export const httpGet = async <T = unknown>(
  request: RequestInfo
): Promise<T> => {
  try {
    const response = await fetch(request);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Request failed");
  }
};
