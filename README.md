# AngularSale

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## Update lastest CLI version
Nếu không run được theo command update thì run các command dưới:
npm install -g @angular/cli
npm install @angular/cli
ng update @angular/cli

## Update lastest Node version
Version mới nhất của Node có thể không tương thích với angular 
=> Check tại : https://angular.io/guide/versions
Đôi khi cài node thành công nhưng các command đều báo lỗi "Class extends value undefined is not a constructor or null"
=> 
	+ Gỡ node trong ControlPanel
	+ Xóa các folder : C:\Users\%username%\AppData\Roaming\npm-cache
					   C:\Program Files\node ( nodejs)
	+ Cài lại nodejs theo version đã check tại document của angular