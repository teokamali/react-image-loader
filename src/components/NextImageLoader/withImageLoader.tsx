import React from "react";
import useImageLoader from "./useImageLoader";

const withImageLoader =
  (Component: React.ComponentType<any>) =>
  ({ src, placeholder, ...props }: { src: string; placeholder: string }) => {
    const imgSrc = useImageLoader(src, placeholder);

    return <Component src={imgSrc} {...props} />;
  };

export default withImageLoader;
