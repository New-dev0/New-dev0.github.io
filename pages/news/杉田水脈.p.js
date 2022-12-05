import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>杉田水脈</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,杉田水脈"/>
        <meta name="description" content="Trending News about 杉田水脈" /></Head><Template>
            <h1 style={{fontSize: "30"}}>杉田水脈</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221202-00553509-fnnprimev-000-4-view.jpg?exp=10800" alt="杉田水脈"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/68bc705738e71a88c9d36f139618b84197314816'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>杉田水脈政務官 大臣の指示で“差別発言”撤回し謝罪 「どこの部分を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBhHsyMRnqeBe1-x_82SMGG3NoYq-E7wfiOMerUyBuDB17dizJycRz6o1oCYpv9KOSBsTzDt6K" alt="杉田水脈政務官 大臣の指示で“差別発言”撤回し謝罪 「どこの部分を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>社民党・福島みずほ参院議員: 杉田さん、あの謝罪と撤回ですが、どこの部分の発言を撤回、謝罪をされるんですか? しかし答弁に立つことになったのは… 委員長: 松本総務大臣&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221202-3L3CX5UNJVOU3GDK5YSXAYE23M/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>杉田水脈氏、ＬＧＢＴ巡る「生産性がない」発言など撤回 岸田首相 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSu81NBWJyG4K5yd1AJ4jxkRGBSU3OLp_vyuaRADd9klkFd3EWmO-yA_H22aZchFP2zmFjHVc6a" alt="杉田水脈氏、ＬＧＢＴ巡る「生産性がない」発言など撤回 岸田首相 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>杉田水脈総務政務官は２日の参院予算委員会で、ＬＧＢＴなどの性的少数者やアイヌ民族を巡る過去の発言を謝罪、撤回した。他の言動も「精査する」と述べ、さらなる撤回&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/politics/20221202-OYT1T50202/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＬＧＢＴには「生産性がない」発言、杉田政務官「謝罪して表現 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQs9T0lp5VqN78shQZblpHp3RVsIec0NMQaz3UG1ftq16-p-Q1xjGDskDhPWOkk1U9_vbv54WL8" alt="ＬＧＢＴには「生産性がない」発言、杉田政務官「謝罪して表現 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 杉田水脈総務政務官は２日の参院予算委員会で、過去に月刊誌やブログで性的少数者（ＬＧＢＴ）は「生産性がない」、「チマチョゴリやアイヌの民族衣装の&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tokyo-sports.co.jp/articles/-/247024'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>杉田水脈氏がＬＧＢＴに関する発言をようやく謝罪 野党は来年も ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRkHp0yNudirJ0Ns4EZi6YKdPJdye_68PvnfGZzicWEo1QL8oU386SrtpCL9wmIFUP1JAdVBGQb" alt="杉田水脈氏がＬＧＢＴに関する発言をようやく謝罪 野党は来年も ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>自民党の杉田水脈総務政務官（５５）は２日、参院予算委員会で、過去に性的少数者（ＬＧＢＴ）の「生...</p></div>
            </div>
        </a><a href='https://www.jiji.com/jc/article?k=2022120200940&g=pol'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>杉田政務官、差別発言を撤回 「配慮欠き反省」</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgsdXoALkYGoX9m47ceLHafPRM7ZORognevGUfNYMzjLhER7HH2pV0TY0q0Ehu18TEV_-g3Ppq" alt="杉田政務官、差別発言を撤回 「配慮欠き反省」" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>自民党の杉田水脈総務政務官は２日の参院予算委員会で、過去に性的少数者（ＬＧＢＴなど）のカップルを「『生産性』がない」などと表現したことについて「配慮を欠いた&nbsp;...</p></div>
            </div>
        </a><a href='https://www.47news.jp/politics/8642057.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>杉田水脈氏「反省し謝罪する」 性的少数者巡る表現撤回</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="杉田水脈氏「反省し謝罪する」 性的少数者巡る表現撤回" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>杉田水脈総務政務官は2日の参院予算委員会で、性的少数者やアイヌを巡る過去の表現について謝罪し、撤回した。「厳しい批判を重く受け止めている。</p></div>
            </div>
        </a>
        </Template></>;
}