import Styles from './Cards.module.scss';
import CardsInfo from 'data/cardsInfo.json';
import Card from './Card';



export default function Cards () {
    return (
        <section className={Styles.cardContainer}>
            {CardsInfo.map(item => (
                <Card 
                    key={item.id}
                    {...item}
                />
            ))}
        </section>
    );
}