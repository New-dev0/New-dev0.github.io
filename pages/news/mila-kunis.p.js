import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mila Kunis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mila Kunis"/>
        <meta name="description" content="Trending News about Mila Kunis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mila Kunis</h1>
            <Image width={800} height={500} src="https://aisvip-a.akamaihd.net/masters/1956731/mila-kunis-und-ashton-kutcher.jpg" alt="Mila Kunis"/>
            <h3>Recent News</h3>
            <a href='https://www.vip.de/cms/mila-kunis-mag-es-ehemann-ashton-kutcher-den-ganzen-tag-ueber-zu-nerven-5019064.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mila Kunis mag es, Ehemann Ashton Kutcher &quot;den ganzen Tag über ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQYFtsNWrP1dORBOv0yI6eXYhDJbnU3Sjr4Eau3fEDWlJWvsu6ZoRx55OUQELtEbHHNxmW2RUw8" alt="Mila Kunis mag es, Ehemann Ashton Kutcher &quot;den ganzen Tag über ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Schauspielerin scherzte darüber, dass sie die &quot;Queen&quot; darin sein, ihren Ehemann Ashton Kutcher zu nerven.</p></div>
            </div>
        </a><a href='https://www.vip.de/cms/mila-kunis-stolz-auf-ukrainische-wurzeln-5018980.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mila Kunis: Stolz auf ukrainische Wurzeln</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6uU36xKb0rjKeEp6R-wJhUMiOpqDA6dvKHC6zxa05BgL-Ir6-qDfLDCSso5cXU3T93H1MHv1y" alt="Mila Kunis: Stolz auf ukrainische Wurzeln" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die 39-jährige Schauspielerin war schon immer stolz auf ihr ukrainisches Erbe und hat sich inmitten des anhaltenden Konflikts mit Russland für ihr&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}