import React from 'react'
import { FaPlay } from 'react-icons/fa'
import styles from '../styles/Header.module.scss'

const Banner = ({ title, bottom }) => {
	return (
		<div className={styles.hero}>
			<div className={styles.outer}>
				<div className={styles.inner}>
					<div className={styles.icon}>
						<FaPlay />
					</div>
				</div>
			</div>
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.texts}>{bottom}</div>
			</div>
		</div>
	)
}

export default Banner
