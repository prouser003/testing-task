import Link from 'next/link'
import styles from './NavList.module.scss'

interface INavItem {
    title: string;
    to: string;
    id: string;
}

type NavListProps = {
    items: INavItem[]
}

export const NavList = ({items}: NavListProps) => {
    return (
        <ul className={styles['nav-list']}>
            {items.map((item: INavItem) => {
                return (
                    <li className={styles['nav-list__item']}
                        key={item.id}>
                        <Link
                            href={item.to}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};