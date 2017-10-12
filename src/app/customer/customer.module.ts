import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from "./customer.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({

imports:[
CommonModule,
CustomerRoutingModule,
ReactiveFormsModule,
FormsModule
],
declarations:[CustomerComponent]

})
export class CustomerModule{
    
}