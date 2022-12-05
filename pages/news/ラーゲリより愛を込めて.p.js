import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ラーゲリより愛を込めて</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ラーゲリより愛を込めて"/>
        <meta name="description" content="Trending News about ラーゲリより愛を込めて" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ラーゲリより愛を込めて</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221203-42010636-nksports-000-40-view.jpg?exp=10800" alt="ラーゲリより愛を込めて"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/58c8ad4a2ed76cf5671e7c8d554f3da712b6dbcb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>熱演の重なり合いが生んだ極限の別世界 終盤の「奇跡」に心温まる ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSCmIlKUUq3CZLiBIms4zbAPPFMqmPQxBMUfIqLzZIsbXKb8TbJsk3EYn1KalvCj8s_h-QXvAcO" alt="熱演の重なり合いが生んだ極限の別世界 終盤の「奇跡」に心温まる ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>旧ソ連が対日参戦したのは終戦間際の45年8月8日である。停戦後に武装解除した日本兵や一部の民間人はシベリアなどの強制収容所（ラーゲリ）に連行されることになる。</p></div>
            </div>
        </a>
        </Template></>;
}