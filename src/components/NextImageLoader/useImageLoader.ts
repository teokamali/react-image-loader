import { useState, useEffect } from "react";

function useImageLoader(src: string, placeholder: string): string {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => setImgSrc(src);
    img.onerror = () => setImgSrc(placeholder);
  }, [src, placeholder]);

  return imgSrc;
}

export default useImageLoader;
