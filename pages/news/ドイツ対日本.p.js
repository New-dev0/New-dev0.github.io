import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ドイツ対日本</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ドイツ対日本"/>
        <meta name="description" content="Trending News about ドイツ対日本" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ドイツ対日本</h1>
            <Image width={800} height={500} src="https://static.reuters.com/resources/r/?m=02&d=20221123&t=2&i=1615160718&r=LYNXMPEIAM0K6&w=800" alt="ドイツ対日本"/>
            <h3>Recent News</h3>
            <a href='https://jp.reuters.com/article/soccer-japan-germany-idJPKBN2SD15A'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本、ドイツに逆転勝利 勝ち点3＝サッカーＷ杯カタール大会</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkV_2NlZlXg0Hz_tNkqCb_j2qG_lLMuBcHIRLK7Mngy5Q5F5DPj0qWgEyPUwZ8kTIvynKT0YEy" alt="日本、ドイツに逆転勝利 勝ち点3＝サッカーＷ杯カタール大会" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーワールドカップ（Ｗ杯）カタール大会は２３日、１次リーグＥ組で日本（ＦＩＦＡランキング２４位）がドイツ（同１１位）を２対１で下し、勝ち点３を上げた。</p></div>
            </div>
        </a><a href='https://dazn.com/ja-JP/news/world-cup/20221123-wc-japan-germany/ctqb8ocr4zrq1451m6qqib1wa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本のドイツ撃破に各国メディアも驚き ｜ カタールW杯2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVMHL4iRJmOJEa63e6JxSQ2VLSUOfzuZohfY-XLr9gf_k3nsbuGdy2ah0f_UYqOvSA2B8gmrA_" alt="日本のドイツ撃破に各国メディアも驚き ｜ カタールW杯2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【サッカー日本代表・ニュース】日本代表はドイツ代表に2-1で逆転勝利した。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/3090b7be22c4d0a072953d5b029ae2ef693527fc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ドイツ撃破の日本に海外メディアも驚きの反応…独メディアは「嘘 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSogElRxcXUouTItFu_Pus7bI1Nz5JDSabKC2rS_NEXXbT-46PocLZOXvJWycdR4j9IaEBmuHVl" alt="ドイツ撃破の日本に海外メディアも驚きの反応…独メディアは「嘘 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月23日、カタールW杯・グループE、日本対ドイツの試合がハリファ・インターナショナル・スタジアムで行われ、日本代表が2-1の逆転勝利を収めた。</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221123-OYT1T50140/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【詳報】日本、ドイツに逆転勝利…後半から出場の堂安と浅野が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmTn3JGpnHiMVHe09lRXnAesdV4wSPQeKBXeU_gw1V4dimVOEapahtdwRq245UpAkj6swVJmHS" alt="【詳報】日本、ドイツに逆転勝利…後半から出場の堂安と浅野が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は２３日、グループリーグＥ組の日本代表（世界ランキング２４位）とドイツ代表（同１１位）の&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.co.jp/video/player/8726313'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ハイライト】ドイツ VS 日本 ドイツを破った日本代表！浅野の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSoabz95FpCxRbR8CROcVkdAizDT4WjPGS028sonBra116m0GAIlqLAPumrF5uO3-eNxvbXUh2f" alt="【ハイライト】ドイツ VS 日本 ドイツを破った日本代表！浅野の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ハイライト】ドイツ VS 日本 ドイツを破った日本代表！浅野の華麗なトラップから流れるようなゴール など -「株式会社AbemaTV」の動画再生ページです。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221123/k10013901291000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 日本 ドイツに逆転勝利で勝ち点3 後半に2得点</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzl9TUhIFZNbAr7ydQhp2YI3Abip6m9nN4PbfntmtCH8SiTLY_grFQucOpTruECWCOA7IYWuj-" alt="ワールドカップ 日本 ドイツに逆転勝利で勝ち点3 後半に2得点" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーのワールドカップカタール大会、世界ランキング24位でグループEの日本は23日の1次リーグの初戦、世界11位で西ド…</p></div>
            </div>
        </a><a href='https://toyokeizai.net/articles/-/634634'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>W杯｢日本vsドイツ戦｣プロの観戦術､3大ポイント</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTEY_zrNw3nRLR7cLVxVgfAq2sJAg4GrQBlC3r37gjVzTAVw49hw4yDFfkdk5sJ5mOqVLhbxF5h" alt="W杯｢日本vsドイツ戦｣プロの観戦術､3大ポイント" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ついにカタールW杯が開幕し、日本代表は11月23日にドイツ代表との初戦を迎える。W杯は五輪と並ぶ世界最大のスポーツの祭典だ。普段サッカーに馴染みがなくても、W杯となっ&nbsp;...</p></div>
            </div>
        </a><a href='https://dazn.com/ja-JP/news/world-cup/what-time-germany-japan-match-20221123/141ty24wkuqc1103a2uxol0i0i'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ドイツ戦は何時から？NHK・ABEMAの解説者は？サッカー日本代表 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQT12bjqKLfsX7Lo5o2VLwR3ouMM4dF_-Bc3pyxK5ta7nCcJnWwJ4GRfEX83rmUH9WttQ0cb2Hk" alt="ドイツ戦は何時から？NHK・ABEMAの解説者は？サッカー日本代表 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップ・カタール2022 グループリーグE組初戦、サッカー日本代表はドイツ代表と対戦。試合は何時から？</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%AA%E3%82%B9%E3%83%88/when-time-japan-germany-20221123/bltf2c11e638cd8bce4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ドイツ戦は何時から？森保ジャパンがカタール・ワールドカップ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcScB2MDZT5UuYE5OUVrB4L9wQCV5O5dLOeK7vrE07OX4hcA18mvXG5KcU_E_W4G3tbUgqpG_I0N" alt="ドイツ戦は何時から？森保ジャパンがカタール・ワールドカップ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーFIFAワールドカップ・カタール2022のグループステージE組初戦が11月23日に開催。ドイツ戦は何時から？</p></div>
            </div>
        </a><a href='https://www.gqjapan.jp/culture/article/20221122-soccer-world-cup-japan-germany-daichi-kamada-wataru-endo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本対ドイツ、テーマは“負けない”こと！キープレイヤーはMF鎌田 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLcjGCHOTurmnlAeKqK-ABiLG4QBu5vw2VlRHT2jFnI-Y7W3qvEkZNsYFDh80qgbvbiLZ3-VPA" alt="日本対ドイツ、テーマは“負けない”こと！キープレイヤーはMF鎌田 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022の大会4日目は、いよいよ日本代表が登場。格上の強豪ドイツにどう挑むべきか？ 戸塚啓が解説する。</p></div>
            </div>
        </a>
        </Template></>;
}