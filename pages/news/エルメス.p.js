import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>エルメス</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,エルメス"/>
        <meta name="description" content="Trending News about エルメス" /></Head><Template>
            <h1 style={{fontSize: "30"}}>エルメス</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221123-00000091-dal-000-3-view.jpg?exp=10800" alt="エルメス"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/4c0c827f28973a905e8721b449834bde924fa8dc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>松本伊代 エルメス極秘購入もバレバレ ヒロミ気にせず、財産 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmxdRpKvXV381s31TNSSvf34Pa-1k_WMFJCscg63qk_01gHWdeNG9XOfSpnbQN9iO2_3XSuzLp" alt="松本伊代 エルメス極秘購入もバレバレ ヒロミ気にせず、財産 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>タレントのヒロミが２２日、日本テレビ系「踊る！さんま御殿！！」に出演し、妻でタレントの松本伊代がガレージに「オレンジの物体」を隠していることを明かした。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/d1cf8313703a6de21abecdff143f930dee20d5dd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>エルメスのものづくりの楽しさが伝わってくる、エルメス初の絵本 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiwqQrHcNo5m5YJXCwCukuQkLDKbxcs_2dbp8qjIL-1g3phHC0xHIoFzzvOj9Vs3LYYRqY31nX" alt="エルメスのものづくりの楽しさが伝わってくる、エルメス初の絵本 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>エルメスが、絵本や児童書を数多く手がけ、高い評価を得ている絵本作家の100％ORANGEとともにエルメスの初めての絵本『エルメスのえほん おさんぽステッチ』を制作。</p></div>
            </div>
        </a>
        </Template></>;
}