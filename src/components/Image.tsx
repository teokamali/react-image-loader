import { useCallback, useEffect, useState } from "react";
import { IImageProps } from "./Image.types";

const Image = (props: IImageProps) => {
  const {
    loadingPlaceholder,
    onError,
    src,
    placeholder,
    apiConfig,
    component,
    ...restProps
  } = props;

  const [image, setImage] = useState<string>(loadingPlaceholder || "");

  const loadImage = useCallback(async () => {
    try {
      const response = await fetch(src as string, apiConfig);
      if (!response.ok) {
        throw response;
      }
      setImage(src as string);
    } catch (err) {
      setImage(placeholder || "");
      onError?.(err as Response, setImage);
    }
  }, [src, apiConfig, placeholder, onError]);

  useEffect(() => {
    if (image !== src) {
      loadImage();
    }

    return () => {
      if (image && image.startsWith("blob:")) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image, src, loadImage]);

  if (component) {
    const Component = component; // Ensure it's treated as a component
    return <Component src={image} {...restProps} />;
  }

  return <img src={image} {...restProps} />;
};

export default Image;
