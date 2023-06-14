import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import Single from './pages/single/Single';
import Write from './pages/write/Write'
import Setting from './pages/setting/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context)
  return (
    <>
  <Router>
    <Topbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register" 
      element={user ? <Home/> : <Register/>}/>
      <Route path="/login" 
      element={user ? <Home/> : <Login/>}/>
      <Route path="/write" 
      element={user ? <Write/> : <Login/>}/>
      <Route path="/settings" 
      element={user ? <Setting/> : <Login/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
      <Route path="*" element={<div>Page not fount 404</div>}/>
    </Routes>
   </Router>
    </>
  );
}

export default App;
