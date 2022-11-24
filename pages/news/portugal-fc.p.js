import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal fc</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal fc"/>
        <meta name="description" content="Trending News about Portugal fc" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal fc</h1>
            <Image width={800} height={500} src="https://www.arsenal.com/sites/default/files/styles/desktop_16x9/public/images/GettyImages-1233307012%20copy.jpg?itok=pwVt32lB" alt="Portugal fc"/>
            <h3>Recent News</h3>
            <a href='https://www.arsenal.com/news/vieira-scores-portugal-u21s-defeat-japan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vieira scores in Portugal U21&#39;s defeat to Japan | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRuB45dNwGCG2pBm14E9yGkqbg-9KSe2k-snsDzKQtdL_4V8Bw-at28E1MmBKoXl-vmbzDF1kwQ" alt="Vieira scores in Portugal U21&#39;s defeat to Japan | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fabio Vieira scored from the spot for Portugal&#39;s under-21s but it wasn&#39;t enough to stave off a late winner from Japan&#39;s Shota Fujio.</p></div>
            </div>
        </a>
        </Template></>;
}