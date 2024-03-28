import { Outlet, Link } from "react-router-dom"

const Nav = () =>{
    return <div>
        <nav>
            <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                <Link to="/">login</Link>
                </li>
                <li>
                <Link to="/">testimonio</Link>
                </li>
            </ul>
        </nav>
      <hr />
      <Outlet/>
    </div>
    
}
export default Nav;