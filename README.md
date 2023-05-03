# Ctexample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


1. Create a Sample Project using angular cli
    npx @angular/cli new ctexample
2.  Run it at a specific port for .e.g. 1310 with the command below
    npx @angular/cli serve --port=1310
3.  Verify by visiting the browser at http://localhost:1310
4.  Add User Info component

For Ngrx
4. Install the dependencies
    npm install @ngrx/store @ngrx/effects @ngrx/store-devtools --save
5. Create a Store interface  in store folder
    interface AppState {
        employees: Employee[]
    }
6. Create a Reducer
    export const initialState: AppState {
        currentUser : {}
    }
    export const userReducer = createReducer

7 Prime NG
npm install primeng --force