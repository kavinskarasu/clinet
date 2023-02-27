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
            const url = `http://localhost:7000/blogs/`;
          const res = await axios.get(url);
          setBlog(res.data);
        }
        fetchData();
    }, [tag])
    
    return(
        <section>
          <section>
        

        <Tags />
        {blog.map((item, k) => {
            return(
        <section key={k}>
           <div class="card">
   
    
 
 
<div class="card-body">
<h5 class="btn btn-success">{item.author}</h5>
<br></br>
<p class="btn btn-primary">{item.categories}</p>
<br></br>
<p class="btn btn-warning">{item.time}</p>
</div>
</div>
        </section>
            )
        })}
    </section>
        </section>
    );
}