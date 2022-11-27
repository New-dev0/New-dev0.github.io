import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>黒島結菜</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,黒島結菜"/>
        <meta name="description" content="Trending News about 黒島結菜" /></Head><Template>
            <h1 style={{fontSize: "30"}}>黒島結菜</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221126-00000001-nkgendai-000-1-view.jpg?exp=10800" alt="黒島結菜"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/218de0452fa34bb3546657c553cbbcb2388230b8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒島結菜は「ビアボール」CMで好感度回復なるか？ 吉高由里子や ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRI_VCAAQ6dHRNKSPzW2VfrnUhQ6iNAZauVudhvo5Z1obWUHpvUMSAD2LgVoWlRUO8obpG7qIdV" alt="黒島結菜は「ビアボール」CMで好感度回復なるか？ 吉高由里子や ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>編に出演している。 サントリーのお酒のCMといえば、過去にもトリスウイスキーハイボールの吉高由里子（34）や、角ハイボールの井川遥（46）、金麦の石原さとみ（35）、&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCT5R2JQCTDIFI003.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒島結菜さんがNAHAマラソンのスターター 「ちむどんどん」主演</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTjN_vMdorAzSoBOAnr3yhysOjHWEAZxK8FGW6kRtMUXrJiyDDClpA8SX6ib88loZCHPGzh837Q" alt="黒島結菜さんがNAHAマラソンのスターター 「ちむどんどん」主演" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12月4日開催の第36回NAHAマラソンで、沖縄県出身女優の黒島結菜さんがゲストスターターを務めることが決まった。大会実施本部が24日、那覇市役所で会見した。</p></div>
            </div>
        </a><a href='https://news.livedoor.com/topics/detail/23267294/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒島結菜、サントリー「ビアボール」の初CMに抜擢 好感度回復なる ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTD8VKY_hN6NDmwfXv81IdwRQCV5YJFsnRXskZjWry_3FRGJCwN_tEuZYW7G_Jyz5DshgurldQb" alt="黒島結菜、サントリー「ビアボール」の初CMに抜擢 好感度回復なる ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優の黒島結菜（25）が、サントリーが15日に発売した「ビアボール」の初CMに抜擢されて話題を振りまいている。NHK紅白司会が橋本環奈に決まった舞台裏 “本命”黒島結菜&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}