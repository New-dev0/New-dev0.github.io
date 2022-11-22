import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bellingham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bellingham"/>
        <meta name="description" content="Trending News about Bellingham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bellingham</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb283c1a1e3229b8a/637b8194459bb762feb920d8/GettyImages-1244955703.jpg" alt="Bellingham"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/tr/haber/jude-bellingham-steven-gerrard-ile-karsilastirilmam-buyuk-bir-saygisizlik/bltd07d76478e433bb1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jude Bellingham: Steven Gerrard ile karşılaştırılmam büyük bir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXqtjssOWbzfG2VreOx1wR09kwdjgudrokZkLUTVJEKWVNR_zH_Y1d8xtEAyw1S0uMKh-LsGHn" alt="Jude Bellingham: Steven Gerrard ile karşılaştırılmam büyük bir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran karşısında sergilediği performansla Dünya Kupası&#39;nın yıldızlarından biri olacağının sinyallerini veren İngiliz yıldız Jude Bellingham,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milligazete.com.tr/haber/12582256/bellingham-gerrarda-benzetilmesi-hakkinda-konustu-saygisizlik-olur'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bellingham, Gerrard&#39;a benzetilmesi hakkında konuştu: Saygısızlık olur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRd6kyQzmha_A-GBZ7AmxM16J9JZZPJPuLCRa2nBCTH9cOFMV-KtHa-VINNAJDqotaS908PBNA" alt="Bellingham, Gerrard&#39;a benzetilmesi hakkında konuştu: Saygısızlık olur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran maçı öncesinde BBC&#39;ye konuşan ve medyada Liverpool&#39;a transfer olacağına dair birçok haber çıkan Borussia Dortmundlu Bellingham, karşılaştırmalardan&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}