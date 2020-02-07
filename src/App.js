import React, { Component } from 'react'
import { Landing } from './components/landing'
import { About } from './components/about'
import { Contact } from './components/contact'
import { MapFrame } from './components/map'
import { Services } from './components/servicesOffered'
import Arrow from './img/button.png'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import './css/app.css'

class App extends Component {
	render() {
		return (
			<Parallax ref={(ref) => (this.parallax = ref)} pages={3.6}>
				<div className='App'>
					<ParallaxLayer offset={0} speed={0.5}>
						<Landing />
					</ParallaxLayer>
					<ParallaxLayer offset={1.1} speed={0.4} style={{ zIndex: 1 }}>
						<h1 className='serviceHeading'>ABOUT FROSH'S</h1>
						<About />
						<div className='serviceHeadingWrapper'>
							<h1 className='serviceHeading'>SERVICES</h1>
						</div>
						<Services />
						<Contact />
						<MapFrame />
					</ParallaxLayer>
					<ParallaxLayer offset={1} speed={0.36} style={{ zIndex: -1 }}>
						<div className='masterImageWrapper'>
							<div className='aboutImageWrapper'>
								<div className='backgroundAbout'></div>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={2}
						speed={0.36}
						style={{ zIndex: -1, marginTop: '-16vw' }}
					>
						<div className='masterImageWrapper'>
							<div className='servicesImageWrapper'>
								<div className='backgroundServices'></div>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={3}
						speed={0.36}
						style={{ zIndex: -1, marginTop: '-32vw' }}
					>
						<div className='masterImageWrapper'>
							<div className='contactImageWrapper'>
								<div className='backgroundContact'></div>
							</div>
						</div>
					</ParallaxLayer>
				</div>
			</Parallax>
		)
	}
}

export default App
