import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>円相場</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,円相場"/>
        <meta name="description" content="Trending News about 円相場" /></Head><Template>
            <h1 style={{fontSize: "30"}}>円相場</h1>
            <Image width={800} height={500} src="https://business.nikkei.com/atcl/seminar/19/00122/00181/fb.jpg" alt="円相場"/>
            <h3>Recent News</h3>
            <a href='https://business.nikkei.com/atcl/seminar/19/00122/00181/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「適正水準」見失う急変続きの円相場、日本が取れる対策は</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5UEuJhILf-Vbz3CEDhxiBhRYPE_oWUcAvSUjlWnlR7qXMhNdGdvpodaGQnlncio4FXGaL9PPc" alt="「適正水準」見失う急変続きの円相場、日本が取れる対策は" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>今年の円相場の値幅は過去に例を見ない大きなものとなっている。為替相場の急変動で、円相場は「適正水準」を見失ってしまった。今後は米金融政策の先行きの利下げへの&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}