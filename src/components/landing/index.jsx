import React from 'react'
import { Grid } from '@material-ui/core'
import Logo from '../../img/FroshsBarberShopLogo.png'
import Arrow from '../../img/button.png'
import { useStyles } from './styles'

export const Landing = () => {
	const classes = useStyles()
	return (
		<Grid className={classes.landingWrapper}>
			<Grid container className={classes.logoWrapper}>
				<img src={Logo} className={classes.logo} alt='logo' />
			</Grid>
			<Grid container className={classes.arrowWrapper}>
				<img src={Arrow} alt='down arrow' className={classes.arrow} />
			</Grid>
		</Grid>
	)
}
