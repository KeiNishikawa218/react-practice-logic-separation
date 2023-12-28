import { useFetchImageUrl } from "./hook";

function App() {
  const imageUrl = useFetchImageUrl();

  return (
    <>
      <div>ネコ</div>
      <img src={imageUrl} />
    </>
  );
}

export default App;
