<template>
  <div class="container">
    <h2 v-if="!id">Create New Product</h2>
    <h2 v-if="id">Edit Product</h2>
    <div v-if="hasError || errmsg">
      <b-alert v-if="hasError" type="danger">{{ errmsg }}</b-alert>
      <b-alert v-if="!hasError && !id" type="success"
        >200: Product has been created successfully.</b-alert
      >
      <b-alert v-if="!hasError && id" type="success"
        >200: Product has been updated successfully.</b-alert
      >
    </div>
    <form
      v-if="!hasError"
      class="form-horizontal"
      v-on:submit.prevent="submit()"
    >
      <div v-if="id" class="form-group">
        <div class="row">
          <label class="col-form-label col-sm-2 text-right" for="id"
            >Product ID:</label
          >
          <div class="col-sm-10">
            <input class="form-control" disabled type="text" v-model="id" />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <label class="col-form-label col-sm-2 text-right" for="productName"
            >Product Name:</label
          >
          <div class="col-sm-10">
            <input
              class="form-control"
              placeholder="Enter product name"
              type="text"
              v-model="productName"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <label class="col-form-label col-sm-2 text-right" for="price"
            >Price:</label
          >
          <div class="col-sm-10">
            <input
              class="form-control"
              placeholder="Enter price"
              type="text"
              v-model="price"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <label class="col-form-label col-sm-2 text-right" for="image"
            >Image:</label
          >
          <div class="col-sm-10">
            <input type="hidden" v-model="image" />
            <img :src="image" class="img-thumbnail" width="80" height="80" />
            <label
              class="btn btn-success"
              style="vertical-align: baseline"
              for="fileSelector"
            >
              <input
                id="fileSelector"
                type="file"
                style="display: none"
                accept="image/jpeg, image/png"
                multiple
                @change="previewFile"
              />
              Choose Image
            </label>
            <span class="badge badge-info">{{ filename }}</span>
            <span
              ><button
                type="button"
                class="btn btn-primary"
                style="vertical-align: baseline"
                @click="upload()"
              >
                Upload
              </button></span
            >
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="offset-sm-2 col-sm-10">
            <input type="submit" class="btn btn-primary" value="Save" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import productService from "../services/product.service";

export default {
  data() {
    return {
      id: this.$route.params.id,
      product: null,
      productName: "",
      price: 0,
      image: process.env.VUE_APP_BASE_URL + "images/default.png",
      filename: "",
      files: [],
      loading: true,
      hasError: false,
      errmsg: "",
    };
  },
  methods: {
    previewFile(event) {
      console.log(event.target.files);
      this.files = event.target.files;
      this.filename = this.files[0].name;
    },
    upload() {
      console.log("upload");
      if (this.files && this.files[0]) {
        const fileToUpload = this.files[0];
        const input = new FormData();
        input.append("file", fileToUpload);

        productService
          .upload(input)
          .then((response) => {
            this.hasError = false;
            this.image = response.data.message;
          })
          .catch((error) => {
            this.hasError = true;
            this.errmsg = error;
            console.log(error);
          })
          .finally(() => (this.loading = false));
      }
    },
    submit() {
      if (this.productName && this.price && this.image) {
        const data = {
          productName: this.productName,
          price: this.price,
          image: this.image,
        };
        if (this.id) {
          productService
            .update(this.id, data)
            .then((response) => {
              this.hasError = false;
              this.$router.push("/products");
            })
            .catch((error) => {
              this.hasError = true;
              this.errmsg = error;
              console.log(error);
            })
            .finally(() => (this.loading = false));
        } else {
          productService
            .create(data)
            .then((response) => {
              this.hasError = false;
              this.$router.push("/products");
            })
            .catch((error) => {
              this.hasError = true;
              this.errmsg = error;
              console.log(error);
            })
            .finally(() => (this.loading = false));
        }
      }
    },
  },
  mounted() {
    if (this.id) {
      productService
        .getOne(this.id)
        .then((response) => {
          this.hasError = false;
          const product = response.data;
          this.productName = product.productName;
          this.price = product.price;
          this.image = product.image;
        })
        .catch((error) => {
          this.hasError = true;
          this.errmsg = error;
          console.log(error);
        })
        .finally(() => (this.loading = false));
    }
  },
};
</script>
<style scoped>
.btn {
  margin-left: 4px;
}
.badge {
  margin-left: 4px;
}
</style>
