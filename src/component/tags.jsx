import  axios  from "axios";
import { useState, useEffect } from "react";
export default function Tags()
{
    const [name, setName] = useState([]);

    useEffect(() => {
      async function fetchData()
      {
        const url = `http://localhost:7000/blogs/tag/${name}`;
        const res = await axios.get(url);
        // setBlog(res.data);
      }
      fetchData();
    }, [name])

    return(
        <section>
            <button onClick={() => setName("Programming")}>#Programming</button>
            <button>#Tech</button>
            <button>#Web DEv</button>
        </section>
    )
}