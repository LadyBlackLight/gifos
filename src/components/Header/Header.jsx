import React from 'react'
import './header.css'
import logoLight from '../../assets/images/logo-desktop.svg'
import logoDark from '../../assets/images/logo-mobile-modo-noct.svg'

export default function Header(props) {
    return (
        <header>
            <img src= {props.theme === "dark" ? `${logoLight}`: `${logoDark}`} alt="Logo GIFOS" />
            <button className="btn-dark" type="button" onClick={props.handleDark}>Modo {props.theme}</button>
        </header>
    )
}
