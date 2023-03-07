const ordenProductos = {
  'Relevance': '',
  'Sales': 'OrderByTopSaleDESC',
  'Price, descending': 'OrderByPriceDESC',
  'Price, ascending': 'OrderByPriceASC',
  'Name, descending': 'OrderByNameDESC',
  'Name, ascending': 'OrderByNameASC',
  'Release date': 'OrderByReleaseDateDESC',
  'Discount': 'OrderByBestDiscountDESC'
}

const filtroSku = {
  'All available': 'ALL_AVAILABLE',
  'First available': 'FIRST_AVAILABLE'
}

const cuotasMostradas = {
  'Maximum without interest': 'MAX_WITHOUT_INTEREST',
  'Maximum': 'MAX_WITH_INTEREST'
}

export { ordenProductos, filtroSku, cuotasMostradas }