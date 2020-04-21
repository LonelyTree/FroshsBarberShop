import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		mapWrapper: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: '70vh',
		},
		iframeContainer: {
			height: '90%',
			width: '90%',
			border: `1vw solid ${theme.palette.primary.main}`,
			boxShadow: '0 0 1vw black',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		mapWrapper: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: '50vh',
		},
		iframeContainer: {
			height: '80%',
			width: '80%',
			border: `1vw solid ${theme.palette.primary.main}`,
			boxShadow: '0 0 1vw black',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		mapWrapper: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: '50vh',
		},
		iframeContainer: {
			height: '80%',
			width: '40%',
			border: `.4vw solid ${theme.palette.primary.main}`,
			boxShadow: '0 0 1vw black',
		},
	},
	[theme.breakpoints.up('xl')]: {
		mapWrapper: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: '50vh',
		},
		iframeContainer: {
			height: '80%',
			width: '40%',
			border: `.4vw solid ${theme.palette.primary.main}`,
			boxShadow: '0 0 1vw black',
		},
	},
}))
