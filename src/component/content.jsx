import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Page()
{
    const [blog, setBlog] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        async function fetchData()
        {
          const url = `https://blog-crawler.onrender.com/blogs/${id}`;
          const res = await axios.get(url);
          setBlog(res.data);
          console.log(res.data);
        }
        fetchData();
    }, [id])
    
    
    return (
        <section>    
    <div class="card">
    <div class="card-body">
    <h5 class="btn btn-success">{blog.author}</h5>
    <br></br>
    <p class="card-text">{blog.description}</p>
   <br></br>
   <br></br>
    <p class="btn btn-primary">{blog.categories}</p>
   <br></br>
    <p class="btn btn-warning">{blog.time}</p>
  </div>
</div>
            </section>
                )
           
       
}


