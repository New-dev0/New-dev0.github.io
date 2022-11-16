import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>藤井聡太</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,藤井聡太"/>
        <meta name="description" content="Trending News about 藤井聡太" /></Head><Template>
            <h1 style={{fontSize: "30"}}>藤井聡太</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/iwiz-yn/rpr/matsumotohirofumi/00323986/title-1668471524591.jpeg?pri=l&w=800&h=450&order=c2r&cx=1&cy=0&cw=1777&ch=1000&exp=10800" alt="藤井聡太"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/byline/matsumotohirofumi/20221115-00323986'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>史上最年少名人候補・藤井聡太竜王（20）Ａ級４勝１敗！ 正確無比 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgmpZ-GG70-4X6hhDrIh-ovbhHytviEcuTtMfXA8nAjDEPjHvhTiEtRpq97I4aBIhRAwWv5lxf" alt="史上最年少名人候補・藤井聡太竜王（20）Ａ級４勝１敗！ 正確無比 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>名人挑戦権を争うＡ級順位戦は折り返し地点の５回戦が進行中です。１敗決戦となった藤井聡太竜王と広瀬章人八段の対戦は、藤井竜王が制しました。</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/igoshougi/ryuoh/blog/20221114-SYT8T3521431/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>＜第２局特別編・おーよー散歩③＞願い事、長考の藤井聡太竜王に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIWz0LVWeKUC7A4kZj6IYw8g6Kes4c7bWdGfhUFrg9GFrcvjcGKCQ8r9UE8vPc2I2KJo8vHJpO" alt="＜第２局特別編・おーよー散歩③＞願い事、長考の藤井聡太竜王に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 仁和寺の金堂特別拝観を終えた広瀬章人八段を待っていたイベントは、護摩祈願でした。先に護摩木の前に着いた藤井聡太竜王は、「心願成就」「諸難&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221115-2PLC54QIEJLTDP5BYQ3PNM2QIM/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井聡太五冠勝ち、順位戦Ａ級４勝目</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmCgphVVRmef1L94QOLSInIT2edh24MgMFs3bRc0Hsnxi2OGibN5gYTexxHDZDBJ4YzThxqDHA" alt="藤井聡太五冠勝ち、順位戦Ａ級４勝目" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の藤井聡太五冠（２０）＝棋聖・竜王・王位・叡王・王将＝は１４日、東京・千駄ケ谷の将棋会館で指された第８１期順位戦Ａ級５回戦で、後手の広瀬章人八段（３５）&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/general/nikkan/news/202211140001298.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井聡太竜王が広瀬章人八段に勝利しトップ「まだ折り返し」史上 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="藤井聡太竜王が広瀬章人八段に勝利しトップ「まだ折り返し」史上 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>渡辺明名人（38）への挑戦権を争う、将棋の第81期A級順位戦5回戦、藤井聡太竜王（20）対広瀬章人八段（35）戦が14日、東京・千駄ケ谷「将棋会館」で行われた…</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221115-4CWCLOZFFFGSRFHB3GVONR365Y/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井聡太五冠、順位戦Ａ級で広瀬章人八段を破る ４勝１敗で首位 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="藤井聡太五冠、順位戦Ａ級で広瀬章人八段を破る ４勝１敗で首位 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の藤井聡太五冠（２０）＝棋聖・竜王・王位・叡王・王将＝が、１４日に東京都内で指された第８１期順位戦Ａ級５回戦で広瀬章人八段（３５）を退け、リーグ成績を４&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/9f1b8a2a86202515daf4908d20070cc6a3437027'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>羽生善治九段の復調 タイトル１００期達成へ邁進 藤井聡太五冠との ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVzTkUqwD7AxuzIWTb2JLPd-KSyvF1J_LH1jcIuNJ2_yaIDzwHQb6TB8qNq4nVlFiAnayvh0Jn" alt="羽生善治九段の復調 タイトル１００期達成へ邁進 藤井聡太五冠との ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【勝負師たちの系譜】 ひと頃、羽生善治九段のタイトル１００期なるかという話題は、よく取り上げられていた。 ２０１７年度に渡辺明竜王（当時）から竜王を奪取して、&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCH0C7RQCGUCVL036.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井竜王、首位タイで折り返し 名人挑戦「まだ意識する感じでない」</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQ0NKoGK5pFmqgsA2Uhw7IsHRmuGspCdfGJoNw-Ov_m8VTrn1v21BXT8noOhBqbJ3ziLeR8fBS" alt="藤井竜王、首位タイで折り返し 名人挑戦「まだ意識する感じでない」" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の藤井聡太竜王（20）=王位・叡王・王将・棋聖と合わせ五冠=が14日、東京都渋谷区の将棋会館で行われた第81期名人戦A級順位戦（朝日新聞社、毎日新聞社主催）5回戦&nbsp;...</p></div>
            </div>
        </a><a href='https://mainichi.jp/articles/20221114/k00/00m/040/291000c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井王将、広瀬八段に勝ちトップに並ぶ 名人戦A級順位戦 - 毎日新聞</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSOnGOZbBOalZlVLs3-JGKRfGcXGW3N_IxuqFi_DD-aIfG-9AH_9jU2obNDrMZKyaId3VQZqQS0" alt="藤井王将、広瀬八段に勝ちトップに並ぶ 名人戦A級順位戦 - 毎日新聞" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の第81期名人戦A級順位戦（毎日新聞社、朝日新聞社主催）の藤井聡太王将（20）と広瀬章人八段（35）との対局が14日、東京都渋谷区の将棋会館で指され、藤井王将&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}