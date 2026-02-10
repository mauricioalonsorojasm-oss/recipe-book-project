
import { Link} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <br/>
        <Link to="">Homepage</Link>
        <br/>
        <Link to="/About">About</Link>
        <br/>
        {/* <Link to="/DetailPage/b777a69a-7f1c-41e8-8a4c-1d0e9e4cace8">DetailPage</Link> */}

    </div>
  )
}
