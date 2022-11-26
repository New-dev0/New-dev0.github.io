import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amazon ブラックフライデー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amazon ブラックフライデー"/>
        <meta name="description" content="Trending News about Amazon ブラックフライデー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amazon ブラックフライデー</h1>
            <Image width={800} height={500} src="https://media.wired.jp/photos/63808f31b6e0aabe28a28788/16:9/w_1280,c_limit/top2.gif" alt="Amazon ブラックフライデー"/>
            <h3>Recent News</h3>
            <a href='https://wired.jp/article/amazon-blackfriday-2022-pc-gadget/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデーおすすめ目玉商品21選：PC周辺機器編</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9wdXRVEjZVn4vxoZRccQAqMqVYpd4hQM8RPi2Y6fRRhh0NZZJ89tQCsYbxtXeQ0TiVov8O9Wr" alt="Amazonブラックフライデーおすすめ目玉商品21選：PC周辺機器編" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12月1日（木）の23:59まで7日間にわたって開催中の、年に一度のビッグセール「Amazonブラックフライデー」。幅広いセール対象アイテムには、快適なリモートワークを&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gqjapan.jp/fashion/article/20221126-abf-fashion-recommends-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデーでファッションも冬支度！ ディーゼル ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzXbnMZ7r3bGEzftjRKUUjPPdCUwBfDnln6BtaJ6YHARduDcaqkq9goUbGjvn4mAByUgDgyXmp" alt="Amazonブラックフライデーでファッションも冬支度！ ディーゼル ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ディーゼル、ヘインズ、ビームスなど、Amazonに公式ショップを持つブランドから、ブラックフライデーで狙いたいおすすめをピックアップ！</p></div>
            </div>
        </a><a href='https://www.aboutamazon.jp/news/retail/end-of-the-year-big-sale-amazon-black-friday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>年末のお得なビッグセール「Amazon ブラックフライデー」2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQLLJLFIcUWYsRp-l1JB6X7yDcELaNcf8eg7h6OSfpwGLPhb0-ut7ipYybp7O7fDMKGH4o5pJl" alt="年末のお得なビッグセール「Amazon ブラックフライデー」2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年11月25日（金）から12月1日（木）までの7日間開催する「Amazon ブラックフライデー」に関するお得な情報や、桐谷美玲さんとおるたなChannelさん出演のスペシャル&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vogue.co.jp/lifestyle/article/amazon-black-friday-sale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデー2022、おすすめの目玉商品を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHDsIm4sAjkRjw7pBwXIf8nh1WUKzSy677P_649PapjOQATEsQfksW1nH_uF8XChtzGYYcCA4b" alt="Amazonブラックフライデー2022、おすすめの目玉商品を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12月1日（木）23:59まで開催中の「Amazonのブラックフライデー」。セール対象商品の中から、おすすめアイテムをエディターがセレクト。家電から日用品、ファッション&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/81e7f0a91c59fe2ba53df92e25403f350ae9ef01'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデーがいよいよスタート！ 今年のセール ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjkcCzbqpCSDIuvcFF_feOeGC5df_jnNTwFZ95NNwnc-AtE6XwUFeMur1fqf9gI4qLeQL3kE4B" alt="Amazonブラックフライデーがいよいよスタート！ 今年のセール ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>数量限定タイムセール」では、幅広いカテゴリーの売れ筋商品を、最長12時間にわたって販売。「ビッグサプライズセール」には、日替わりでさまざまなカテゴリーの商品が、&nbsp;...</p></div>
            </div>
        </a><a href='https://av.watch.impress.co.jp/docs/news/1458680.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ソニーやBOSEのサウンドバー、エヴァBDもセール中。Amazon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIHAuTCPlUzOpf1rHU8dACdHO5VzXAXH3_x3baXFaaUzBRFes4ZWLN-Lb1nyD3BGp-gAXPnWU2" alt="ソニーやBOSEのサウンドバー、エヴァBDもセール中。Amazon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月25日0時にスタートしたAmazonの大型セール「Amazon ブラックフライデー」で、ソニーやJBL、BOSE、Sonosなどのサウンドバーがセール価格で販売されている。25日に&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/c291cd118b58680f471b233d3c504e1c94288460'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon ブラックフライデーでお買い得な「スマートウォッチ」5選 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWCWjJ3ALB1gMb5lmAiGyBmHiDuu01Y8sPV2tJnHS0aQJ5exFQflEkpTCeP5H6zzkQ_xWPbe_r" alt="Amazon ブラックフライデーでお買い得な「スマートウォッチ」5選 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon.co.jp（アマゾン）は12月1日23時59分まで、年末のビッグセール「Amazon ブラックフライデー」を開催しています。</p></div>
            </div>
        </a><a href='https://www.harpersbazaar.com/jp/fashion/fashion-column/g42059218/amazon-blackfriday-221125-hb/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Amazonブラックフライデーセール開催中！】エディターたちが ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9miPNH7pIJ7hoFejdCq0dpZq1WD8Hs6tj4k4lxc8KDrQakhRrf-4fEPkdTnbYVLy0IS0F_D25" alt="【Amazonブラックフライデーセール開催中！】エディターたちが ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「ブラックフライデー」とは、アメリカやカナダで祝われる「サンクスギビングデー（感謝祭）」である11月の第4木曜日の翌日にあたる日であり、小売り店などが大規模な&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businessinsider.jp/post-262376'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Amazonブラックフライデー】で賢くお買い物しよう。Appleの ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZUyG5pbvhxIxnvJX85hIaNSZEeG6Mep-orcghOQmUtdJyQXevQIFWbo0Uq9JolOVxrJwnFaTF" alt="【Amazonブラックフライデー】で賢くお買い物しよう。Appleの ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon（アマゾン）では、2022年12月1日（木）23時59分まで｢Amazonブラックフライデー｣が開催中。今回のAmazonブラックフライデーでは、Appleの｢AirPods Pro｣が通常&nbsp;...</p></div>
            </div>
        </a><a href='https://edu.watch.impress.co.jp/docs/news/1458463.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「Amazon ブラックフライデー」スタート、12月1日まで開催</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZwq_C4c-43n0yGXwX2xq6DYcq6QFIlVcOcV9etqk_JRyTuNOmAb-242e_H4nmSA8lTvtqmxv8" alt="「Amazon ブラックフライデー」スタート、12月1日まで開催" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「数量限定タイムセール」では、続々と登場する幅広いカテゴリーの売れ筋商品を、最長12時間販売する。 「ビッグサプライズセール」には、日替わりでさまざまなカテゴリー&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}