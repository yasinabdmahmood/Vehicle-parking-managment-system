import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Template from '../template/Template';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Dashboard from '../dashboard/Dashboard';
import AddVehicle from '../add_vehicle/AddVehicle';
function Home() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Template />}>
            <Route index element={<Dashboard/>} />
            <Route path="add_vehicle" element={<AddVehicle/>} />
          </Route>
        </Routes>
    </>

  )
}
export default Home