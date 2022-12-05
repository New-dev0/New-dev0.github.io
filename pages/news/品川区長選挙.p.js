import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>品川区長選挙</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,品川区長選挙"/>
        <meta name="description" content="Trending News about 品川区長選挙" /></Head><Template>
            <h1 style={{fontSize: "30"}}>品川区長選挙</h1>
            <Image width={800} height={500} src="https://static.tokyo-np.co.jp/image/article/size1/0/c/1/7/0c17fc70725cd76271b07cc816107d9a_1.jpg" alt="品川区長選挙"/>
            <h3>Recent News</h3>
            <a href='https://www.tokyo-np.co.jp/article/217919'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【速報】品川区長選挙の再選挙 元都議の森沢恭子さんが初当選</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSX50K5V048UhTTVntM3-JBm3RW6WhuKqI21K8L1c-yBY_JaT5G0Obqqkn9-3eZnK0vGa3_vVss" alt="【速報】品川区長選挙の再選挙 元都議の森沢恭子さんが初当選" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>森沢さんは、前区長の任期満了に伴い10月に実施された前回区長選でも6人の中で最多の約2万7000票を獲得していた。法定得票（有効投票総数の4分の1）には約590票足りず、&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/election/local/20221204-OYT1T50196/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>品川区長選「再々選挙」にはならず、森沢恭子氏が初当選…前区議 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6PTnvPrnzTB2VOielS6vM5nWc28_xSRgvrLvnpPU6GoHod-HfXrPBE8wMxMJvThawBiqRiVHh" alt="品川区長選「再々選挙」にはならず、森沢恭子氏が初当選…前区議 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>１１月２７日告示の再選挙も、再び新人６人が争う構図となり、史上初の「再々選挙」となる可能性もあったが、森沢氏の得票は４万票を超えて当選ラインに達した。</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221204-KWEZXVOQIBMQDLE55C2UGJIUNU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>品川区長選再選挙 森沢氏が初当選</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_OAW0cBl6S-bMbatNWUNpFpv7aDi0d5TtgdQU2qFTbUjA1a4clNXzx8FddnoCHi4OC2pyMaLc" alt="品川区長選再選挙 森沢氏が初当選" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>品川区長選の再選挙は４日に投開票され、元都議で無所属新人の森沢恭子氏（４４）が、ほか５人の候補者を退け初当選を果たした。法定得票数を上回り、再々選挙は回避&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQD43G3MQD2OXIE024.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>品川区長選の再選挙、1回目1位が初当選 全国初の再々選挙は回避</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTCKtG-86SPBE9WPv0QjWX4wPRIcNagISxto4n9wEP3Kb5TQvuZ3vj-2vxUK1oR_0fCc9EsZHY9" alt="品川区長選の再選挙、1回目1位が初当選 全国初の再々選挙は回避" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>10月の選挙で法定得票（有効投票総数の4分の1）に届いた候補がいなかった東京都品川区長選の再選挙が4日投開票され、1回目で得票1位だった無所属新顔の前都議、森沢&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/4664298c1a8dca38ba27013f8fb71034b5baa90c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>品川区長選 新人の森沢恭子さん初当選（日テレNEWS）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQovpGOUYRw-NgqXY13FGaN1EtHWpqTeP9aHE9XpS1y1UUjBxE-ZkT1qsKgLIiMRGIqejtxwHhEDQ" alt="品川区長選 新人の森沢恭子さん初当選（日テレNEWS）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>当選に必要な得票数に達した人がいなかったため、再選挙となった東京都の品川区長選挙は4日に投開票が行われ、新人の森沢恭子さんが初当選しました。 品川区長選、再&nbsp;...</p></div>
            </div>
        </a><a href='http://www3.nhk.or.jp/shutoken-news/20221205/1000087344.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>東京 品川区長再選挙 無所属で新人の森澤恭子氏初当選｜NHK 首都圏 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPVwVJEnr_3tLXE2nDjT2RwepaJ-qrkY3IK2adz6NY8s_mOj7yH9VB8PliiBPe-bidwTEk9YFj" alt="東京 品川区長再選挙 無所属で新人の森澤恭子氏初当選｜NHK 首都圏 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】１０月の選挙でいずれの候補者も当選に必要な票数に届かず、首長選挙では都内初の再選挙となった東京・品川区の区長選挙は４日投票が行われ、無所属…</p></div>
            </div>
        </a>
        </Template></>;
}