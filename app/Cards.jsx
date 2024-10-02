import React, { useEffect } from 'react'
import {projects} from '../data.js'
import Card from '../components/Card'
import Lenis from '@studio-freight/lenis'

const Cards = () => {


  return (
    <main className='my-[50vh]'>
        {projects.map((project,i)=>{
            return <Card key={i} i={i} {...project} />
        })}
    </main>
  )
}

export default Cards