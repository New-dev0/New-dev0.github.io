import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>3時のヒロイン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,3時のヒロイン"/>
        <meta name="description" content="Trending News about 3時のヒロイン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>3時のヒロイン</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221122-00000254-spnannex-000-5-view.jpg?exp=10800" alt="3時のヒロイン"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/c2565b9088d22fb977ae3aa541337b784acc82b3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3時のヒロイン福田 親しい友人のネガティブ情報で困ったこと 男性 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfJDy3XPT0fArrpzbJWK55W1-lNIr8HoyLblYkdeRvvIUbsqh9E9NK3XnNMm_4rI7MKalKzNjw" alt="3時のヒロイン福田 親しい友人のネガティブ情報で困ったこと 男性 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>お笑いトリオ「3時のヒロイン」の福田麻貴（34）が22日放送のフジテレビ「ポップUP！」（月～金曜前11・45）に生出演。親しい友人のネガティブな情報を言えずに困った&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}