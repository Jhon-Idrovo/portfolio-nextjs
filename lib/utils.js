import { setConfig, buildUrl } from "cloudinary-build-url";
setConfig({ cloudName: "dpzol1mah" });
/**
 * Custom loader for using cloudinary images
 * @param {*} param0
 * @returns
 */
export const customLoader = ({ src, width, quality }) => {
  const url = buildUrl(src, {
    transformations: { width },
  });
  return url;
};
