import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Search from "./components/pages/Search/Search";
import VideoContainer from "./components/layout/VideoContainer";
import VideoPlayer from "./components/pages/Video/VideoPlayer";


//context
import { YoutubeProvider } from "./components/context/YoutubeContext";

//dependencies
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  // const { loading } = useContext(YoutubeContext);
  return (
    <YoutubeProvider>
      <Router>
        <div className="w-full h-[100vh]">
        <Routes>
          <Route
          path="/"
          element ={
            <>
              <Header />
              <VideoContainer />
              <Footer />
            </>
          }
          >
          </Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/video/:id" element={<VideoPlayer />}></Route>
        </Routes>
        </div>
      </Router>
    </YoutubeProvider>
  );
}

export default App;
