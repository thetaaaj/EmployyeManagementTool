import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './Employee.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emt';


  @ViewChild('f') employeeForm?: NgForm;

  constructor(private userService: UserService) { }

  btnMode: string = "Add";

  employees: any;
  // employees:any[]=[
  //  {"id":1,name:"nihanth",email:"nihanth@gmail.com"},
  //  {"id":2,name:"taj",email:"taj@gmail.com"},
  //  {"id":3,name:"deepika",email:"deepika@gmail.com"},
  //  {"id":4,name:"yogeswari",email:"yogeswari@gmail.com"},
  // ]


  // addEmployee(form:NgForm){
  //   console.log("Button Mode is : ", this.btnMode);
  //   if(this.btnMode === "Add"){
  //     alert("Adding a employee !!!")
  //     this.employees.push(form.value);
  //   }
  //   else {
  //     let objIndex = this.employees.findIndex((obj => obj.id == form.value.id));
  //     this.employees[objIndex].id = form.value.id;
  //     this.employees[objIndex].name = form.value.name;
  //     this.employees[objIndex].email =form.value.email;
  //   }

  // }


  fetchEmployee(form: NgForm) {
    this.userService.getAllUser()
      .subscribe((user: any) => {
        this.employees = user;
        console.log("user ADDED successfully");
      })
  }

  createEmployee(form: NgForm) {
    this.userService.createUser(form.value)
      .subscribe((user: any) => {
        console.log('user added successfully');
      })
  }

  deleteEmployee(id: any) {
    this.userService.deleteUser(id)
      .subscribe(() => {
        console.log("Deleted Successfully");
      })
  }

  updateEmployee(employee: any) {
    this.btnMode = "Update";

    this.userService.updateUser(employee.id, employee)
      .subscribe((data) => {
        console.log("updated data successfully");
      })

  }

  patchForm(employee: any) {
    this.employeeForm?.setValue({
      id: employee.id,
      name: employee.name,
      email: employee.email,
    })
  }

  clearForm() {
    this.btnMode = "Add"
    this.employeeForm?.reset();
  }

}
