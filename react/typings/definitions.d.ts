type OrdenProductos = 'Relevance' | 'Sales' | 'Price, descending' | 'Price, ascending' | 'Name, descending' | 'Name, ascending' | 'Release date' | 'Discount';

type FiltroSku = 'All available' | 'First available';

type CuotasMostradas = 'Maximum without interest' | 'Maximum'

type Categoria = {
  nombreCategoria: string
  iconoCategoria: string
  categoriaId: string
  coleccionId: string
  linkRedireccionBoton: string
  ordenProductos: OrdenProductos
  maximoItems: number
  esconderItemsNoDisponibles: boolean
  filtroSku: FiltroSku
  cuotasMostradas: CuotasMostradas
}

type CategoriasDestacadasProps = {
  children: ReactNode
  categoriasDestacadas: Categoria[]
}
