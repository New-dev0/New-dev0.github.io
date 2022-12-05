import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кондулайнен</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кондулайнен"/>
        <meta name="description" content="Trending News about Кондулайнен" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кондулайнен</h1>
            <Image width={800} height={500} src="https://s2.cdn.eg.ru/wp-content/uploads/2022/06/elena-kondulaynen112829-1024x512.jpg" alt="Кондулайнен"/>
            <h3>Recent News</h3>
            <a href='https://www.eg.ru/showbusiness/2802892-sostoyanie-kondulaynen-ujasaet-vrachey/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Предвестник смерти: состояние пережившей инсульт Елены ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSd4nxLGXYNP9A9iXp7bmB72kg4QsipeMFrRUT-bBHIx6Hogi08gj02IkU7K2llNin9Fr4UMzte" alt="Предвестник смерти: состояние пережившей инсульт Елены ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Медики бьют тревогу из-за состояния актрисы. Если Кондулайнен не изменит образ жизни, ей грозит преждевременный уход.</p></div>
            </div>
        </a><a href='https://vm.ru/news/1016135-nevrolog-soobshil-o-smertelnoj-opasnosti-stremitelnoj-poteri-vesa-dlya-kondulajnen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Невролог сообщил о смертельной опасности стремительной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRH-fAhbudjZlejwXjVnb_FVlAutSKBVr2ZLJWJsmj1SW0ndUwSMwXwhmUvv9VbdhHb2dXGNXYi" alt="Невролог сообщил о смертельной опасности стремительной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>После пережитого инсульта актриса Елена Кондулайнен начала стремительно худеть и уже сбросила порядка 20 килограммов. Врач-невролог Павел Хорошев рассказал,&nbsp;...</p></div>
            </div>
        </a><a href='https://sm.news/nevrolog-predupredil-elenu-kondulajnen-chto-poterya-vesa-posle-insulta-mozhet-privesti-k-smerti-71476-u3t5/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Невролог предупредил Кондулайнен о смертельной опасности ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Невролог предупредил Кондулайнен о смертельной опасности ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Невролог Хорошев: резкая потеря веса после инсульта может быть смертельна для Кондулайнен. 4 декабря – ИА SM.News. Недавно известная 64-летняя отечественная&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}