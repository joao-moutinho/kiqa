import { Outlet } from "react-router";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [headerState, setHeaderState] = useState();

  const userSession = async () => {
    if (!localStorage.getItem("identifier")) {
      const response = await axios.post(
        "https://kiqa-be.herokuapp.com/session",
        {
          headers: {
            "Content-Type": "application/json",
          },
          identifier: {
            identifier: "496140d0-f78b-11ec-b939-0242ac120002",
          },

          withCredentials: true,
        }
      );
      localStorage.setItem("session", response?.data);
    }
  };

  useEffect(() => {
    userSession();
  }, []);

  return (
    <div className="App">
      <Header headerState={headerState}></Header>
      <Outlet context={{ setHeaderState }} />
      <Footer></Footer>
    </div>
  );
}

export default App;
