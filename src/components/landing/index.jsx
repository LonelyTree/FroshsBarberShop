import React from 'react'
// import { render } from '@testing-library/react'
import Logo from '../../img/FroshsBarberShopLogo.png'
import Arrow from '../../img/button.png'

import '../../css/landing.css'

export const Landing = () => {
	return (
		<div className='landing'>
			<img src={Logo} className='logo' alt='logo' />
			<div className='arrowWrapper'>
				<img src={Arrow} alt='down arrow' className='arrow' />
			</div>
		</div>
	)
}
