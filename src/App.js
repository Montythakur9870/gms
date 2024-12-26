// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar';
import Dashboard from './Pages/Home/Dashboard/dashboard';
import Home from './Pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Member from './Pages/Member/Member';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    let isLoggedIn =sessionStorage.getItem("isLogin");
    if(isLoggedIn){
      setIsLogin(true);
      // navigate('/dashboard')
    }else{
      navigate('/')
    }
  },[sessionStorage.getItem("isLogin")])

  return (
    <div className="flex">
      {
        isLogin && <Sidebar />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/member" element={<Member/>}/>
      </Routes>
    </div>
  );
}

export default App;
