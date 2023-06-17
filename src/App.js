import Home from "./container/main/component/home/Home";
import Header from "./container/main/component/header/Header";
import { createBrowserRouter } from "react-router-dom";
import ModalRequest from "./container/main/component/DonationPrograms/Modal/ModalRequest";
const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/crudPD'
    // element: <></>
  }

])
function App() {
  return (
   <div>
    <Header></Header>
    <Home></Home>
    </div>
  );
}

export default App;
