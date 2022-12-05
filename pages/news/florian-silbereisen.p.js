import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Florian Silbereisen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Florian Silbereisen"/>
        <meta name="description" content="Trending News about Florian Silbereisen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Florian Silbereisen</h1>
            <Image width={800} height={500} src="https://heute-at-prod-images.imgix.net/2022/12/02/213005d2-8758-4a09-a1fe-ace51a78e903.jpeg?rect=0%2C85%2C1366%2C683&w=1280&auto=format" alt="Florian Silbereisen"/>
            <h3>Recent News</h3>
            <a href='https://www.heute.at/s/florian-silbereisen-sorgt-im-orf-fuer-lacher-100242174'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florian Silbereisen sorgt im ORF für Lacher</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT96ANzubogCxPtf8-b8V4cclgUjyvPO6Q9hubNaK5iQ1eS0LOiwf9RvQeNSR6ReEJNybsRgtyZ" alt="Florian Silbereisen sorgt im ORF für Lacher" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-&quot;Bro&#39;Sis&quot;-Sänger Ross Anthony überraschte Florian Silbereisen mit ein paar Geschenken. Im Netz sorgt das für Lacher.</p></div>
            </div>
        </a>
        </Template></>;
}