import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FNS歌謡祭 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FNS歌謡祭 2022"/>
        <meta name="description" content="Trending News about FNS歌謡祭 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FNS歌謡祭 2022</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221208-00000009-kstylens-000-2-view.jpg?exp=10800" alt="FNS歌謡祭 2022"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/dd4ffe9a69ca34517949535f426babbdad993bd2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SEVENTEEN「2022 FNS歌謡祭」でスペシャルパフォーマンスを ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvvOMaOUPgmnls8NgxbqJQFS9bnkREfZlzU91lRkW8w8bRqv6KDjQ0g_fsBkR8OCACZYAbcdnd" alt="SEVENTEEN「2022 FNS歌謡祭」でスペシャルパフォーマンスを ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SEVENTEENが、昨日（7日）に放送されたフジテレビ系列「2022 FNS歌謡祭」第1夜に出演した。 彼らは、「FNS歌謡祭」に過去3回出演したが、日本での撮影は今回が初めてと&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}