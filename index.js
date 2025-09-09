const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json(
        [
        {
            id:1,
            employeeName: "John Doe",
            employeeSalary: 50000,
            employeeAge: 30
        },
        {
            id:2,
            employeeName: "John Dae",
            employeeSalary: 55000,
            employeeAge: 25
        },
        {
            id:3,
            employeeName: "John Warner",
            employeeSalary: 70000,
            employeeAge: 40
        },
    ]
    )
    
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});