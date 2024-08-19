import { useEffect } from "react";
import { useImageLoaderContext } from "./ImageLoaderContext";

export const useGlobalImageLoader = () => {
  const placeholder = useImageLoaderContext();

  useEffect(() => {
    const originalFetch = window.fetch;

    window.fetch = async (...args) => {
      const response = await originalFetch(...args);
      if (
        response.ok &&
        response.headers.get("content-type")?.startsWith("image/")
      ) {
        const clonedResponse = response.clone();
        const blob = await clonedResponse.blob();

        if (blob.type.startsWith("image/")) {
          return response;
        } else {
          return new Response(placeholder, {
            headers: { "Content-Type": "image/png" },
          });
        }
      }
      return response;
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, [placeholder]);
};
