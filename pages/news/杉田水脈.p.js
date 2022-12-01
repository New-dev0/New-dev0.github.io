import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>杉田水脈</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,杉田水脈"/>
        <meta name="description" content="Trending News about 杉田水脈" /></Head><Template>
            <h1 style={{fontSize: "30"}}>杉田水脈</h1>
            <Image width={800} height={500} src="https://www.yomiuri.co.jp/media/2022/11/20221130-OYT1I50119-1.jpg?type=ogp" alt="杉田水脈"/>
            <h3>Recent News</h3>
            <a href='https://www.yomiuri.co.jp/politics/20221130-OYT1T50188/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>杉田水脈氏、「保育所で洗脳教育」投稿を撤回…「不用意な発言 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOPZ37Pl0icQVmvzC9djAfb1zfkLapPbYdyGTJ-KlCLjgkz875iAMPBKJZvz2UtStfQgMq_fSM" alt="杉田水脈氏、「保育所で洗脳教育」投稿を撤回…「不用意な発言 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 杉田水脈総務政務官（衆院議員）は３０日の参院予算委員会で、保育所を巡る問題とコミンテルン（共産主義インターナショナル）を結びつけた過去の&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221130/k10013908211000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>杉田総務政務官 “保育所などで洗脳教育” 投稿撤回の考え示す</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkOchrfsABSwEnfTaAwYQTM8pQY5duj2JyT4DuCZJm_iXzFrL3kuQIcJDza33_vH6tOXK7Nj85" alt="杉田総務政務官 “保育所などで洗脳教育” 投稿撤回の考え示す" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】杉田水脈総務政務官は、午前の参議院予算委員会で、保育所の問題と共産主義者の組織を結び付けた過去のニュースサイトへの投稿に…</p></div>
            </div>
        </a>
        </Template></>;
}