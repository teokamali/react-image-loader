import { ImgHTMLAttributes, PropsWithChildren } from "react";
import NextImage from "next/image";

type CustomImgAttributes = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "ref" | "alt" | "width" | "height" | "loading" | "onError"
>;

export type NextImageProps = Omit<
  JSX.IntrinsicElements["img"],
  "src" | "srcSet" | "ref" | "alt" | "width" | "height" | "loading" | "onError"
> & {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  placeholder: string;
  onError: (error: unknown, setImage: (newSrc: string) => void) => void;
};

export interface IImageProps extends CustomImgAttributes, NextImageProps {
  src: string;
  loadingPlaceholder?: string;
  apiConfig?: RequestInit;
  component?: typeof NextImage; // Optional Image component, like next/image
  onError: (error: unknown, setImage: (newSrc: string) => void) => void;
}

export interface BaseProps<T = object> extends React.FC<PropsWithChildren<T>> {}
