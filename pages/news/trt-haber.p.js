import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TRT Haber</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TRT Haber"/>
        <meta name="description" content="Trending News about TRT Haber" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TRT Haber</h1>
            <Image width={800} height={500} src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1520000/hollanda-bayragi-reu-1520923.jpg" alt="TRT Haber"/>
            <h3>Recent News</h3>
            <a href='https://www.trthaber.com/haber/dunya/hollanda-askerlerinin-operasyonunda-olen-afgan-sivillerin-yakinlarina-tazminat-odeyecek-725540.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hollanda, askerlerinin operasyonunda ölen Afgan sivillerin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQm8L_cfecvfj7lxeUux-I_lx6EzDbO2V7JtYIC5by89eZVp01A0n43C7QWDG7NseTh_FodSU6H" alt="Hollanda, askerlerinin operasyonunda ölen Afgan sivillerin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hollanda&#39;da mahkeme, hükümetin, Hollandalı askerlerin Afganistan&#39;ın Uruzgan eyaletinde görev yaptıkları dönemde Taliban&#39;a yönelik düzenledikleri operasyonda&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/gundem/fetonun-kirli-para-trafigi-desifre-oldu-725240.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FETÖ&#39;nün kirli para trafiği deşifre oldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLxbhOQHacAtnJjtKAwIDuG_7mR5eHgU--M5CUpPmOkTlYDC6bYFSOBlZN5l3SX1EPXGVKijrt" alt="FETÖ&#39;nün kirli para trafiği deşifre oldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fetullahçı Terör Örgütü&#39;nün (FETÖ) kirli para trafiği emniyetin takibine takıldı. İstanbul Cumhuriyet Başsavcılığı&#39;nın hazırladığı dosyada fiziki takibin&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}