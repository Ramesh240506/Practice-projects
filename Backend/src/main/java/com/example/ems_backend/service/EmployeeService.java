package com.example.ems_backend.service;

import com.example.ems_backend.entity.Employee;
import com.example.ems_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {


    @Autowired
    EmployeeRepository empRepo;
    public void insertEmpRecords(Employee employee) {
        empRepo.save(employee);
    }

    public List<Employee> fetchEmpRecords() {
        return empRepo.findAll();
    }

    public Employee fetchEmpRecordsById(Long id) {

            return empRepo.findById(id)
                    .orElseThrow(()->new RuntimeException("Employee not found"));


    }

    public Employee updateEmpRecords(Long id, Employee employee) {
        if(empRepo.existsById(id))
        {
         employee.setId(id);
        return empRepo.save(employee);
        }
        else
        return null;
    }

    public void deleteEmpRecords(Long id) {
        if(empRepo.existsById(id))
        {
        empRepo.deleteById(id);
        }
        else
        {
            throw new RuntimeException("No Id found");
        }

    }
}
