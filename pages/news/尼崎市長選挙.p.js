import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>尼崎市長選挙</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,尼崎市長選挙"/>
        <meta name="description" content="Trending News about 尼崎市長選挙" /></Head><Template>
            <h1 style={{fontSize: "30"}}>尼崎市長選挙</h1>
            <Image width={800} height={500} src="https://www.kobe-np.co.jp/news/sougou/202211/img/b_15825509.jpg" alt="尼崎市長選挙"/>
            <h3>Recent News</h3>
            <a href='https://www.kobe-np.co.jp/news/sougou/202211/0015825508.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>尼崎市長選 「市民派」継承の松本氏が初当選 維新また敗北</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvWq6rb5ciwwD9UfXwXqC30ku1wJeuXatGqk2xrTw67ZhOj7Stt-eo0RBT2LaTabcl7hd4FrYS" alt="尼崎市長選 「市民派」継承の松本氏が初当選 維新また敗北" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>任期満了に伴う兵庫県尼崎市長選は２０日投開票され、現職後継の無所属新人で前市教育長の松本真氏（４３）が、日本維新の会公認の新人で社会福祉法人理事長の大原.</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/kobe/20221120/2020020200.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>尼崎市長選挙 開票作業始まる｜NHK 兵庫県のニュース</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPVwVJEnr_3tLXE2nDjT2RwepaJ-qrkY3IK2adz6NY8s_mOj7yH9VB8PliiBPe-bidwTEk9YFj" alt="尼崎市長選挙 開票作業始まる｜NHK 兵庫県のニュース" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新人２人の争いとなった尼崎市長選挙は２０日午後８時に投票がすべて終わり、午後９時半から開票作業が始まりました。 任期満了に伴う尼崎市長選挙…</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221120-QGRF4GVJMJNYFKIGZHR5C25LVE/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>兵庫・尼崎市長選 維新敗れる、現職後継・松本氏が初当選確実</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS4NZOr6x8smv-ivDk8Bk0FbttOP-FCoBWjdXEXv5mW5AqRZHazuzBaPen64jQje9rdGMSXchB6" alt="兵庫・尼崎市長選 維新敗れる、現職後継・松本氏が初当選確実" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>任期満了に伴う兵庫県尼崎市長選が２０日、投開票され、無所属新人で前市教育長の松本真氏（４３）が、日本維新の会新人で社会福祉法人理事長の大原隼人氏（４４）を&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/becfb04d0cad34ac929180abcba89e9e0db6eea7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>兵庫・尼崎市長選挙 現職後継の松本さんが初当選 維新候補を破る ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxNAiD2n4FAkFe-jFD8uahj5DOBmR_7SORMLYx3XVpup3rcHnmXwZ18ZDQcPDUWFbhKmw14s49" alt="兵庫・尼崎市長選挙 現職後継の松本さんが初当選 維新候補を破る ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>任期満了に伴う兵庫県尼崎市の市長選で、現職の後継候補の松本真さんが当選を果たしました。 当選したのは、稲村和美市長の後継候補として自民や立憲などが支援した、&nbsp;...</p></div>
            </div>
        </a><a href='https://sun-tv.co.jp/suntvnews/news/2022/11/20/60703/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>尼崎市長選挙 前教育長の松本真氏が当選確実 - サンテレビニュース</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRk2TeU3idoBqKIbaVcGBI1pdGgUpDdKWu-6zRHFqoBQTx1H2u1iGA7TXWjdW5eGwmPhMDoXMWb" alt="尼崎市長選挙 前教育長の松本真氏が当選確実 - サンテレビニュース" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>任期満了に伴う尼崎市長選挙は11月20日投票が行われ、無所属・新人の松本真さん（43）が当選確実となりました。 松本真さんは文部科学省の元官僚で、2018年から3年間&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}