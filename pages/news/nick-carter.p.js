import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nick Carter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nick Carter"/>
        <meta name="description" content="Trending News about Nick Carter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nick Carter</h1>
            <Image width={800} height={500} src="https://i.ds.at/ZZILeA/rs:fill:1200:600/plain/2022/12/09/APAAFPGETTY-IMAGESALBERTO-E..jpg" alt="Nick Carter"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141641544/backstreet-boys-star-nick-carter-der-vergewaltigung-beschuldigt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Backstreet-Boys-Star Nick Carter der Vergewaltigung beschuldigt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNt5OjsDDZ1n9ohCT7sTezpebuRmpk3uxPmJHLFuO1oG0z-90z1I1z8UsOFlWznatbzXahOUwB" alt="Backstreet-Boys-Star Nick Carter der Vergewaltigung beschuldigt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine Frau berichtet von einem Vorfall mit dem Sänger aus dem Jahr 2001, Carter weist den Vorwurf zurück. Sie war damals 17 Jahre alt.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6225347/backstreet-boy-nick-carter-der-vergewaltigung-beschuldigt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Backstreet Boy&quot; Nick Carter der Vergewaltigung beschuldigt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTjYG3TvGOmXePP2H8hYWAPJ99pTCsPEnIJP3RS6EioX6K_C3_WYUj-cWHTURlzOjtfvge2XGRG" alt="&quot;Backstreet Boy&quot; Nick Carter der Vergewaltigung beschuldigt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine Frau soll von dem Sänger 2001 im Alter von 17 Jahren vergewaltigt worden sein. Sie reichte nun Zivilklage gegen den 42-Jährigen ein.</p></div>
            </div>
        </a><a href='https://k.at/entertainment/nick-carter-vergewaltigung/402252975'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nick Carter: Backstreet Boys-Sänger wird der Vergewaltigung ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzb2FZeRdMs_l5JCul67wwyl4KkgEGbM0VDYnmyaeVDYVH0L7CAH3krVmvV_tOy6G3r5uyeWUa" alt="Nick Carter: Backstreet Boys-Sänger wird der Vergewaltigung ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nick Carter: Dem Sänger wird Vergewaltigung vorgeworfen. Er soll eine Frau gefügig gemacht und missbraucht haben.</p></div>
            </div>
        </a><a href='https://www.nachrichten.at/panorama/society/saenger-nick-carter-weist-vorwuerfe-zurueck;art411,3756711'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sänger Nick Carter weist Vorwürfe zurück</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5-luVBIZTf2clQIiPZ_lnKrAS1YchXcR3j0vFAG-dTDCpzuOVmI6K959TmsQfh7aOBbEU-VjL" alt="Sänger Nick Carter weist Vorwürfe zurück" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Backstreet-Boys-Sänger Nick Carter (42) ist in den USA von einer Frau wegen eines angeblichen sexuellen Übergriffs im Jahr 2001 verklagt worden.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/gesellschaft/kriminalitaet/nick-carter-weist-vorwurf-der-vergewaltigung-zurueck-18521745.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mitglied der Backstreet Boys: Nick Carter weist Vorwurf der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQg9eNh_qSqQ-l4Itnt_HC7EHluLh8E0R3bXL-oFeU7Hw-wb8IKWdWGQRZsHMFg1F8d3nZPA5Bh" alt="Mitglied der Backstreet Boys: Nick Carter weist Vorwurf der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine Frau hat Nick Carter verklagt, weil er sie 2001 nach einem Konzert im Bundesstaat Washington vergewaltigt haben soll. Der Anwalt des...</p></div>
            </div>
        </a>
        </Template></>;
}