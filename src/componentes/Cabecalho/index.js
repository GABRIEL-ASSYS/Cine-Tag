import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo-cinetag-branco 1.png'
import styles from './Cabecalho.module.css'
import CabecalhoLink from 'componentes/CabecalhoLink'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img src={Logo} alt='Logo do Cine Tag'/>
            </Link>
            <nav>
                <CabecalhoLink url='./'>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url='./favoritos'>
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}
