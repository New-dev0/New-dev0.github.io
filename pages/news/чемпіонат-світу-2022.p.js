import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Чемпіонат світу 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Чемпіонат світу 2022"/>
        <meta name="description" content="Trending News about Чемпіонат світу 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Чемпіонат світу 2022</h1>
            <Image width={800} height={500} src="" alt="Чемпіонат світу 2022"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/320686-cs-2022-z-futbolu-na-suspilne-sport-ak-divitisa-matci-prami-translacii-studii-ta-usa-klucova-informacia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧС-2022 з футболу на Суспільне Спорт: як дивитися матчі, прямі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDLMbdylPGZiD76RRP6cXIGPmmjaA06EN0tc6HNBzRN-E1uFPO8BIjowR1T5zZL4AoXMP45UOz" alt="ЧС-2022 з футболу на Суспільне Спорт: як дивитися матчі, прямі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Трансляції чемпіонату світу 2022 з футболу на Суспільне Спорт: як дивитися матчі, хто коментуватиме матчі, хто буде ведучим у студії&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/SPORT/vidbulasja-tseremonija-vidkrittja-chempionatu-svitu-2022-z-futbolu-u-katari.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Відбулася церемонія відкриття чемпіонату світу-2022 з футболу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNv7dbLJrH48yt-F1t4Q0evpyEyhrQDDYIbpSW4zLBpDIbamMkpmvaxfBqG6cywBA_PKYZGpT8" alt="Відбулася церемонія відкриття чемпіонату світу-2022 з футболу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мундіаль відкрили виступи Джонгука з групи BTS та Моргана Фрімена. Відбулася церемонія відкриття чемпіонату світу-2022 з футболу в Катарі.</p></div>
            </div>
        </a><a href='https://tsn.ua/prosport/zbirna-kataru-vstanovila-istorichne-antidosyagnennya-u-startovomu-matchi-chempionatu-svitu-2022-2205973.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Збірна Катару встановила історичне антидосягнення у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTr6xSc1UokSGGdaYM48YFPjED3frIX6_PUvwHWY3d6VP6__l_fNesrHftndBGXSz7gM5PCV8QE" alt="Збірна Катару встановила історичне антидосягнення у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У неділю, 20 листопада, Еквадор обіграв Катар у першому поєдинку чемпіонату світу-2022 з футболу. Ніколи раніше команда-господарка не програвала&nbsp;...</p></div>
            </div>
        </a><a href='https://vgolos.ua/news/chempionat-svitu-z-futbolu--2022-rozklad-matchiv-ta-de-divitis-translyaciyi_1430210.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чемпіонат світу з футболу– 2022: розклад матчів та де дивитись ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKgh7pW__Xq0-Zts9HWO23iIQKztCIpgWdrQqYCNOdCt8NPlvlXajo7n74_x5bZcwycai74rT_" alt="Чемпіонат світу з футболу– 2022: розклад матчів та де дивитись ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>22-й чемпіонат світу пройде в Катарі з 20 листопада до 18 грудня. Вперше в історії мундіаль буде проходити на Близькому Сході.</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/chempionat-svitu-2022-pidsumki-igrovogo-dnya-20-listopada_n2201768'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Підсумки першого дня ЧС-2022: неготовність Катара, герой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZHV6MajIYuxeSLs6V1AR6AwToNLu3vF4ijkGkn_VaMWEwmL9t5AWhiiND1AEitatMo2wNeMmX" alt="Підсумки першого дня ЧС-2022: неготовність Катара, герой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Підсумки першого ігрового дня на чемпіонаті світу 2022. 20 листопада Еквадор обіграв Катар завдяки дублю форварда Еннера Валенсії - Новини спорту.</p></div>
            </div>
        </a><a href='https://champion.com.ua/wc2022/2022/11/20/910498/chempionat-svitu-2022-rozklad-kalendar-rezultaty-turnirna-tablytsya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чемпіонат світу-2022: розклад, календар, результати, турнірна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRMDhyAzN1PLV12mfsFsD05jijC7yE4n91qWRDAuJkPXxc9sJW-8cerbby3pzBWEv50tZyntJ-" alt="Чемпіонат світу-2022: розклад, календар, результати, турнірна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Фінальна стадія 22-го чемпіонату світу з футболу ФІФА відбудеться в Катарі з 20 листопада по 18 грудня. 32 команди, які подолали відбірковий турнір&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}