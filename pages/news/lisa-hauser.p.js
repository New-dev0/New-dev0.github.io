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
            <Image width={800} height={500} src="https://media04.meinbezirk.at/article/2022/12/03/1/31968631_XXL.jpg" alt="Lisa Hauser"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/4-weltcup-sieg-lisa-hauser-triumphiert-in-kontiolahti-529059'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>4. Weltcup-Sieg! Lisa Hauser triumphiert in Kontiolahti</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="4. Weltcup-Sieg! Lisa Hauser triumphiert in Kontiolahti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Balsam für die geschundene Biathlon-Seele! Lisa Hauser holt im Sprint über 7,5 Kilometer in Kontiolahti unerwartet ihren vierten Weltcup-Sieg und sorgt für&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/tirol/c-sport/lisa-hauser-jubelt-ueber-sprintsieg_a5749564'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon Weltcup: Lisa Hauser jubelt über Sprintsieg - Tirol</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuzdVu80jgK34V9PsSFGbFoxH6rLAQ_6pKJXO0l0N4g17rf7dJr1vb4JDM8ld_NTSQEBH-vEIf" alt="Biathlon Weltcup: Lisa Hauser jubelt über Sprintsieg - Tirol" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit einer fehlerfreien Schießleistung und einer eindrucksvollen Performance auf der Loipe lieferte die Tirolerin eine nahezu perfekte Vorstellung ab und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/wintersport/6223463/BiathlonWeltcup-in-Kontiolahti_Ueberlegener-Weltcupsieg-von-Lisa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Überlegener Weltcupsieg von Lisa Hauser im Sprint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBnrEU10X9neO56ZFFmGOJRnECMjJr6YJwKB-LSyDIui9XzhPpORQjH5urtYZK3PIL6lWGIbRL" alt="Überlegener Weltcupsieg von Lisa Hauser im Sprint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Massenstart-Weltmeisterin Lisa Hauser hat am Samstag unerwartet ihren vierten Biathlon-Weltcupsieg gefeiert. Die Tirolerin triumphierte in Kontiolahti&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6223454/lisa-hauser-gewinnt-beim-weltcupauftakt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lisa Hauser gewinnt beim Weltcupauftakt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWrc2mveybTvXVMqcd4tiYCRzc6ZhYd7UnhQHUlhJvtNUweVcsTeZBI1k7G2G86gVFPnnSqoM5" alt="Lisa Hauser gewinnt beim Weltcupauftakt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Massenstart-Weltmeisterin Lisa Hauser hat am Samstag unerwartet ihren vierten Biathlon-Weltcupsieg gefeiert. Die Tirolerin triumphierte in Kontiolahti&nbsp;...</p></div>
            </div>
        </a><a href='http://sportreport.biz/2022/12/03/lisa-hauser-jubelt-ueber-sprintsieg-in-kontiolahti-fin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lisa Hauser jubelt über Sprintsieg in Kontiolahti (FIN)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJ-OB6dLEo7_IwfTqqwlgU_a6Jij_JRxLSyXG8SbyZr4y87gM9pp0S2pM9Cp8u81etwxTfgeMW" alt="Lisa Hauser jubelt über Sprintsieg in Kontiolahti (FIN)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lisa Hauser war beim heutigen Sprintrennen in Kontiolahti (FIN) eine Klasse für sich und feierte mit einer sensationellen Leistung bereits im zweiten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}