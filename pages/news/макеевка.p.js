import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Макеевка</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Макеевка"/>
        <meta name="description" content="Trending News about Макеевка" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Макеевка</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/v/_viyskovi_zhinka_tank_gettyimages_1244536642_1300x820.jpg" alt="Макеевка"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/minoboroni-pidtverdilo-zvilnennya-makiyivki-1668604450.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минобороны подтвердило освобождение Макеевки в Луганской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJEDbD4bVP3Tqot7vY8rlTOGT_43Ykw_ViVbeb4J_v5oUxLq7-rVum8AjwMCMDvBfLPkuBvSAL" alt="Минобороны подтвердило освобождение Макеевки в Луганской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Минобороны подтвердили, что ВСУ освободили село Макеевка Луганской области. Военные показали кадры из разрушенного села.</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/v-minoborony-podtverdili-uvolnenie-makeevki-karta.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Минобороны подтвердили освобождение Макеевки: карта</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQK3ZMU3D3Dh18E95E8hhLw2LPx2mO_LW0hOARTOvysFJOaDdsIUOe29L5r-bsmlCMxUnI2gtDY" alt="В Минобороны подтвердили освобождение Макеевки: карта" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В населенном пункте не осталось ни одного уцелевшего дома. В Минобороны подтвердили освобождение Макеевки: карта. © Getty Images.</p></div>
            </div>
        </a><a href='https://nv.ua/ukraine/events/makeevka-posle-osvobozhdeniya-razbita-i-zavalena-trupami-okkupantov-novosti-ukrainy-50284440.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Разбита и завалена телами оккупантов: Гайдай показал, как ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuKCA8MhiMDxD2di4-eEO5Gl30yCaYDCZ8J16_oeZpZTNOMvQYe7iEvbNGmS7FjSJDRij5w6n9" alt="Разбита и завалена телами оккупантов: Гайдай показал, как ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сергей Гайдай показал, как выглядит Макеевка после освобождения — населенный пункт разбит и завален трупами оккупантов.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ukrayina/razbita-i-zavalena-trupami-okkupantov-kak-vyglyadit-nedavno-osvobozhdennaya-makeevka-v-luganskoy-oblasti-2202919.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Разбита и завалена трупами оккупантов: как выглядит недавно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZcEunZLbBaMuu6cVirUURoZxywywdcW1aFtmxvgXjBnwwttORb6Zku1kuxuNT0qdyOfDiJ0xO" alt="Разбита и завалена трупами оккупантов: как выглядит недавно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ВСУ освободили Макеевку, но враг продолжает обстрелы населенного пункта. Силы обороны Украины на днях освободили от российских оккупантов населенный пункт&nbsp;...</p></div>
            </div>
        </a><a href='https://prm.ua/ru/razbyta-y-zavalena-trupamy-rashystov-kak-v-hliadyt-nedavno-osvobozhdennaia-makeevka-v-luhanskoy-oblasty/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Разбита и завалена трупами рашистов&quot;: как выглядит недавно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1EhuWdAGZPGsAT9bDX1Nm-3sTtUHP2ETCYISLyECVV6KlBe8JNjtyfXIcDYMt_AXQAV90VBO3" alt="&quot;Разбита и завалена трупами рашистов&quot;: как выглядит недавно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Недавно украинские защитники освободили поселок Макеевка в Луганской области, несмотря на то, что поселок пуст, россияне продолжают постоянные обстрелы.</p></div>
            </div>
        </a><a href='https://www.unian.net/war/viyna-v-ukrajini-zsu-zvilnili-makijivku-na-luganshchini-minoboroni-video-12047502.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ освободили Макеевку на Луганщине - Минобороны (видео)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTW-KxYALFnlZHY0tup16ReVk75zXi7VLjtbJH_kN1ikacQ7kUPMJqeUGrjxWkngp30nWUGaoVr" alt="ВСУ освободили Макеевку на Луганщине - Минобороны (видео)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинские военные освободили село Макеевка Луганской области. Министерство обороны Украины показало видео с деоккупированного населенного пункта.</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/uvolennaja-makeevka-v-luganskoj-oblasti-minoborony-pokazalo-video-24-kanal_n2199277'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Село разбито россиянами: показали видео из освобожденной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFOgX3EaGUO8ozO4OsclDUNotcLB3Sl73YpLn4sScEMXvLCEzuHxqbEonXdgFlQKpWZ-lpfxzE" alt="Село разбито россиянами: показали видео из освобожденной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ВСУ уволили Макеевку в Луганской области. Село полностью разбито россиянами, нет уцелевших домов - в Минобороны показали видео 16 ноября 2022 - 24 канал.</p></div>
            </div>
        </a>
        </Template></>;
}