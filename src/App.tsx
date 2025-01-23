import { ToastContainer } from "react-toastify";
import CommunityPage from "./pages/CommunityPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <CommunityPage />
    </div>
  );
}

export default App;
