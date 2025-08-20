import {Link} from "react-router";
import {PlusIcon} from "lucide-react";

const Navbar = () =>{
    return (
        <header className="border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                 <div  className="flex items-center justify-between">
                     <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">IdeaCatch</h1>
                     <div className="flex items-center gap-4">
                        <Link to={"/create-page"} className="btn btn-primary rounded-2xl">
                            <PlusIcon className="size-4"/>
                            <span>New Note</span>
                        </Link>
                     </div>
                 </div>

            </div>
        </header>

    )
};

export default Navbar;