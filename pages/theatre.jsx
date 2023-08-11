import Cards from '../components/card'
import Dummy from '../components/dummy'
import Layout from '../components/layout'
import styles from '../styles/Search.module.scss'

const Theatre = () => {
	const title = 'Search theatre here'
	const bottom = (
		<div className={styles.input}>
			<form>
				<input
					type='text'
					placeholder='Enter theatre name'
					className={styles.input}
				/>
				<input type='date' />
				<input type='date' />
				<button>Search</button>
			</form>
		</div>
	)

	return (
		<Layout title={title} bottom={bottom}>
			<div className={styles.container}>
				<div className={styles.toolbar}>
					<div className={styles.left}>
						<h3>Search Results</h3>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.results}>
						{Dummy.map((data, index) => {
							return <Cards key={index} {...data} />
						})}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Theatre
