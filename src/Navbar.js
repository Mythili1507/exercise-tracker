import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav >
            <Link to="/">Exercise-Tracker</Link>
            <div>
                <ul>
                    <li>
                        <Link to ="/">Exercises</Link>
                    </li>

                    <li>
                        <Link to ="/create">Create Exercise log</Link>
                    </li>
                    <li>
                        <Link to ="/user">Create user</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
