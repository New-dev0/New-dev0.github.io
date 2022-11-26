import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zac Efron</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zac Efron"/>
        <meta name="description" content="Trending News about Zac Efron" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zac Efron</h1>
            <Image width={800} height={500} src="https://ais-akamai.rtl.de/masters/1943829/1686x0/13-september-2022-toronto-ontario-canada-zac-efron-john-chickie-donohue-2022-toronto-international-film-festival-the-greatest-beer-run-ever-premiere-held-at-roy-thomson-hall-photo-credit-brent-perniac-admedia.jpg" alt="Zac Efron"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.de/cms/zac-efron-mit-neuen-haaren-und-als-muskelprotz-ist-er-kaum-wiederzuerkennen-5017651.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zac Efron: Mit neuen Haaren und als Muskelprotz ist er kaum ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDXGdBF1NVZrEMIGy7iymvQSlunerARsmToaUf39zMJsE64xHRAm_AXCB4OlU7-0_289oLyEzB" alt="Zac Efron: Mit neuen Haaren und als Muskelprotz ist er kaum ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In dem Film „The Iron Claw“ verkörpert der ehemalige „High School Musical“-Star den Profi-Wrestler Kevin von Erich. Um der Hauptfigur gerecht zu werden, hat der&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}