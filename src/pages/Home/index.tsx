import Styles from './Home.module.scss';
import ImageTopo from 'assets/imagem-principal-cover.jpg';
import ProjetosRecentes from './ProjetosRecentes';
import Carrossel from 'components/carrossel';

export default function Home () {
    return (
        <>
            <section className={Styles.home}>
                <div className={Styles.container}>
                    <h2 className={Styles.container__name}>
                        Leonardo Valdetaro
                    </h2>
                    <h1 className={Styles.container__title}>
                        Desenvolvedor Front-end,<br /> Designer digital.
                    </h1>
                </div>
                <img src={ImageTopo} alt="imagem topo" className={Styles.home__img} />
                <div className={Styles.home__divider}></div>
                <ProjetosRecentes />
            </section>
        </>
    );
}