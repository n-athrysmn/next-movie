import '../styles/globals.scss'
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
	return (
		<main className={dm_sans.className}>
			<Component {...pageProps} />
		</main>
	)
}

export default MyApp
