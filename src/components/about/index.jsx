import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'

export const About = () => {
	const classes = useStyles()
	return (
		<Grid className={classes.about} id='about'>
			<h1 className={classes.header}>About Frosh's</h1>
			<Grid container className={classes.aboutContainer}>
				<p className={classes.desc}>
					Esse occaecat mollit exercitation exercitation dolore nostrud
					exercitation non consectetur nulla officia laborum mollit esse. Amet
					est minim fugiat laboris. Sunt id irure laboris tempor officia in sint
					ullamco occaecat esse. Sit labore aute et proident aliquip irure est.
					Enim irure enim occaecat enim occaecat esse ea sint irure pariatur
					esse commodo officia nisi. Quis nisi laborum ad do id. Officia
					pariatur mollit dolor dolore.
				</p>
				<p className={classes.desc}>
					Esse occaecat mollit exercitation exercitation dolore nostrud
					exercitation non consectetur nulla officia laborum mollit esse. Amet
					est minim fugiat laboris.
				</p>
			</Grid>
		</Grid>
	)
}
