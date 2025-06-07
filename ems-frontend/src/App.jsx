import EmployeeCom from "./components/EmployeeCom";
import HeaderComp from "./components/HeaderComp"
import ListEmployeeComp from "./components/ListEmployeeComp"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
           <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployeeComp />} />
        <Route path="/employees" element={<ListEmployeeComp />} />
        <Route path="/add-employee" element={<EmployeeCom/>} />
        <Route path="/update-employee/:id" element={<EmployeeCom/>} />
            {/* <HeaderComp/> */}
    </Routes>
    </BrowserRouter>
      {/* <ListEmployeeComp /> */}
    </>
  )
}

export default App
