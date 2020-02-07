import React from 'react'

import '../../css/map.css'
export const MapFrame = () => {
	return (
		<div className='mapWrapper'>
			<div className='logoMini' />
			<div className='mapContainer'>
				<iframe
					width='100%'
					title='Map'
					height='100%'
					frameBorder='0'
					scrolling='no'
					marginHeight='0'
					marginWidth='0'
					src='https://www.openstreetmap.org/export/embed.html?bbox=-90.06852507591249%2C30.354076074934916%2C-90.06564170122148%2C30.356022574539814&amp;layer=mapnik&amp;marker=30.355049329578296%2C-90.06708338856697'
				></iframe>
				<br />
				<small>
					<a href='https://www.openstreetmap.org/?mlat=30.35505&amp;mlon=-90.06708#map=19/30.35505/-90.06708'>
						View Larger Map
					</a>
				</small>
			</div>
		</div>
	)
}
