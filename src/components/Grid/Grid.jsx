import React from "react";
import './grid.css';

import Giflist from "./Giflist/Giflist";

export default function Grid(props) {
    return (        
        <div className="grid">
            <h2>Resultados de la búsqueda</h2>
            {props.error ? <h3 className="error">¡Ups! Hubo un error, intenta de nuevo o busca otra palabra</h3> : props.isLoading ? <div>Loading</div> : <Giflist gifs={props.gifs} gifTam={props.gifTam} />}
        </div>
    )
}
