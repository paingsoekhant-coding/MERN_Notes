import {Routes , Route} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";

const App = () => {
    return (
        <div data-theme="dim" className="relative h-full w-full">

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/create-page" element={<CreatePage/>}/>
                <Route path="/note-detail/:id" element={<NoteDetail/>}/>
            </Routes>
        </div>
    )
}

export default App;