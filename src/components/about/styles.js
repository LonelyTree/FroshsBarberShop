import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		about: {
			display: 'inline-flex',
			alignItems: 'center',
			flexDirection: 'column',
			height: '100vh',
		},
		aboutContainer: {
			width: '80%',
			display: 'inherit',
			justifyContent: 'center',
			overflow: 'scroll',
		},
		header: {
			fontFamily: 'lobster',
			color: 'black',
			fontSize: '15vw',
		},
		desc: {
			color: 'black',
			fontSize: '5vw',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		about: {
			display: 'inline-flex',
			alignItems: 'center',
			flexDirection: 'column',
			height: '100vh',
		},
		aboutContainer: {
			width: '80%',
			display: 'inherit',
			justifyContent: 'center',
			overflow: 'scroll',
		},
		header: {
			fontFamily: 'lobster',
			color: 'black',
			fontSize: '15vw',
		},
		desc: {
			color: 'black',
			fontSize: '3.5vw',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		about: {
			display: 'inline-flex',
			alignItems: 'center',
			flexDirection: 'column',
			height: '100vh',
			width: '100vw',
		},
		aboutContainer: {
			width: '60%',
			display: 'inherit',
			justifyContent: 'center',
			overflow: 'scroll',
		},
		header: {
			fontFamily: 'lobster',
			color: 'black',
			fontSize: '5vw',
		},
		desc: {
			color: 'black',
			fontSize: '1.5vw',
		},
	},
	[theme.breakpoints.up('xl')]: {},
}))
