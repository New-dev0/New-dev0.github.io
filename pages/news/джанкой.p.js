import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Джанкой</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Джанкой"/>
        <meta name="description" content="Trending News about Джанкой" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Джанкой</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/_/__raketa_zbili_bpla_litak_slid_u_nebi_gettyimages_1235859181_82_1300x820.jpg" alt="Джанкой"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/dzhankoyi-progrimili-vibuhi-mozhliviy-udar-1668636547.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В сети сообщают о взрывах в Джанкое: что известно</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzVZq27ws8D0AG3U4TZhjNnnRK-13-wNsiefgFYSagCJESTfycyBtzPxdXpl7Y8s1cvOH-ti2T" alt="В сети сообщают о взрывах в Джанкое: что известно" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Крыму в оккупированном Джанкое работала российская ПВО, и сообщают в сети об ударе по военному аэродрому 16 ноября.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-suspilstvo/news-u-krimu-bilya-dzhankoya-guchno-pozhezha-na-letovischi-podrobitsi-16-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Крыму возле Джанкоя - громко: подробности - Общество ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-zBwDS2DAOkxbRdlpzAEVYnuk8deKRb7jlHhTInvK-vSKTwYqZSNyRUkJ1QJ0w3XOwGgeKe32" alt="В Крыму возле Джанкоя - громко: подробности - Общество ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>16 ноября у Джанкоя в оккупированном Крыму раздались взрывы. Информация обнародована в ряде информационных каналов. Первые сообщения о взрывах появили.</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/ukraina/2022-11-17/5723086-u-dzhankoi-znovu-prolunav-vibukh-mistsevi-zhiteli-skarzhatsya-na-pereboi-zi-svitlom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Джанкое сильный взрыв: местные жители жалуются на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNxu6IZqYoKndhRtgKASEvZi5Lyt_5n0nIK5eR_j0q0qEVTDzuyRpCr40xMDD_qP3IFES2ywf7" alt="В Джанкое сильный взрыв: местные жители жалуются на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Официальных подтверждений информации пока не поступало, однако в местных пабликов уже пошла информация о работе ПВО, а жители сообщают об отключении света. Судя&nbsp;...</p></div>
            </div>
        </a><a href='https://korrespondent.net/ukraine/4535985-v-okkupyrovannom-dzhankoe-soobschauit-o-vzryvakh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В оккупированном Джанкое сообщают о взрывах</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSU_TrrsdJ1B3eu4pVvyu7_k20yF8q8os0h-BS0JtMLPBSOoBBhFKLLib5R9DO7PGvrjUCfo92T" alt="В оккупированном Джанкое сообщают о взрывах" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В соцсетях распространяется информация о том, что взрывы прогремели в районе аэродрома, где находились десятки единиц техники.</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/krym-bodrstvuet-v-okkupirovannom-dzhankoe-progremeli-vzryvy_n2199419'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крым не спит: в оккупированном Джанкое прогремели взрывы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmg-BRNAY4-DV-FaJzI0pB7QHItOoCNlTdFWY7S2w7bPHUX2V7AU65-pBwisHkk80BmpiDwCJh" alt="Крым не спит: в оккупированном Джанкое прогремели взрывы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В оккупированном Крыму 16 ноября 2022 года раздался взрыв. Сообщают, что хлопок был в Джанкое. Смотрите видео взрыва в Крыму - Новости Украины - 24 канал.</p></div>
            </div>
        </a><a href='http://ukrpohliad.org/news/video-goryt-aerodrom-dzhankoj-v-krymu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Відео: горить аеродром Джанкой в Криму</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSm_XGLvJca-1822hfYMOXp0GT3kGN-yfVgciV9azgjRwool6GK_ckJRdlYJRBrZp6GacQSeoX0" alt="Відео: горить аеродром Джанкой в Криму" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Джанкой. Крим#Крим #Україна #Джанкой pic.twitter.com/gGhS8ETld4 — Матрица Свободы (@ua_myc) November 17, 2022.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ato/vzryvy-v-okkupirovannom-dzhankoe-chto-ob-etom-govoryat-v-vozdushnyh-silah-ukrainy-2204440.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Взрывы в оккупированном Джанкое: что об этом говорят в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5lmLC_SUwNEXb5u10XtxbNtCnZcNxMdPqxCRAvPe1fbf5JnEWFOahXeZMq95MJOgGo_8YLtIo" alt="Взрывы в оккупированном Джанкое: что об этом говорят в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Аэродром в Джанкое является одним из тех, которые используют российские оккупанты, и действительно, вероятно, что там был &quot;хлопок&quot;.</p></div>
            </div>
        </a><a href='https://avia.pro/news/v-krymu-atakovan-aerodrom-v-dzhankoe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Крыму атакован аэродром в Джанкое</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="В Крыму атакован аэродром в Джанкое" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Военный аэродром Джанкой атакован украинскими беспилотниками. Атака произошла сегодня ночью, однако, украинским военным не удалось нанести какой-либо&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}