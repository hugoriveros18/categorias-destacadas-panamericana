import React, { useState, cloneElement, useEffect } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { cuotasMostradas, filtroSku, ordenProductos } from '../../typings/variables';
import CategoriasDestacadasSchema from '../../schema/CategoriasDestacadasSchema';
import CSS_HANDLES from '../../typings/cssHandles';
import './styles.css';

const CategoriasDestacadas = ({categoriasDestacadas, children}:CategoriasDestacadasProps) => {

  //STATES
  const [categoriaActiva, setCategoriaActiva] = useState<string>('');
  const [screenWidth, setScreenWidth] = useState<number>(0);

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //EFFECTS
  useEffect(() => {
    setCategoriaActiva('-0%');
    let screenSize = screen.width;
    setScreenWidth(screenSize);
  },[])

  useEffect(() => {
    const handleResize = () => {
      let screenSize = screen.width;
      setScreenWidth(screenSize);
    }
    window.addEventListener('resize', handleResize)
  })

  return(
    <div className={`${handles['categorias-destacadas__general-container']}`}>

      {/* COLUMNA BOTONES */}
      <div className={`${handles['categorias-destacadas__botones-container']}`}>
        <div className={`${handles['categorias-destacadas__titulo']}`}>
          <h3>CATEGORÍAS DESTACADAS</h3>
        </div>
        <div className={`${handles['categorias-destacadas__botones-titulos']}`}>
          {
            categoriasDestacadas.map((categoria, index) => {
              return(
                <div
                  key={categoria.nombreCategoria}
                  className={`${handles['boton-categoria__box']} ${categoriaActiva === `-${index*100}%` && handles['boton-categoria__box--active']}`}
                  onClick={() => setCategoriaActiva(`-${index*100}%`)}
                >
                  <div style={{backgroundImage: `url(${categoria.iconoCategoria})`}}></div>
                  <p>{categoria.nombreCategoria}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* COLUMNA PRODUCTOS */}
      <div className={`${handles['categorias-destacadas__productos-container']}`}>
        <div
          className={`${handles['categorias-destacadas__productos-container--internal']}`}
          style={screenWidth < 1440 ? {transform: `translate(${categoriaActiva},0)`} : {transform: `translate(0,${categoriaActiva})`}}
        >
          {
            categoriasDestacadas.map((categoria, index) => {
              return(
                <>
                  <div
                    key={categoria.nombreCategoria}
                    className={`${handles['productos__slider-container']}`}
                    style={categoriaActiva === `-${index*100}%` ? {opacity: 1, transition: 'all 1s'} : {opacity: 0, transition: 'all 0.5ms'}}
                  >
                    <div>
                      {cloneElement(children[0], {
                        category: categoria.categoriaId,
                        collection: categoria.coleccionId,
                        orderBy: ordenProductos[categoria.ordenProductos],
                        hideUnavailableItems: categoria.esconderItemsNoDisponibles,
                        maxItems: categoria.maximoItems,
                        skusFilter: filtroSku[categoria.filtroSku],
                        installmentCriteria: cuotasMostradas[categoria.cuotasMostradas]
                        })}
                    </div>
                    <div className={`${handles['productos__ver-todo']}`}>
                      <a href={categoria.linkRedireccionBoton}>
                        VER TODO
                      </a>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

CategoriasDestacadas.schema = CategoriasDestacadasSchema;

export default CategoriasDestacadas;
