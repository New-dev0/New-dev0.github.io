import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Milan Borjan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Milan Borjan"/>
        <meta name="description" content="Trending News about Milan Borjan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Milan Borjan</h1>
            <Image width={800} height={500} src="https://images.t-online.de/2022/11/Y1WUbP5Hbjc6/700x427:1478x831/fit-in/1800x0/fussball-wm-2022-vorrunde-gruppe-f-belgien-canada-23-112022-borjan-milan-canada-football-world-cup-2022-pre-round-round-group-f-belgium-canada-23-11-2022-borjan-milan-canada.jpg" alt="Milan Borjan"/>
            <h3>Recent News</h3>
            <a href='https://www.t-online.de/sport/fussball/wm/id_100087194/milan-borjan-das-gefaehrliche-gedankengut-von-kanadas-wm-torwart.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milan Borjan: Das gefährliche Gedankengut von Kanadas WM-Torwart</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRO6oR2lifVqRDEtCObHlAwx5STPq_IB9l1awYESLVkF6fk91HUPW7adeaZiksMDAwLy_e72Ahc" alt="Milan Borjan: Das gefährliche Gedankengut von Kanadas WM-Torwart" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wenn Kanada bei der WM auf Kroatien trifft, wird es nicht nur um Sport gehen. Der Grund dafür sind ultranationalistische Aussagen des serbischstämmigen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}