import axios from 'axios';

export async function getProductsList(product) {
  const currencyResult = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
  const { data } = currencyResult
  return data.results;
}
