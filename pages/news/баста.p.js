import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Баста</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Баста"/>
        <meta name="description" content="Trending News about Баста" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Баста</h1>
            <Image width={800} height={500} src="https://img.tsargrad.tv/cache/a/c/Basta.jpg/w1056h594fill.jpg" alt="Баста"/>
            <h3>Recent News</h3>
            <a href='https://tsargrad.tv/news/svo-voenkory-rjep-fraza-basty-smotrim-kino-dalshe-stala-povodom-dlja-skandala_677582'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СВО, военкоры, рэп: Фраза Басты &quot;смотрим кино дальше&quot; стала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDAl2k0PrEXoXJPd951CaBPsLJpI50ARtLjpsYUSbOZCiGjjQ4O7Mc0tRSpjSeTPXETsdYBoDd" alt="СВО, военкоры, рэп: Фраза Басты &quot;смотрим кино дальше&quot; стала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Русские военкоры бурно обсуждают одну-единственную фразу Басты. Она про кино.</p></div>
            </div>
        </a><a href='https://don24.ru/rubric/kultura/palec-na-otsechenie-rostovskiy-reper-basta-vypustil-novyy-albom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Палец на отсечение»: ростовский рэпер Баста выпустил новый ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Палец на отсечение»: ростовский рэпер Баста выпустил новый ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ростовская область, 3 декабря 2022. DON24.RU. Уроженец Ростова-на-Дону Василий Вакуленко, известный как рэпер Баста, представил новый альбом.</p></div>
            </div>
        </a><a href='https://tvmag.ru/article/canals/2022-12-02-pervyy-kanal-pokazhet-televersiyu-grandioznogo-solnika-basty-v-luzhnikakh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Концерт Басты в Лужниках (18.06.2022) на Первом канале ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-gXRB4uAgROiRTk1eVtXhVVwTnzE-UAc1t5BF7-z3m2avmM0x3QTKVBFj64GdnM_Z98aipuSV" alt="Концерт Басты в Лужниках (18.06.2022) на Первом канале ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В пятницу, 2 декабря, Первый канал представит телеверсию масштабного сольника рэпера Басты, прошедшего на спортивной арене «Лужники» в июне 2022 года.</p></div>
            </div>
        </a><a href='https://www.sb.by/articles/eto-staraya-i-tvorcheskaya-druzhba-basta-ob-otnosheniyakh-s-gufom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Это старая творческая дружба»: Баста об отношениях с Гуфом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2S60CJ3-_hGK5_A05m96MK_GmO8Gt5lkgy_kLZMerH8zC6H6BgYQ3-CevMj_IdiQ5TbmINzsM" alt="«Это старая творческая дружба»: Баста об отношениях с Гуфом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Басту (Василия Вакуленко) и Гуфа (Алексея Долматова) называют легендами русского рэпа. Несколько лет назад между музыкантами был конфликт. В...</p></div>
            </div>
        </a><a href='https://informing.ru/2022/12/03/svo-voenkory-rjep-fraza-basty-smotrim-kino-dalshe-stala-povodom-dlja-gromkogo-skandala.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рэпер Баста сильно разозлил российских военкоров одной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR571uvhEQt-XMUOrxq2kTM9dZtvmybVONdaRtB8RyOgnDfs3dTz1gOQqa20CkrkOLxpsuUH4NN" alt="Рэпер Баста сильно разозлил российских военкоров одной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Русские военкоры и просто патриоты бурно обсуждают фразу Басты про кино. Рэпер (настоящее имя которого Василий Вакуленко) документальный фильм про себя,&nbsp;...</p></div>
            </div>
        </a><a href='https://dni24.com/exclusive/374227-basta-vozmutil-rossijskih-voenkorov-frazoj-o-kino.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Баста возмутил российских военкоров фразой о «кино ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAgFdMuLTooi_kvkFEIwefCBb41xp3mrkTK3GKAdzE1KFsHBcdZusileY1Wh07v3QF7GSVlINA" alt="Баста возмутил российских военкоров фразой о «кино ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рэпер Баста фразой о «кино» вызвал недовольство и возмущение у некоторых российских военкоров. Таким образом артист отреагировал на ситуацию в РФ и мире.</p></div>
            </div>
        </a>
        </Template></>;
}