import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Le sserafim</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Le sserafim"/>
        <meta name="description" content="Trending News about Le sserafim" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Le sserafim</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221117-00000007-cnippou-000-1-view.jpg?exp=10800" alt="Le sserafim"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/76dbbfe7b37ec274dfa2ee9fd74011e784b84ead'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＩＶＥ・ＴＷＩＣＥ・ＬＥ ＳＳＥＲＡＦＩＭなどＫ－ＰＯＰ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoa_bs5ZBKAseK-dHmt6Ru422Jl7eXO9kANnQJ6TtzadJIsVswYlTcH82aBMWQCnTXMWjYw70Q" alt="ＩＶＥ・ＴＷＩＣＥ・ＬＥ ＳＳＥＲＡＦＩＭなどＫ－ＰＯＰ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ガールズグループのＩＶＥとＬＥ ＳＳＥＲＡＦＩＭなどＫ－ＰＯＰスターたちが日本の年末音楽特集番組ＮＨＫ『紅白歌合戦』に出演する。 １６日、ＮＨＫ『紅白歌合戦』&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}