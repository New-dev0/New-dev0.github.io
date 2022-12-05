import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lisa Hauser</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lisa Hauser"/>
        <meta name="description" content="Trending News about Lisa Hauser" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lisa Hauser</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2873927/vf5c3a1/og_image.jpg" alt="Lisa Hauser"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/lisa-hauser-verschiesst-einen-erneuten-spitzenplatz-529156'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lisa Hauser verschießt einen erneuten Spitzenplatz</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Lisa Hauser verschießt einen erneuten Spitzenplatz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach ihrem überraschenden Sieg im Sprint kann Lisa Hauser die Nummer-1-Position in der Verfolgung in Kontiolahti nicht verteidigen.</p></div>
            </div>
        </a><a href='https://www.krone.at/2873926'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kontiolahti-Verfolgung - Lisa Hauser fällt zurück, holt aber Top-10 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTr44Ny5DXYQvhNa9m2rYHYb7tr8H75n5uXv9BDothJMIS1H8SGXcZhyKn7NMB8hRXmJ7tHiDIc" alt="Kontiolahti-Verfolgung - Lisa Hauser fällt zurück, holt aber Top-10 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Biathletin Lisa Hauser hat ihre Pole Position in der Verfolgung von Kontiolahti nicht ausnützen können. Die Sprintsiegerin rutschte am Sonntag im ...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/tirol/c-sport/lisa-hauser-jubelt-ueber-sprintsieg_a5749564'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon Weltcup: Lisa Hauser jubelt über Sprintsieg - Tirol</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuzdVu80jgK34V9PsSFGbFoxH6rLAQ_6pKJXO0l0N4g17rf7dJr1vb4JDM8ld_NTSQEBH-vEIf" alt="Biathlon Weltcup: Lisa Hauser jubelt über Sprintsieg - Tirol" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit einer fehlerfreien Schießleistung und einer eindrucksvollen Performance auf der Loipe lieferte die Tirolerin eine nahezu perfekte Vorstellung ab und&nbsp;...</p></div>
            </div>
        </a><a href='http://sportreport.biz/2022/12/04/lisa-hauser-erreicht-in-der-verfolgung-in-kontiolahti-fin-rang-neun/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lisa Hauser erreicht in der Verfolgung in Kontiolahti (FIN) Rang neun</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJ-OB6dLEo7_IwfTqqwlgU_a6Jij_JRxLSyXG8SbyZr4y87gM9pp0S2pM9Cp8u81etwxTfgeMW" alt="Lisa Hauser erreicht in der Verfolgung in Kontiolahti (FIN) Rang neun" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die restlichen Österreicherinnen schafften ebenfalls eine Platzierung in den Weltcup-Punkterängen. Dunja Zdouc, die von Rang 48 ins Rennen gestartet war,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6223454/lisa-hauser-gewinnt-beim-weltcupauftakt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lisa Hauser gewinnt beim Weltcupauftakt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWrc2mveybTvXVMqcd4tiYCRzc6ZhYd7UnhQHUlhJvtNUweVcsTeZBI1k7G2G86gVFPnnSqoM5" alt="Lisa Hauser gewinnt beim Weltcupauftakt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Massenstart-Weltmeisterin Lisa Hauser hat am Samstag unerwartet ihren vierten Biathlon-Weltcupsieg gefeiert. Die Tirolerin triumphierte in Kontiolahti&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}