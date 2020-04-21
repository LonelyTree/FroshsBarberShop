import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		landingWrapper: {
			display: 'inline-flex',
			alignItems: 'center',
			flexDirection: 'column',
			height: '100vh',
		},
		logoWrapper: {
			width: '100%',
			display: 'inherit',
			justifyContent: 'center',
			marginTop: '20vh',
			marginBottom: '15vh',
		},
		logo: { width: '90%' },
		arrowWrapper: {
			width: '100%',
			display: 'inherit',
			justifyContent: 'center',
		},
		arrow: { width: '12%' },
	},
	[theme.breakpoints.between('sm', 'md')]: {
		landingWrapper: {
			display: 'inline-flex',
			alignItems: 'center',
			flexDirection: 'column',
			height: '100vh',
		},
		logoWrapper: {
			width: '100%',
			display: 'inherit',
			justifyContent: 'center',
			marginTop: '0vh',
			marginBottom: '15vh',
		},
		logo: { width: '90%' },
		arrowWrapper: {
			width: '100%',
			display: 'inherit',
			justifyContent: 'center',
		},
		arrow: { width: '10%' },
	},
	[theme.breakpoints.between('md', 'lg')]: {
		landingWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			width: '100vw',
		},
		logoWrapper: {
			width: '50%',
			display: 'inherit',
			justifyContent: 'center',
			marginTop: '0vh',
			marginBottom: '0vw',
		},
		logo: { width: '100%' },
		arrowWrapper: {
			width: '100%',
			display: 'inherit',
			justifyContent: 'center',
			display: 'none',
		},
		arrow: { width: '10%' },
	},
	[theme.breakpoints.up('xl')]: {},
}))
