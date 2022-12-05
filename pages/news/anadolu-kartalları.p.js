import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anadolu Kartalları</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anadolu Kartalları"/>
        <meta name="description" content="Trending News about Anadolu Kartalları" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anadolu Kartalları</h1>
            <Image width={800} height={500} src="https://iasbh.tmgrup.com.tr/723116/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2022/12/04/anadolu-kartallari-filmi-oyunculari-kimler-konusu-nedir-anadolu-kartallari-nerede-cekildi-1670150275497.jpg" alt="Anadolu Kartalları"/>
            <h3>Recent News</h3>
            <a href='https://www.sabah.com.tr/galeri/yasam/anadolu-kartallari-filmi-oyunculari-kimler-konusu-nedir-anadolu-kartallari-nerede-cekildi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Kartalları filmi oyuncuları kimler, konusu nedir, ne zaman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3E1QRVden2RfAr767rrKkrMETALvyzCc06EJSmEQ4b0ARm4vLEVpL8nlUrbQvkbTMu8rEJCiM" alt="Anadolu Kartalları filmi oyuncuları kimler, konusu nedir, ne zaman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bu akşam televizyonda seyircisi ile buluşacak Anadolu Kartalları filmi konusu ile ilgi çekiyor. 2011 yapımı filmin yönetmen koltuğunda Ömer Vargı otururken.</p></div>
            </div>
        </a>
        </Template></>;
}