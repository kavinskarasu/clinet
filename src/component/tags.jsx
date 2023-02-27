import  axios  from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Tags()
{
    return(
        <section>
            <NavLink to={`/page/Programming`}>Programming</NavLink>
        </section>
    )
}