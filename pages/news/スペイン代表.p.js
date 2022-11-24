import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>スペイン代表</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,スペイン代表"/>
        <meta name="description" content="Trending News about スペイン代表" /></Head><Template>
            <h1 style={{fontSize: "30"}}>スペイン代表</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221123-00121038-sdigestw-000-2-view.jpg?exp=10800" alt="スペイン代表"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/063010bb911d861ea6a8a8f996cdb06d9c2d3546'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>バルサでは低調なスペイン代表のブスケッツ。パスサッカーを支え ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQHusmL_fU7N6oVHxXmfQoppFM1x9RhxPAXEXuypME5KkFsdnb899YWNOWFUjEj8mADb8QvpROA" alt="バルサでは低調なスペイン代表のブスケッツ。パスサッカーを支え ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタール・ワールドカップ（W杯）におけるスペイン代表の戦術上のキーマンと言えば、やはりセルヒオ・ブスケッツだろう。ルイス・エンリケ監督も、「世界中を見渡して&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}