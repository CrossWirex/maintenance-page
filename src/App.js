import { useState } from "react";
import "./App.css";
import heroImg from "./assets/img/hero.png";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import axios from "axios";
import logo from "./assets/img/LOGO.svg";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changePreferedColor = () => {
    setIsDarkMode((prev) => {
      return !prev;
    });
  };
  const formatTime = (time) => {
    return String(time).length < 2 ? "0" + time : time;
  };
  const [email, setEmail] = useState("");
  const subscribe = () => {
    if (email === "") {
      return;
    }
    axios({
      method: "POST",
      url: "https://api.baserow.io/api/database/rows/table/151501/",
      headers: {
        Authorization: "Token sYAJ5liAjqRJ05IQezp2p3d0IzQDyYpp",
        "Content-Type": "application/json",
      },
      data: {
        field_994325: email,
      },
    })
      .then((res) => {
        setEmail("");
        alert("Subscribed");
      })
      .catch((error) => console.log(error));
  };
  let releaseDate = new Date("2023-04-30");
  let seconds, minute, hours, days;
  setTimeout(() => {
    setInterval(() => {
      let time = new Date();
      let timeToLive = releaseDate - time;
      seconds = parseInt((timeToLive / 1000) % 60);
      document.getElementById("seconds").textContent = formatTime(seconds);
      minute = parseInt((timeToLive / (1000 * 60)) % 60);
      document.getElementById("minute").textContent = formatTime(minute);
      hours = parseInt((timeToLive / (1000 * 60 * 60)) % 24);
      document.getElementById("hours").textContent = formatTime(hours);
      days = parseInt(timeToLive / (1000 * 60 * 60 * 24));
      document.getElementById("days").textContent = formatTime(days);
    }, 1000);
  }, 2000);

  setTimeout(() => {
    document.querySelector(".curtain").classList.add("h-0");
    document.querySelector(".curtain").classList.remove("h-[100vh]");
  }, 2000);
  return (
    <div
      className={`App h-[100vh] w-full ${
        !isDarkMode ? "bg-white" : "bg-black text-white"
      } relative font-poppins duration-500`}
    >
      <div className="curtain w-full h-[100vh] absolute top-0 left-0 bg-gradient-to-tl to-royal-purple from-rich-black grid place-content-center duration-1000 overflow-hidden z-50">
        <div className=" animate-pulse w-[60vw]">
          <img src={logo} alt="logo img" className="w-full" />
        </div>
      </div>
      <div className="lg:absolute top-0 left-0">
        <div className=" bg-royal-purple w-fit p-3 rounded-br-xl text-white font-Playfair-Display">
          <span className=" font-extrabold tracking-tighter text-2xl">
            Qwik<span className="text-emerald">fashion</span>
          </span>
        </div>
      </div>
      <div className="prefered-color-switch absolute top-0 right-0 p-2">
        <button
          className={`p-4 rounded-full ${
            !isDarkMode
              ? " bg-Midnight-green text-blue-700"
              : "bg-honey-dew text-yellow-400"
          }`}
          onClick={changePreferedColor}
        >
          {isDarkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </button>
      </div>
      <div className="mt-2 lg:mt-0 lg:pt-4">
        <header className=" font-PT-Sans-Narrow text-center tracking-widest font-medium text-3xl uppercase underline underline-offset-2">
          Project under construction
        </header>
        <div className="mt-8 hero-image rounded-[100%] max-w-[50%] max-h-[38%] md:max-w-[35%] md:max-h-[35%]  lg:max-w-[30%] lg:max-h-[35%]  mx-auto relative">
          <img
            src={heroImg}
            className={`${
              !isDarkMode ? "bg-white" : "bg-black text-white"
            } rounded-[100%] relative h-full w-full object-cover`}
            alt="hero img"
          ></img>
        </div>
        <p className="text-sm text-center mt-8 max-w-[80%] mx-auto md:text-base">
          Subscribe to get update on the product.
        </p>
        <div className="w-fit mx-auto mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-xs text-black border-2 border-Midnight-green p-2 md:p-3 md:text-sm rounded-md mr-4 outline-none w-[40vw] md:w-80"
            placeholder="Email"
          ></input>
          <button
            onClick={subscribe}
            className="text-xs md:text-sm bg-emerald text-white p-2 md:p-3 border-2 border-Midnight-green rounded-md"
          >
            Subscribe
          </button>
        </div>
        <div className="countdown text-night mt-4 px-[10%]">
          <div className="text-center w-full mx-auto justify-between max-w-[800px]">
            <div>
              <span className="time" id="days">
                00
              </span>
              <span>Days</span>
            </div>
            <div>
              <span className="time" id="hours">
                00
              </span>
              <span>Hours</span>
            </div>
            <div>
              <span className="time" id="minute">
                00
              </span>
              <span>Minutes</span>
            </div>
            <div>
              <span className="time" id="seconds">
                00
              </span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
