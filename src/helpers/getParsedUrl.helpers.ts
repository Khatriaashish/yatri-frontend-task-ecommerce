export const getParsedUrl = (
  url: string,
  params?: { [key: string]: number | string }
) => {
  if (!params) {
    return url;
  }

  let urlString = "";
  Object.entries(params)
    ?.filter(([_, value]) => value !== undefined && value !== null)
    .forEach(([key, value], index, array) => {
      urlString += `${index === 0 ? "?" : ""}${key}=${value}${
        index < array?.length - 1 ? "&" : ""
      }`;
    });

  return url + urlString;
};
