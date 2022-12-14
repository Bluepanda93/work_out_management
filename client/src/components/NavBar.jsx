import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/work-outs">Work Outs</Link>
      <Link to="/add/work-out">Add A Work Out</Link>
      <Link to="/add/user">New User</Link>
      <Link to="/user">Users</Link>
    </div>
  )
}

export default NavBar