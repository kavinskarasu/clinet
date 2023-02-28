import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Admin from "./adminfun";
import Login from "./login";
export default function AdminPanel()
{
  const [blog, setBlog] = useState(true);
  const [sec, setSec] = useState(false);

  useEffect(() => {
    const val = localStorage.getItem('token');
    if(val == null) setSec(false);
    else setSec(true);
  }, [])
  

if(sec) {
return(
    <section>
        <div class="list-group">
  <h1  class="list-group-item list-group-item-action active">
      Admin Panl
  </h1>
 
</div>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">PLEASE CLICK THE BELOW LINK TO POST THE BLOG</h5>
    <p class="card-text">It will scrape the  content from blog</p>
    {blog?<button onClick={() => setBlog(!blog)} class="btn btn-primary">POST THE BLOG</button>:<Admin close={setBlog} />}
  </div>
  
</div>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">GET ALL THE BLOGS</h5>
    <p class="card-text">Get all the content from Database.</p>
    <button class="btn btn-primary text-white"><NavLink to={'/'} className="text-white">GET ALL BLOGS</NavLink></button>
  </div>
  
</div>
    </section>
);}

else {
return(
  <Login />
);}
    
}

