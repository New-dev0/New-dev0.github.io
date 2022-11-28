import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tahir Elçi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tahir Elçi"/>
        <meta name="description" content="Trending News about Tahir Elçi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tahir Elçi</h1>
            <Image width={800} height={500} src="" alt="Tahir Elçi"/>
            <h3>Recent News</h3>
            <a href='https://gazetekarinca.com/olumunun-uzerinden-7-yil-gecti-meral-danis-bestas-dostu-tahir-elciyi-anlatti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>7 yıl oldu gideli: Meral Danış Beştaş dostu Tahir Elçi&#39;yi anlattı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2gvuTL8BcPvQlfqP5EUHXAeOjaZn2Jn9PPJGqFwBENHnXYYUTlbG8ywdbX0tzTUy9Y7STIST6" alt="7 yıl oldu gideli: Meral Danış Beştaş dostu Tahir Elçi&#39;yi anlattı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tahir Elçi bundan tam 7 yıl önce “Bu bölgede silah, çatışma, operasyon istemiyoruz” açıklaması yaptığı sırada Dört Ayaklı Minare&#39;nin önünde vuruldu.</p></div>
            </div>
        </a>
        </Template></>;
}