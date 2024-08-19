import React, { createContext, ReactElement, useContext } from "react";

const ImageLoaderContext = createContext<string>("");

export const ImageLoaderProvider: React.FC<{
  placeholder: string;
  children: ReactElement;
}> = ({ placeholder, children }) => (
  <ImageLoaderContext.Provider value={placeholder}>
    {children}
  </ImageLoaderContext.Provider>
);

export const useImageLoaderContext = () => useContext(ImageLoaderContext);
