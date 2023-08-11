import styles from '../styles/Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.left}>
				<h3>PCariMovie</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
					impedit aliquid eos totam beatae obcaecati explicabo.
				</p>
			</div>
			<div className={styles.right}>
				<div className={styles.directories}>
					<div>
						<h4>Product</h4>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>
					<div>
						<h4>Media Group</h4>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>
					<div>
						<h4>Sitemap</h4>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>
				</div>
				<div className={styles.info}>
					<div>Product</div>
					<div>Media Group</div>
					<div>Sitemap</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
