import  axios  from "axios";
import { useState } from "react";
export default function Admin(){
    const [val, setVal] = useState("");
   
    async function PostData()
    {
        const url = `http://localhost:7000/blogs`;
        const res = await axios.post(url, { "url": val});
        console.log(res.data);
        alert("updated successfully")
    }


    return (
        <section>
          <h1>PLEASE PROVIDE THE URL</h1>
        <input type = "text" onChange={(e) =>setVal(e.target.value)} />
         <button onClick={() => PostData()}>Submit</button></section>
         )
}

