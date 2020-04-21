import React from 'react'
import { Grid } from '@material-ui/core'
import Clip from './clipPaths'
import { useStyles } from './styles'

export default function BarberChair() {
	const classes = useStyles()
	return (
		<Grid>
			<Clip />
			<Grid className={classes.background_One} />
		</Grid>
	)
}
