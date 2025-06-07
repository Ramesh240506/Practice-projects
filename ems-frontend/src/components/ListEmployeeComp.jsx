import React, { useEffect, useState } from 'react'
import { deleteEmployee, getEmployees } from '../services/EmployeeService';
import HeaderComp from './HeaderComp';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComp = () => {
    
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    // Simulating fetching data from an API
        useEffect(() => {
            getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        getEmployees()
                .then(response => {
                    setEmployees(response.data);
                })
                .catch(error => {
                    console.error('Error fetching employees:', error);
                });
    }
    const addNewEmployee = () => {
        navigate('/add-employee');
    }

    const handleUpdate = (id) => {
        navigate(`/update-employee/${id}`);
    }

    const handleDelete = (id) => {
        deleteEmployee(id).then((response) => {
            getAllEmployees(); // Refresh the list after deletion
            console.log("Employee deleted successfully", response.data);
        })
    }    
    return (
        <div  className='container'>
      
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary' onClick={addNewEmployee} style={{marginBottom: "10px"}}>Add Employee</button>
        <table className='table table-striped table-bordered'> 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=>handleUpdate(employee.id)}>Update</button>
                            <button className='btn btn-danger' style={{marginLeft:'10px'}} onClick={()=>handleDelete(employee.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
       
    </div>
  )
}

export default ListEmployeeComp
