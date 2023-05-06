import Banner from 'componentes/Banner'
import Cabecalho from 'componentes/Cabecalho'
import Card from 'componentes/Card'
import Rodape from 'componentes/Rodape'
import Titulo from 'componentes/Titulo'
import React from 'react'

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Card id='1' titulo='gato bonifácio' capa='https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_1280.jpg'/>
      <Rodape />
    </>
  )
}
