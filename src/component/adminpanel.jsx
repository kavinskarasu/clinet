import { NavLink } from "react-router-dom";
export default function adminPanel()
{
     
return(
    <section>
        <div class="list-group">
  <h1  class="list-group-item list-group-item-action active">
      Admin Panl
  </h1>
 
</div>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">PLEASE CLICK THE BELOW LINK TO POST THE BLOG</h5>
    <p class="card-text">It will scrape the  content from blog</p>
    <NavLink to={'/add/data'} class="btn btn-primary">POST THE BLOG</NavLink>
  </div>
  
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">PLEASE CLICK THE BELOW LINK TO DELETE ALL BLOGS</h5>
    <p class="card-text">It will delete all the  content from Database.</p>
    <NavLink to={'/admin/delete'} class="btn btn-primary">DELETE ALL THE BLOGS</NavLink>
  </div>
  
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">PLEASE CLICK THE BELOW LINK TO DELETE ALL BLOGS</h5>
    <p class="card-text">It will delete all the  content from Database.</p>
    <NavLink to={'/delete'} class="btn btn-primary">DELETE SPECIFIC BLOG</NavLink>
  </div>
  
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">GET ALL THE BLOGS</h5>
    <p class="card-text">Get all the content from Database.</p>
    <NavLink to={'/'} class="btn btn-primary">GET ALL BLOGS</NavLink>
  </div>
  
</div>
    </section>
);
    
}

