import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'

export const Contact = () => {
	const classes = useStyles()
	return (
		<Grid className={classes.contactWrapper}>
			<h1 className={classes.heading}>Contact</h1>
			<Grid container className={classes.background}>
				<Grid container className={classes.infoWrapper}>
					<Grid container item className={classes.infoSubHeading}>
						<p className={classes.subHeading}>Phone</p>
					</Grid>
					<Grid container item className={classes.infoSubDesc}>
						<a href='tel:985-XXX-XXXX' className={classes.subDesc}>
							985-^^^-^^^^
						</a>
					</Grid>
				</Grid>
				<Grid container className={classes.infoWrapper}>
					<Grid container item className={classes.infoSubHeading}>
						<p className={classes.subHeading}>Address</p>
					</Grid>
					<Grid container item className={classes.infoSubDesc}>
						<h1 className={classes.subDesc}>^^^ Girod St</h1>
						<h1 className={classes.subDesc}>Mandeville LA 70448</h1>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
