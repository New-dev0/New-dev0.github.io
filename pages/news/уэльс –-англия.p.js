import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Уэльс – Англия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Уэльс – Англия"/>
        <meta name="description" content="Trending News about Уэльс – Англия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Уэльс – Англия</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/d/bd/4910789.jpg" alt="Уэльс – Англия"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/article-4910789-uels-angliya-0-3-obzor-matcha-3-go-tura-chempionata-mira-po-futbolu-v-katare-goly-chm-2022-29-noyabrya-2022-goda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сборная Англии просто уничтожила Уэльс. Самое страшное ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnDRxmrs14tQ3jK3yeh5yEbYayV-7pOY6dyZzw8I1e1iIPaNiHYPt06xPHaTu9sT-NJJ_vUTP-" alt="Сборная Англии просто уничтожила Уэльс. Самое страшное ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уэльс — Англия — 0:3, обзор матча 3-го тура чемпионата мира по футболу в Катаре, голы, ЧМ-2022, 29 ноября 2022 года &middot; 30 ноября 2022 &middot; 20:31. Австралийцы&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/uels-angliya-0-3-video-obzor-goly-chempionat-mira-29-noyabrya-2022-goda-2005349/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс — Англия: видеообзор матча ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4LCHBaXjWruK12pdNCBGtR-D7D7SJT4oJ1uPDeIdTvbTtWB07GnDKgQvXQ0hw7sm0sM26L_82" alt="Уэльс — Англия: видеообзор матча ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Англии переиграла Уэльс в матче 3-го тура группового турнира чемпионата мира-2022.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1733029_Uels__Anglija_gde_smotret_onlajn_matcha_29_nojabra_chempionat_mira_po_futbolu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс — Англия: где смотреть онлайн матча 29 ноября ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSob6hfKnFZty4QsMRkFAD8q2YoXPCY2ieRx6Bmjpwf6g6j51ayRnXvR-p3nLrFm0ULE9xR4Iw_" alt="Уэльс — Англия: где смотреть онлайн матча 29 ноября ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча третьего тура группового этапа чемпионата мира по футболу между командами Уэльса и Англии пройдет во вторник, 29 ноября.</p></div>
            </div>
        </a><a href='https://www.sports.ru/tribuna/blogs/londoneye/3097815.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сегодня Англия и Уэльс могут выкинуть друг друга с ЧМ. А ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQu4smaVsDsWKVpihR59x5w546Wv7DVvYFIaC7oyqPBjf0ZmLzGQmfpCrrx566Jmo9_8mPL4Lwc" alt="Сегодня Англия и Уэльс могут выкинуть друг друга с ЧМ. А ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Здесь пока ничего нет. Пост написан пользователем Sports.ru. Создайте свой блог на Трибуне, выскажитесь и станьте суперзвездой Sports.ru. Создать блог&nbsp;...</p></div>
            </div>
        </a><a href='https://matchtv.ru/football/chempionat_mira/matchtvnews_NI1733598_Uels__Anglija_obzor_matcha_ChM_2022_po_futbolu_29_nojabra_smotret_goly_i_luchshije_momenty'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс — Англия: обзор матча ЧМ-2022 по футболу 29 ноября ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_98MI7WjcT1ip5B2j17YATdXQGFSk1ySN5Djx0xoqtCAbeYabJ06dFOFAAzpfDwqX2o4_4ogB" alt="Уэльс — Англия: обзор матча ЧМ-2022 по футболу 29 ноября ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Англии одержала победу над командой Уэльса в матче третьего тура группового этапа чемпионата мира 2022 года в Катаре.</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/29/uels-angliya-prognoz-na-match-chempionata-mira-29-noyabrya-ot-olimpbet.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс — Англия: прогноз на матч чемпионата мира 29 ноября от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVBoaw7onxrthrxjKB6sBJ1hF01jZlZAWdWSodZt7ypk-Kk-QllNuPJsCBWzJgV8DU7Bnifv3Q" alt="Уэльс — Англия: прогноз на матч чемпионата мира 29 ноября от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поставить на победу Англии с форой (-1,5) в Olimpbet можно за 2.31. Без основного вратаря оборона Уэльса будет слабее, чем раньше. Англичане воспользуются&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}