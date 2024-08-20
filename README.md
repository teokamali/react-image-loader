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

import Image from "@teokamali/react-image-loader";

function App() {
  return (
    <div>
      <Image
        width={200}
        height={200}
        alt="Sample Image"
        src="https://fastly.picsum.photos/id/931/536/354.jpg?hmac=6ZgjojnYbHIYY5lSWVqaya5csyza0S1_WGWntw6vsFE"
        placeholder="https://placehold.co/600x400"
        loadingPlaceholder="https://placehold.co/600x400"
        onError={(error, setImage) => {
          console.error("Image failed to load", error);

          setImage("https://placehold.co/600x400?text=Error");
        }}
        apiConfig={{}}
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
        alt="Sample Image"
        src="https://fastly.picsum.photos/id/931/536/354.jpg?hmac=6ZgjojnYbHIYY5lSWVqaya5csyza0S1_WGWntw6vsFE"
        placeholder="https://placehold.co/600x400"
        loadingPlaceholder="https://placehold.co/600x400"
        onError={(error, setImage) => {
          console.error("Image failed to load", error);

          setImage("https://placehold.co/600x400?text=Error");
        }}
        apiConfig={{}}
      />
    </div>
  );
}

export default App;
```

### Props

- src (string, required): The URL of the image to load.
- alt (string, required): Alternative text for the image.
- width (number | string, optional): The width of the image.
- height (number | string, optional): The height of the image.

- fill (boolean, optional): When true, the image will fill its parent
- element (only applicable if using Next.js's Image component).

- placeholder (string, required): The URL of the image to display as a

  placeholder if the main image fails to load.

- loadingPlaceholder (string, optional): The URL of the image to

  display while the main image is loading.

- onError (function, required): Callback function invoked when the

- image fails to load. Receives the error and a setImage function to

  change the image source.

- apiConfig (object, optional): Configuration options for the fetch

  request (e.g., headers, credentials).

- component (React component, optional): Optionally pass a custom image

  component, like Next.js's Image.

# License

> This project is licensed under the MIT License. See the LICENSE file
> for details.

# Contributions

> Contributions, issues, and feature requests are welcome! Feel free to
> check the issues page if you have any ideas or issues

# Author

This package was created by [Teo Kamalipour](https://github.com/teokamali).
repository: [github link](https://github.com/teokamali/react-image-loader)
