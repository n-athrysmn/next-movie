import { useState } from 'react'
import Cards from '../components/card'
import Layout from '../components/layout'
import styles from '../styles/Search.module.scss'
import axios from 'axios'

const Movies = () => {
	const title = 'Search your movie here'

	const [genreData, setGenreData] = useState([])
	const [searched, setSearched] = useState(false) // Track if search was performed
	const [error, setError] = useState(null) // State to hold error

	const fetchGenreData = (e) => {
		e.preventDefault()
		axios
			.get(
				`https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/genre?genre=comedy`
			)
			.then((response) => {
				setGenreData(response.data)
				setSearched(true)
				setError(null)
			})
			.catch((error) => {
				console.error('Error fetching genre data:', error)
				setSearched(true)
				setError('An error occurred while fetching data.') // Set error message
			})
	}

	const bottom = (
		<div className={styles.input}>
			<form>
				<input type='text' placeholder='Enter movie genre' />
				<input type='date' />
				<button onClick={fetchGenreData}>Search</button>{' '}
			</form>
		</div>
	)

	return (
		<Layout title={title} bottom={bottom}>
			<div className={styles.container}>
				<div className={styles.toolbar}>
					<div className={styles.left}>
						<h3>{searched ? 'Search Results' : 'No movie found'}</h3>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.results}>
						{searched &&
							(genreData.length > 0 ? (
								genreData.map((data, index) => <Cards key={index} {...data} />)
							) : (
								<p>No results found.</p>
							))}
					</div>
					{error && <p className={styles.error}>{error}</p>}
				</div>
			</div>
		</Layout>
	)
}

export default Movies
