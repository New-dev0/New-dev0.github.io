import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SEVENTEEN</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SEVENTEEN"/>
        <meta name="description" content="Trending News about SEVENTEEN" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SEVENTEEN</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221208-00000009-kstylens-000-2-view.jpg?exp=10800" alt="SEVENTEEN"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/dd4ffe9a69ca34517949535f426babbdad993bd2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SEVENTEEN「2022 FNS歌謡祭」でスペシャルパフォーマンスを ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvvOMaOUPgmnls8NgxbqJQFS9bnkREfZlzU91lRkW8w8bRqv6KDjQ0g_fsBkR8OCACZYAbcdnd" alt="SEVENTEEN「2022 FNS歌謡祭」でスペシャルパフォーマンスを ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SEVENTEENが、昨日（7日）に放送されたフジテレビ系列「2022 FNS歌謡祭」第1夜に出演した。 彼らは、「FNS歌謡祭」に過去3回出演したが、日本での撮影は今回が初めてと&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/0be139fa12909c66dc4bd5df7c007fb1a78e9e6d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SEVENTEENからLE SSERAFIMまで！「第37回ゴールデンディスク ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXF_l8iiNAgcZ1_bzLbGMoE4SSYd_QJrPMNKw6DrMnu7P4QXeWWngUkllCV6wfCfpakFK4Q4Jt" alt="SEVENTEENからLE SSERAFIMまで！「第37回ゴールデンディスク ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1枚のアルバムで新人賞と、デジタル音源部門の本賞候補となったNewJeansは、「ゴールデンディスクアワード」に初参加し、チャレンジブームを巻き起こした「Hype Boy」と、&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}