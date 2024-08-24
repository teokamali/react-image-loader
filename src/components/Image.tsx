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

  const imageRef = useRef<string>(""); // Ref to store the current image URL or blob URL
  const blobUrlRef = useRef<string | null>(null); // Ref to store the blob URL
  const [, forceUpdate] = useState(0); // Dummy state to force re-renders
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

      // Store the blob URL and update the imageRef
      blobUrlRef.current = blobUrl;
      imageRef.current = blobUrl;
      setIsLoading(false);
      forceUpdate((prev) => prev + 1); // Trigger a re-render
    } catch (err) {
      setIsLoading(false);
      imageRef.current = errorPlaceholder || "";
      if (onError) {
        onError(err as Response, (newSrc: string) => {
          imageRef.current = newSrc;
          forceUpdate((prev) => prev + 1); // Trigger a re-render
        });
      } else {
        console.error("Image failed to load:", err);
        forceUpdate((prev) => prev + 1); // Trigger a re-render
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

    return () => {
      // Clean up the blob URL when the component unmounts or the image changes
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
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
