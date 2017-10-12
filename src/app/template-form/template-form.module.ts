import { NgModule } from "@angular/core";
import { TemplateFormComponent } from "./template-form.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateFormRoutingModule } from "./templateform-routing.module";
import { DataTableModule } from "angular2-datatable";
import { DataserviceService } from "../dataservice.service";
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";


@NgModule({
    declarations:[
        TemplateFormComponent,      
    ],
    imports:[
        CommonModule,
        TemplateFormRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DataTableModule,
             ModalModule.forRoot(),

    ],
    providers:[DataserviceService,
  BsModalService  
]
})
export class TemplateFormModule{

}