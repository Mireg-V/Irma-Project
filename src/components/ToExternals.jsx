import React from 'react'
import config from '../config';
import styles from './ToExternals.module.css'

export default function ToExternals({ isExternalsOpened, toggleExternals }) {
	return (
		<>
			<div className={`${styles.wrapper} ${isExternalsOpened && styles.active}`}>
				<div className={styles.panel}>
					<p>{config.contactUs}</p>
					<ExternalLink type="tel" />
					<ExternalLink type="whatsapp" />
					<ExternalLink type="viber" />
					<ExternalLink type="telegram" />
				</div>
			</div>
			<button onClick={toggleExternals} className={styles.toggleExternals}>
				<img src={""} height={40} width={40} />
			</button>
		</>
	);
}; 