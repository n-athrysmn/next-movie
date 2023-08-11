import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import styles from '../styles/Header.module.scss'
import { useRouter } from 'next/router'

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false)
	const router = useRouter()

	const handleClick = () => {
		setIsClicked(!isClicked)
	}

	return (
		<div className={styles.navbar}>
			<span>
				<h4 className={styles.logo}>PCariMovie</h4>
			</span>
			<span className={styles.toggler}>
				<span onClick={handleClick}>
					{isClicked ? <FaTimes /> : <FaBars />}
				</span>
			</span>
			<ul className={`${styles.menu} ${isClicked ? styles.active : ''}`}>
				<li
					className={`${styles.nav} ${
						router.pathname == '/' ? styles.active : ''
					}`}
				>
					<Link href='/'>Home</Link>
				</li>
				<li
					className={`${styles.nav} ${
						router.pathname == '/movies' ? styles.active : ''
					}`}
				>
					<Link href='/movies'>Movies</Link>
				</li>
				<li
					className={`${styles.nav} ${
						router.pathname == '/theatre' ? styles.active : ''
					}`}
				>
					<Link href='/theatre'>TV Shows</Link>
				</li>
				<li className={styles.nav}>
					<Link href='/test'>Video</Link>
				</li>
				<li className={styles.nav}>
					<Link href='/test'>FAQ</Link>
				</li>
				<li className={styles.nav}>
					<Link href='/test'>Pricing</Link>
				</li>
				<li className={styles.nav}>
					<Link href='/test'>Contact Us</Link>
				</li>
			</ul>
			<ul className={styles.menu1}>
				<li>
					<FaSearch />
				</li>
				<li className={styles.avatar}></li>
				<li>John Glich</li>
			</ul>
		</div>
	)
}

export default Navbar
