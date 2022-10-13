import { Route } from '@angular/router';
import { LayoutComponent } from '@monorepo/todolist/shell/ui/layout'; 

export const todolistShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@monorepo/todolist/core/feature/home')).TodolistHomeFeatureHomeModule
      }
    ]
  }
];