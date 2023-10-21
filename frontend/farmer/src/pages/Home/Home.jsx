import React from 'react'
import { Hero, Numberstats, Homeinformation, Modechoose, Customerlogos} from '../../components'

const Home = () => {
  return (
    <div className=" bg-green-100 min-h-screen">

      <Hero/>
      <Numberstats/>
      <Homeinformation/>
      <Modechoose/>
      <Customerlogos/>
      

  </div>
  )
}

export default Home