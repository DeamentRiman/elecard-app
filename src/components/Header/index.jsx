import React from "react";
import styles from '../Header/index.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <a href='/#' className={styles.headerLogo}>{null}</a>
            <nav className={styles.headerNav}>
                <a href='/#' className={styles.headerNavItem}>Это</a>
                <a href='/#' className={styles.headerNavItem}>Основное</a>
                <a href='/#' className={styles.headerNavItem}>Меню</a>
                <a href='/#' className={styles.headerNavItem}>В шапке</a>
                <a href='/#' className={styles.headerNavItem}>Страницы</a>
            </nav>
            <div className={styles.headerUser}>
                <div className={styles.headerUserCard}>Войти</div>
                <div className={styles.headerUserBasket}></div>
            </div>
        </header>
    )
}