import { useCallback, useEffect, useRef, useState } from "react";
import { IImageProps } from "./Image.types";

const Image = (props: IImageProps) => {
  const {
    loadingPlaceholder,
    onError,
    src,
    apiConfig,
    component,
    errorPlaceholder,
    ...restProps
  } = props;

  const imageRef = useRef<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadImage = useCallback(async () => {
    try {
      const response = await fetch(src as string, { ...apiConfig });
      if (!response.ok) {
        setIsLoading(false);
        throw response;
      }

      const blob = await response.blob(); // Get the image as a blob
      const blobUrl = URL.createObjectURL(blob); // Create a blob URL

      imageRef.current = blobUrl;
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      imageRef.current = errorPlaceholder || "";
      if (onError) {
        onError(err as Response, (newSrc: string) => {
          imageRef.current = newSrc;
        });
      } else {
        console.error("Image failed to load:", err);
      }
    }
  }, [src, apiConfig, errorPlaceholder, onError]);

  useEffect(() => {
    if ((typeof src === "string" && !src.length) || src === null) {
      imageRef.current = errorPlaceholder || "";
      return;
    }

    if (imageRef.current !== src) {
      loadImage();
    }

    return () => {};
  }, [src, errorPlaceholder]);

  if (isLoading) {
    return loadingPlaceholder;
  }
  if (component) {
    const Component = component;
    return <Component src={imageRef.current || src} {...restProps} />;
  }

  return <img src={imageRef.current} {...restProps} />;
};

Image.defaultProps = {
  src: "",
  loadingPlaceholder: <></>,
  errorPlaceholder: "",
  onError: () => {},
};

export default Image;
