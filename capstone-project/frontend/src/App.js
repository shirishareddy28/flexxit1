// import '../src/styles/App.css';
import AppRoutes from "../src/Routes/AppRoutes";
import { useState } from "react";
import { GlobalData } from "../src/Data/hooks/GlobalData";
import Loader from "../src/components/Loader";

function App() {
  // Global context data to use state across the pages
  const [loaderSpinnig, setLoaderSpinning] = useState(false);
  const [search, setSearch] = useState("");
  const [searchBox, setSearchBox] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [plan, setPlan] = useState("");
  return (
    <div className="App" style={{ height: "100vh" }}>
      {loaderSpinnig && <Loader />}
      <GlobalData.Provider
        value={{
          setLoaderSpinning,
          search,
          setSearch,
          searchBox,
          setSearchBox,
          showSearch,
          setShowSearch,
          showMenu,
          setShowMenu,
          plan,
          setPlan,
        }}
      >
        <AppRoutes />
      </GlobalData.Provider>
    </div>
  );
}

export default App;
