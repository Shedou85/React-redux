import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
//import LoginLayout from "./components/LoginLayout";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import Useredit from "./pages/Useredit";


function App() {
  return (
    <div className="App">
      <Routes>
        {/*<Route path="/login" element={<LoginLayout />} />*/}
        
        <Route path="/" element={ <MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/userlist" element={<UserList />}/>
          <Route path="/edituser" element={<Useredit />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;