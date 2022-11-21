import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>嶺内ともみ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,嶺内ともみ"/>
        <meta name="description" content="Trending News about 嶺内ともみ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>嶺内ともみ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221120-00000354-oric-000-12-view.jpg?exp=10800" alt="嶺内ともみ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/e3a5e3603625d042565043e12a58661a997e909f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『ウマ娘』声優・嶺内ともみ、今年いっぱいで声優業を廃業「最後 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqcIo12EWfTQR91lvX_-VDLH7dh23yupIs7vfZen3HDuw3Vs68B21sbBOL7RehXXEm0aqE5ZV5" alt="『ウマ娘』声優・嶺内ともみ、今年いっぱいで声優業を廃業「最後 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>人気コンテンツ『ウマ娘 プリティーダービー』アイネスフウジンの声などで知られる声優の嶺内ともみが、今年12月31日をもって廃業すると20日、所属事務所・アイム&nbsp;...</p></div>
            </div>
        </a><a href='https://natalie.mu/comic/news/502128'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>嶺内ともみが今年で声優業の廃業を発表「メイドラゴンS」「ウマ娘 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRz0vdbEMM2D0uyVJpx2gPYvok_lUhHTB977u0qHoxermfBiWYCMPJqmWUBE8LZBGKkb8SLrpdI" alt="嶺内ともみが今年で声優業の廃業を発表「メイドラゴンS」「ウマ娘 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>これは本日11月20日に所属事務所・アイムエンタープライズの公式サイトで伝えられたもの。サイトには「最後まで感謝の気持ちを込めて活動をしてまいりますので、温かく&nbsp;...</p></div>
            </div>
        </a><a href='https://www.crank-in.net/news/117904/1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『ウマ娘』声優・嶺内ともみ、年内をもって廃業を発表「最後まで ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfLg6o5DgNRBigsnmYftQCm_gC3sGdrJJQfBTBh2fbuEGlgvMV1rUfNPaWi33zXjZOcEzSlvan" alt="『ウマ娘』声優・嶺内ともみ、年内をもって廃業を発表「最後まで ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>人気ゲーム『ウマ娘 プリティーダービー』のアイネスフウジン役などで知られる声優の嶺内ともみが、12月31日をもって声優業を廃業することを、所属事務所の公式サイト&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}