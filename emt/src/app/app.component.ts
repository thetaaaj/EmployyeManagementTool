import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './Employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emt';


  @ViewChild('f') employeeForm ?:NgForm;


  btnMode: string= "Add";

  employees:Employee[]=[
   {"id":1,name:"nihanth",email:"nihanth@gmail.com"},
   {"id":2,name:"taj",email:"taj@gmail.com"},
   {"id":3,name:"deepika",email:"deepika@gmail.com"},
   {"id":4,name:"yogeswari",email:"yogeswari@gmail.com"},
  ]


  addEmployee(form:NgForm){
    console.log("Button Mode is : ", this.btnMode);
    if(this.btnMode === "Add"){
      alert("Adding a employee !!!")
      this.employees.push(form.value);
    }
    else {
      let objIndex = this.employees.findIndex((obj => obj.id == form.value.id));
      this.employees[objIndex].id = form.value.id;
      this.employees[objIndex].name = form.value.name;
      this.employees[objIndex].email =form.value.email;
    }

  }

  deleteEmployee(id: any){
    this.employees.splice(this.employees.indexOf(id),1);
    // console.log(this.employees);
  }

  updateEmployee(employee: any){
    this.btnMode = "Update";
    
    this.patchForm(employee);

  }

  patchForm(employee:any){
     this.employeeForm?.setValue({
      id: employee.id,
      name: employee.name,
      email: employee.email,
    })
  }

  clearForm(){
    this.btnMode = "Add"
    this.employeeForm?.reset();
  }

}
