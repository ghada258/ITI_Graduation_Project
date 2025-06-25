import "./App.css";
import Navbar from "./components/Navbar";

import Contact from "./pages/Contact";
import AssistantsSection from "./pages/Assistants";
import UserProfile from "./pages/userProfie";
import UserSession from "./pages/userSessions";
function App() {
  return (
    <>
      <Navbar />

      {/* <Contact/> */}
      {/* <AssistantsSection/> */}
      <UserProfile />
     {/* <UserSession/> */}
    </>
  );
}

export default App;
