import React from 'react'
import '../Styles/Home.css'
import { useSelector } from 'react-redux'
import {CardOption} from '../Components/Card'

export const OptionsView = () => {
    const {dataUser} = useSelector(state=>state.auth);
  return (
    <>
    <div className="cards">
      {dataUser.RecursosHumanos?(<CardOption name={"RECURSOS HUMANOS"} navigate={"rrhh"} color={"green"}/>):(null)}
      {dataUser.Gestion?(<CardOption name={"GESTION"} navigate={"gestion"} color={"blue"}/>):(null)}
      </div>

    </>
  )
}
