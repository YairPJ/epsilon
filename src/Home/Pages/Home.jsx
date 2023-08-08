import React, { useContext } from 'react'
import {CardOption} from '../Components/Card'
import { HomeLayout } from '../Layout/HomeLayout'
import '../Styles/Home.css'

export const Home = () => {
  
  return (
    <HomeLayout>
      <div className="cards">
          <CardOption name={"RECURSOS HUMANOS"} navigate={"rrhh"} color={"green"}/>
          <CardOption name={"EMPLEADOS"} navigate={"alumnos"} color={"blue"}/>
          <CardOption name={"PROMOTORES"} navigate={"homepromotores"} color={"coral"}/>
      </div>
    </HomeLayout>
  )
}
