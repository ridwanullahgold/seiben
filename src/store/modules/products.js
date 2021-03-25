import Axios from "axios";
const baseUrl = "http://localhost:9000";
const prodUrl = `${baseUrl}/products`;
const productImagesUrl = `${baseUrl}/media/products/`;
const state = {
  products: [],
  productImages: productImagesUrl,
  currentPage: 1,
  pageCount: 0,
  pageSize: 3,
  currentCategory: "all"
};

const getters = {
  allProductImages: state => state.productImages,
  allProducts: state => state.products,
  productById: state => id => state.products.find(p => p._id == id)
};

const actions = {
  async addProductss(context, product) {
    await Axios.post(prodUrl, product);
    context.commit("setProducts", (await Axios.get(prodUrl)).data);
  },
  async editProductss(context, product) {
    await Axios.put(`${prodUrl}/${product._id}`, product);
    context.commit("setProducts", (await Axios.get(prodUrl)).data);
  },
  async deleteProductss(context, product) {
    await Axios.delete(`${prodUrl}/${product._id}`, product);
    context.commit("setProducts", (await Axios.get(prodUrl)).data);
  },
  async setProductsByCategoryAction(context, category) {
    // eslint-disable-next-line no-unused-vars
    let url;
    let countProductUrl;
    if (category != "all") {
      url = `${prodUrl}/${category}`;
      countProductUrl = `${prodUrl}/count/${category}`;
    } else {
      url = `${prodUrl}`;
      countProductUrl = `${prodUrl}/count/all`;
    }
    context.commit("setPageCount", (await Axios.get(countProductUrl)).data);
    context.commit("setProducts", (await Axios.get(url)).data);
  },
  async setProductsByCategoryPaginationAction(context, page) {
    // eslint-disable-next-line no-unused-vars
    let url;
    if (context.state.currentCategory != "all") {
      url = `${prodUrl}/${context.state.currentCategory}?p=${page}`;
    } else {
      url = `${prodUrl}/?p=${page}`;
    }
    context.commit("setProducts", (await Axios.get(url)).data);
  }
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  setPageCount: (state, count) =>
    (state.pageCount = Math.ceil(Number(count) / state.pageSize)),
  setCurrentPage: (state, page) => (state.currentPage = page),
  setCurrentCategory: (state, category) => (state.currentCategory = category)
};

export default {
  state,
  getters,
  actions,
  mutations
};
