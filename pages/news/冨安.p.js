import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>冨安</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,冨安"/>
        <meta name="description" content="Trending News about 冨安" /></Head><Template>
            <h1 style={{fontSize: "30"}}>冨安</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221123-00000401-spnannex-000-4-view.jpg?exp=10800" alt="冨安"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/8feab0512a752d0b62705479f4c7ed940b16bf27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>右太腿痛から復帰の冨安健洋「後ろは気にしなくて良い」後半開始 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7AxU67lhbA0BS-ih1_G8yKaOWm_M7CPblxDajPecw8hscFcT8hlje0Bm_3bz81v-LAqBfPHtT" alt="右太腿痛から復帰の冨安健洋「後ろは気にしなくて良い」後半開始 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>W杯カタール大会1次リーグE組 日本2―1ドイツ（2022年11月23日 ハリファ国際競技場） 難攻不落の要塞だった。後半開始から3バックの一角として出場したDF冨安健洋（24＝&nbsp;...</p></div>
            </div>
        </a><a href='https://news.livedoor.com/article/detail/23253915/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3バックの一角でチームを支えた冨安「色々なシチュエーションを ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwmxK_LmWzZSIE4LhTlsv0UffGNoWutWT25NTl5DJYvE8OmXkSrCMKkpsazTgRf1YBagrSgF1K" alt="3バックの一角でチームを支えた冨安「色々なシチュエーションを ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本代表DF冨安健洋が、23日に行われたFIFAワールドカップカタール2022・グループE第1節のドイツ代表戦を振り返った。後半開始からピッチに送り出された冨安は、3&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}