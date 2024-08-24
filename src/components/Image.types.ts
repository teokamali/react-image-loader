import { ImgHTMLAttributes, ReactElement } from "react";

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

export interface StaticRequire {
  default: StaticImageData;
}

export type StaticImport = StaticRequire | StaticImageData;

export type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export type ImageLoader = (p: ImageLoaderProps) => string;

declare const VALID_LOADING_VALUES: readonly ["lazy", "eager", undefined];
export type OnLoadingComplete = (img: HTMLImageElement) => void;
export type PlaceholderValue = "blur" | "empty" | `data:image/${string}`;
type LoadingValue = (typeof VALID_LOADING_VALUES)[number];

export type NextImageProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  "src" | "srcSet" | "ref" | "alt" | "width" | "height" | "loading" | "onError"
> & {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  loader?: ImageLoader | undefined;
  quality?: number | `${number}` | undefined;
  priority?: boolean | undefined;
  loading?: LoadingValue;
  placeholder?: PlaceholderValue | undefined;
  blurDataURL?: string | undefined;
  unoptimized?: boolean | undefined;
  overrideSrc?: string | undefined;
  onLoadingComplete?: OnLoadingComplete | undefined;
  layout?: string | undefined;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
  lazyBoundary?: string | undefined;
  lazyRoot?: string | undefined;
};

type CustomImgAttributes = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "ref" | "alt" | "width" | "height" | "loading" | "onError"
>;

export interface IImageProps extends CustomImgAttributes, NextImageProps {
  loadingPlaceholder?: ReactElement;
  errorPlaceholder?: string;
  apiConfig?: RequestInit;
  component?: React.ComponentType<NextImageProps>;
  onError?: (error: Response, setImage: (newSrc: string) => void) => void;
}
