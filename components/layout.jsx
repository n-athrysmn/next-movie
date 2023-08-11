import Header from './header'
import Footer from './footer'

const Layout = ({ children, title, bottom }) => {
	return (
		<div>
			<Header title={title} bottom={bottom} />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
