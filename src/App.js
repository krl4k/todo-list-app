import React from "react";
import Home from "./components/Home/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <React.StrictMode>
          <div className="App">
              <Layout>
                  <Home/>
              </Layout>
          </div>
      </React.StrictMode>
  );
}

export default App;
