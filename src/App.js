import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import Appointment from "./components/Appointment";

import DScheduler from "./components/DScheduler";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="loginE" element={<Login />} />
        <Route path="loginP" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="notes">
            {/* {we can add edit notes, add notes... under this path} */}
            <Route index element={<NotesList />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
