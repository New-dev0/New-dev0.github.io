import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Макіївка</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Макіївка"/>
        <meta name="description" content="Trending News about Макіївка" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Макіївка</h1>
            <Image width={800} height={500} src="" alt="Макіївка"/>
            <h3>Recent News</h3>
            <a href='https://prm.ua/minoborony-pidtverdylo-zvilnennia-vid-okupantiv-sela-makiivka-na-luhanshchyni-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Міноборони підтвердило звільнення від окупантів села Макіївка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHF3U9NkuT12ZYpu-OfnIr-GSSQgU8V9ghVIpXaFq8p9kBnXEIf5ih34Ro83MC4KbvxQhohhIb" alt="Міноборони підтвердило звільнення від окупантів села Макіївка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міністерство Оборони України підтвердило звільнення села Макіївка Луганської області. Захисники показали відео з деокупованого населеного пункту.</p></div>
            </div>
        </a><a href='https://tsn.ua/ukrayina/rozbita-i-zavalena-trupami-okupantiv-yakiy-viglyad-maye-neschodavno-zvilnena-makiyivka-na-luganschini-2202919.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Розбита і завалена трупами окупантів: який вигляд має ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZcEunZLbBaMuu6cVirUURoZxywywdcW1aFtmxvgXjBnwwttORb6Zku1kuxuNT0qdyOfDiJ0xO" alt="Розбита і завалена трупами окупантів: який вигляд має ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЗСУ звільнили Макіївку, але ворог продовжує обстріли населеного пункту. Сили оборони України днями звільнили від російських окупантів населений пункт&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/u-minoboroni-pidtverdili-zvilnennja-makijivki-karta.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Міноборони підтвердили звільнення Макіївки: карта</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQK3ZMU3D3Dh18E95E8hhLw2LPx2mO_LW0hOARTOvysFJOaDdsIUOe29L5r-bsmlCMxUnI2gtDY" alt="У Міноборони підтвердили звільнення Макіївки: карта" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У населеному пункті не залишилося жодного вцілілого будинку. У Міноборони підтвердили звільнення Макіївки: карта. © Getty Images.</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/ukraine/events/makijivka-pislya-zvilnennya-rozbita-ta-zavalena-trupami-okupantiv-novini-ukrajini-50284440.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Розбита і завалена тілами окупантів: Гайдай показав, як ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuKCA8MhiMDxD2di4-eEO5Gl30yCaYDCZ8J16_oeZpZTNOMvQYe7iEvbNGmS7FjSJDRij5w6n9" alt="Розбита і завалена тілами окупантів: Гайдай показав, як ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сергій Гайдай показав, як виглядає Макіївка після звільнення — населений пункт розбитий та завалений трупами окупантів.</p></div>
            </div>
        </a><a href='https://24tv.ua/zvilnena-makiyivka-luganshhini-minoboroni-pokazalo-video_n2199253'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Село розбите росіянами: показали відео зі звільненої Макіївки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFOgX3EaGUO8ozO4OsclDUNotcLB3Sl73YpLn4sScEMXvLCEzuHxqbEonXdgFlQKpWZ-lpfxzE" alt="Село розбите росіянами: показали відео зі звільненої Макіївки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЗСУ звільнили Макіївку на Луганщині. Село повністю розбите росіянами, нема вцілілих будинків - у Міноборони показали відео 16 листопада 2022 - 24 канал.</p></div>
            </div>
        </a>
        </Template></>;
}