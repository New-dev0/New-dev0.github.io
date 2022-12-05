import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>冨安健洋</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,冨安健洋"/>
        <meta name="description" content="Trending News about 冨安健洋" /></Head><Template>
            <h1 style={{fontSize: "30"}}>冨安健洋</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221202-00010028-nishispo-000-1-view.jpg?exp=10800" alt="冨安健洋"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/19e596a3f0a07f2110b45cc04ed9aea7c79e324b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカー日本代表DF冨安健洋、J1福岡社長にクマさんの絵文字 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwzxMqDau8coKlb22AgwvVPT8DYh-XvPEIZ6t2nRvrMRwBjjLb7EWP9963FqYfiXeqbykDzsBk" alt="サッカー日本代表DF冨安健洋、J1福岡社長にクマさんの絵文字 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>J1福岡が主催するトークショーが2日、福岡市内であり、同クラブの川森敬史社長がワールドカップ（W杯）カタール大会でスペイン撃破に貢献した日本代表の冨安健&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}