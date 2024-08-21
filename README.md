# React Image Loader

> A customizable React component that provides enhanced image loading

> capabilities, including support for placeholders, error handling, and

> integration with Next.js's `Image` component.

## Installation

You can install the package using either npm or yarn:

```bash



npm  i  @teokamali/react-image-loader



```

or

```bash



yarn  add  @teokamali/react-image-loader



```

or

```bash



bun  add  @teokamali/react-image-loader



```

## Usage

> This package allows you to easily load images with customizable

> placeholders and error handling. It can be used with or without

> `Image` Image component.

### Basic Example

```jsx
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
        loadingPlaceholder="loading-placeholder.png"
        onError={(error, setImage) => {
          console.error("Image failed to load:", error);

          setImage("fallback-image.png");
        }}
      />
    </div>
  );
}

export default App;
```

### Using with Next.js's Image Component

> You can optionally integrate the package with Next.js's `Image`

> component to take advantage of its built-in features:

```jsx
import React from "react";

import NextImage from "next/image";

import ImageLoader from "@teokamali/react-image-loader";

function App() {
  return (
    <div>
      <ImageLoader
        width={200}
        height={200}
        component={NextImage} // Use Next.js Image component
        src="https://example.com/image.jpg"
        alt="Example Image"
        width={500}
        height={300}
        placeholder="blur"
        loadingPlaceholder="loading-placeholder.png"
        onError={(error, setImage) => {
          console.error("Image failed to load:", error);

          setImage("fallback-image.png");
        }}
      />
    </div>
  );
}

export default App;
```

### Props

`src`

Type: string | StaticImport

Description: The source URL of the image or a static import.

`alt`

Type: string

Description: Alternative text for the image.

`width`

Type: number | string

Description: The width of the image.

`height`

Type: number | string

Description: The height of the image.

`fill`

Type: boolean

Description: If true, the image will stretch to fill the container.

`loader`

Type: ImageLoader

Description: Custom loader function for the image.

`quality`

Type: number | string

Description: Image quality (0-100).

`priority`

Type: boolean

Description: If true, the image will be loaded with high priority.

`loading`

Type: "lazy" | "eager" | undefined

Description: The loading strategy for the image.

`placeholder`

Type: "blur" | "empty" | string

Description: The type of placeholder to show before the image loads.

`blurDataURL`

Type: string

Description: URL for a low-quality image placeholder (blurred).

`unoptimized`

Type: boolean

Description: If true, the image will not be optimized.

`overrideSrc`

Type: string

Description: An alternative source URL to use for the image.

`onLoadingComplete`

Type: (img: HTMLImageElement) => void

Description: Callback function when the image has finished loading.

`layout`

Type: string

Description: Layout strategy for the image.

`objectFit`

Type: string

Description: CSS object-fit property value.

`objectPosition`

Type: string

Description: CSS object-position property value.

`lazyBoundary`

Type: string

Description: Margin around the image for lazy loading.

`lazyRoot`

Type: string

Description: Root element for lazy loading.

`loadingPlaceholder`

Type: string

Description: Placeholder image URL for loading state.

`apiConfig`

Type: RequestInit

Description: Configuration for the image fetch request.

`component`

Type: React.ComponentType<NextImageProps>

Description: Optional custom image component.

`onError`

Type: (error: Response, setImage: (newSrc: string) => void) => void

Description: Callback function when image fails to load.

# License

> This project is licensed under the MIT License. See the LICENSE file

> for details.

# Contributions

> Contributions, issues, and feature requests are welcome! Feel free to

> check the issues page if you have any ideas or issues

# Author

This package was created by [Teo Kamalipour](https://github.com/teokamali).

repository: [github link](https://github.com/teokamali/react-image-loader)
