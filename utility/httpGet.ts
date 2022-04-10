export const httpGet = async <T>(request: RequestInfo): Promise<T> => {
  try {
    const response = await fetch(request);

    const body = await response.json();

    return body;
  } catch (error) {
    console.error(error);
    throw new Error("Request failed");
  }
};
