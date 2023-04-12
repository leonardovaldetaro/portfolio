import  "react-responsive-carousel/lib/styles/carousel.min.css";
import  {  Carousel  }  from  'react-responsive-carousel' ;
import Styles from './Carrossel.module.scss';
import CardsInfo from 'data/cardsInfo.json';
import Card from "components/Cards/Card";


export default function Carrossel () {
    return (
        <Carousel>
            {CardsInfo.map(item => (
                <Card 
                    key={item.id}
                    {...item}
                />
            ))}
        </Carousel>
    );
}