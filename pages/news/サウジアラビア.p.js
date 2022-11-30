import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サウジアラビア</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サウジアラビア"/>
        <meta name="description" content="Trending News about サウジアラビア" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サウジアラビア</h1>
            <Image width={800} height={500} src="https://www.arabnews.jp/wp-content/uploads/2022/11/3561686-1583827064-658x370.jpg" alt="サウジアラビア"/>
            <h3>Recent News</h3>
            <a href='https://www.arabnews.jp/article/saudi-arabia/article_80994/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サウジアラビア、イエメンの経済改革に10億ドルの資金を提供</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMi8cmjEmeTGUubmUg0BS5MgHQeYGuR2hNP8GgtAg2RKHE6kIjOBx2Rui8kVpLdLBvOk4E8vS0" alt="サウジアラビア、イエメンの経済改革に10億ドルの資金を提供" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>アラブニュースアラブ通貨基金のプログラムの目的は、銀行・金融・民間セクターの透明性を高めることだサウジアラビア・・・</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/ea06797d607cdf6ef6497d8910028db0cf1c568c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サウジアラビア勝利の祝日受け夫「日本も祝日？」 対する妻の“秀逸 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTl0WHsY67bsTfgU6f0WQ6VoBC-rcfFHo2tfw3CR4VQ05yAcfXE6ZYvNyCBV0y9X35RZOTEfjo1" alt="サウジアラビア勝利の祝日受け夫「日本も祝日？」 対する妻の“秀逸 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ワールドカップでサウジアラビアがアルゼンチンに勝利し、23日を祝日にしたことを受け、夫が「日本もドイツに勝ったけど、明日どうなる？」という質問に対して、妻が&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/134fd0006959aca322745be7b951fdb8c11cbbfa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>エミレーツ・カタールに続く航空会社の誕生か？ 仁義なき航空戦争 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxPidzcIocVMLq9mw-MJvtVyvo7U0bl6r7iEvpqBCffGmYAGglZWIR2V6QOzbJe_UwidhPEj81" alt="エミレーツ・カタールに続く航空会社の誕生か？ 仁義なき航空戦争 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>10月下旬、サウジアラビアが、エアバスのA350、約40機を購入する交渉を行っていると報道された。カタログ価格で、120億ドル（約1.7兆円）に相当する大型の取引だ。</p></div>
            </div>
        </a>
        </Template></>;
}