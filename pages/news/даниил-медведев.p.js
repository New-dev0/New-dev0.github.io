import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Даниил Медведев</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Даниил Медведев"/>
        <meta name="description" content="Trending News about Даниил Медведев" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Даниил Медведев</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/5/2c/4895889.jpg" alt="Даниил Медведев"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/tennis/article-4895889-novak-dzhokovich-daniil-medvedev-onlajn-translyaciya-matcha-na-itogovom-atp-2022-gde-smotret-kogda-setka-raspisanie.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рублёв в битве за полуфинал Итогового обыграл Циципаса! А ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrzD5caDS_BxVqfTCxKRGJt8cemdvNMJ1NskBBIJ8cL_2wIoT-OBtVQGFu74_GTihIpZx0_LcM" alt="Рублёв в битве за полуфинал Итогового обыграл Циципаса! А ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Чемпионат» приглашает всех поклонников спорта на онлайн-трансляцию шестого игрового дня на Итоговом чемпионате ATP — 2022. В пятницу, 18 ноября, на Центральном&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/tennis/atp/reviews/daniil-medvedev-itogi-sezona-2022-i-atp-finals-medvedev-i-dzhokovich-posle-matcha-v-turine-slova-i-reakciya-1999917/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Буду лучше. Просто нет другого выхода». Медведев завершил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTelwAz2znBBt4PWjWw0GqLYtfRKliz2oswMoWc-4YZgE_pdRbKGQ3KVhdptnVnVqEEacxgTmh" alt="«Буду лучше. Просто нет другого выхода». Медведев завершил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Медведев довел серию поражений от соперников из топ-10 до восьми игр, она длится с финала Australian Open. В целом Даниил провел наименее успешный сезон за&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/tennis/1113370490-daniil-medvedev-posle-australian-open-ya-ne-mogu-dostich-bolshogo-rezu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даниил Медведев: «После Australian Open я не могу достичь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXoYld5vGDbLTKlMi9GE7UXx4kzT_vs5v_aIalbg06_KqNEb-9dj6ukcTHmTJPAtlhkAtOaUKH" alt="Даниил Медведев: «После Australian Open я не могу достичь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports.ru - 24 года! Все это время вы — наша главная ценность, поэтому сегодня заголовки на главной заменяются на комментарии. Этот переключатель вернет&nbsp;...</p></div>
            </div>
        </a><a href='https://matchtv.ru/tennis/matchtvnews_NI1725891_Daniil_Medvedev_zajavil_chto_v_matche_s_Dzhokovichem_jemu_ne_khvatilo_motivacii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даниил Медведев заявил, что в матче с Джоковичем ему не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4FVpbWGet6XBpfpFS2kQVvbFCsuG4qr6GhWtUWC5q188NTvXg2S57eXcrsJguIuHhaFNN8jhu" alt="Даниил Медведев заявил, что в матче с Джоковичем ему не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россиянин Даниил Медведев отметил, что в заключительном матче группового этапа Итогового турнира ATP против серба Новака Джоковича ему не хватило мотивации.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Tennis/spbnews_NI1725846_Medvedev_zavershil_vystuplenije_na_Itogovom_turnire_proigrav_Dzhokovichu_v_trehchasovom_matche'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Медведев завершил выступление на Итоговом турнире ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQff1CRiE788E-Ws_dfDOffPNCga9Qpkb5Mx_2e8oE9tq0guQqacA77fWmzLeqe61_4Jb_pHzk4" alt="Медведев завершил выступление на Итоговом турнире ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россиянин Даниил Медведев проиграл сербу Новаку Джоковичу в третьем матче группового этапа Итогового турнира АТР в Турине.</p></div>
            </div>
        </a><a href='https://gotennis.ru/read/news/daniil_medvedev_menya_nelzya_sravnivat_s_dzhokovichem_ili_s_kem-libo_eschyo_iz_bolshoji_trojiki.html?yrwinfo=1668908677759059-16615178579111991811-vla1-4651-vla-l7-balancer-8080-BAL-566'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даниил Медведев: Меня нельзя сравнивать с Джоковичем или с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Даниил Медведев: Меня нельзя сравнивать с Джоковичем или с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пятая ракетка мира Даниил Медведев высказался о поражении от Новака Джоковича в третьем туре групповой стадии Итогового турнира ATP (3/6, 7/6(5), 6/7(2)).</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5678857'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Медведев проиграл Джоковичу на итоговом турнире АТР</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8ad-mP8viUywIHQDbzbB-SrnjLlB7ggzFDbboYhIvmXZfNk5ZbbYvdk6eWJPBV6yNgRpYjP1v" alt="Медведев проиграл Джоковичу на итоговом турнире АТР" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Даниилу Медведеву 26 лет, он находится на пятом место рейтинга АТР. Победитель 15 турниров ATP в одиночном разряде. Новаку Джоковичу 35 лет, он занимает восьмую&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}