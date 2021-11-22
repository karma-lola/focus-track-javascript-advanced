import { useState, useEffect } from "react";

const CatsImages = () => {
  const [breeds, setBreeds] = useState([]);
  const [breedId, setBreedId] = useState("");
  const [catImg, setCatImg] = useState("");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((res) => res.json())
      .then((breedList) => {
        setBreeds(breedList);
      });
  }, []);

  useEffect(() => {
    async function showImage() {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
      );
      const json = await res.json();
      console.log(json);
      setCatImg(json[0].url);
    }
    showImage();
  }, [breedId]);

  return (
    <div>
      <form>
        <label>Type of Cats </label>
        <select onChange={(e) => setBreedId(e.target.value)} value={breedId}>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </form>
      <img src={catImg} alt="cat" />
    </div>
  );
};

export default CatsImages;
