import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Components/Weather";
import { toast } from "react-toastify";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

  const searchLocation = (event) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setData({});
            // alert("No Data Found. Please Search Only Big Cities");
            toast.error("Data not found. Please Search Big Cities");
          } else {
            console.error("Error fetching weather data:", error);
          }
        });
      setLocation("");
    }
  };
  return (
    <div className=" h-[100vh] w-[100vw]  bg-slate-100 ">
      <div className="w-full h-fullrelative">
        <div className="text-center p-4">
          <input
            type="text"
            className="placeholder:text-2xl px-6 w-[90%] max-w-[900px] py-5 mx-auto text-lg rounded-3xl  border border-gray-200 text-gray-600 placeholder:text-gray-500 focus:outline-none bg-white-600/100 shadow-md "
            placeholder="Enter location..."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDownCapture={searchLocation}
          />{" "}
        </div>{" "}
        <Weather weatherData={data} />{" "}
      </div>
    </div>
  );
}

export default App;
