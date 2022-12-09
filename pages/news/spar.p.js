import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spar"/>
        <meta name="description" content="Trending News about Spar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spar</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz_paid/images/uploads_520/focal0x0-0x0/b/9/9/6224793/Moarfeld_1_1670409250807435.jpg" alt="Spar"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/kaernten/osttirol/6224793/Nach-sieben-Monaten-Umbau_Der-Spar-in-am-Moarfeld-glaenzt-in'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Der Spar in am Moarfeld glänzt in modernem Gewand</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrlkFZY8AaK-XcKEcMFGVG7G0CrBzvzzYwHkNGnovQNbvzyosAfrIbYuAzeHY4adkNWVH9d4pE" alt="Der Spar in am Moarfeld glänzt in modernem Gewand" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der SPAR Supermarkt in Lienz-Moarfeld wurde modernisiert und wiedereröffnet. Die Verkaufsfläche wurde erweitert und eine Kundengarage für mehr&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}