import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тюлени Каспийского моря</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тюлени Каспийского моря"/>
        <meta name="description" content="Trending News about Тюлени Каспийского моря" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тюлени Каспийского моря</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/16CA4/production/_127884339_seal_getty.jpg" alt="Тюлени Каспийского моря"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63853330'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На берегу Каспийского моря в Дагестане обнаружены 2,5 тыс ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9NaO68RSz3K3odMuJzdp-L9e_izbkh0aRu2J1E-JIQ2NM-F0AELcktcXS1lbXH3VW5EWb7pvR" alt="На берегу Каспийского моря в Дагестане обнаружены 2,5 тыс ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Власти Дагестана сообщают, что за последние дни на побережье Каспийского моря обнаружены уже 2,5 тыс. мертвых тюленей (эти животные также известны как&nbsp;...</p></div>
            </div>
        </a><a href='https://www.currenttime.tv/a/poberezhe-kaspiya-dagestan-1700-mertvye-tyuleni/32161186.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На побережье Каспия в Дагестане нашли 1700 мертвых тюленей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZmuomYI3NBccVLy8Zzd42dU01EukDSiLiPn-7sLQp1hsaJF4QWmktAcERfxrs58_dE9xPJfql" alt="На побережье Каспия в Дагестане нашли 1700 мертвых тюленей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Количество мертвых тюленей, найденных на побережье Каспийского моря в Дагестане, выросло до 1700, сообщает РИА Новости со ссылкой на генерального директора&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/12/04/71868476/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Минприроды Дагестана объяснили, что сотни тюленей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_n2lF8p26AbgN2eOYW9KW61MPTy_2b70Tz2i9gFx3-lyPmBFxRpcstmGiNqvJEPkg7qP-YXF-" alt="В Минприроды Дагестана объяснили, что сотни тюленей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Массовая гибель тюленей в Дагестане не связана с интоксикацией тяжелыми металлами или пестицидами, а вызвана естественными - Происшествия - 4 декабря 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://nashaniva.com/ru/304680'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Каспийском море тысячами гибнут местные тюлени-эндемики</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSRpZzWBHkG-uUAoG8Mud9_DRIsgK92aT-ayPFbIdUImF49M1FhPpPA_KHVrWTWLEL6jsPwGSwz" alt="В Каспийском море тысячами гибнут местные тюлени-эндемики" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Каспийская нерпа — эндемик и единственный вид морских млекопитающих, обитающий в Каспийском море и играющий уникальную роль в морской экосистеме. Nashaniva.com.</p></div>
            </div>
        </a><a href='https://centralasia.media/news:1829863'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Количество погибших тюленей на побережье Каспийского моря ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWAeQRQnLg_i4xn-x_bX0MgvCH7Oe5scciVGm8S4plrw7doGiDEVEfRfUgzFjILFX2gmNAD5az" alt="Количество погибших тюленей на побережье Каспийского моря ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Количество погибших тюленей на побережье Каспийского моря в Дагестане выросло до 1,7 тыс. Об этом сообщает РИА Новости со ссылкой на гендиректора&nbsp;...</p></div>
            </div>
        </a><a href='https://argumenti.ru/society/nature/2022/12/802270'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Каспийский природоохранный центр: Около 1700 мертвых ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Каспийский природоохранный центр: Около 1700 мертвых ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Количество погибших тюленей на побережье Каспийского моря в Дагестане достигло 1700 особей. Об этом РИА Новости заявил генеральный директор Каспийского&nbsp;...</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-12-04/833355-chislo-vybroshennyh-na-bereg-kaspijskogo-morya-mertvyh-tyulenej-vozroslo-do-1700/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Число выброшенных на берег Каспийского моря мертвых ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRkGLU3e7UBxYWoOePGivOQeVoloieTge4fl9MLGznp2rwVoI8fMFqgKoFWEY0_jAT1hVzfjjId" alt="Число выброшенных на берег Каспийского моря мертвых ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Порядка 1,7 тыс. мертвых тюленей обнаружено на побережье Каспийского моря в Дагестане. Ранее их число составляло порядка 700 туш, однако за короткий срок&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}