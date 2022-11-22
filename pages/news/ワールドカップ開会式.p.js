import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ワールドカップ開会式</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ワールドカップ開会式"/>
        <meta name="description" content="Trending News about ワールドカップ開会式" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ワールドカップ開会式</h1>
            <Image width={800} height={500} src="https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO2665523021112022000000-1.jpg?ixlib=js-2.3.2&auto=format%2Ccompress&ch=Width%2CDPR&q=45&fit=crop&bg=FFFFFF&w=1200&h=630&fp-x=0.5&fp-y=0.5&fp-z=1&crop=focalpoint&s=3e7abed39a745388a36bf65023042f68" alt="ワールドカップ開会式"/>
            <h3>Recent News</h3>
            <a href='https://www.nikkei.com/article/DGXZQODH215XQ0R21C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ開会式に見たカタールのホスピタリティー</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcReePBQOpfaECdhop3eXCPQL5XJVlRS6kPmLucM8OCIurhNY8F72L-7mV0WhsYEOzGId2-ClH8O" alt="ワールドカップ開会式に見たカタールのホスピタリティー" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「カタール2022」が開幕した。さまざまな疑念が飛び交っているが、開催国カタールとエクアドルの開幕戦に先立って行われたオープニングセレモニーは、この国らしく温&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}