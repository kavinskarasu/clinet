import  axios  from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function BlogPage()
{
    const [blog, setBlog] = useState([]);

    useEffect(() => {
      async function fetchData()
      {
        const url = `https://blog-crawler.onrender.com/blogs`;
        const res = await axios.get(url);
        setBlog(res.data);
      }
      fetchData();
    }, [])
    
    
    return (
        <section>
            <h1 className="p-4 sticky-top shadow-lg bg-black text-white text-center">Blogs</h1>
            
            {blog.map((item, k) => {
                return(
            <section key={k}>
               <div class="card">
       
        <NavLink to={`/next/${item.id}`}><h3> {item.title} </h3></NavLink>
       
        
     
     
    <div class="card-body">
    <h5 class="btn btn-success">{item.author}</h5>
   <br></br>
   <NavLink to={`/page/${item.categories}`}><p class="btn btn-primary">{item.categories}</p></NavLink>
   <br></br>
    <p class="btn btn-warning">{item.time}</p>
  </div>
</div>
            </section>
                )
            })}
        </section>
    )
}

