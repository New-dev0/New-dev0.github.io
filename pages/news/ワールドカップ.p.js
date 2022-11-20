import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ワールドカップ"/>
        <meta name="description" content="Trending News about ワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ワールドカップ</h1>
            <Image width={800} height={500} src="https://image.itmedia.co.jp/mobile/articles/2211/20/l_yu_worldcup1.jpg" alt="ワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www.itmedia.co.jp/mobile/articles/2211/20/news045.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>モバイル版Googleにワールドカップのミニゲーム登場</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRc1wTRdtCId_Vz6BM2T0DW72IFqkfXD7We7taTrVI8OlsJxqexgG2aZYXOCDCa-4fT5p62HxIQ" alt="モバイル版Googleにワールドカップのミニゲーム登場" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA ワールドカップがいよいよ開始された。Googleはこれを記念してマルチプレーヤーミニゲームを公開。ゴールを決めて好きなチームを応援しよう。</p></div>
            </div>
        </a><a href='https://www.gqjapan.jp/culture/article/20221119-hublot-maezawa-22-fifa-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ開幕直前、前園真聖がガチ予想！ 「優勝するのは ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwEcWOytMKSr1w-I7j_59JOmCra26BzD_6JnvTpUUnsTN4rRzcK2gQC4ujezKKtxeOs45LX4BO" alt="ワールドカップ開幕直前、前園真聖がガチ予想！ 「優勝するのは ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ワールドカップの優勝予想は意外に難しい。たとえば前回のロシア大会、戦前はドイツ、ブラジルが本命視されていたが、決勝戦はフランス対クロアチアの組み合わせで&nbsp;...</p></div>
            </div>
        </a><a href='https://www.coindeskjapan.com/165879/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ウェブ3の世界に広がるワールドカップ | coindesk JAPAN | コイン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSlcxf3XS4_aJ6b-eQqCqC10tVtfxS-5x3AD0fQRoHJASoJ92GMvMCC6AojdtBX3Ws146VTUJs4" alt="ウェブ3の世界に広がるワールドカップ | coindesk JAPAN | コイン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>90分の試合だけでは物足りないという人のために、2022年ワールドカップがウェブ3の世界に進出している。NFTトレーディングゲーム、NFTコレクション、メタバー ...</p></div>
            </div>
        </a>
        </Template></>;
}