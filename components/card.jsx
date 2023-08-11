import { FaEye, FaRegClock } from 'react-icons/fa'
import styles from '../styles/Cards.module.scss'

const Cards = ({ Genre, Duration, Views, Title }) => {
	return (
		<div className={styles.card}>
			<div className={styles.badge}>{Genre}</div>
			<div className={styles.bottom}>
				<div className={styles.infos}>
					<div className={styles.duration}>
						<FaRegClock /> {Duration}
					</div>
					<div className={styles.views}>
						<FaEye /> {Views}
					</div>
				</div>
				<div className={styles.title}>
					<h4>{Title}</h4>
				</div>
			</div>
		</div>
	)
}

export default Cards
