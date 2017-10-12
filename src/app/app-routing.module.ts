import { NgModule } from '@angular/core';
import { RouterModule,Router, Routes } from '@angular/router';

const routes:Routes=[

    { path:'', loadChildren: './customer/customer.module#CustomerModule'},
    { path: 'template-form', loadChildren: './template-form/template-form.module#TemplateFormModule' },
        { path:'customer', loadChildren: './customer/customer.module#CustomerModule'},


];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}