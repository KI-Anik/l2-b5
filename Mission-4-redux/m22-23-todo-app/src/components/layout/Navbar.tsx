import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    return (
        <div className='text-center flex flex-col space-y-5 text-2xl'>
           <h1 className="text-2xl">Navbar</h1>
            <Link to={'user'} className="btn p-1 underline text-blue-600" >User</Link>
            <Link to={'tasks'} className="btn p-1 underline text-blue-600" >tasks</Link>
            <div>
                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Navbar;