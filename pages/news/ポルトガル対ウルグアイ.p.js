import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ポルトガル対ウルグアイ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ポルトガル対ウルグアイ"/>
        <meta name="description" content="Trending News about ポルトガル対ウルグアイ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ポルトガル対ウルグアイ</h1>
            <Image width={800} height={500} src="https://www.sanspo.com/resizer/slr1T8KW3zZLndcRiUQ4RYblfrQ=/1200x630/filters:focal(1754x782:1764x792):quality(50)/cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/L3DVIVZGTBOPZAFY4NO6QS3V7U.jpg" alt="ポルトガル対ウルグアイ"/>
            <h3>Recent News</h3>
            <a href='https://www.sanspo.com/article/20221129-GA32SQ7TE5L55C7A7ZMWU3JARI/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本人児童、選手と入場 Ｗ杯、ポルトガル対ウルグアイ戦</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbJksunZIHlpf8sxzLysiucv97Ic-oQtW6g09GtzAlwT4HSKZEPo_74kFDytEDaTcVlcM1AytO" alt="日本人児童、選手と入場 Ｗ杯、ポルトガル対ウルグアイ戦" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ドーハ共同】サッカー・ワールドカップ（Ｗ杯）カタール大会のポルトガル対ウルグアイ戦が２８日、首都ドーハ近郊のルサイル競技場であり、ドーハ日本人学校の児童ら&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}