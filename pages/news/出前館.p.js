import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>出前館</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,出前館"/>
        <meta name="description" content="Trending News about 出前館" /></Head><Template>
            <h1 style={{fontSize: "30"}}>出前館</h1>
            <Image width={800} height={500} src="https://robotstart.info/wp-content/uploads/2022/11/demaecan-hachijo-Delivery-experiment-top.jpg" alt="出前館"/>
            <h3>Recent News</h3>
            <a href='https://robotstart.info/2022/11/24/demaecan-hachijo-delivery-experiment.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>出前館「八丈島」にデリバリーサービスを試行導入 ドローンを活用 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQm4Vrv85f4neKiTh_QOhxjM2VMdgNDcs2hwLlvS1ZtA2qX73oWE6NT0fYu2fBtW9NxIe8VPdVd" alt="出前館「八丈島」にデリバリーサービスを試行導入 ドローンを活用 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>シェア 0 ツイート 0 はてブ 0 株式会社出前館が運営する日本最大級のデリバリーサービス『出前館』は東京都、八丈町、株式会社エアロネクストと連携し、八丈島&nbsp;...</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000353.000029254.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『出前館』、八丈島におけるデリバリーサービスの試行導入および ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEM3Gofs8Bw-A4cZUdPbcfOClD0_Ws9__nswdlmsAK1_V5_xmItoyRIFx5z0cnYPtoEopAsgYU" alt="『出前館』、八丈島におけるデリバリーサービスの試行導入および ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>株式会社出前館のプレスリリース（2022年11月24日 14時00分）『出前館』、八丈島におけるデリバリーサービスの試行導入およびドローンを活用した配送実験を12月1&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}