# React Image Loader

A versatile React component for enhanced image loading capabilities, featuring customizable placeholders, error handling, and support for integration with Next.js's `Image` component.

## Installation

Install the package via npm, yarn, or bun:

    npm install @teokamali/react-image-loader

or

    yarn add @teokamali/react-image-loader

or

    bun add @teokamali/react-image-loader

## Usage

The `react-image-loader` package simplifies image loading with options for placeholders and error handling. It can be used with or without the `Image` component

### Basic Example

     import React from "react";
    import ImageLoader from "@teokamali/react-image-loader";

    function App() {
      return (
        <div>
          <ImageLoader
            src="https://example.com/image.jpg"
            alt="Example Image"
            width={500}
            height={300}
            placeholder="blur"
            loadingPlaceholder={<div>Loading...</div>}
            onError={(error, setImage) => {
              console.error("Image failed to load:", error);
              setImage("fallback-image.png");
            }}
          />
        </div>
      );
    }

    export default App;

### Using with Next.js's Image Component

Integrate the package with Next.js's `Image` component to utilize its built-in features:

    import React from "react";
    import Image from "next/image";
    import ImageLoader from "@teokamali/react-image-loader";

    function Home() {
      return (
        <div>
          <ImageLoader
            width={200}
            height={200}
            component={Image} // Use Next.js Image component
            src="https://example.com/image.jpg"
            alt="Example Image"
            placeholder="blur"
            loadingPlaceholder={<div>Loading...</div>}
            errorPlaceholder="fallback-image.png"
            onError={(error, setImage) => {
              console.error("Image failed to load:", error);
              setImage("fallback-image.png"); // or use errorPlaceholder prop
            }}
          />
        </div>
      );
    }

    export default Home;

### Props

- **`src`**: `string | StaticImport` - The source URL of the image or a static import.
- **`alt`**: `string` - Alternative text for the image.
- **`width`**: `number | string` - The width of the image.
- **`height`**: `number | string` - The height of the image.
- **`fill`**: `boolean` - If true, the image will stretch to fill the container.
- **`loader`**: `ImageLoader` - Custom loader function for the image.
- **`quality`**: `number | string` - Image quality (0-100).
- **`priority`**: `boolean` - If true, the image will be loaded with high priority.
- **`loading`**: `"lazy" | "eager" | undefined` - The loading strategy for the image.
- **`placeholder`**: `"blur" | "empty" | string` - The type of placeholder to show before the image loads.
- **`blurDataURL`**: `string` - URL for a low-quality blurred image placeholder.
- **`unoptimized`**: `boolean` - If true, the image will not be optimized.
- **`overrideSrc`**: `string` - An alternative source URL for the image.
- **`onLoadingComplete`**: `(img: HTMLImageElement) => void` - Callback function when the image finishes loading.
- **`layout`**: `string` - Layout strategy for the image.
- **`objectFit`**: `string` - CSS `object-fit` property value.
- **`objectPosition`**: `string` - CSS `object-position` property value.
- **`lazyBoundary`**: `string` - Margin around the image for lazy loading.
- **`lazyRoot`**: `string` - Root element for lazy loading.
- **`loadingPlaceholder`**: `ReactElement` - Placeholder element to display while the image is loading.
- **`errorPlaceholder`**: `string` - Placeholder image URL for the error state.
- **`apiConfig`**: `RequestInit` - Configuration for the image fetch request.
- **`component`**: `React.ComponentType<NextImageProps>` - Optional custom image component.
- **`onError`**: `(error: Response, setImage: (newSrc: string) => void) => void` - Callback function when the image fails to load.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributions

Contributions, issues, and feature requests are welcome! Please check the [issues page](https://github.com/teokamali/react-image-loader/issues) if you have any ideas or issues.

## Author

Created by [Teo Kamalipour](https://github.com/teokamali).

Repository: [GitHub](https://github.com/teokamali/react-image-loader)
