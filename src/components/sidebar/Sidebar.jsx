import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
import "./sidebar.css"

export default function Sidebar() {
  const[cats,setCats]=useState([]);

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data); 
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImage" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <p>Lorem ipsum, dolsicing elharum in totam ut officiis animi dicta quae natus reiciendis expedita, itaque eveniet ab architecto dolorem quia iste nesciunt delectus.</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
       <ul className="sidebarList">
        {cats.map((c)=>(
          <Link to={`?cat=${c.name}`} className="links"><li className="sidebarListItem">{c.name}</li></Link>
        ))}
       </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-facebook"></i>
      <i className="sidebarIcon fa-brands fa-twitter"></i>
      <i className="sidebarIcon fa-brands fa-instagram"></i>
      <i className="sidebarIcon fa-brands fa-pinterest"></i>
      </div>
      </div>
    </div>
  )
}
