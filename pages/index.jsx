import Cards from '../components/card'
import Dummy from '../components/dummy'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

const Home = () => {
	const title = 'Find your next movie here'
	const bottom = (
		<p>
			Explore our gallery full of exciting films from all around the globe{' '}
			<br />
			only your entertainments. No hidden charges or disturbing ads.
		</p>
	)
	const topData = Dummy.slice(0, 2)
	const bottomData = Dummy.slice(2, 5)

	return (
		<Layout title={title} bottom={bottom}>
			<div className={styles.container}>
				<div className={styles.toolbar}>
					<div>
						<h3 className={styles.left}>New Releases</h3>
					</div>
					<div>
						<h5 className={styles.right}>View More</h5>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.top}>
						{topData.map((data, index) => {
							return <Cards key={index} {...data} />
						})}
					</div>
					<div className={styles.others}>
						{bottomData.map((data, index) => {
							return <Cards key={index} {...data} />
						})}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Home
