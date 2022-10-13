

# TodoList
A simple todolist client built with Angular14, Nx, Workspace, Ngrx, TailwindCSS, JsonServer.

`This project was generated using [Nx](https://nx.dev) `
<br />


## Tech stack
- [Angular 14][angular]
- [Nx Workspace][nx]
- [NgRx][ngrx] 
- [TailwindCSS][tailwind]
- [JSON Server][json-server]
- [ngneat][ngneat/svgicon]
  
[angular]: https://angular.io/
[nx]: https://nx.dev
[ngrx]: https://ngrx.io/
[tailwind]: https://tailwindcss.com/
[json-server]: https://www.npmjs.com/package/json-server
[ngneat/svgicon]: https://www.npmjs.com/package/@ngneat/svg-icon
<br />



## Running the project
>Run `npm run todolist` to serves the client application.

>Run `npm run json-server` to serves the backend server.

<br />

### Dependency Graph

Nx provides an [dependency graph]((https://nx.dev/latest/angular/structure/dependency-graph)) out of the box. To view it on your browser, clone my repository and run:

```bash
npm run graph
```

A simplified graph looks like the following. It gives you insightful information for your mono repo and is especially helpful when multiple projects depend on each other.

![Todolist Dependency Graph](/assets/graph.png)

<br />




### Structure
Below is the simplified version of the application structure.
```
.
└── root
    ├── apps
    │   └── todolist
    │ 
    └── libs
        └── eslint-custom-overrides (dir)
        └── tailwind-preset (dir)
        │ 
        └── web (dir) - common usages for apps
        │   │── settings (dir) - environment setting. etc hmr..
        │   ├── shared (dir)
        │   │   ├── data-access (generic-state)
        │   │   └── directives
        │   │   └── pipes
        │   └── util (dir)
        │   
        └── todolist (dir)
            │ 
            ├── shell (dir)
            │   ├── feature (angular:lib) - for configure any forRoot modules
            │   └── ui
            │       └── layout (angular:lib)
            │ 
            │ 
            ├── core (dir) - code
            │   ├── data-access (dir)
            │   │   ├── models (angular:lib)
            │   │   └── store (angular:lib)
            │   │       └── tasks (action, effect, reducer, selector)
            │   │ 
            │   │** (folders named by definition of router) **
            │   ├── feature (dir) [smart components]
            │   │   └── home (angular:lib)
            │   │       └── ... (angular:lib, Component)
            │   │           
            │   └── ui (dir) - [representation components] 
            │       └── home (angular:lib) -
            │           └── ... (angular:lib, SCAM for Component)
            │       
            │ 
            └── shared (dir) -- common usaged for features           
                ├── app-config (injection token for environment)
                ├── api (angular: API call, Service
                management to share across the Client app)
                ├── ui (dir) 
                ├── assets (dir)
                └── utils (angular:lib, usually shared Guards, Interceptors, Validators...)
```



