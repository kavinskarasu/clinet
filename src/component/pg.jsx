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
          const url = `http://localhost:7000/blogs/tag/${tag}`;
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
                <h3>{item.title}</h3>
                <p className="">{item.description}</p>
                <p>{item.author}</p>
                <p>{item.categories}</p>
                <p>{item.time}</p>
            </section>
                )
            })}
        </section>
    );
}