import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Die Draufgänger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Die Draufgänger"/>
        <meta name="description" content="Trending News about Die Draufgänger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Die Draufgänger</h1>
            <Image width={800} height={500} src="https://heute-at-prod-images.imgix.net/2021/10/07/0285d875-106d-4dca-a565-4ad44af1d668.jpeg?rect=0%2C209%2C2500%2C1250&w=1280&auto=format" alt="Die Draufgänger"/>
            <h3>Recent News</h3>
            <a href='https://www.heute.at/s/die-draufgaenger-das-ist-wahrer-grund-fuer-trennung-100240405'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Die Draufgänger&quot; – das ist wahrer Grund für Trennung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKGsRjnusWDh6R5JPphgQvfBzaT-nvhKjRJ_cPJYiPoFp1lha9w6hnmrnpr6q2PgKncdhG1z7I" alt="&quot;Die Draufgänger&quot; – das ist wahrer Grund für Trennung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chiara wird die &quot;Draufgänger&quot; mit Jahresende verlassen und eigene musikalische Wege verfolgen.Felix Birkenseer / Die Draufgänger.</p></div>
            </div>
        </a>
        </Template></>;
}