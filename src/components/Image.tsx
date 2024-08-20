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
  // const [image, setImage] = useState<string>(loadingPlaceholder || "");
  let image: string = loadingPlaceholder || "";

  const loadImage = async () => {
    try {
      const response = await fetch(src, apiConfig);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      image = src;
    } catch (error) {
      image = placeholder;
      onError(error, (newImage) => (image = newImage));
    }
  };

  if (image !== src) {
    loadImage();
  }

  if (component) {
    const Component = component; // Ensure it's treated as a component
    return <Component src={image} {...restProps} />;
  }

  return <img src={image} {...restProps} />;
};

export default Image;
