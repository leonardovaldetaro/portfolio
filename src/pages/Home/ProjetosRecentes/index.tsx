import Cards from 'components/Cards';
import Styles from './ProjetosRecentes.module.scss';

export default function ProjetosRecentes () {
    return (
        <section className={Styles.recentes}>
            <h2 className={Styles.recentes__titulo}>Projetos Recentes</h2>
            <Cards />
        </section>
    );
}