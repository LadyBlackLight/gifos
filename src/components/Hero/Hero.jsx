import React from 'react'
import './hero.css'
import ilustra from '../../assets/images/ilustra_header.svg'
import buscar from '../../assets/images/icon-search-mod-noc.svg'
import borrar from '../../assets/images/close.svg'

export default function Hero(props) {
    return (
        <div className="hero">
            <h1>¡Inspirate y busca los mejores <span>GIFS!</span></h1>
            <img src={ilustra} alt="Imagen del hero" />
            <div>
                <input type="search" onChange={props.handleSearchChange} onKeyDown={props.handleKey} value={props.search} placeholder="Busca gifs" />
                {props.tam > 0 ? <button type="submit" className="btn-submit" onClick={props.handleReset}>
                    <img src={borrar} width="20" alt="Icono cerrar" />
                </button> : <button type="submit" className="btn-submit" onClick={props.handleSubmit}>
                    <img src={buscar} alt="Icono lupa" />
                </button>}
            </div>
            {props.tam > 0 ? <div className="sugerencias">
                {props.sugestions.map((sugestion) => {
                    return (
                        <button key={sugestion.name} onClick={props.handleSugestions} value={sugestion.name}>{sugestion.name}</button>
                    )
                })}
            </div> : ""
            }
        </div>
    )
}
