import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFAワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFAワールドカップ"/>
        <meta name="description" content="Trending News about FIFAワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFAワールドカップ</h1>
            <Image width={800} height={500} src="https://www.htb.co.jp/news/photo/18164.jpg" alt="FIFAワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www.htb.co.jp/news/archives_18164.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>占いタコの「ラビオくん」FIFAワールドカップ2022・日本代表の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZ4abgPOmUmbwYSyfCsVD8DXgtoN8j-17aL7dmp4QuwlaR6DTjZ7PtASniqBzqCWRtWmlsZ0l7" alt="占いタコの「ラビオくん」FIFAワールドカップ2022・日本代表の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのFIFAワールドカップ2022がいよいよ開幕。4年前の開催時にも話題を呼んだ、北海道小平町のタコ「ラビオくん」が、日本代表の勝敗の行方を占いました！</p></div>
            </div>
        </a><a href='https://pid.nhk.or.jp/event/PPG0354818/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA ワールドカップカタール 2022 パブリックビューイング</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="FIFA ワールドカップカタール 2022 パブリックビューイング" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＮＨＫ福井放送局では、「FIFA ワールドカップカタール 2022 パブリックビューイング」を福井工業大学で実施します。ゲストの三都主アレサンドロさん、宮澤ミシェル&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ktv.jp/kanteletimes/detail.html?pageid=4066ab30ee3a41e5b9881fbc2d489cba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>朝日奈央が“応援マネージャー”に就任！『FIFAワールドカップ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiemWILDt2KRQFI9nuBhfMTHLr0Fuw6WAG5X5RQ3JDuFmgfYOB6XKoAFA0E7Xt6P-UEv8u2My9" alt="朝日奈央が“応援マネージャー”に就任！『FIFAワールドカップ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>４年に一度の世界最大のスポーツイベント『FIFAワールドカップカタール2022』が開幕した。フジテレビ系では、大注目のグループステージ第３戦「日本×スペイン」を含む&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}