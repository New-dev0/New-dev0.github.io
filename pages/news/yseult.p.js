import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yseult</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yseult"/>
        <meta name="description" content="Trending News about Yseult" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yseult</h1>
            <Image width={800} height={500} src="https://media.bvoltaire.fr/file/Bvoltaire/2022/11/Fh8mO9pWYAE3G_N.png" alt="Yseult"/>
            <h3>Recent News</h3>
            <a href='https://www.bvoltaire.fr/macron-nomme-yseult-marraine-de-la-francophonie-cest-quoi-lidee/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Macron nomme Yseult marraine de la francophonie : c&#39;est quoi, l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMoaHarBJnU1Jdm2USmHKQx6ddbKnSkvU-KxUDFC2eih9_V7iPWpe9jR9Vzt49qgfR5Y5yJUiz" alt="Macron nomme Yseult marraine de la francophonie : c&#39;est quoi, l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chaque jour apporte décidément son lot de bonnes nouvelles en ce joli mois de novembre. Connaissez-vous, par exemple, la chanteuse Yseult ?</p></div>
            </div>
        </a>
        </Template></>;
}