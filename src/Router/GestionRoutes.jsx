import React from 'react'
import { Route, Routes } from 'react-router'
import { Gestion } from '../Modulos/Gestion/Pages/Gestion'

export const GestionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Gestion />} />
    </Routes>
  )
}
