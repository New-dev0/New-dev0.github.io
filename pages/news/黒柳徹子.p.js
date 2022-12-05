import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>黒柳徹子</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,黒柳徹子"/>
        <meta name="description" content="Trending News about 黒柳徹子" /></Head><Template>
            <h1 style={{fontSize: "30"}}>黒柳徹子</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221202-00000389-spnannex-000-2-view.jpg?exp=10800" alt="黒柳徹子"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/b5f7021594d65514801e2c465ae820e20b0eaf35'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒柳徹子 地球最後の日にやりたいこと＆100歳の夢「将来の夢だっ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCTLapGRI-_b-tm3_JsbMzwcIuuA2IS7pMGdgAv3vpr29JDcteaNuHW0cq7KEoI8-lB3w4E9z2" alt="黒柳徹子 地球最後の日にやりたいこと＆100歳の夢「将来の夢だっ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優の黒柳徹子（89）が、2日放送の日本テレビ系「芸能人監督グランプリ」（後7・00）にVTR出演し、思い描く人生最後の日について語った。 芸能人が監督となって本気で&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbbtoday.com/article/2022/12/03/204363.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒柳徹子、人生最後にやりたい夢を語る</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGMy4jEGxMoQ3frBIm9IVjU7kqRSVjKF3Sa2Y8TR_efy_pLC42hIHrw1RYyestqmdtam5Jofj_" alt="黒柳徹子、人生最後にやりたい夢を語る" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>黒柳徹子が、2日放送の『芸能人監督グランプリ』（日本テレビ系）に出演。人生最後にしたいことを明かした。</p></div>
            </div>
        </a>
        </Template></>;
}