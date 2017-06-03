import React from 'react'
import PageHeader from '../template/pageHeader'
import Paragrafo from '../template/paragrafo'

export default props => (
    <div>
        <PageHeader name='Sobre' small='Nós' />

        <Paragrafo title='Nossa História'>Lorem impsum dor..</Paragrafo>
        <Paragrafo title='Missão e Visão'>Lorem impsum dolen txarlen</Paragrafo>
        <Paragrafo title='Imprensa'>Lorem impsum shift ctrl</Paragrafo>
    </div>
)