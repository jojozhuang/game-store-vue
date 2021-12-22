import axios from "axios";

class ProductService {
  baseUrl = process.env.VUE_APP_BASE_URL;
  apiUrl = this.baseUrl + "api/products";
  uploadUrl = this.baseUrl + "api/upload";

  getAll() {
    return axios.get(this.apiUrl);
  }

  getOne(id: string) {
    return axios.get(this.apiUrl + "/" + id);
  }

  create(data: any) {
    return axios.post(this.apiUrl, data);
  }

  update(id: string, data: any) {
    return axios.put(this.apiUrl + "/" + id, data);
  }

  delete(productId: string) {
    return axios.delete(this.apiUrl + "/" + productId);
  }

  upload(input: any) {
    return axios.post(this.uploadUrl, input);
  }
}

const productService = new ProductService();

export default productService;
