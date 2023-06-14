import { useContext } from 'react'
import './topbar.css'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context'
export default function Topbar() {
  const {user,dispatch} = useContext(Context)

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  const PF = "http://localhost:5000/images/"
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className='topList'>
            <li className='topListItem'><Link className='links' to={'/'}>Home</Link></li>
            <li className='topListItem'><Link className='links' to={'/about'}>About</Link></li>
            <li className='topListItem'><Link className='links' to={'/contact'}>Contact</Link></li>
            <li className='topListItem'><Link className='links' to={'/write'}>Write</Link></li>
            <li className='topListItem' onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
        <Link to="/settings">
        <img className="topImage" src={user.profilePic ? PF+user.profilePic : "https://www.shutterstock.com/image-vector/default-avatar-profile-trendy-style-260nw-1759726295.jpg"} alt="" />
        </Link>
        )
        :(
          <ul className='topList'>
            <li className='topListItem'><Link className='links' to="/login">Login</Link></li>
            <li className='topListItem'><Link className='links' to="/register">Register</Link></li>
          </ul>
          )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
