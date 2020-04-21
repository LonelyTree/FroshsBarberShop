import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'
export const MapFrame = () => {
	const classes = useStyles()
	return (
		<Grid className={classes.mapWrapper}>
			<Grid container className={classes.iframeContainer}>
				<iframe
					width='100%'
					title='Map'
					height='100%'
					frameBorder='0'
					scrolling='no'
					marginHeight='0'
					marginWidth='0'
					src='https://www.openstreetmap.org/export/embed.html?bbox=-90.06852507591249%2C30.354076074934916%2C-90.06564170122148%2C30.356022574539814&amp;layer=mapnik&amp;marker=30.355049329578296%2C-90.06708338856697'
				></iframe>
			</Grid>
		</Grid>
	)
}
