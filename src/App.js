import Home from "./container/main/component/home/Home";
import Header from "./container/main/component/header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ModalRequest from "./container/main/component/DonationPrograms/Modal/ModalRequest";
import Dashboard from "./container/main/admin-component/dashboard/Dashboard";
import ListDonationPrograms from "./container/main/component/DonationPrograms/component/ListDonationPrograms";
import DonationProgramsTable from "./container/main/component/DonationPrograms/table/DonationProgramsTable";
import { Table } from "@material-ui/core";
import TableDonation from "./container/main/component/Donation/component/table/TableDonation";
import DonationCard from "./container/main/component/Donation/component/cart/DonationCart";
import MainDonation from "./container/main/component/Donation/component/mainDonation/MainDonation";
import { ToastContainer } from "react-toastify";
import Donation from "./container/main/component/Donation/entity/Donation";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/admin-donationPrograms',
        element: <DonationProgramsTable></DonationProgramsTable>
      },
      {
        path: '/admin-donation',
        element: <MainDonation></MainDonation>
      },  
    
    ]
  },
  
])
function App() {
  return (
    <div>
      <div>
        <RouterProvider router={router} />

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
