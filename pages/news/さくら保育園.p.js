import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>さくら保育園</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,さくら保育園"/>
        <meta name="description" content="Trending News about さくら保育園" /></Head><Template>
            <h1 style={{fontSize: "30"}}>さくら保育園</h1>
            <Image width={800} height={500} src="https://s.yimg.jp/images/news-web/all/images/ogp_default.png" alt="さくら保育園"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/f01f0c701037b9ca26b78c64a4bb180c58aac881'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>静岡・裾野のさくら保育園元保育士の女３人を暴行容疑で逮捕 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMR9IKhAHducVSKH37TwVNZfKo6D6t1IzQEV_tgvpAqYNLGSaG0_jRSm-lkU1DVig_uOGLcTZj" alt="静岡・裾野のさくら保育園元保育士の女３人を暴行容疑で逮捕 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市の私立認可保育園「さくら保育園」で、保育士が園児の足をつかんで宙づりにするなどしていた問題で、県警は４日、元保育士の女３人を暴行容疑で逮捕した。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/121c116bc0b34bc6f3ed7d5e5300631845ac013f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>保護者「重い罰を受けるべき…」 1歳児のクラスで“虐待”元保育士の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8X_2qLKeP1qK4iqxK8eRybTuWQx7p3FBydr25g5cPad6rtkpRByyPF_8jQyiME_rBQVAUF-tc" alt="保護者「重い罰を受けるべき…」 1歳児のクラスで“虐待”元保育士の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市の「さくら保育園」で、保育士が園児を虐待したとされる事件で、警察は元保育士の女3人を暴行の疑いで逮捕しました。 暴行の疑いで逮捕されたのは、裾野市&nbsp;...</p></div>
            </div>
        </a><a href='https://mainichi.jp/articles/20221204/k00/00m/040/185000c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>さくら保育園虐待 裾野市長「初動の遅さに大きな問題」と陳謝 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqGHXmLZHrTjz6WnX1YkqZUMGvxlUfKgEjnsw2BaylR3sHTQnU-nsxFsZ2rpDcU2RneUF2VTYK" alt="さくら保育園虐待 裾野市長「初動の遅さに大きな問題」と陳謝 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>裾野市の私立の認可保育園「さくら保育園」で保育士が園児の足をつかんで宙づりにするなどの虐待行為をくり返していた問題は4日、保育士として勤務していた3人が暴行&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/shizuoka/20221204/3030018510.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>保育園児虐待問題で当時の保育士３人を暴行の疑いで逮捕｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGYZhH24DUM1nddQnCbuldxVHSI5KOyxfVEA4sM8WoI-3_UZhpI1odUqMsBP739PnuY8KWaMK6" alt="保育園児虐待問題で当時の保育士３人を暴行の疑いで逮捕｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】静岡県裾野市の保育園で、保育士３人が１歳の園児たちに足を持って宙づりにするなどの虐待をした問題を受けて、警察は暴行の疑いで３人を逮捕しまし…</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221204-IPT35MEQSBLEFKKA2TA6UIPQVY/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>虐待容疑で保育士３人逮捕 静岡県警、園を家宅捜索</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6laqIMrj6YtM68A5_oyruR3-4x2KZU84lxFxq7S6i-IpRD97PWB0eTJJEr7Pd-B8KmxOWuXIC" alt="虐待容疑で保育士３人逮捕 静岡県警、園を家宅捜索" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市の私立「さくら保育園」でいずれも３０代の保育士の女３人が複数の園児に虐待をしていたとされる事件で、県警は４日、暴行の疑いで３人を逮捕した。</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/general/news/202212040000379.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「さくら保育園」の保育士３人を逮捕 静岡県警が早期の家宅捜索 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="「さくら保育園」の保育士３人を逮捕 静岡県警が早期の家宅捜索 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市の私立「さくら保育園」で保育士が園児の足をつかんで宙づりにするなどしていた事件で、県警は4日、暴行の疑いで、以前園に勤務していた保育士の女3人＝い&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}