import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ポケモン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ポケモン"/>
        <meta name="description" content="Trending News about ポケモン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ポケモン</h1>
            <Image width={800} height={500} src="https://www.famitsu.com/images/000/283/448/z_6377eca42d44a.jpg" alt="ポケモン"/>
            <h3>Recent News</h3>
            <a href='https://www.famitsu.com/news/202211/19283448.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『ポケモン』新作アイテムがアベイルにて本日（11/19）発売 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYwvR8Et8PwBrkXExG-lvHhMs9PJDXM5HLoModj1Og77cdGi4Fkhhj6YILpT3Zv5p2Lmpq0LHA" alt="『ポケモン』新作アイテムがアベイルにて本日（11/19）発売 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>しまむらグループのアベイルは、本日11月19日（土）より全国のアベイル店舗、アベイル公式オンラインストアにて、『ポケットモンスター』シリーズの新作アイテムを販売&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/a19d8ec60870fde1217b335720c5d97c6d2992b3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ポケモン剣盾】「ポケットモンスター ソード・シールド」で一番 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8asysVv5VguAocBGdFYrzqAp7y90YL_tH29mJOu8oewyq_Jt2cjc2tZMIXH6YKWtC-7iJT53E" alt="【ポケモン剣盾】「ポケットモンスター ソード・シールド」で一番 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ポケモンシリーズ最新作である「ポケットモンスター スカーレット・バイオレット」が2022年11月18日に発売されます。新しい冒険も待ち遠しいですが、今だからこそ、前&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/4b583320aa2f3a7ef6009d7a2f5c1dfa120f40d2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>伊東ライフ先生が画像生成AIと『ポケモン』ミリしら対決 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3OamgoAknb44Me640xptNFEf2_My_n_k2YOybTybSeqWI0HJ3X2eg8SK_Z2AVDhUAk1TkATIo" alt="伊東ライフ先生が画像生成AIと『ポケモン』ミリしら対決 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>本記事は伊東ライフ先生の配信内容に触れています。ネタバレにご注意ください。 高度に発達したテクノロジーと、人間としてその道を究めた達人は、一体どちらが上な&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}