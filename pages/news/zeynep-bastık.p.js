import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zeynep Bastık</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zeynep Bastık"/>
        <meta name="description" content="Trending News about Zeynep Bastık" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zeynep Bastık</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/22/2005196/kapak_154440.jpg" alt="Zeynep Bastık"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/yasam/turkiyeden-sadece-o-gidiyor-zeynep-bastik-katar-dunya-kupasinda-sahne-alacak-2005196'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye&#39;den sadece o gidiyor! Zeynep Bastık, Katar Dünya Kupası ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_yj9tpc8nfmyMDYsP23LKmdxu0urqdxAiQW3PoKkCg3sngr8HAPiWnSx3A2Jd2tTjb5CZPDan" alt="Türkiye&#39;den sadece o gidiyor! Zeynep Bastık, Katar Dünya Kupası ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünlü şarkıcı Zeynep Bastık, Katar 2022 Dünya Kupası töreninde Al Khor Al-Bayt Stadyumu&#39;nda sahne alacak. Bastık, BTS, Nicki Minaj ve Shakira gibi dünyaca&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/n-life/magazin/zeynep-bastik-2022-dunya-kupasinda-sahne-alacak,zibXxPFg2EKqd6aU_XosEg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zeynep Bastık 2022 Dünya Kupası&#39;nda sahne alacak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRB8meDCSqEzp9no3rkIFms_rCypxpa1M498uewHiyMPB1vwJP1lQ1k57sFf2C0qCXcUYDEtbDE" alt="Zeynep Bastık 2022 Dünya Kupası&#39;nda sahne alacak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bastık, 24 Kasım günü Katar 2022 Dünya Kupası&#39;nda; Nicki Minaj, Maluma, Myriam Fares, BTS, Black Eyed Peas, J Balvin, Shakira, Nora Fatehi ve Patrick Nnaemeka&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/tr/haber/zeynep-bastik-dunya-kupasi-icin-katar-da-sahne-alacak/blt2a4581cc899cb38d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zeynep Bastık Dünya Kupası için Katar&#39;da sahne alacak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnpeLeBbdXmjojOZQw6t4iP7jIGPYIwMeMjF64UnOgNFSwoq9cq0HjkhTCl7DhEV9fkzb6Q5Yx" alt="Zeynep Bastık Dünya Kupası için Katar&#39;da sahne alacak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünlü şarkıcı Zeynep Bastık, 2022 Dünya Kupası töreninde sahne alacağını duyurdu. Nicki Minaj ve Shakira gibi isimlerle aynı sahneyi paylaşacak olan Bastık,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/spor/2022-dunya-kupasi/zeynep-bastik-dunya-kupasinda-katarda-sahne-alacak'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zeynep Bastık Dünya Kupası&#39;nda sahne alacak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCZMjDTXZwg24ooWTa9vq1kEXtiR1oJv3xAp3-mheKtKItJ-XoiyAQIma7gLoFVJuhBvW3u0Su" alt="Zeynep Bastık Dünya Kupası&#39;nda sahne alacak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Şarkıcı Zeynep Bastık, Katar 2022 Dünya Kupası töreninde sahne alacağını duyurdu. Bastık, BTS, Nicki Minaj gibi isimlerle aynı sahneyi paylaşacak.</p></div>
            </div>
        </a>
        </Template></>;
}