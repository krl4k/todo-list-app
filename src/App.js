import React, {useState} from "react";
import Home from "./components/Home/Home";
import Layout from "./components/layout/Layout";
import Login from "./components/Login/Login";

function App() {
    const [account, setLogin] = useState('');

    return (
      <React.StrictMode>
          <div className="App">
              <Layout>
                  {
                      !account &&
                      <Login setLogin={setLogin}/>
                  }
                  {
                      account &&
                      <Home account={account} setLogin={setLogin}/>
                  }
              </Layout>
          </div>
      </React.StrictMode>
  );
}

export default App;
