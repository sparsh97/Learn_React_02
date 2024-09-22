import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;
  console.log(API_KEY);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  function handleToggleModel() {
    setShowModal((prev) => !prev);
  }

  useEffect(() => {
    async function fetApiData() {
      const url = `https://api.nasa.gov/planetary/apod` + `?api_key=${API_KEY}`;

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        console.log(apiData);
      } catch (err) {
        console.warn(err);
      }
    }

    fetApiData();
  }, []);

  return (
    <>
      {data ? (
        <Main />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal && <Sidebar handleToggleModel={handleToggleModel} />}
      {data && (
        <Footer showModal={showModal} handleToggleModel={handleToggleModel} />
      )}
    </>
  );
}

export default App;
