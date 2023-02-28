import  axios  from "axios";
import { useState } from "react";
export default function Admin(props){
    const [val, setVal] = useState("");
    const {close}  =  props;
   
    async function PostData()
    {
        axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
        const url = `https://blog-crawler.onrender.com/blogs`;
        const res = await axios.post(url, { "url": val});
        console.log(res.data);
        alert("updated successfully")
        close(true);
    }


    return (
        <section>
          <h1>PLEASE PROVIDE THE URL</h1>
        <input type = "text" onChange={(e) =>setVal(e.target.value)} />
         <button onClick={() => PostData()}>Submit</button></section>
         )
}

