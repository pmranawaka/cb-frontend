import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";

export default function AdminPage() {

    return(
      <div className="w-screen h-screen bg-gray-200 flex p-2">
         <div  className=" h-full w-[300px] ">
            <Link to="/admin" className=" p-2">Dashboard</Link>
            <Link to="/admin/users" className="block p-2 border flex items-center "><FaUsers className="me-2"/>User</Link>
            <Link to="/admin/products" className="block p-2 border flex items-center"><AiFillProduct className="me-2"/>Products</Link>
            <Link to="/admin/orders" className="block p-2 border flex items-center"><FaFileInvoice  className="me-2"/>Orders</Link>
         </div>
         <div className=" h-full w-[calc(100vw-300px)] bg-white rounded-lg">
            <Routes path="/*">
                <Route path="/admin/users" element={<h1>User</h1>} />  
                <Route path="/admin/products" element={<h1>products</h1>} />
                <Route path="/admin/orders" element={<h1>orders</h1>} />
            </Routes>

              </div>
      </div> 
    );
} 