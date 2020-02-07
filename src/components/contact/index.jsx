import React from 'react'

import '../../css/contact.css'

export const Contact = () => {
	return (
		<div className='contactWrapper'>
			<div className='contactInfo'>
				<h1 className='heading'>CONTACT</h1>
				<p className='contactPrimary'>Phone</p>
				<a href='tel:985-264-7882' className='contactPhone'>
					985-264-7882
				</a>
				<p className='contactPrimary'>Address</p>
				<h1 className='contactAddress'>243 Girod St</h1>
				<h1 className='contactAddress'>Mandeville LA 70448</h1>
			</div>
		</div>
	)
}
