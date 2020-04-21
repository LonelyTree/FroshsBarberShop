import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	app: {
		background: theme.palette.background.paper,
		display: 'inline-flex',
		flexDirection: 'column',
	},
}))
