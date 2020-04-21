import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		serviceWrapper: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: '100vh',
		},
		heading: {
			fontFamily: 'lobster',
			color: theme.palette.text.primary,
			textAlign: 'center',
			fontSize: '15vw',
		},
		serviceContainer: {
			display: 'inherit',
			flexDirection: 'column',
			alignItems: 'center',
			width: '80%',
		},
		imageWrapper: {
			width: '45vw',
			height: '45vw',
			overflow: 'hidden',
			boxShadow: '0 0 2vw black',
		},
		image: { width: '100%', height: '100%' },
		service: {
			fontFamily: 'lobster',
			color: theme.palette.text.primary,
			fontSize: '8vw',
			fontWeight: '600',
			fontStyle: 'italic',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		price: {
			fontFamily: 'roboto',
			background: theme.palette.secondary.main,
			color: theme.palette.text.secondary,
			padding: '1vw',
			fontSize: '5vw',
			boxShadow: 'inset 0 0 1vw black',
			borderRadius: '1vw',
			width: '15vw',
			textAlign: 'center',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		serviceWrapper: {
			display: 'inline-flex',
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: '100vh',
		},
		heading: {
			fontFamily: 'lobster',
			color: theme.palette.text.primary,
			textAlign: 'center',
			fontSize: '15vw',
		},
		serviceContainer: {
			display: 'inherit',
			flexDirection: 'row',
			width: '100%',
			height: '30%',
			justifyContent: 'space-around',
		},
		imageWrapper: {
			width: '30%',
			height: '70%',
			overflow: 'hidden',
			boxShadow: '0 0 2vw black',
		},
		image: { width: '100%', height: '100%' },
		service: {
			fontFamily: 'lobster',
			color: theme.palette.text.primary,
			fontSize: '8vw',
			fontWeight: '600',
			fontStyle: 'italic',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		price: {
			fontFamily: 'roboto',
			background: theme.palette.secondary.main,
			color: theme.palette.text.secondary,
			padding: '1vw',
			fontSize: '5vw',
			boxShadow: 'inset 0 0 1vw black',
			borderRadius: '1vw',
			width: '15vw',
			textAlign: 'center',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		serviceWrapper: {
			display: 'inline-flex',
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: '100vh',
		},
		heading: {
			fontFamily: 'lobster',
			color: theme.palette.text.primary,
			textAlign: 'center',
			fontSize: '6vw',
		},
		serviceContainer: {
			display: 'inherit',
			flexDirection: 'row',
			width: '100%',
			height: '30%',
			justifyContent: 'center',
			alignItems: 'center',
		},
		imageWrapper: {
			width: '15vw',
			height: '15vw',
			overflow: 'hidden',
			boxShadow: '0 0 2vw black',
			margin: '2vw',
		},
		image: { width: '100%', height: '100%' },
		service: {
			fontFamily: 'lobster',
			color: theme.palette.text.primary,
			fontSize: '2vw',
			fontWeight: '600',
			fontStyle: 'italic',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		price: {
			fontFamily: 'roboto',
			background: theme.palette.secondary.main,
			color: theme.palette.text.secondary,
			padding: '1vw',
			fontSize: '1vw',
			boxShadow: 'inset 0 0 1vw black',
			borderRadius: '1vw',
			width: '6vw',
			textAlign: 'center',
		},
	},
	[theme.breakpoints.up('xl')]: {
		serviceWrapper: {
			display: 'inline-flex',
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: '100vh',
		},
		heading: {
			fontFamily: 'lobster',
			color: theme.palette.text.primary,
			textAlign: 'center',
			fontSize: '6vw',
		},
		serviceContainer: {
			display: 'inherit',
			flexDirection: 'row',
			width: '100%',
			height: '30%',
			justifyContent: 'center',
			alignItems: 'center',
		},
		imageWrapper: {
			width: '15vw',
			height: '15vw',
			overflow: 'hidden',
			boxShadow: '0 0 2vw black',
			margin: '2vw',
		},
		image: { width: '100%', height: '100%' },
		service: {
			fontFamily: 'lobster',
			color: theme.palette.text.primary,
			fontSize: '2vw',
			fontWeight: '600',
			fontStyle: 'italic',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		price: {
			fontFamily: 'roboto',
			background: theme.palette.secondary.main,
			color: theme.palette.text.secondary,
			padding: '1vw',
			fontSize: '1vw',
			boxShadow: 'inset 0 0 1vw black',
			borderRadius: '1vw',
			width: '6vw',
			textAlign: 'center',
		},
	},
}))
