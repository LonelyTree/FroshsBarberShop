import { makeStyles } from '@material-ui/core'
import barberChair from '../../img/barberChair.jpg'

export const useStyles = makeStyles((theme) => ({
	clipUpperLeft: {
		WebkitClipPath:
			'polygon(100% 0, 100% 25%, 23% 100%, 0 100%, 0% 75%, 79% 0)',
		clipPath: 'polygon(100% 0, 100% 25%, 23% 100%, 0 100%, 0% 75%, 79% 0)',
	},
	clipLowerRight: {
		WebkitClipPath: 'polygon(75% 0, 0 79%, 0 0)',
		clipPath: ' polygon(75% 0, 0 79%, 0 0)',
	},
	clipWrapper: {},
	background_One: { backgroundImage: `url(${barberChair})` },
}))
