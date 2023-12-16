import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import React,{useState, useEffect} from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName({ data: "Saloni Pande" });
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Header />
      <Outlet />
    </UserContext.Provider>
    </Provider>
  );
};

export default App;
