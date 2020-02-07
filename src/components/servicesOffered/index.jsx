import React from 'react'
import Arrow from '../../img/button.png'
import '../../css/servicesOffered.css'

export const Services = () => {
	return (
		<div className='serviceMenu'>
			<div className='imageWrapper'>
				<div className='imageBorder scissor'>
					<p className='haircutPrice'>
						Hair Cut <span>$22</span>
					</p>
				</div>
				<div className='imageBorder razor'>
					<p className='shavePrice'>
						Shave<span>$11</span>
					</p>
				</div>
			</div>
		</div>
	)
}
