import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/logotipo-lv.svg';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Header () {
    const rotas = [{
        label: <Logo className={styles.header__img} />,
        to: '/'
    }, {
        label: <span className={styles.header__title}>Leonardo Valdetaro</span>,
        to: '/'
    },
    
    {
        label: 'Portfólio',
        to: '/portfolio',
        
    }, {
        label: 'Sobre',
        to: '/sobre',
        
    }, {
        label: 'Contatos',
        to: '/contatos',
        icon: <MdEmail size={18} color="rgb(32,50,62)" className={styles.icon} />
    }];
    return (
        <header className={styles.header}>    
            
            <nav className={styles.header__navbar}>
                <ul className={styles.header__navbar__list}>
                    {rotas.map((rota, index) => (
                        <li key={index} className={styles.heaer__navbar__item}>
                            <Link to={rota.to}>{rota.label}{rota.icon}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}