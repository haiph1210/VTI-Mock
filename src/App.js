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
        path: '/donationPrograms',
        element: <DonationProgramsTable></DonationProgramsTable>
      },
    ]
  },
  {
    path: '/donation',
    element: <MainDonation></MainDonation>
  },  

])
function App() {
  return (
    <div>
      <>
        <RouterProvider router={router} />

      </>
    </div>
  );
}

export default App;
