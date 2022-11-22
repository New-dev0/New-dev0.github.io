import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ева Мендес</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ева Мендес"/>
        <meta name="description" content="Trending News about Ева Мендес" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ева Мендес</h1>
            <Image width={800} height={500} src="https://n1s2.hsmedia.ru/cc/5b/1a/cc5b1aaec0200dd19035f63df1f9b472/1200x629_0xac120003_17886487061669006728.png" alt="Ева Мендес"/>
            <h3>Recent News</h3>
            <a href='https://www.elle.ru/celebrities/novosty/eva-mendes-sluchaino-proboltalas-o-svoei-sekretnoi-svadby-s-raianom-goslingom/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ева Мендес случайно проболталась о своей секретной свадьбе ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQABjaOUuaH-iG1_y5aHzaIHq0WCqH0wj3uiUoB6HKwCZIYwOGRZUmpxaSacBu6DRbTWaKBizkt" alt="Ева Мендес случайно проболталась о своей секретной свадьбе ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Это уже второе личное признание актрисы за минувший месяц | ELLE.</p></div>
            </div>
        </a><a href='https://medialeaks.ru/2111ndi-str-shw-mendes-gosling/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Почему она, а не я». В Сети нашли доказательства тайной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmG-fQGpcC81bgJ1-3aRe-vBZAVu5v9MbRPD42kHp6RkC2ExQ3ms8s1OVabpplAV2FIUjRt5Ct" alt="«Почему она, а не я». В Сети нашли доказательства тайной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Артистка, выросшая в семье кубинцев, опубликовала в инстаграме* фото запястья, на котором можно разглядеть татуировку в честь партнёра — надпись «de Gosling».</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/513375'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Райан Гослинг женился на актрисе Еве Мендес</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Райан Гослинг женился на актрисе Еве Мендес" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Недавно папарацци заметили, что на руке 48-летней Евы Мендес появилась татуировка de Gosling (так замужние испанские женщины добавляют фамилию супруга к своей).</p></div>
            </div>
        </a><a href='https://www.elle.ru/moda/zvezdny-stil/seksualnost-eto-osoboe-sostoyanie-eva-mendes-v-prostoi-beloi-rubashke-i-v-obtyagivayushikh-bryukakh-gulyaet-po-gorodu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сексуальность — это особое состояние: Ева Мендес в простой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtX3ugzg-bdOW4v-DEH60cBw0-XYu18s7Th4dbmREChaCEvAuEPT2Mx9H191WtvYfatkC44c3q" alt="Сексуальность — это особое состояние: Ева Мендес в простой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>48-летняя актриса учит выглядеть притягательно в самых простых вещах. В чем ее магия? | ELLE.</p></div>
            </div>
        </a><a href='https://info.sibnet.ru/article/629487/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ева Мендес и Райан Гослинг поженились</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTYrh-FsHv8AzUJT4AJE3XZRmxef6D3E3rpE7HS8lWWnxQ0s55GUsj1qDWLa3nvsBNtRL-a79y" alt="Ева Мендес и Райан Гослинг поженились" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В телешоу «Today» Мендес рассказывала о поездке в Австралию и, говоря о Гослинге, назвала его своим мужем.</p></div>
            </div>
        </a><a href='https://super.ru/a/gosling_married'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Райан Гослинг и Ева Мендес сыграли тайную свадьбу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNaowc-yTnJ5dDU4dKZD6CzhIpWKFoAqmt_8dIz5vjlqb2QLt-KUa2XAoBsm1FoxC5T4BQ8IJc" alt="Райан Гослинг и Ева Мендес сыграли тайную свадьбу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сейчас звездная пара находится в Австралии: Райан Гослинг снимается в проекте «Падший парень», а Ева Мендес занимается благотворительной деятельностью.</p></div>
            </div>
        </a><a href='https://kino.24tv.ua/ru/rajan-gosling-eva-mendel-pozhenilis-chto-izvestno-ob-otnoshenijah_n2202310'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>После 11 лет отношений: актеры Райан Гослинг и Ева Мендес ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrm9TxscIz8RdA7RQExaWIjYd28tll5UgWmsIGCZkRnCQ0tYWp5xjxS76Om9WtUpJLHMSCMTCx" alt="После 11 лет отношений: актеры Райан Гослинг и Ева Мендес ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Канадский актер Райан Гослинг и голливудская актриса Ева Мендес поженились. Звездная пара, встречавшаяся 11 лет, держала это известие в секрете.</p></div>
            </div>
        </a><a href='https://www.sb.by/articles/aktery-rayan-gosling-i-eva-mendes-tayno-pozhenilis.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актеры Райан Гослинг и Ева Мендес тайно поженились</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqn5opKaHkWHM0HsOffXwRpgb4WqJSxNyUb9L01WslHr0Jhg4Nctg1cw9G39iWROZbf-msAxf2" alt="Актеры Райан Гослинг и Ева Мендес тайно поженились" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Звездная пара Райан Гослинг и Ева Мендес вместе с 2012 года. У знаменитостей даже двое общих детей, однако на протяжении 10 лет актеры расписаны...</p></div>
            </div>
        </a>
        </Template></>;
}