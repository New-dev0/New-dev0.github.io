import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>現役ドラフト</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,現役ドラフト"/>
        <meta name="description" content="Trending News about 現役ドラフト" /></Head><Template>
            <h1 style={{fontSize: "30"}}>現役ドラフト</h1>
            <Image width={800} height={500} src="https://www.yomiuri.co.jp/media/2022/12/20221209-OYT1I50127-1.jpg?type=ogp" alt="現役ドラフト"/>
            <h3>Recent News</h3>
            <a href='https://www.yomiuri.co.jp/sports/npb/20221209-OYT1T50169/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>選手会が要望の「現役ドラフト」、各球団１人ずつ計１２選手が移籍</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWMKt4bpbYQaq5HG_l9c3WKiax-ivvJaPUM-GCn8CI_pmgqzrVDy9bcYJOA7YHO5X0y3mswANu" alt="選手会が要望の「現役ドラフト」、各球団１人ずつ計１２選手が移籍" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 プロ野球１２球団は９日、現役選手を対象にした「現役ドラフト」を初めて実施した。オンラインによる会議は非公開で行われ、楽天のオコエ瑠偉外&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rakuteneagles.jp/news/detail/00005206.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>現役ドラフトに関して｜東北楽天ゴールデンイーグルス</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRgPw_mfSmtu-akm8-1SK1NTfbMKWW0yYo5MCuiZG1JL-hdL2SuWYM7wCIwh_XyWcaHNFt8IF72" alt="現役ドラフトに関して｜東北楽天ゴールデンイーグルス" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12月9日（金）に行われました現役ドラフトにて、広島東洋カープから正隨優弥選手を獲得し、オコエ瑠偉選手の選手契約を読売ジャイアンツへ譲渡することとなりました&nbsp;...</p></div>
            </div>
        </a><a href='https://full-count.jp/2022/12/10/post1316097/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>現役ドラフトで広がった“穴”をどう埋める？ 西武が人的補償で見せる ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTjnB-e6IEjsTIowr0AZC0D1KpzPGSt792T-9UsBFV72NzoNeY7BRsPzH1FNFvjIGwnqtqrAJyI" alt="現役ドラフトで広がった“穴”をどう埋める？ 西武が人的補償で見せる ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>西武のブルペンの“穴”は、突然空いた。今季の西武はリリーフ陣の防御率が12球団トップの2.31。44セーブも12球団トップという安定感を誇った。中継ぎでも水上由伸投手が4勝4&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/c26d6a617fcee7db25b13f8c569bf60a8b549980'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【現役ドラフト】オコエは巨人に“古巣復帰” 小6時にジャイアンツ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6hyis2S4cgWJEo2rU3xYbDHm7K7dVhRtIPFPghdI1Tp2tcYlOjUJZJ9_yL6siGesSlrspuOyv" alt="【現役ドラフト】オコエは巨人に“古巣復帰” 小6時にジャイアンツ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>出場機会に恵まれない選手の移籍活性化を目指し、初導入された現役ドラフトが９日に行われ、楽天のオコエ瑠偉外野手（25）が巨人から指名され移籍が決まった。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/kansai-news/20221209/2000068980.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「現役ドラフト」 阪神が大竹投手 オリックスは渡邉選手獲得｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRIGY6hO6-BItxQV0TvM6AH3Ch5T7cOQfv482-CcHGr1XT0xlj6aD_Lgu4leHvElOCb3C3Hewun" alt="「現役ドラフト」 阪神が大竹投手 オリックスは渡邉選手獲得｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】プロ野球の「現役ドラフト」が初めて行われ、阪神はソフトバンクの大竹耕太郎投手、オリックスはヤクルトの渡邉大樹選手を獲得しました。 「現役…</p></div>
            </div>
        </a><a href='https://full-count.jp/2022/12/09/post1316072/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>現役ドラフトで「大チャンス」を得た選手は？ 移籍経験の専門家が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXuUwxbWsee_6OLnCDNJBC6uUXSdbNJsMNi3YdmSTPdO2wJAPMQiIZ6VdcqDTdtjZXwosESaJn" alt="現役ドラフトで「大チャンス」を得た選手は？ 移籍経験の専門家が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NPBの初となる「現役ドラフト」が9日に行われ、楽天のオコエ瑠偉外野手が巨人に1巡目指名されるなど12球団の計12人が移籍することになった。くすぶっていた選手たちは&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/29a0861071a98421e8ab9fade8e5a7758faf2c75'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【現役ドラフト】「どう送り出せば…」現役選手から聞こえてきた ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5fPxfV3BcwZ9Nd6_AZxbwr7-HI1DDdTV-esjDxO375CPaoVmJiUxZ-InTiaVr1ucnwhVFcuB9" alt="【現役ドラフト】「どう送り出せば…」現役選手から聞こえてきた ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>出場機会に恵まれない選手の移籍を活性化させることを目的とした「現役ドラフト」が9日実施され、計12選手の移籍が決まった。各球団が2人以上をリスト提出し、最低&nbsp;...</p></div>
            </div>
        </a><a href='https://dragons.jp/news/2022/22120901.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>中日ドラゴンズ オフィシャルウェブサイト - ドラゴンズニュース ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMO4nBMIC-ky_CfGVET4ehJpE0cQ39N5lWZCX0p6opQl46FkFmiUellP0jMuuTXJw4koWK9Ker" alt="中日ドラゴンズ オフィシャルウェブサイト - ドラゴンズニュース ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>本日（12月9日）行われました現役ドラフトにおいて、当球団から以下の選手が指名されましたのでお知らせいたします。 （指名選手）笠原祥太郎投手 （指名球団）&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/55c4fe4b0cc074f3c5b0678ad0416f1d5ff37621'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【中日】笠原祥太郎、現役ドラフトでDeNA移籍 2019年開幕投手 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdOFSFOw3r84NsCAuO_oSzc-_7069ox3JQ2j8OWxeVROndQVrQJJBgIB_Mc2Z3kqQCfRoulLTK" alt="【中日】笠原祥太郎、現役ドラフトでDeNA移籍 2019年開幕投手 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>プロ野球の現役ドラフトが9日に行われ、中日の笠原祥太郎投手（27）が、DeNAに指名され移籍することが決まった。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/59afeb33b8e2cd76888a87ac8027463733e0240b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>楽天・石井監督「（トレードと）何が違うのか」 現役ドラフトへの ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR6_5EVpF2HOmQ3jtFu-_sp-g7DhdMOjOEwmZAv-r_xFbRR_9tH9ANU1j-sy7f561R1OXzDpiVC" alt="楽天・石井監督「（トレードと）何が違うのか」 現役ドラフトへの ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>楽天・石井一久ＧＭ兼監督（４９）は９日、この日初めて行われた現役ドラフトについて「難しい部分はあったと思います。これから完成度が高くなっていけばいいのかなと&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}