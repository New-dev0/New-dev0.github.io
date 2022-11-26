import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>冨安</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,冨安"/>
        <meta name="description" content="Trending News about 冨安" /></Head><Template>
            <h1 style={{fontSize: "30"}}>冨安</h1>
            <Image width={800} height={500} src="https://www.sanspo.com/resizer/ozAn1oHzzsKevWWNTllGHbyWkdk=/1200x630/filters:focal(585x309:595x319):quality(50)/cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/RNFZSCJQFVJV3MZZSVK6QQE2NU.jpg" alt="冨安"/>
            <h3>Recent News</h3>
            <a href='https://www.sanspo.com/article/20221125-X6NN65KYUNN23FEB7VOPQCFA54/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ドイツ戦途中交代の酒井は病院で検査 冨安も練習に姿見せず…激闘 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfZJ-ArODUATlPo7n3tdsV5vuMv0_nDz7YoUrnbsFnzyfhITUJOOMtXKtzBLCSBmV-6GgltnA1" alt="ドイツ戦途中交代の酒井は病院で検査 冨安も練習に姿見せず…激闘 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ドイツ戦から一夜明けた日本代表の練習に、ＤＦ酒井とＤＦ冨安が姿を見せなかった。チーム広報によると、ともに負傷が理由。中３日で迎えるコスタリカ戦への出場が&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/66995b08d908d6487b0798c5f0f2c7ada8a67827'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Ｗ杯】冨安健洋と酒井宏樹練習欠席 それぞれホテルで調整、酒井 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQv1r6vqg9cwnmFfYVEy443uHE-EOm1C5AmG8o4zp7OMOpVm2jdB4jESE61PBktAlrfeMvRI1ba" alt="【Ｗ杯】冨安健洋と酒井宏樹練習欠席 それぞれホテルで調整、酒井 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ドーハ（カタール）24日】サッカー日本代表はドイツ代表からの大金星から一夜明け、午後4時すぎからトレーニングを行った。</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/Worldcup-Japan-training-report-20221125/blt9b19482cf29b095c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ドイツ戦激闘の余波…日本代表、冨安健洋と酒井宏樹の状態に懸念 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShPENQOqpISPVNT0iO34amXUA32c-3NeqO7dypWOPkGFWoG3W-rlfbDa_G6XoYFn-jRHQE6lFW" alt="ドイツ戦激闘の余波…日本代表、冨安健洋と酒井宏樹の状態に懸念 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【サッカー日本代表 最新情報】日本代表は11月27日のカタール・ワールドカップ（W杯）グループE第2節でコスタリカ代表と対戦する。</p></div>
            </div>
        </a><a href='https://web.gekisaka.jp/news/japan/detail/?373621-373621-fl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>酒井、冨安のコスタリカ戦出場に暗雲…ドイツ戦翌日練習に姿なし ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgZl3CCQAiZMOZYcrxOmGOzSmmxFWeE-Jv6SM1XjChueFeil4K2HhLINP78FkbtiTIJu15_jGL" alt="酒井、冨安のコスタリカ戦出場に暗雲…ドイツ戦翌日練習に姿なし ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本代表はカタールW杯ドイツ戦から一夜明けた24日、ドーハの練習拠点でトレーニングを行った。DF酒井宏樹(浦和)が左太もも裏の違和感、DF冨安健洋(アーセナル)が右&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221124-OYT1T50287/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ドイツ戦出場の酒井宏樹と冨安健洋、もも裏の違和感で全体練習を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFBfQNMvf5EZgOPBKkknL1WhxVfOMzZazndZMOJYBgNEwMsX8Ny-BW-ikKEq3c2QdVuv7bPO7g" alt="ドイツ戦出場の酒井宏樹と冨安健洋、もも裏の違和感で全体練習を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）日本代表のＤＦ冨安健洋（アーセナル）が右太もも裏、ＤＦ酒井宏樹（浦和）が左太もも裏の違和感を訴え、２４&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dazn.com/ja-JP/news/other/2022-11-24-japan-training/142b5vhat7fdo1ltvrgv7u4a87'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>酒井宏樹と冨安健洋がホテル休養のため練習不参加。第2戦の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQntpo5DUxEikihqz7b54v4frkT311KSd7O_zU58FzTEo2v00GWdNVBEOMnZDw_KQ6Ao_ApT9Uk" alt="酒井宏樹と冨安健洋がホテル休養のため練習不参加。第2戦の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【サッカー日本代表 ニュース】ドイツ戦でアップセットを起こした日本代表は24日、ドーハでトレーニングを実施。ドイツ戦でスタメン出場した選手たちがリカバリーと&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sponichi.co.jp/soccer/news/2022/11/25/kiji/20221125s00002014090000c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本代表金星の“代償” 酒井&amp;冨安が次戦コスタリカ戦欠場か ともに ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="日本代表金星の“代償” 酒井&amp;冨安が次戦コスタリカ戦欠場か ともに ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【FIFAワールドカップ（W杯）カタール大会1次リーグE組 日本2―1ドイツ （ 2022年11月23日 ハリファ国際競技場 ）】 日本代表は劇的な勝利の代償を払うことになった。</p></div>
            </div>
        </a>
        </Template></>;
}