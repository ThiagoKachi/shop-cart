import axios from 'axios';

export async function getProductsList(product) {
  const currencyResult = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
  const { data } = currencyResult
  return data.results;
}

export async function getProductsInfo(product) {
  const currencyResult = await axios.get(`https://api.mercadolibre.com/items/${product}`)
  const { data } = currencyResult
  return data;
}

export async function getCategories() {
  const currencyResult = await axios.get('https://api.mercadolibre.com/sites/MLB/categories')
  const { data } = currencyResult
  return data;
}

export async function getCategoriesList(id) {
  const currencyResult = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`)
  const { data } = currencyResult
  return data;
}
