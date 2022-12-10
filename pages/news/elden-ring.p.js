import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elden Ring</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elden Ring"/>
        <meta name="description" content="Trending News about Elden Ring" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elden Ring</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/d/35/4922175.jpg" alt="Elden Ring"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/cybersport/news-4922175-dlya-elden-ring-gotovyat-novye-dopolneniya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Для Elden Ring готовят новые дополнения</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVHmfNOgPGpHa9WXYWuMh_XImYKHVLv9D5wCKqWeeQ6FGKVq9APi0U1TQ8mhXIVMcD-IGV1x46" alt="Для Elden Ring готовят новые дополнения" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elden Ring стала главной игрой этого года по версии The Game Awards. Награду вручили автору игры — легендарному геймдизайнеру Хидетаке Миядзаки. В своей&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5708876'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elden Ring стала игрой года на The Game Awards 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTukXMandkuSyIBR6Gmtqufk45hEuxXVZPYAFtz1eLW8teU-_XzFbU3xTQZIWDWyri8DtC5OMF9" alt="Elden Ring стала игрой года на The Game Awards 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ночь на 9 декабря в Лос-Анджелесе прошла церемония награждения в области интерактивных развлечений The Game Awards, на которой лучшей игрой 2022 года была&nbsp;...</p></div>
            </div>
        </a><a href='https://snob.ru/news/elden-ring-stala-igroj-goda-po-versii-game-awards/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elden Ring стала игрой года по версии The Game Awards</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRRvGhrNa0wqjOdyEgTISlOcS9HNBtO4YgqwiryXlrf4DItpDlW2q8afj7DQloMAdYcyiY_pMT" alt="Elden Ring стала игрой года по версии The Game Awards" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elden Ring стала лучшей игрой 2022 года по версии премии The Game Awards. Проект также отметили в номинациях «Лучшая постановка», «Лучший художественный&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sostav.ru/publication/pobediteli-the-game-awards-2022-58043.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elden Ring признали лучшей игрой года на The Game Awards 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrYn1puzveYJuqbyfy6JseiLoHUHgBBSABVa4V_ywnES6XIZcNZO3U-WrvAXeDgzv4d5VGYJ6u" alt="Elden Ring признали лучшей игрой года на The Game Awards 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Церемония награждения ежегодной премии The Game Awards, отмечающей достижения в индустрии компьютерных игр и киберспорта, состоялась в ночь на 9 декабря&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cybersport.ru/tags/dota-2/fly-rad-chto-elden-ring-stala-luchshei-igroi-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fly высказался о победе Elden Ring в номинации Лучшая игра ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJC-Nnb4v4fyoWBQKqncn9cHin2aKLcAd6UFTmbFprUBNUkpDHC6noP9tEMz4fNaSgp34Bj-yr" alt="Fly высказался о победе Elden Ring в номинации Лучшая игра ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Капитан бывшего состава Evil Geniuses по Dota 2 Таль Fly Айзик прокомментировал итоги церемонии The Game Awards 2022. В твиттере он написал, что из грядущих&nbsp;...</p></div>
            </div>
        </a><a href='https://cyber.sports.ru/dota2/1114079117-4ce-elden-ring-byla-priznana-igroj-goda-patch-vyshel-1-08-zashel-zapus.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>4ce: «Elden Ring была признана игрой года. Патч вышел 1.08 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKUC5aRnLYSpyEYxP_OjpIHOfrBuc3b4avQayNTtNd9wSt30Aq7cVWLfx3e6mxtz3LLwNPcq4Y" alt="4ce: «Elden Ring была признана игрой года. Патч вышел 1.08 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4ce сообщил, что столкнулся с проблемам в Elden Ring после того, как она стала игрой года.</p></div>
            </div>
        </a><a href='https://itzine.ru/news/games-news/elden-ring-wins-game-of-the-year.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards: Elden Ring победила в номинации «Игра года»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQh4GbGr_WsFNPjvSzIYB_iz2vOZYj3HSry4IrgOgKgWCxva3_bNogwFXx77e8iDAm5LEzjd8bL" alt="The Game Awards: Elden Ring победила в номинации «Игра года»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elden Ring получила главный приз The Game Awards 2022, где получила несколько наград, в том числе заветную «Игру года».</p></div>
            </div>
        </a>
        </Template></>;
}