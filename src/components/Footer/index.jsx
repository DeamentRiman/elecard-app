import React from "react";
import styles from '../Footer/index.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <a href='/#' className={styles.footerLogo}>{null}</a>
                <nav className={styles.footerNav}>
                    <a href='/#' className={styles.footerNavItem}>Это</a>
                    <a href='/#' className={styles.footerNavItem}>Основное</a>
                    <a href='/#' className={styles.footerNavItem}>Меню</a>
                    <a href='/#' className={styles.footerNavItem}>В подвале</a>
                    <a href='/#' className={styles.footerNavItem}>Страницы</a>
                </nav>
            </div>
        </footer>
    )
}