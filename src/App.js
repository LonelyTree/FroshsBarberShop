import React from 'react'
import { Grid } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { Landing } from './components/landing'
import { About } from './components/about'
import { Contact } from './components/contact'
import { MapFrame } from './components/map'
import { Services } from './components/services'
import { theme } from './theme'
import { useStyles } from './appStyles'
// import BarberChair from './components/backgrounds/background1'

// [theme.breakpoints.down('sm')]: { },
// [theme.breakpoints.between('sm','md')]: { },
// [theme.breakpoints.between('md','lg')]: { },
// [theme.breakpoints.up('xl')]: { },

function App() {
	const classes = useStyles()
	return (
		<ThemeProvider theme={theme}>
			<Grid className={classes.app}>
				<CssBaseline />
				<Landing />
				<About />
				<Services />
				<Contact />
				<MapFrame />
			</Grid>
		</ThemeProvider>
	)
}

export default App
