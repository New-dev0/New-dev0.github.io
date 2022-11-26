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
        </a><a href='https://news.yahoo.co.jp/articles/3f35fc0fe6a910381d622eb76b95f4c59038fe15'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonだけじゃない！各社ブラックフライデーまとめ。一番安い ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVyNEPJw-j23pxtlVPqs8xS1fLXbgW25DO7E3sCXvqoBpcPKErGxaDs3JTzuYmDWTpfaEn34rx" alt="Amazonだけじゃない！各社ブラックフライデーまとめ。一番安い ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>価格についても、まずはAmazonを基準にすると探しやすいだろう。 なお、購入の際は一手間でポイント還元が多くなるワザがある。Amazonギフトカードをチャージするという&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/18c80636ae2e663e7f0a9c977443ac0f54240226'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデー徹底ガイド！安くなっているもの ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHzDBSzUgffbvdHkC9nT1QTqjJDh-Gwv3ehRCURGTlwOvSYMIg6R_SxInFHcH6e0yG3fUJo-5a" alt="Amazonブラックフライデー徹底ガイド！安くなっているもの ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazonの超大型イベント「ブラックフライデーセール」が、12月1日23:59までの1週間にわたり開催されている。</p></div>
            </div>
        </a><a href='https://www.businessinsider.jp/post-262070'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Amazonブラックフライデー】で自宅を近未来化。家中スマート ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTERDvSQrPnggXe0HzWkJzJQmMnnJQu_pYWIrhRLOT8VPWhkWFCMyaPKTvcKuQcAe8qpGqwg826" alt="【Amazonブラックフライデー】で自宅を近未来化。家中スマート ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon（アマゾン）では、2022年12月1日（木）23時59分まで｢Amazonブラックフライデー｣が開催中です。今回のAmazonブラックフライデーでは、SwitchBotカーテンが通常&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aboutamazon.jp/news/retail/end-of-the-year-big-sale-amazon-black-friday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>年末のお得なビッグセール「Amazon ブラックフライデー」2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQLLJLFIcUWYsRp-l1JB6X7yDcELaNcf8eg7h6OSfpwGLPhb0-ut7ipYybp7O7fDMKGH4o5pJl" alt="年末のお得なビッグセール「Amazon ブラックフライデー」2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年11月25日（金）から12月1日（木）までの7日間開催する「Amazon ブラックフライデー」に関するお得な情報や、桐谷美玲さんとおるたなChannelさん出演のスペシャル&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/amazon-black-friday-time-sale-buy/bltc2fa31a813d4aa76'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデー2022で買うべきおすすめ商品・タイム ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmMsrrbyp5KctVGx73eF2qsIDBth95ZtF1wqTL31kRHb8JH_faX-Uxc-UgTTDwXMcGPLAphmkq" alt="Amazonブラックフライデー2022で買うべきおすすめ商品・タイム ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【2022年11月26日更新】Amazon(アマゾン)ブラックフライデーで買うべきおすすめ商品まとめ。AirPods ProなどのApple製品、Fire TV Stickなどが特選タイムセール中！</p></div>
            </div>
        </a><a href='https://www.gqjapan.jp/fashion/article/20221126-abf-fashion-recommends-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデーでファッションも冬支度！ ディーゼル ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzXbnMZ7r3bGEzftjRKUUjPPdCUwBfDnln6BtaJ6YHARduDcaqkq9goUbGjvn4mAByUgDgyXmp" alt="Amazonブラックフライデーでファッションも冬支度！ ディーゼル ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ディーゼル、ヘインズ、ビームスなど、Amazonに公式ショップを持つブランドから、ブラックフライデーで狙いたいおすすめをピックアップ！</p></div>
            </div>
        </a><a href='https://www.vogue.co.jp/lifestyle/article/amazon-black-friday-sale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazonブラックフライデー2022、おすすめの目玉商品を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHDsIm4sAjkRjw7pBwXIf8nh1WUKzSy677P_649PapjOQATEsQfksW1nH_uF8XChtzGYYcCA4b" alt="Amazonブラックフライデー2022、おすすめの目玉商品を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12月1日（木）23:59まで開催中の「Amazonのブラックフライデー」。セール対象商品の中から、おすすめアイテムをエディターがセレクト。家電から日用品、ファッション&nbsp;...</p></div>
            </div>
        </a><a href='https://www.harpersbazaar.com/jp/fashion/fashion-column/g42059218/amazon-blackfriday-221125-hb/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Amazonブラックフライデーセール開催中！】エディターたちが ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9miPNH7pIJ7hoFejdCq0dpZq1WD8Hs6tj4k4lxc8KDrQakhRrf-4fEPkdTnbYVLy0IS0F_D25" alt="【Amazonブラックフライデーセール開催中！】エディターたちが ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「ブラックフライデー」とは、アメリカやカナダで祝われる「サンクスギビングデー（感謝祭）」である11月の第4木曜日の翌日にあたる日であり、小売り店などが大規模な&nbsp;...</p></div>
            </div>
        </a><a href='https://av.watch.impress.co.jp/docs/news/1458680.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ソニーやBOSEのサウンドバー、エヴァBDもセール中。Amazon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIHAuTCPlUzOpf1rHU8dACdHO5VzXAXH3_x3baXFaaUzBRFes4ZWLN-Lb1nyD3BGp-gAXPnWU2" alt="ソニーやBOSEのサウンドバー、エヴァBDもセール中。Amazon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月25日0時にスタートしたAmazonの大型セール「Amazon ブラックフライデー」で、ソニーやJBL、BOSE、Sonosなどのサウンドバーがセール価格で販売されている。25日に&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}