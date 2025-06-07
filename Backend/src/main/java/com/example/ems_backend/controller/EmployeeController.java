package com.example.ems_backend.controller;

import com.example.ems_backend.entity.Employee;
import com.example.ems_backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    EmployeeService service;

    @GetMapping
    public List<Employee> fetchEmpData()
    {
        return service.fetchEmpRecords();
    }
    @GetMapping("{id}")
    public Employee fetchEmpById(@PathVariable Long id)
    {
        return service.fetchEmpRecordsById(id);
    }
    @PostMapping
    public void insertEmpData(@RequestBody Employee employee)
    {
        service.insertEmpRecords(employee);
    }

    @PutMapping("{id}")
    public Employee updateEmpData(@PathVariable Long id,@RequestBody Employee employee)
    {
        return service.updateEmpRecords(id,employee);
    }

    @DeleteMapping("{id}")
    public void deleteEmpData(@PathVariable Long id)
    {
        service.deleteEmpRecords(id);
    }
}
