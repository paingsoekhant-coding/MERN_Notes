import {Link, useNavigate} from "react-router";
import {ArrowLeft} from "lucide-react";
import {useState} from "react";
import toast from "react-hot-toast";
import api from "../lib/axios.js"


const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
       if(!title.trim() || !content.trim()){
            toast.error("Please fill all the fields.");
       }
       setLoading(true);
       try{
            await api.post("/notes/create-note",  {title, content});
           toast.success("Note Create Successful!");
            navigate("/");

       }catch(error){
           console.log(error,"Error Creating Note");
          if(error.response.status === 429){
              toast.error("Slow Down ! Your creating Note too fast!",{duration:4000});
          }else {
              toast.error("Something went wrong. Please try again later.");
          }
       }finally {
           setLoading(false);
       }
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="container px-4 py-8 mx-auto">
                <div className="max-w-2xl mx-auto">
                    <Link to="/" className="btn btn-ghost mb-6 ">
                        <ArrowLeft className="size-5"/>
                        Back to Home
                    </Link>

                    <div className="card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4"> Create Note</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control mb-4 ">
                                    <label className="block label mb-3">
                                        <span className="label-text ">Title</span>
                                    </label>
                                    <input type="text" placeholder="Note Title" className="input rounded-2xl w-full" value={title}
                                           onChange={(e) => setTitle(e.target.value)}/>

                                </div>

                                <div className="form-control mb-4">
                                    <label className="block label mb-3">
                                        <span className="label-text ">Content</span>
                                    </label>
                                    <textarea  placeholder="Write Your Content Here ..." className="textarea rounded-2xl h-32 w-full" value={content}
                                           onChange={(e) => setContent(e.target.value)}/>

                                </div>

                                <div className="card-actions justify-end">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? "Creating ..." : "Create Note"}</button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreatePage;