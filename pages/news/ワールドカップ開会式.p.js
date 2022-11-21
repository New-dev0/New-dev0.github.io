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
            <Image width={800} height={500} src="https://media.vogue.co.jp/photos/637a6728b07f28ac611f3997/16:9/w_1280,c_limit/GettyImages-1443039499.jpg" alt="ワールドカップ開会式"/>
            <h3>Recent News</h3>
            <a href='https://www.vogue.co.jp/celebrity/article/bts-jung-kook-world-cup-2022-opening-ceremony'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTSのJung Kook（ジョングク）、ワールドカップカタール大会の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAgDLJV9F5A3nStsT-oH5udcaH2QqXkMq0QWUz8YoxhtgasVjoLualDwFNW9EdTLicimSXA9n_" alt="BTSのJung Kook（ジョングク）、ワールドカップカタール大会の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップ（W杯）カタール2022のオープニングセレモニーが11月20日（現地時間）、北部アル・ホールにあるアル・バイト・スタジアムで行われた。</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221118-OYT1T50227/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＢＴＳジョングクさん、Ｗ杯開会式で公式ソングを熱唱…カタール ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCJmcoQwGy0grfOC2ZZeyidyFkkSJ52_hOykzIiPCxwfZgef11rhiakYauhMzGbadQUMb9n3Is" alt="ＢＴＳジョングクさん、Ｗ杯開会式で公式ソングを熱唱…カタール ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 ＦＩＦＡワールドカップ（Ｗ杯）カタール大会が２０日に開幕した。首都ドーハのアルバイト競技場で、開幕戦の直前に行われた開会式には世界的な人気を&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/62ee497f257bf411937bef456aabcf930d57fb27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「待ち切れない！」カタールW杯の開会式に出演するBTSメンバーの ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwxuJXgdepSXjzccqWFzL6ZGbKrUTxiUbCIg-3jbsTLFhwjW7g1Wy_UGT7EYxdBXEyR1s5ZtHS" alt="「待ち切れない！」カタールW杯の開会式に出演するBTSメンバーの ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月20日、国際サッカー連盟（FIFA）のワールドカップ公式SNSが更新。開会式に出演するBTSのメンバーであるジョングクが出演する短いムービーを公開し、大きな反響を&nbsp;...</p></div>
            </div>
        </a><a href='https://www.crank-in.net/news/117911/1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS・ジョングクが魅了！ FIFAワールドカップ開会式で圧巻 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYxPjMmWk1uoANrrWs2CeoW6MBrcDDOe_Dv_cxzZbvoQ_NeBuJYSTomXk1U4y1R4Rmnp7f06XV" alt="BTS・ジョングクが魅了！ FIFAワールドカップ開会式で圧巻 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4年に1度のサッカーの祭典・FIFAワールドカップのカタール大会が日本時間20日夜に開幕。開会式には韓国の人気グループ・BTSのジョングクが登場し、公式ソングを熱唱&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%AA%E3%82%B9%E3%83%88/bts-jungkook-worldcup-soundtrack-2022/blt4b1ab547364ed301'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTSジョングクの新曲リリースはいつ？サッカーカタール・ワールド ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBgK-xzaL9m__sOXz1WtOMN7YYjhFgCIFuHeTedfjzfjPfNMyN-7rJaJRkIGU4gxiOJBbGFbQ2" alt="BTSジョングクの新曲リリースはいつ？サッカーカタール・ワールド ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BTSジョングクがソロ新曲「Dreamers」を発表！FIFAワールドカップカタール2022の公式サウンドトラックのリリース日、ミュージックビデオはいつから配信？</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/208f66127e381d07909ebd41957d57b88912f91c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTSのJUNG KOOK W杯開会式で公式ソング披露へ（聯合ニュース）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4a17xIT_5t4avrYQP79_lhtzAORxZoT-Jwr8JJ4L1zj3g5QLgr73RsZJJpVQapcLd5ize4ho5" alt="BTSのJUNG KOOK W杯開会式で公式ソング披露へ（聯合ニュース）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ソウル聯合ニュース】世界的な人気を誇るBTS（防弾少年団）のJUNG KOOK（ジョングク）が20日夜（日本時間）、サッカーのワールドカップ（W杯）カタール大会の開会式&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}