import { ImageLoader } from ".";

function App() {
  return (
    <div>
      <ImageLoader
        width={200}
        height={200}
        alt=""
        src=""
        // src={null}
        placeholder={"blur"}
        loadingPlaceholder="https://placehold.co/600x400"
        errorPlaceholder="https://placehold.co/300"
        onError={(err, setImage) => {
          setImage("https://placehold.co/600");
        }}
        apiConfig={{}}
      />
    </div>
  );
}

export default App;
