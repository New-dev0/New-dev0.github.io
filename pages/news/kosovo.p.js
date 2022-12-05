import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kosovo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kosovo"/>
        <meta name="description" content="Trending News about Kosovo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kosovo</h1>
            <Image width={800} height={500} src="https://assets.deutschlandfunk.de/69a92214-ef81-45b7-9786-4c007b39f926/original.jpg?t=1670071853181" alt="Kosovo"/>
            <h3>Recent News</h3>
            <a href='https://www.deutschlandfunk.de/entspannung-in-sicht-kosovo-serbien-streit-um-autoschilder-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spannungen auf dem Westbalkan - Kosovo, Serbien und der Streit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIaf_IrtRX5H8U2Bhqbp03nhZZgUW-o12FBfHEhmHzVaS5V-RPQMfAyv0ZFS7ENIlN-GBGB-H4" alt="Spannungen auf dem Westbalkan - Kosovo, Serbien und der Streit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Proteste von Serben im Norden der kosovarischen Stadt Mitrovica im Autoschilder-Streit. Die Forderung damals: Die Serben sollten ihre Autos neu registrieren&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}