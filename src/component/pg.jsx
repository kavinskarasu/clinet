import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Page()
{
    
    const [blog, setBlog] = useState([]);
    const {tag} = useParams();
    useEffect(() => {
        async function fetchData()
        {
          const url = `https://blog-crawler.onrender.com/blogs/tag/${tag}`;
          const res = await axios.get(url);
          setBlog(res.data);
        }
        fetchData();
    }, [tag])
    
    return(
        <section>
            {blog.map((item, k) => {
                return(
            <section key={k}>
                <div class="card">
  <h5 class="card-header btn-dark">{item.title}</h5>
  
  <div class="card-body">
    <h5 class="btn btn-success">{item.author}</h5>
    <p class="card-text">{item.description}</p>
    <p class="btn btn-primary">{item.categories}</p>
   <br></br>
    <p class="btn btn-warning">{item.time}</p>
  </div>
</div>
            </section>
                )
            })}
        </section>
    );
}