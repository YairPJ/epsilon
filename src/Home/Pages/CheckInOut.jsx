import Button from '@mui/material/Button';
import { Typography, Grid, CircularProgress, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import { Navbar } from '../../UI/Components/Navar'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import { startConsultInformation, startSendWorkTime } from '../../store/WorkTime/Thunks';
import { useDispatch, useSelector } from 'react-redux';

export const CheckInOut = () => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const { start, startLunch, finishLunch, end, workedTime, isLoading } = useSelector(state => state.workTime);
  const dateData = currentDate.getDate().toLocaleString() + currentDate.getMonth().toLocaleString() + currentDate.getFullYear();

  const [isLoadingData, setIsLoadingData] = useState(true); // Controla la carga de la información

  useEffect(() => {
    dispatch(startConsultInformation(dateData)).then(() => {
      setIsLoadingData(false); // Marcar como cargado cuando la información esté lista
    });
  }, []);

  // Variables de estado condicionales
  const [clockIn, setClockIn] = useState("");
  const [lunchOut, setLunchOut] = useState("");
  const [lunchIn, setLunchIn] = useState("");
  const [clockOut, setClockOut] = useState("");

  useEffect(() => {
    // Actualiza los valores de estado solo si la información está cargada
    if (!isLoadingData) {
      setClockIn(start);
      setLunchOut(startLunch);
      setLunchIn(finishLunch);
      setClockOut(end);
    }
  }, [isLoadingData, start, startLunch, finishLunch, end]);

  const dateToday = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
  const timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  const year = currentDate.getFullYear();

  if (isLoadingData) {
    return (
      <div>
        <LinearProgress/>
      </div>
    );
  }

  const sendInfo = (event) => {
    const buttonName = event.target.name; // Obtén el nombre del botón que fue presionado
  
    switch (buttonName) {
      case "clockIn":
        setClockIn(timeNow);
        const dataClockIn = {
          Entrada: timeNow,
        };
        dispatch(startSendWorkTime(dataClockIn, dateData));
        break;
      case "lunchOut":
        setLunchOut(timeNow);
        const dataLunchOut = {
          SalidaComer: timeNow,
        };
        dispatch(startSendWorkTime(dataLunchOut, dateData));
        break;
      case "lunchIn":
        setLunchIn(timeNow);
        const dataLunchIn = {
          RegresoComer: timeNow,
        };
        dispatch(startSendWorkTime(dataLunchIn, dateData));
        break;
      case "clockOut":
        setClockOut(timeNow);
        const dataCheckOut = {
          Salida: timeNow,
        };
        dispatch(startSendWorkTime(dataCheckOut, dateData));
        break;
      default:
        break;
    }
    
  }


  return (
    <>
          <Navbar data={"TIEMPO DE TRABAJO"}/>
          <Box
            sx={{
              marginTop: '80px',
              padding: '50px',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#E4E4E4',
                width:'100%',
                alignItems:'center',
                height: '400px',
                borderRadius: '20px'
              }}
            >
              <Box sx={{textAlign: 'center'}}>
                <Typography color="white" variant="h5" sx={{backgroundColor: '#EE17D4'}}>TIEMPO DE TRABAJO</Typography>
                  <Box sx={{width: '100%', marginTop:'40px'}}>
                  {(isLoading)?<CircularProgress color="secondary"/>:(
                    <>
                    <Box sx={{width: '100%'}}>
                        <Typography>Fecha: {dateToday}</Typography>
                    </Box>
                    <Grid container spacing={2} justifyContent="center" sx={{marginTop: '20px'}}>
                      <Grid item>
                          <Button color="secondary" variant="outlined" size="large" onClick={sendInfo} name="clockIn" startIcon={<AccessTimeFilledRoundedIcon/>} disabled={(clockIn==="")?false:true}>
                          {clockIn === "" ? "Inicio de Jornada" : clockIn}
                          </Button>
                      </Grid>
                      <Grid item>
                      <Button variant="outlined" size="large" onClick={sendInfo} name="lunchOut" startIcon={<LocalDiningRoundedIcon/>} disabled={(lunchOut==="")?false:true}>
                      {lunchOut === "" ? "Salida a Comer" : lunchOut}
                      </Button>
                      </Grid>
                      <Grid item>
                      <Button variant="outlined" size="large" onClick={sendInfo} name="lunchIn" startIcon={<LunchDiningRoundedIcon/>} disabled={(lunchIn==="")?false:true}>
                      {lunchIn === "" ? "Entrada de Comer" : lunchIn}
                          </Button>
                      </Grid>
                      <Grid item>
                      <Button color="secondary" variant="outlined" size="large" name="clockOut" onClick={sendInfo} startIcon={<BedtimeRoundedIcon/>} disabled={(clockOut==="")?false:true}>
                      {clockOut === "" ? "Finalizar Jornada" : clockOut}
                          </Button>
                      </Grid>
                      </Grid>
                      </>
                       )}
                  </Box>
              </Box>
            </Box>
          </Box>

    </>
  )
}
