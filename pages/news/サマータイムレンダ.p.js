import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サマータイムレンダ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サマータイムレンダ"/>
        <meta name="description" content="Trending News about サマータイムレンダ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サマータイムレンダ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221115-00000199-impress-000-1-view.jpg?exp=10800" alt="サマータイムレンダ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/35a2c57be2d7847da6739fbc20d448998072dcc2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「サマータイムレンダ Another Horizon」、新キャラ「小弓場かおり ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRp5WkaCk4SY3RNraDHoRJCPKILarCKuTZfNQ0C2nFSwMXzjb367hkiHS-vnU04xkhMk8Q3R9dm" alt="「サマータイムレンダ Another Horizon」、新キャラ「小弓場かおり ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MAGES.は、2023年1月26日に発売を予定しているプレイステーション 4/Nintendo Switch用タイムリープADV「サマータイムレンダ Another Horizon（アナザーホラ.</p></div>
            </div>
        </a><a href='https://news.denfaminicogamer.jp/news/221115e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>人気SFサスペンス作品のゲーム版『サマータイムレンダ Another ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQHCOyAHxwTQ7YwUSp5q-SvXfQcz1HpmdWEYjTKDnYNsiKOQCDcxddavA5Rx-0m7zMooVJZIpD" alt="人気SFサスペンス作品のゲーム版『サマータイムレンダ Another ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MAGES.は2023年1月26日（木）にNintendo Switch、PS4向けに発売するTVアニメ『サマータイムレンダ』のゲーム版『サマータイムレンダ Another Horizon』について、新&nbsp;...</p></div>
            </div>
        </a><a href='https://ascii.jp/elem/000/004/113/4113109/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>アスキーゲーム:Switch／PS4版『サマータイムレンダAH』のPV第3 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxGFtyQesUaQPPDh4JwPM2ronwwQo7Hz76Co44RbpOWKuq6dTYiOaezsVMwBMUcifJ7eSZBesu" alt="アスキーゲーム:Switch／PS4版『サマータイムレンダAH』のPV第3 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MAGES.は11月15日、Nintendo Switch／PlayStation 4用ゲーム『サマータイムレンダ Another Horizon（アナザーホライズン）』のPV第3弾《新キャラクター紹介》を公開&nbsp;...</p></div>
            </div>
        </a><a href='https://funglr.games/ja/news/summertimerendering-another-horizon-2ndpv-3rdpv-release/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ゲームシステムや小倉唯さん演じる「小弓場かおり」の情報も ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3SIXfMT3c8ZiZGpKnk7OOTv_56r5-Z4oA7KJMVNWHrbJfePZEyFmvLAt0XRR_Iqj1BYB2wYQH" alt="ゲームシステムや小倉唯さん演じる「小弓場かおり」の情報も ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>田中靖規先生の原作漫画は「少年ジャンプ＋」で累計閲覧数1億5000万回を誇っている大ヒット作、TVアニメ「サマータイムレンダ」 テレビ放送とTVerでの1週間限定見逃し&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}