import  axios  from "axios";
import { useState, useEffect } from "react";
import Tags from "./tags";

export default function AdminPage()
{
    const [val, setVal] = useState("");
    const [passw, setPassw] = useState("");

    const [pass, setPass] = useState(false);
    
    async function PostData()
    {
        const url = `http://localhost:7000/blogs`;
        const res = await axios.post(url, { "url": val});
        console.log(res.data);
    }

    function checkFunc() {
        console.log(passw);
        if(passw == "user") setPass(true);
    }

    if(pass == false) {
        return(
            <section>
            <input type = "text" onChange={(e) =>setPassw(e.target.value)} placeholder="Password here"/>
           <button onClick={() => checkFunc()}>Submit</button>
          </section>
        )
    }
    
    return (
          <section>
            <h1>Here</h1>
          <input type = "text" onChange={(e) =>setVal(e.target.value)} />
           <button onClick={() => PostData()}>Submit</button></section>
           )
}
