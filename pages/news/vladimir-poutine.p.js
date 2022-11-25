import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vladimir Poutine</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vladimir Poutine"/>
        <meta name="description" content="Trending News about Vladimir Poutine" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vladimir Poutine</h1>
            <Image width={800} height={500} src="https://images.bfmtv.com/5ZiJogXdr_Ct85woylM-GQUQPN8=/0x0:1024x576/1024x0/images/Robert-Badinter-ancien-ministre-de-la-Justice-le-24-novembre-2022-sur-BFMTV-1527559.jpg" alt="Vladimir Poutine"/>
            <h3>Recent News</h3>
            <a href='https://www.bfmtv.com/international/c-est-une-certitude-pour-robert-badinter-vladimir-poutine-est-un-criminel-de-guerre_AV-202211240855.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;C&#39;est une certitude&quot;: pour Robert Badinter, Vladimir Poutine est un ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThrlWtEWH6waAx65CjVX4IjfhpWYywy4-8EaXumIzuM6l1BUfB2_rnJFz9iuouFhgT5V6CYQyh" alt="&quot;C&#39;est une certitude&quot;: pour Robert Badinter, Vladimir Poutine est un ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien ministre de la Justice, invité exceptionnel de BFMTV, a dénoncé le comportement du président russe alors que l&#39;Ukraine vient d&#39;entrer dans son&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}