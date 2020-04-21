import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from '../styles'
import ClipLowerRight from './clipLowerRight'
import ClipUpperLeft from './clipUpperLeft'
export default function Clip() {
	const classes = useStyles()
	return (
		<Grid className={classes.clipWrapper}>
			<ClipUpperLeft />
			<ClipLowerRight />
		</Grid>
	)
}
