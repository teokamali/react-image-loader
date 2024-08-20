import Image from "next/image";
import { ImageLoader } from ".";

function App() {
  return (
    <div>
      <ImageLoader
        width={200}
        height={200}
        component={Image}
        alt=""
        src="https://fastly.picsum.photos/id/931/536/354.jpg?hmac=6ZgjojnYbHIYY5lSWVqaya5csyza0S1_WGWntw6vsFE"
        placeholder="https://placehold.co/600x400"
        loadingPlaceholder="/loading.jpg"
        onError={() => {}}
        apiConfig={{}}
      />
    </div>
  );
}

export default App;
