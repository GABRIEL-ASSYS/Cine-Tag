import Banner from 'componentes/Banner'
import Card from 'componentes/Card'
import Titulo from 'componentes/Titulo'
import React from 'react'
import videos from 'json/db.json'
import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <>
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...videos} key={videos.id}/>
        })}
      </section>
    </>
  )
}
