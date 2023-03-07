const CategoriasDestacadasSchema = {
  title: "Lista Categorias",
  description: "Configuracion general de categorias destacadas en la tienda",
  type: "object",
  properties: {
    categoriasDestacadas: {
      title: "Lista Categorias",
      type: "array",
      items: {
        properties: {
          nombreCategoria: {
            title: "Nombre de Categoria",
            type: "string"
          },
          iconoCategoria: {
            title: "Icono Categoria",
            type: "string",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          categoriaId: {
            title: "Category ID",
            description: 'For subcategories, use "/" (e.g.: 1/2/3)',
            type: "string"
          },
          coleccionId: {
            title: "Collection",
            type: "string"
          },
          linkRedireccionBoton: {
            title: "Url de Redirección",
            type: "string",
            default: '#'
          },
          ordenProductos: {
            title: "List Order",
            type: "string",
            enum: [
              "Relevance",
              "Sales",
              "Price, descending",
              "Price, ascending",
              "Name, descending",
              "Name, ascending",
              "Release date",
              "Discount",
            ],
            default: 'Relevance'
          },
          maximoItems: {
            title: "Max Items",
            type: "number",
            default: 10
          },
          esconderItemsNoDisponibles: {
            title: "Hide unavailable items",
            type: "boolean",
            default: false
          },
          filtroSku: {
            title: "SKU Filter",
            type: "string",
            enum: [
              "All available",
              "First available"
            ],
            default: 'All available'
          },
          cuotasMostradas: {
            title: "Displayed installments",
            type: "string",
            enum: [
              "Maximum without interest",
              "Maximum"
            ],
            default: 'Maximum without interest'
          }
        }
      }
    },
  }
}

export default CategoriasDestacadasSchema;