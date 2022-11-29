import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ジャパンカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ジャパンカップ"/>
        <meta name="description" content="Trending News about ジャパンカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ジャパンカップ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221127-00020986-tspkeiba-000-1-view.jpg?exp=10800" alt="ジャパンカップ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/b5e49c91957270fff6a26e640dadd701cdb48341'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ジャパンカップ】ルメールお手上げ…絶好枠が〝災い〟７着 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSy6DkgmWkZWgI2PVUf-CMxabVDAXYxHtWlM5meE64hBvb9gZVzR7uVuHa1Nhc5zoSLfZdSS9A7" alt="【ジャパンカップ】ルメールお手上げ…絶好枠が〝災い〟７着 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＧⅠジャパンカップ＝２０２２年１１月２７日（日曜）３歳上、東京競馬場、芝２４００メートル］ フランスから参戦したオネストはグランドグローリーに次ぐ７着に&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/60035e55d208d59a8f4a4f645add66f00cab9487'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ジャパンカップ・ラップ回顧】スローペース決着でも〝価値あり ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKO4HO-BMBD7L9yY9HU96cm52dCp0VcgViZq2rsxP9bxiCupy8utigUtnp15hbUr96aKq4EeUe" alt="【ジャパンカップ・ラップ回顧】スローペース決着でも〝価値あり ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＧⅠジャパンＣ＝２０２２年１１月２７日（日曜）３歳上、東京芝２４００メートル］ 明石 直前の３勝クラス（ウェルカムＳ）はジャックドールが勝った前年よりコンマ６&nbsp;...</p></div>
            </div>
        </a><a href='https://news.netkeiba.com/?pid=news_view&no=214686'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ジャパンC】パリ大賞覇者オネストは7着 ルメール「アンラッキー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRs91JLl2waHclC-Jq32LC0o7-MMknHdthdRVgKA_bfTU00ZPFsorHW21SA_QGlIGIdj7P8GJBf" alt="【ジャパンC】パリ大賞覇者オネストは7着 ルメール「アンラッキー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>G1・ジャパンカップ(2022年11月27日 東京芝2400メートル) 国内外の強豪が集った一戦は、ヴェラアズール(牡5＝渡辺)が制し、G1初制覇を飾った。</p></div>
            </div>
        </a>
        </Template></>;
}