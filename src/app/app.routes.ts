import { Routes } from '@angular/router';
import { AddEmployee } from './pages/add-employee/add-employee';
import { DataBinding } from './pages/data-binding/data-binding';
import { EmployeeList } from './pages/employee-list/employee-list';
import { Variables } from './pages/variables/variables';
import { NotFound } from './pages/not-found/not-found';
import { Signals } from './pages/signals/signals';
import { ControlFlow } from './pages/control-flow/control-flow';
import { AttributeDirective } from './pages/attribute-directive/attribute-directive';
import { TemplateForm } from './pages/template-form/template-form';
import { ReactiveForms } from './pages/reactive-forms/reactive-forms';
import { Pipes } from './pages/pipes/pipes';
import { SignalForms } from './pages/signal-forms/signal-forms';
import { LifeCycle } from './pages/life-cycle/life-cycle';
import { GetApi } from './pages/get-api/get-api';
import { ServiceTest } from './pages/service-test/service-test';
import { EmployeeCrud } from './pages/employee-crud/employee-crud';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'add-employee',
        component: AddEmployee,
      },
      {
        path: 'attribute-directive',
        component: AttributeDirective,
      },
      {
        path: 'data-binding',
        component: DataBinding,
      },
      {
        path: 'employee-list',
        component: EmployeeList,
      },
      {
        path: 'template-form',
        component: TemplateForm,
      },
      {
        path: 'variables',
        component: Variables,
      },
      {
        path: 'control-flow',
        component: ControlFlow,
      },
      {
        path: 'reactive-forms',
        component: ReactiveForms,
      },
      {
        path: 'signals',
        component: Signals,
      },
      {
        path: 'signal-forms',
        component: SignalForms,
      },
      {
        path: 'life-cycle',
        component: LifeCycle,
      },
      {
        path: 'pipes',
        component: Pipes,
      },
      {
        path: 'get-api',
        component: GetApi,
      },
      {
        path: 'service-test',
        component: ServiceTest,
      },
      {
        path: 'employee-crud',
        component: EmployeeCrud,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
