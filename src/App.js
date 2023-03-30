import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import LoginP from "./features/auth/LoginP";

import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import PatientsList from "./features/patient/PatientsList";
import Appointment from "./components/Appointment";

import DScheduler from "./components/DScheduler";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="loginE" element={<Login />} />
        <Route path="loginP" element={<LoginP />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="patients">
            {/* {we can add edit notes, add notes... under this path} */}
            <Route index element={<PatientsList />} />
          </Route>
          <Route path="schedules">
            <Route index element={<DScheduler />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
