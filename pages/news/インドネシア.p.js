import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>インドネシア</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,インドネシア"/>
        <meta name="description" content="Trending News about インドネシア" /></Head><Template>
            <h1 style={{fontSize: "30"}}>インドネシア</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221204/K10013912781_2212041825_1204182923_01_02.jpg" alt="インドネシア"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221204/k10013912781000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア ジャワ島火山噴火 火砕流確認 警戒レベル最高に</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQygkGvdp3p0pYKAr_8i6_zU7H4TzzKw37mzr4JnfbaaaFL-cT6UkByBNEg0UprRlt8TNsQ7YOE" alt="インドネシア ジャワ島火山噴火 火砕流確認 警戒レベル最高に" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】インドネシア ジャワ島の火山の噴火について、インドネシア当局は、引き続き火砕流が発生しているとして、4段階の警戒レベルを…</p></div>
            </div>
        </a><a href='https://jp.reuters.com/article/indonesia-volcano-idJPKBN2SO0IO'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシアのスメル火山が噴火、約2000人避難</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwjStNeoDquAmDsStN2UsiuFoEYbJqUhrj0fbTyCnJZ30Q1iRabhK37cX24-xnz_JEuu3kuWYg" alt="インドネシアのスメル火山が噴火、約2000人避難" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[ジャカルタ ４日 ロイター] - インドネシア・ジャワ島で４日、スメル火山が噴火した。噴煙が上空１万５０００メートルに達し、２０００人近くが避難を余儀なくされた&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/national/20221204-OYT1T50066/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア・ジャワ島で大規模噴火、噴煙高さ１５キロに ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJT7wNUUXJWQmRO1Bh_s3-OdMDPyZ2ysXeGnKFO5s1UZjSyir22V6opXY4C7STAxOncqwEtwEl" alt="インドネシア・ジャワ島で大規模噴火、噴煙高さ１５キロに ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 気象庁は４日、日本時間の同日午前１１時１８分頃、インドネシアのジャワ島にあるスメル火山で大規模噴火が発生したと発表した。噴火による噴煙の高さは&nbsp;...</p></div>
            </div>
        </a><a href='https://weathernews.jp/s/topics/202212/040125/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【海外火山】日本時間の今日12月4日(日)、インドネシアのスメル ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7NZ27t86qT9KVlzMOK6IDPXKJ7wrXs16Dwen6JEh7owCQcd1kS27HSZ8Tl7QQZ1H7pYMqcIdO" alt="【海外火山】日本時間の今日12月4日(日)、インドネシアのスメル ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【海外火山】日本時間の今日12月4日(日)、インドネシアのスメル火山（セメール火山）の噴火活動が活発になっています。日本時間の11時18分頃に発生した噴火では、現地&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/aa0a4d115e9b757f8999bba294bb444f8c27bb84'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア・ジャワ島の大規模噴火 日本への津波の影響について ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBpwB9K9H5WU7vimii9bJzbrLi8IwQUOt6gpYT5GnhvPz1Gcd5XWNbvuoOWix3-0mbYD5ZF5PG" alt="インドネシア・ジャワ島の大規模噴火 日本への津波の影響について ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>インドネシアのジャワ島にある火山で大規模な噴火が発生した。国内外の観測点で、目立った潮位の変化はない。</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000008.000093780.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア進出支援のカケモチ、越境EC運用代行を月額3万円で ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSY0ch_vPa5F3ZdnlvvO-1X0QzMx-TeScxJrwgqgA8gf8SsXhk4-zXRw7ZtnVboqe7khj6lqh_y" alt="インドネシア進出支援のカケモチ、越境EC運用代行を月額3万円で ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>当サービスでは越境ECに必要なオペレーション業務をすべて代行するため、クライアント企業は指定倉庫に商品を配送するのみ。円安によって海外進出に好機を見出す企業が増え&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jiji.com/jc/article?k=2022120400180&g=int'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インドネシア・ジャワ島スメル山噴火 警戒レベル最高、日本に一時 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDEcUaaIQ3235O1WLH0FYT3fUXFp5wpOaYJy7wLC4pRbX1hyZct4w9iQ-U6h1v8L0dyWt3ea60" alt="インドネシア・ジャワ島スメル山噴火 警戒レベル最高、日本に一時 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ジャカルタ時事】４日午前２時４５分（日本時間同日午前４時４５分）ごろ、インドネシアのジャワ島にあるスメル山（３６７６メートル）で大規模な噴火が発生した。</p></div>
            </div>
        </a>
        </Template></>;
}