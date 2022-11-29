import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Менингит</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Менингит"/>
        <meta name="description" content="Trending News about Менингит" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Менингит</h1>
            <Image width={800} height={500} src="https://n1s2.hsmedia.ru/65/8f/30/658f30e2a7cad05848989512c195ba00/1200x630_0xac120003_1579100741669634292.png" alt="Менингит"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5693629'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>11 сотрудников Ozon госпитализированы в Московской области ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="11 сотрудников Ozon госпитализированы в Московской области ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Московской области госпитализированы 11 сотрудников складского комплекса маркетплейса Ozon с подозрением на инфекционный менингит.</p></div>
            </div>
        </a><a href='https://www.starhit.ru/life/v-podmoskove-bolee-30-sotrudnikov-sklada-ozon-gospitalizirovany-iz-obshezhitiya-s-meningitom-851685/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Подмосковье более 30 сотрудников склада Ozon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQo-U2cBdtHVXVgcjjlBQEm5C7NkaiS_TIw_FXgLPmePpkM9drTbIS9NX9E6hbIo7HDxBjR6kgW" alt="В Подмосковье более 30 сотрудников склада Ozon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несколько дней назад у работников Ozon повысилась температура, началась головная боль и появился кашель. Заболевшие обратились в больницу,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.miloserdie.ru/news/o-vspyshke-meningita-na-sklade-ozon-v-podmoskove-soobshhili-v-seti-desyatki-lyudej-gospitalizirovany/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>О вспышке менингита на складе Ozon в Подмосковье сообщили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXclBThIvsWhA-CWxs7ZDXle0TygdTfFWXy1ZlDy_iahAFS8xfkR5YEO8MkTb642kEAR9OJIgu" alt="О вспышке менингита на складе Ozon в Подмосковье сообщили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дополнение: позже в пресс-службе Ozon сообщили &quot;Милосердию.ru&quot;, что массового заболевания работников нет - менингитом заразились несколько сотрудников&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1542050'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Врач Звонков: Причиной вспышки менингита на складе Ozon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1hEBNQgdl23Q55NnBeiP3dc9x_RvlW4Elzntnd42ZGE_2nib2CPOvmD9FpRi-qR_L4FKpQU-t" alt="Врач Звонков: Причиной вспышки менингита на складе Ozon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Менингит может быть смертельно опасен, поскольку он ведёт к воспалению оболочек мозга и его отёку. Об этом Лайфу рассказал врач-терапевт Андрей Звонков на&nbsp;...</p></div>
            </div>
        </a><a href='https://newizv.ru/news/society/28-11-2022/v-moskovskoy-oblasti-11-chelovek-gospitalizirovali-s-podozreniem-na-meningit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Московской области 11 человек госпитализировали с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTORuHPiV3Qe6m8OMW7zWTkuL06R8RZye8wUYup6ufOHfCEnVcd8E3IHgZr7Hgkcx7Hp0ZxuLX_" alt="В Московской области 11 человек госпитализировали с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В подмосковном управлении Роспотребнадзора заявили, что 11 человек были госпитализированы с подозрением на инфекционный менингит, перед этим сообщалось о&nbsp;...</p></div>
            </div>
        </a><a href='https://secretmag.ru/news/meningit-vyvel-iz-stroya-30-sotrudnikov-ozon-nekotorye-okazalis-v-reanimacii-28-11-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Менингит вывел из строя 30 сотрудников Ozon. Некоторые ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTluai-n8bMRiw9nY-nb8auUH8AgH85D_PlD6r8fNMRRajkWQEOTIyb6avlxvZU-DOMWWqfutx6" alt="Менингит вывел из строя 30 сотрудников Ozon. Некоторые ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сотрудников подмосковного склада Ozon развезли с менингитом по инфекционным отделениям больниц Красногорска, Дедовска и Истры. Туда уже попали более 30&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/videos/obshchestvo/28112022/525906'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Подмосковье госпитализировали 11 человек с подозрением на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcv4iut3eBQFs1hPcx16qzqpN3rPMhG8iktz0wEJdkyOnhA9XbwuxHGiLOEYbulm_DedAymKdF" alt="В Подмосковье госпитализировали 11 человек с подозрением на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заболевание было выявлено у сотрудников склада Ozon в Истре, а также у тех, кто с ними контактировал.</p></div>
            </div>
        </a>
        </Template></>;
}