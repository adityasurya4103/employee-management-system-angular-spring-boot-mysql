import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import{FormsModule} from '@angular/forms'

import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[];
  EnteredID!:number;

  constructor(private employeeService: EmployeeService,  private router: Router) {
    this.employees=[];
   
   }

  ngOnInit(): void {
    
    // this.employees = [
    //   { "id":1,fname: 'John', lname: 'Doe', email: 'john@example.com', salary: 50000, department: 'IT', designation: 'Developer' },
      
    // ];
    
    this.getEmployees();
  }


  goToEmployee(){

    
    console.log(this.EnteredID); 
    this.router.navigate(['details-of-employee',this.EnteredID]);
  }

  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {this.employees = data;});

    
  }

  updateEmployee(id: number){
    this.router.navigate(['updating-by-id', id]);
  }




  deleteEmployee(id: number){

    if(confirm("Are you sure to delete Employee ID: "+id)){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })}
  }
 

  detailsOfEmployee(id: number){
    this.router.navigate(['details-of-employee', id]);
  }

  
}
