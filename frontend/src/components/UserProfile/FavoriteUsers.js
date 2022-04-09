import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import CardFavoriteUsers from './CardFavoriteUsers'
import Grid from '@mui/material/Grid'

export default function FavoriteUsers() {
  return (
    <Fragment>
     
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
          <Grid item>
            <CardFavoriteUsers/>
          </Grid>
          <Grid item>
            <CardFavoriteUsers/>
          </Grid>
          <Grid item >
            <CardFavoriteUsers/>
          </Grid>
          <Grid item >
            <CardFavoriteUsers/>
          </Grid>
        </Grid>
    </Fragment>
  )
}
