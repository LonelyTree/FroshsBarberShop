import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'
import haircut from '../../img/scissorIcon.jpg'
import shave from '../../img/razorIcon.jpg'

export const Services = () => {
	const classes = useStyles()
	return (
		<Grid className={classes.serviceWrapper}>
			<h1 className={classes.heading}>Services</h1>
			<Grid container className={classes.serviceContainer}>
				<Grid container className={classes.imageWrapper}>
					<img src={haircut} alt='Haircut' className={classes.image} />
				</Grid>
				<p className={classes.service}>
					Hair Cut <span className={classes.price}>$22</span>
				</p>
			</Grid>
			<Grid container className={classes.serviceContainer}>
				<Grid container className={classes.imageWrapper}>
					<img src={shave} alt='Shave' className={classes.image} />
				</Grid>
				<p className={classes.service}>
					Shave <span className={classes.price}>$11</span>
				</p>
			</Grid>
		</Grid>
	)
}
