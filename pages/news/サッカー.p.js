import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカー"/>
        <meta name="description" content="Trending News about サッカー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカー</h1>
            <Image width={800} height={500} src="https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO2622951010112022000000-2.jpg?ixlib=js-2.3.2&auto=format&q=45&w=1600&s=a2a5d13c74daf01468dc4dfc4447b0ec" alt="サッカー"/>
            <h3>Recent News</h3>
            <a href='https://www.nikkei.com/telling/DGXZTS00002850R11C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スーパーシュートが出やすい？ サッカーW杯公式球に迫る</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkojtZ8P3ejRo-IqKUlSvm8KZO1Z4XU8lmMHSsa2sv0mHAkv6ZytgXnK-FXghHA1Re46lTt7xa" alt="スーパーシュートが出やすい？ サッカーW杯公式球に迫る" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップ（W杯）カタール大会が20日、いよいよ開幕する。世界的な有名選手のドリブルやシュートはもちろん、歴史に残る名場面にも出合えるかもし&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/48a6d9a8933c9c14223221e89a998156e1f68b57'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>さあ開幕サッカーＷ杯 わかやま伝承館で県ゆかりの選手紹介（紀伊 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9B_2E2c7moGUDipsaajQIxTzWy1E0rUn3J9dJ51r2MsDnAs-VA9ntevUj_6B-9rFUSsl9Fcm2" alt="さあ開幕サッカーＷ杯 わかやま伝承館で県ゆかりの選手紹介（紀伊 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>機運を盛り上げようと、和歌山市本町２丁目のわかやまスポーツ伝承館が「サッカー展」を開いており、日本代表で父親が串本町出身の久保建英選手（２１）や、田辺市に住む元&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tokyo-np.co.jp/article/214916'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日韓を「近くて遠くない国に」 2002年サッカーW杯共催、尽力した ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8KZOmrzhL2xsvYvu3I6ovMpILRxkiEDj7-BdJhDNbAI1swAvAmIOXBfx7pAK-t6TJ-wjLG463" alt="日韓を「近くて遠くない国に」 2002年サッカーW杯共催、尽力した ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー・ワールドカップ（W杯）カタール大会の日本代表の戦いぶりに注目が集まる中、日本サッカーの発展に尽力した高円宮さまが逝去して21...</p></div>
            </div>
        </a>
        </Template></>;
}