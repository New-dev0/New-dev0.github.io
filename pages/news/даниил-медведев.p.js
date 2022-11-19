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
            <Image width={800} height={500} src="https://img.championat.com/news2/social/0/d7/4894167.jpg" alt="Даниил Медведев"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/tennis/news-4894167-uzhasno-daniil-medvedev-obyasnil-pochemu-proigral-cicipasu-na-itogovom-turnire-atp.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ужасно». Даниил Медведев объяснил, почему проиграл ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQw5vGItM_UKtsRWQxWAWle0-yTO8-A84xB-eWNJwK6lvKWO8hey9dT73mITYs68xbz7qBL6Ogd" alt="«Ужасно». Даниил Медведев объяснил, почему проиграл ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский теннисист Даниил Медведев рассказал, почему проиграл греку Стефаносу Циципасу во 2-м туре группового турнира Итогового чемпионата ATP.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/tennis/atp/news/daniil-medvedev-prokommentiroval-porazhenie-ot-stefanosa-cicipasa-v-matche-itogovogo-turnira-atp-1999059/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Медведев — о поражении Циципасу: «Мне нужно было лучше ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3aF3Q8sxIDwlphKTi0_e-gjzXafSluhl1OiIXrkQL4YzK-ozf94jsrhkZwc_BAenjdaaEDXr6" alt="Медведев — о поражении Циципасу: «Мне нужно было лучше ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский теннисист Даниил Медведев прокомментировал поражение от грека Стефаноса Циципаса в матче групповой стадии Итогового турнира ATP.</p></div>
            </div>
        </a><a href='https://tennis-russia.ru/novosti/daniil-medvedev-ne-vyshel-v-pley-off/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даниил Медведев не вышел в плей-офф - новости ФТР</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLKe76XpZXbLiFdemJgSTyOEBWi98hNqvNgJKgi0ubVMDhZRIBxLgwmRKRG3NqjqEH0q-hREZB" alt="Даниил Медведев не вышел в плей-офф - новости ФТР" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Участники Итогового турнира АТР сезона-2022 в Красной группе сыграли два тура, определен один из полуфиналистов. Вторая четверка провела в Турине по два&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5669228'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Отданные концы</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStYkQEw8Mi0qSxE_e-wPiT4mm00eimYPlhnUBJ1j1zD6MFvfJT9T0CJFSk2HwnvdJq4jxJcpuK" alt="Отданные концы" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Теннисист Даниил Медведев уступил Стефаносу Циципасу и не сыграет в полуфинале Nitto ATP Finals. 1K 2 мин. ... Во втором матче второго тура Красной группы&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Tennis/ATP/spbnews_NI1725263_Medvedev_ustupil_Cicipasu_na_Itogovom_turnire_ATP'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Медведев уступил Циципасу на Итоговом турнире ATP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRF29D2R-DVTvpqt5RJ4n8aftszC8ushnGG0jumC8H-ORPa4kwfFhV-QXqhkF5_8A6HTnbFa7Bs" alt="Медведев уступил Циципасу на Итоговом турнире ATP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Матч продлился 2 часа 24 минуты. Медведев 16 раз подал навылет, но не смог взять ни одного гейма на приеме. В активе Циципаса девять подач навылет и два&nbsp;...</p></div>
            </div>
        </a><a href='https://govoritmoskva.ru/news/340834/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даниил Медведев проиграл Стефаносу Циципасу на итоговом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Даниил Медведев проиграл Стефаносу Циципасу на итоговом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Итог встречи — 3:6, 7:6 (13:11), 6:7 (1:7) в пользу грека.</p></div>
            </div>
        </a>
        </Template></>;
}