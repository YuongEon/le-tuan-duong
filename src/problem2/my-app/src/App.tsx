import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import SwapSection from './components/SwapSection/SwapSection'
import TutorialSection from './components/TutorialSection'

function App() {
	return (
		<main className="bg-bg min-h-[100vh]">
			<div className="container mx-auto">
				<Header />
				<SwapSection />
				<TutorialSection />
				<ContactSection />
			</div>
			<Footer />
		</main>
	)
}

export default App
