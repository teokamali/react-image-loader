import { ImageLoader } from ".";

function App() {
  return (
    <div>
      <ImageLoader
        width={200}
        height={200}
        alt=""
        src="https://placehold.sco/300"
        loadingPlaceholder={<div>loading</div>}
        errorPlaceholder="/400.svg"
      />
    </div>
  );
}

export default App;
