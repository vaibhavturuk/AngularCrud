import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from "@angular/forms";
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  registerStudent: any;


  myform: FormGroup;

  constructor(private formBuilder: FormBuilder, private DataService: DataserviceService) {

  }
  ngOnInit() {
    this.myform = this.formBuilder.group({
      childfirstName: ['', Validators.required],
      childlastName: ['', Validators.required],
      childgender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalcode: ['', Validators.required]
    });
  }
  onAddStudent(f: NgForm) {
console.log(f.value);
    this.registerStudent = f.value;
    this.DataService.postStudent(this.registerStudent).subscribe((student) => {
      console.log(student);
      window.location.reload();
    });
  }

  get childfirstName() {
    return this.myform.get('childfirstName');
  }
  get childlastName() {
    return this.myform.get('childlastName');
  }

  get childgender() {
    return this.myform.get('childgender');
  }
  get address() {
    return this.myform.get('address');
  }
  get city() {
    return this.myform.get('city');
  }
  get postalcode() {
    return this.myform.get('postalcode');
  }

}
