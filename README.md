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

- https://github.com/jojozhuang/game-store-springboot
- https://github.com/jojozhuang/restful-api-springboot
- https://github.com/jojozhuang/restful-api-aspnet

## 2. Vue App

```bash
git clone https://github.com/jojozhuang/game-store-vue.git
cd game-store-vue
npm install
npm run local
```

Access http://localhost:12085/ in web browser, enjoy!

# References

- https://vuejs.org/v2/guide/forms.html
- https://bootstrap-vue.org/docs/components
- https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
- https://cli.vuejs.org/guide/mode-and-env.html#modes
