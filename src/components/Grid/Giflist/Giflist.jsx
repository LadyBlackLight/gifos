import React from 'react';
import './gif-list.css';

export default function Giflist(props) {
    return (
        <div className="resultados">
          {props.gifTam > 0 ? props.gifs.map((gif) => {
            return (
                <img key={gif.id} src={gif.images.fixed_width.url} alt={gif.title} />
            )
          }): <h3>Aqui aparecerán tus gifs, realiza una búsqueda 🧐</h3>}
        </div>
    )
}
