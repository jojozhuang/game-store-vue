# Game Store(Vue)

A web app to manage products, supporting all CRUD operations, built with Vue 2.

<kbd>![image](/src/assets/game-store-vue.png)</kbd>

# Function

This application is used to manage products. It implements all CRUD operations. Below are the available features.

- Product List - Show all products in a list with Edit and Delete button.
- Product Management - Create, update and delete product.
- Image Upload - Set image for product and upload to server.
- Dynamic Data - All data is fetched from backend RESTful services.

# Demo

Two available demos:

- `Live Demo on Heroku:` <a href="https://game-store-vue.herokuapp.com/" target="\_blank">https://game-store-vue.herokuapp.com/</a>
- `Live Demo on Netlify:` <a href="https://game-store-vue.netlify.com/" target="\_blank">https://game-store-vue.netlify.com/</a>

_Note: The demo websites may be slow when you access them for the first time. Be patient!_

# Setup Locally

## 1. RESTful API

Setup server to host RESTful API with Spring Boot or ASP.NET Core, see below.

- https://github.com/jojozhuang/restful-api-springboot
- https://github.com/jojozhuang/restful-api-aspnet

## 2. Vue App

```bash
git clone https://github.com/jojozhuang/game-store-vue.git
cd game-store-vue
npm install
npm run serve
```

Access http://localhost:8082/ in web browser, enjoy!

# Deployment

Follow the tutorial [Deploying Game Store Angular App to Netlify](https://jojozhuang.github.io/tutorial/deploying-game-store-angular-app-to-netlify) to deploy this app to Netlify.

Follow the tutorial [Continuously Deploy Angular App to GitHub Pages using Travis-CI](https://jojozhuang.github.io/tutorial/continuously-deploy-angular-app-to-github-pages-using-travis-ci) to deploy this app to GitHub Pages.

# Portfolio

Read portfolio [Game Store(Angular)](https://jojozhuang.github.io/project/game-store-angular) to learn the main functions of this Angular app.

# Tutorial

Read tutorial [Building Web Application with Angular](https://jojozhuang.github.io/tutorial/building-web-application-with-angular) to learn how this Angular app is built.

# References

- https://vuejs.org/v2/guide/forms.html
- https://bootstrap-vue.org/docs/components
- https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
- https://cli.vuejs.org/guide/mode-and-env.html#modes
