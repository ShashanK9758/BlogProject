import  axios  from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './singlePost.css'
import { Context } from '../../context/Context'

export default function Singlepost() {
  const PF = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post,setPost]=useState({})
  const [title,setTitle]=useState(" ");
  const [desc,setDesc]=useState(" ");
  const [updatedMode,setUpdatedMode]=useState(false);
  
  

  const {user}=useContext(Context);
  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get("/posts/"+path)
      setPost(res.data)
    }
    getPost();
  },[path])

  const handleClick=()=>{
    setUpdatedMode(true);
    setTitle(post.title);
    setDesc(post.desc);
  }

  const handleDel= async()=>{
    try{
    await axios.delete(`/posts/${path}`,
    {data:{username:user.username}});
    }catch(err){}
    window.location.replace('/');
  }

  const handleUpdate=async()=>{
    try{
      await axios.put(`/posts/${path}`,
    {username:user.username,title,desc});
      }catch(err){}
      setUpdatedMode(false)
    }
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
        <img className='singlePostImg' src={PF+post.photo} alt="" />
        )}
        {updatedMode ? <input type='text' value={title} className='singlePostTitleInput' 
        onChange={(e) => setTitle(e.target.value)}
        /> : 
        (<h1 className='singlePostTile'>{post.title}</h1>)
        }
        {post.username===user.username &&
        <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={handleClick}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDel}></i>
        </div>
        }
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>
              <Link to={`/?user=${post.username}`} className="links"><b>{post.username}</b></Link>
              </span>
            <span className='singlePostDate'><b>{new Date(post.createdAt).toDateString()}</b></span>
        </div>
        {updatedMode? <textarea 
        className='singlePostDescInput'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        /> : 
        (<p className='singlePostDesc'>{post.desc}</p>)}
        {updatedMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  )
}
