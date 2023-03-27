import './layout.scss'
import Navbar from '@/components/navbar/navbar.jsx'
import Footer from '@/components/footer/footer.jsx'

function Layout({ children }) {
	return (
		<div className='main__wrapper'>
			<Navbar />
			<section>{children}</section>
			<Footer />
		</div>
	)
}

export default Layout
