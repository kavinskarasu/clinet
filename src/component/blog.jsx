import  axios  from "axios";
import { useState, useEffect } from "react";
import Tags from "./tags";

export default function BlogPage()
{
    const [blog, setBlog] = useState([]);

    useEffect(() => {
      async function fetchData()
      {
        const url = `http://localhost:7000/blogs/`;
        const res = await axios.get(url);
        setBlog(res.data);
      }
      fetchData();
    }, [])
    
    
    return (
        <section>
            <Tags />
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
    )
}
