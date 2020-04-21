import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from '../styles'

export default function ClipUpperLeft() {
	const classes = useStyles()
	return <Grid className={classes.clipUpperLeft}></Grid>
}
