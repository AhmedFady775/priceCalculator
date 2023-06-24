import { useState, useEffect } from "react";

function App() {
  const [area, setArea] = useState(0);
  const [material, setMaterial] = useState(0);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const [selectedMaterial, setSelectedMaterial] = useState();

  const calculatePrice = (e) => {
    e.preventDefault();
    setLoading(true);
    setPrice(material * area);
  };

  const materials = [
    {
      name: "Wood",
      price: 10,
      img: "https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000",
    },
    {
      name: "Grass",
      price: 20,
      img: "https://img.freepik.com/free-photo/green-grass-texture-background_53876-104667.jpg?w=2000",
    },
    {
      name: "Stone",
      price: 30,
      img: "https://img.freepik.com/free-photo/white-stone-texture-background_53876-104669.jpg?w=2000",
    },
  ];

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      return;
    }
  }, [loading]);

  return (
    <div className="h-screen flex justify-center items-center gap-10">
      <form
        onSubmit={calculatePrice}
        className="flex flex-col border p-10 rounded-lg w-[450px]"
      >
        <h1 className="text-[#c62b1c] text-xl font-semibold mb-4">
          Price Calculator
        </h1>
        <div className="flex flex-col">
          <label className="font-semibold flex" htmlFor="area">
            Please specify your area in{" "}
            <p className="text-[#c62b1c] ml-2">M²</p>.
          </label>
          <input
            className="px-4 py-2 border rounded mb-4 mt-2 focus:outline-[#c62b1c]"
            type="text"
            id="area"
            placeholder="Area"
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="material">
            Materials
          </label>
          <div className="flex justify-between mb-4 mt-2">
            {materials.map((material, index) => (
              <div
                onClick={() => {
                  setMaterial(material.price);
                  setSelectedMaterial(index);
                }}
                className={`flex flex-col items-center font-semibold text-[#c62b1c]`}
                key={index}
              >
                <img
                  className={`w-20 h-20 rounded-md transition  ${
                    selectedMaterial === index
                      ? "border-[#c62b1c] border-2"
                      : null
                  }`}
                  src={material.img}
                  alt={material.name}
                />
                {material.name}
              </div>
            ))}
          </div>
        </div>
        <button
          className="px-4 py-2 border rounded mt-4 bg-[#c62b1c] hover:bg-[#c62a1cd8] text-white transition"
          type="submit"
        >
          Calculate
        </button>
        <div className="flex flex-col items-center text-2xl font-semibold h-16 mt-8">
          Total Cost{" "}
          <span className="text-[#c62b1c] text-xl">
            {price === 0 || price === undefined ? (
              "Please fill the above entries first."
            ) : loading ? (
              <div className="flex relative">
                <span className="loader"></span>
              </div>
            ) : (
              price + " L.E"
            )}
          </span>
        </div>
      </form>
    </div>
  );
}

export default App;
