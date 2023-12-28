import { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    let ignore = false;
    const data = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      if (ignore) {
        return;
      }
      if (response.ok) {
        const data = await response.json();
        setImageUrl(data[0]["url"]);
      }
    };
    data();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <div>ネコ</div>
      <img src={imageUrl} />
    </>
  );
}

export default App;
