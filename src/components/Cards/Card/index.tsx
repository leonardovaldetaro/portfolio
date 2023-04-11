import Styles from './Card.module.scss';
import CardsInfo from 'data/cardsInfo.json';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

type Props = typeof CardsInfo[0];

export default function Card (props: Props) {
    const {photo, category, description, title} = props;
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className={Styles.card}>
                <img src={photo} alt="Imagem" className={Styles.card__img} />

                <h2 className={Styles.card__title}>{title}</h2>

                <h3 className={classNames({
                    [Styles.card__tag]: true,
                    [Styles[`card__tag__${category.label.toLowerCase()}`]]: true,
                })}
                >
                    {category.label}
                </h3>
                <p className={Styles.card__descricao}>{description} </p>
            </SwiperSlide>
        </Swiper>
    );
}