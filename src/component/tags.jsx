
import { NavLink } from "react-router-dom";
export default function Tags()
{
    return(
        <section>
            <button type="button" class="btn btn-outline-secondary"><NavLink to={`/page/Programming`}>Programming</NavLink></button>
            
        </section>
    )
}