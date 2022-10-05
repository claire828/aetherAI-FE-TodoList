import { Route } from '@angular/router';
import { LayoutComponent } from '@monorepo/todolist/shell/ui/layout'; //這邊要記得在文件index中export


export const todolistShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@monorepo/todolist/main/feature/home')).TodolistHomeFeatureHomeModule
      }
    ]
  }
];