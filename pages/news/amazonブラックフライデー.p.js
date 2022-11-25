import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amazonブラックフライデー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amazonブラックフライデー"/>
        <meta name="description" content="Trending News about Amazonブラックフライデー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amazonブラックフライデー</h1>
            <Image width={800} height={500} src="https://media.vogue.co.jp/photos/62c93301ac0ee24b8c1643f7/16:9/w_1280,c_limit/amazon-prime-day-sale.jpg" alt="Amazonブラックフライデー"/>
            <h3>Recent News</h3>
            <a href='https://www.vogue.co.jp/lifestyle/article/amazon-black-friday-sale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデー2022、おすすめの目玉商品を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHDsIm4sAjkRjw7pBwXIf8nh1WUKzSy677P_649PapjOQATEsQfksW1nH_uF8XChtzGYYcCA4b" alt="Amazonブラックフライデー2022、おすすめの目玉商品を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12月1日（木）23:59まで開催中の「Amazonのブラックフライデー」。セール対象商品の中から、おすすめアイテムをエディターがセレクト。家電から日用品、ファッション&nbsp;...</p></div>
            </div>
        </a><a href='https://edu.watch.impress.co.jp/docs/news/1458463.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「Amazon ブラックフライデー」スタート、12月1日まで開催</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZwq_C4c-43n0yGXwX2xq6DYcq6QFIlVcOcV9etqk_JRyTuNOmAb-242e_H4nmSA8lTvtqmxv8" alt="「Amazon ブラックフライデー」スタート、12月1日まで開催" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「ビッグサプライズセール」には、日替わりでさまざまなカテゴリーの商品が、驚くような価格とともに数量・時間限定で登場。25日はPCタブレットや周辺機器、27日はおもちゃ&nbsp;...</p></div>
            </div>
        </a><a href='https://av.watch.impress.co.jp/docs/topic/1458318.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「Amazonブラックフライデー」がさらにお得に“ギフトカード ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRU755hi1V9pdhEltANVstoXWGfAKhWef2OUEv2ZHbiKz6bIj-t0iDbYjDpKWZH4Bhi5ICa5dR9" alt="「Amazonブラックフライデー」がさらにお得に“ギフトカード ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazonギフトカードは、あらかじめアカウントの残高にチャージすることで、Amazonでの買い物や、対応のECサイトなどでAmazon Payとして支払える電子マネーのようなもの。</p></div>
            </div>
        </a><a href='https://www.gqjapan.jp/lifestyle/article/20221124-abf-best-20-recommends'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデー2022、おすすめ目玉商品46選。Apple ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSELDM6i9n5GNQUwkfoHCHLTByUa1Ys_5WilMluhgii-fMKJid5h15QgGOBQExP810x9i7vSHo3" alt="Amazonブラックフライデー2022、おすすめ目玉商品46選。Apple ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年11月25日（金）0:00〜12月1日（木）23:59まで開催されるAmazon（アマゾン）のブラックフライデーセール。1年に1度のビッグセールで狙うべきおすすめの目玉&nbsp;...</p></div>
            </div>
        </a><a href='https://www.4gamer.net/games/619/G061991/20221124123/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「Amazon ブラックフライデー」本日スタート。最新・定番 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIUfT9KFf8wj4_yOmQ54yeggxwxxkgIRVdtOYNJz7tVpt2R_jXwqnGmH8NKsgiThppvqGseSAl" alt="「Amazon ブラックフライデー」本日スタート。最新・定番 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>（C）1995-2022 Nintendo/Creatures Inc. /GAME FREAK inc. ポケットモンスター・ポケモン・Pokémon は任天堂・クリーチャーズ・ゲームフリークの登録商標です。 Nintendo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cinemacafe.net/article/2022/11/24/82122.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデーがスタート！ ポイントアップ＆ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTofDZaP6Iem5Mkv13S5TowjtEEpO-YRJ0kK7QDrXLSsLwkVpkQtq1sPS6xf276urf91dMfkRHl" alt="Amazonブラックフライデーがスタート！ ポイントアップ＆ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>お得な年末のビッグセール、Amazon ブラックフライデーが11月25日（金）0時から7日間で開催される。</p></div>
            </div>
        </a><a href='https://www.oricon.co.jp/special/61333/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Amazonブラックフライデー 12/1まで】ワイヤレスイヤホン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzhTMQcfqc3UMamRPCE_SQQfWivPI1Sn6KdXRsgyNj0d3W7j_2nmKV6_IKt2s1XUBC2XNEhZx2" alt="【Amazonブラックフライデー 12/1まで】ワイヤレスイヤホン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【Amazonブラックフライデー 12/1まで】ワイヤレスイヤホン、ヘッドホンなど今年最安値の商品も多数！イヤホン・ヘッドホンがブラックフライデーでビッグセール中！</p></div>
            </div>
        </a><a href='https://www.famitsu.com/news/202211/25284042.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Amazonブラックフライデー”セール情報まとめ。セール対象商品を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFDMvrnksnPmOBmUYuBd0nxYLWy9-n4kdLhZP6WpfUtE2PDZrTQ_xNG9mfwUxDzsE4V4IOA3nE" alt="“Amazonブラックフライデー”セール情報まとめ。セール対象商品を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazonのビッグセール“Amazonブラックフライデー”がスタート。2022年11月25日（金）0:00から12月1日（木）23:59までの7日間開催する。</p></div>
            </div>
        </a><a href='https://www.famitsu.com/news/202211/25284022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Amazonブラックフライデー】AirPods Pro、iPad、Apple Watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzXwUkWMgZIBrPojlXvsB5I5pHdYpphgjvCB58Iu1_CtuX1CX875nG7Ea11FtVXdzhFqvFxKlp" alt="【Amazonブラックフライデー】AirPods Pro、iPad、Apple Watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazonは、ビッグセール“Amazonブラックフライデー”を、2022年11月25日（金）0:00から12月1日（木）23:59までの7日間開催中だ。</p></div>
            </div>
        </a><a href='https://game.watch.impress.co.jp/docs/news/1458373.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「Amazon ブラックフライデー」開催中！ マイクロソフト「Surface ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPusoEBF1XpArpShkUn6O7Fn2Y75lUvyyT46F4Z70_bmrqZ2-65MhsDDiklp1XKgXpUOW9bmFd" alt="「Amazon ブラックフライデー」開催中！ マイクロソフト「Surface ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>今回セールの対象となるのは、マイクロソフト「Surface Pro X/Microsoft SQ1」と「Surface Pro X/Microsoft SQ2」。それぞれメモリストレージ容量が256GBと512GBの2モデル&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}