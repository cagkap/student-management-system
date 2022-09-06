import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import { useState, useContext } from 'react';
import AdminPage from './AdminPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Users from './Users';
import AddUser from './AddUser';
import Lectures from './Lectures';
import AddLecture from './AddLecture';

function App() {

  const [user, setUser] = useState('');

  const adminUser = {
    userName: "admin",
    password: "admin123"

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AdminPage />} path={"/admin-page"} />
          <Route element={<LoginPage user={adminUser} />} path={"/login"} />
          <Route element={<Users />} path={"/users"} />
          <Route element={<AddUser />} path={"/users/add-user"} />
          <Route element={<Lectures />} path={"/lectures"} />
          <Route element={<AddLecture />} path={"/lectures/add-lecture"} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
