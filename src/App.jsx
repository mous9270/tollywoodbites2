import React from 'react'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import LocationSection from './components/Location'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import AboutSection from './AboutSection'
const App = () => {
	return(
		<div>
			<LandingPage />
			<AboutSection/>
			<Menu />
			<LocationSection />
			<Gallery />
			<Footer />
		</div>
	)
}

export default App
