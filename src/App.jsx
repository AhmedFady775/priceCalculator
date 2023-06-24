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
      img: "https://cdn.shopify.com/s/files/1/0913/3370/articles/timber_59a6229c-0fa5-46e7-82cf-6138c5bc8233_1600x.jpg?v=1465035409",
    },
    {
      name: "Grass",
      price: 20,
      img: "https://www.thespruce.com/thmb/WHDh42dmxIiAg5YuTftvBrqLevk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/zoysia-grass-plant-profile-4691117-hero-2c01933247654f5b8c694a49eb6fa7bc.jpg",
    },
    {
      name: "Stone",
      price: 30,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Moelen.jpg/640px-Moelen.jpg",
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
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <img src="https://www.khatersports.com/images/logo.jpg" alt="logo" />
      <form
        onSubmit={calculatePrice}
        className="flex flex-col border p-10 rounded-lg w-[350px] lg:w-[450px]"
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
            className="px-4 py-2 border rounded mb-6 mt-4 focus:outline-[#c62b1c]"
            type="text"
            id="area"
            placeholder="Area"
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="material">
            Choose your Material
          </label>
          <div className="flex justify-between mb-6 mt-4">
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
        <div className="flex flex-col items-center text-2xl font-semibold h-20 mt-8">
          Total Cost{" "}
          <span className="text-[#c62b1c] text-lg lgtext-xl">
            {price === 0 || price === undefined ? (
              "Please fill the above entries first."
            ) : loading ? (
              <div className="flex relative">
                <span className="loader"></span>
              </div>
            ) : (
              <p className="px-8 py-2 mt-2 border rounded-md">{price} L.E</p>
            )}
          </span>
        </div>
      </form>
    </div>
  );
}

export default App;
