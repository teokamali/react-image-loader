import { useCallback, useEffect, useState } from "react";
import { IImageProps } from "./Image.types";

const Image = (props: IImageProps) => {
  const {
    loadingPlaceholder,
    onError,
    src,
    // placeholder,
    apiConfig,
    component,
    errorPlaceholder,
    ...restProps
  } = props;

  const [image, setImage] = useState<string>(loadingPlaceholder || "");

  const loadImage = useCallback(async () => {
    try {
      const response = await fetch(src as string, { ...apiConfig });
      if (!response.ok) {
        throw response;
      }
      setImage(src as string);
    } catch (err) {
      setImage(errorPlaceholder || "");
      onError?.(err as Response, setImage);
    }
  }, []);

  useEffect(() => {
    if ((typeof src === "string" && !src.length) || src === null) {
      return setImage(errorPlaceholder || "");
    }
    if (image !== src) {
      loadImage();
    }

    return () => {
      if (image && image.startsWith("blob:")) {
        URL.revokeObjectURL(image);
      }
    };
  }, []);

  if (component) {
    const Component = component; // Ensure it's treated as a component
    return <Component src={image} {...restProps} />;
  }

  return <img src={image} {...restProps} />;
};

export default Image;
