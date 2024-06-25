export default (price: number, { currency = 'BRL' } = {}) => {
  const val = typeof price === 'string' ? parseFloat(price) : price
  return val?.toLocaleString('pt-br', { style: 'currency', currency })
}
