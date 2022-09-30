import axios from "axios";
const API_URL = "http://localhost:3010/";

// data Product
const getData = (id) => {
	return axios.get(API_URL + `product/${id}`);
}

// eslint-disable-next-line
export default {
  getData,
};