import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import CardServicesProfile from './CardServicesProfile'
import Grid from '@mui/material/Grid'

export default function UserServices() {
  return (
    <Fragment>
        <Typography variant="h5" style={{color: "white"}}>
            Servicios de SamanthaP
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={3} lg={6}>
            <CardServicesProfile/>
          </Grid>
          <Grid item md={3} lg={6}>
            <CardServicesProfile/>
          </Grid>
          <Grid item md={3} lg={6}>
            <CardServicesProfile/>
          </Grid>
          <Grid item md={3} lg={6}>
            <CardServicesProfile/>
          </Grid>
          <Grid item md={3} lg={6}>
            <CardServicesProfile/>
          </Grid>
        </Grid>
    </Fragment>
  )
}
