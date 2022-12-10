import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SEVENTEEN</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SEVENTEEN"/>
        <meta name="description" content="Trending News about SEVENTEEN" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SEVENTEEN</h1>
            <Image width={800} height={500} src="http://spice.eplus.jp/images/bKtrtE4zFR9pg98aDOKoAXkfeqFN8MXFNZZ1E5auTF8CTlAod6TSRqbQrPJVphUn" alt="SEVENTEEN"/>
            <h3>Recent News</h3>
            <a href='http://spice.eplus.jp/articles/311953'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS、SEVENTEEN、TWICE、ENHYPENなど9グループが参加する ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSzERQmaO8ptdLNUrHfC_7iijyE4mFKLJvERRlliCbHT7rg6YnEOoVloMGFJWyF07nMV0ELYHe1" alt="BTS、SEVENTEEN、TWICE、ENHYPENなど9グループが参加する ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>韓国芸能ニュースメディア“Dispatch(ディスパッチ)”の創立10周年を記念したK-POPフェス『D&#39;FESTA OSAKA』が、2022年12月20日（火）から2023年1月22日（日）まで、大阪&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/dd4ffe9a69ca34517949535f426babbdad993bd2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SEVENTEEN「2022 FNS歌謡祭」でスペシャルパフォーマンスを ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvvOMaOUPgmnls8NgxbqJQFS9bnkREfZlzU91lRkW8w8bRqv6KDjQ0g_fsBkR8OCACZYAbcdnd" alt="SEVENTEEN「2022 FNS歌謡祭」でスペシャルパフォーマンスを ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SEVENTEENが、昨日（7日）に放送されたフジテレビ系列「2022 FNS歌謡祭」第1夜に出演した。 彼らは、「FNS歌謡祭」に過去3回出演したが、日本での撮影は今回が初めてと&nbsp;...</p></div>
            </div>
        </a><a href='https://withnews.jp/pressrelease/article/8641'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>大阪南港ATCで開催のK-POPフェス「D&#39;FESTA OSAKA」のチケット ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsEtiAhhlmtCnyQZyEMouvUYy2XE9jQo6RntFY_X1AIR882lLycJR6GbfTk63LR0yd16Nue2Au" alt="大阪南港ATCで開催のK-POPフェス「D&#39;FESTA OSAKA」のチケット ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ENHYPEN、TXT、STRAY KIDS、NCT DREAM、 NCT 127、 TWICE、SEVENTEEN、BTS、NU&#39;ESTの9グループが参加するK-POPフェスティバルが大阪に上陸！</p></div>
            </div>
        </a>
        </Template></>;
}