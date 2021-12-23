<template>
  <div id="products" class="container">
    <h2>Products</h2>
    <p>Data from Restful API</p>
    <div v-if="message">
      <b-alert v-if="hasError" variant="danger" show>{{ message }}</b-alert>
      <b-alert v-if="!hasError" variant="success" show>{{ message }}</b-alert>
    </div>
    <div v-if="loading">Loading...</div>
    <table v-if="!loading" class="table">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.productName }}</td>
          <td>${{ product.price }}</td>
          <td>
            <img
              :src="product.image"
              class="img-thumbnail"
              width="80"
              height="80"
            />
          </td>
          <td>
            <b-button
              variant="success"
              @click="$router.push('/product/' + product.id)"
            >
              Edit
            </b-button>
            <b-button variant="danger" @click="deleteProduct(product.id)"
              >Delete</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import productService from "../services/product.service";

export default {
  data() {
    return {
      products: [],
      loading: true,
      hasError: false,
      message: "",
    };
  },
  methods: {
    deleteProduct(productId) {
      if (window.confirm("Are you sure to delete this product?")) {
        //console.log(event.id);
        productService
          .delete(productId)
          .then((response) => {
            this.message = "Product has been deleted successfully.";
            this.getProducts();
          })
          .catch((error) => {
            this.hasError = true;
            this.message = error;
            console.log(error);
          })
          .finally(() => (this.loading = false));
      }
    },
    getProducts() {
      productService
        .getAll()
        .then((response) => {
          this.hasError = false;
          this.products = response.data;
        })
        .catch((error) => {
          this.hasError = true;
          this.message = error;
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.message = "";
    this.getProducts();
  },
};
</script>
