import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import * as _ from "lodash";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataserviceService } from "../dataservice.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
    [name: string]: any;
  id: any;
  UserInfo: any;
  posts: any;
  data: any;
   public modalRef: BsModalRef;
   complexForm: FormGroup;


  constructor(fb: FormBuilder,private DataService: DataserviceService, private modalService: BsModalService) { 
    this.complexForm = fb.group({
           
                  'Id' :  [null,Validators.required],

           'ChildFirstName' :  [null,Validators.required],

           'ChildLastName' : [null,Validators.required],

           'ChildGender' : [null,Validators.required],

           'Address' : [null,Validators.required],

           'City' : [null,Validators.required],

           'PostalCode' : [null,Validators.required],
           
           

        },
          
        )
  }
  ngOnInit() {

    this.DataService.getDataStudent().subscribe((posts) => {
      console.log(posts);
      this.data = posts;
      console.log(this.data);
    });
  }
 
///open model
 edit(tempEdit:TemplateRef<any>,model:any){
      this.UserInfo=model;
      this.modalRef = this.modalService.show(tempEdit);
  }

////delete data
submitFormForEdit(model:any)
{
    this.DataService.update(model).subscribe(
      data => {
       // this.toasterService.showToaster('Successfully Added');
         },
      
     );
}

//open model
delete(tempDelete:TemplateRef<any>,model:any){
      this.UserInfo=model;
      this.modalRef = this.modalService.show(tempDelete);
  }
//delete data
  deleteUser(model:any)
  {
      this.id=model.Id
       this.DataService.delete(this.id).subscribe(
      data => {
              window.location.reload();

         },
      
     );

  }


}

