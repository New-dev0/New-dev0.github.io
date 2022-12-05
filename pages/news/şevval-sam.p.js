import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Şevval Sam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Şevval Sam"/>
        <meta name="description" content="Trending News about Şevval Sam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Şevval Sam</h1>
            <Image width={800} height={500} src="https://imgrosetta.mynet.com.tr/file/16089651/16089651-700x400.jpg" alt="Şevval Sam"/>
            <h3>Recent News</h3>
            <a href='https://www.mynet.com/taro-emir-kimdir-kac-yasinda-ve-nereli-sevval-sam-in-oglu-taro-emir-hakkinda-bilgiler-433493-mymagazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taro Emir kimdir, kaç yaşında ve nereli? Şevval Sam&#39;ın oğlu Taro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTFkju2ubn5JXPLCxUpXOJOlsCfJUglZNfbd1HPT8ZoHvV4GABeZjk9jVVNrwTCGkVPYiLWFNj" alt="Taro Emir kimdir, kaç yaşında ve nereli? Şevval Sam&#39;ın oğlu Taro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taro Emir hakkında araştırmalar hız kazandı. Taro Emir, ünlü oyuncu Şevval Sam ve Metin Tekin&#39;in oğludur. Yaklaşık iki yıldır ekran önünde yer alıyor.</p></div>
            </div>
        </a>
        </Template></>;
}