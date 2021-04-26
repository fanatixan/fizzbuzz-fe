# FizzbuzzFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Since the backend and the frontend runs on different ports, CORS problems can arise. Therefore, there's an nginx
proxy available. To use it, you'll have to follow these steps:

1. Ensure Docker is installed
1. Ensure that the `docker.for.win.localhost` address is present in the `c:\windows\system32\drivers\etc\hosts` file and
   it is assigned to the Docker subnet's address (for example, it's the same for `host.docker.internal`).
1. Run `docker-compose up` in the `proxy` subfolder of this project.
1. Open `http://localhost`. The proxy exposes the `localhost:8080` under `localhost/api/`, and `localhost:4200` under
   `localhost/`.
1. Instead of `ng serve`, run the frontend using `ng serve --host 0.0.0.0 --disable-host-check`.

To shut down the proxy, run `docker-compose down` in the `proxy` subfolder of this project.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
