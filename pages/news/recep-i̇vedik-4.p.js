import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Recep İvedik 4</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Recep İvedik 4"/>
        <meta name="description" content="Trending News about Recep İvedik 4" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Recep İvedik 4</h1>
            <Image width={800} height={500} src="https://imgrosetta.mynet.com.tr/file/16064425/16064425-700x400.png" alt="Recep İvedik 4"/>
            <h3>Recent News</h3>
            <a href='https://www.mynet.com/recep-ivedik-4-ne-zaman-ve-nerede-cekildi-recep-ivedik-4-konusu-ve-oyunculari-190101277049'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recep İvedik 4 ne zaman ve nerede çekildi? Recep İvedik 4 konusu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjrIsD-s7776nfoZfr-BgL930h2KJ-9EMSHX75epez2RuWl0SdkAzl9k5B85lnBz6jG7rawp4t" alt="Recep İvedik 4 ne zaman ve nerede çekildi? Recep İvedik 4 konusu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recep İvedik 4 filmi, televizyon ekranlarında sıklıkla yer alıyor. Komedi türündeki başarısıyla en çok izlenen seriler arasında olan Recep İvedik filminin&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}