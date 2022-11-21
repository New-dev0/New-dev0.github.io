import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Asil Bostancı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Asil Bostancı"/>
        <meta name="description" content="Trending News about Asil Bostancı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Asil Bostancı</h1>
            <Image width={800} height={500} src="https://i2.hbrcdn.com/haber/2022/11/20/asil-bostanci-kimdir-kac-yasinda-nereli-15441983_1019_amp.jpg" alt="Asil Bostancı"/>
            <h3>Recent News</h3>
            <a href='https://www.haberler.com/haberler/asil-bostanci-kimdir-kac-yasinda-nereli-15441983-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Asil Bostancı kimdir? Kaç yaşında, nereli, mesleği ne? Asil Bostancı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwS4roE8mGJM3ifpsvimdIDckN-uQ64Gerc_rBh49ADFRbjwQ1JdMcm6BWtlBt87aRBasecvxs" alt="Asil Bostancı kimdir? Kaç yaşında, nereli, mesleği ne? Asil Bostancı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galatasaray&#39;ın eski yöneticisi Abdurrahim Albayrak&#39;ın kızı İlknur Albayrak ile Asil Bostancı 2005 yılında evlenmiştir. İş insanı Abdurrahim Albayrak&#39;ın damadı&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}