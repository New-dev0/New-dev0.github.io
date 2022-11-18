import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>氷川きよし</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,氷川きよし"/>
        <meta name="description" content="Trending News about 氷川きよし" /></Head><Template>
            <h1 style={{fontSize: "30"}}>氷川きよし</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-00000350-oric-000-3-view.jpg?exp=10800" alt="氷川きよし"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/822d249d32405b29b64c824eb4b047c1aaadff1b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>氷川きよし『紅白』出場決定後初のインスタ投稿 “純白コーデ”添え ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsAcESRPrAZb1iL0WrcjN5IFgPU8fGO0t_9FkcvZ-wIeIAhocLHxB7X4GiRoHqxr-RP5BYTrBr" alt="氷川きよし『紅白』出場決定後初のインスタ投稿 “純白コーデ”添え ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>歌手の氷川きよし（45）が17日、大みそかの『第73回NHK紅白歌合戦』出場決定後、初めて自身のインスタグラムを更新した。 年内をもって歌手活動を一時休止する氷川&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}