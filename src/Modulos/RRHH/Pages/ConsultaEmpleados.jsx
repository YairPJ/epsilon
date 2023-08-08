import React from 'react'
import '../Styles/ConsultaEmpleados.css'
import { DataGrid } from '@mui/x-data-grid';
import { RRHHLayout } from '../Layout/RRHHLayout';

const columns = [
    { field: 'id', headerName: 'No. Empleado', width: 130 },
    { field: 'firstName', headerName: 'Nombre(s)', width: 130 },
    { field: 'lastName', headerName: 'Apellido Paterno', width: 130 },
    { field: 'lastName', headerName: 'Apellido Materno', width: 130 },
    {field: 'age', headerName: 'Edad', type: 'number', width: 90,},
    {field: 'dpto', headerName: 'Departamento', width: 200,},
    {field: 'puesto', headerName: 'Puesto', width: 200,},

  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, dpto: 'RRHH', puesto: 'RECLUTADOR' },

  ];


export const ConsultaEmpleados = () => {
  return (
      <>
      <RRHHLayout>
      <div className="titlePage">CONSULTA DE EMPLEADOS</div>
      <div className="body">
    
    <div className="table-data">
      <div style={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
      </div>
      </RRHHLayout>
      </>
  )
}
