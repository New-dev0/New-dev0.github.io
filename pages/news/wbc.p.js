import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>WBC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,WBC"/>
        <meta name="description" content="Trending News about WBC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>WBC</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221207-01315148-fullcount-000-2-view.jpg?exp=10800" alt="WBC"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/e18fb3baa7144304beda2909ff65b22677777c83'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【MLB】超豪華WBC米国代表に本塁打王も参戦 侍ジャパンに脅威 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStAzLh6L5kPxquPC0tTfBuD3d64IcrHHQ9DDo8ykSXmmjQMfgTr_ye6d2ZMI2vlf9z-OMVJtfR" alt="【MLB】超豪華WBC米国代表に本塁打王も参戦 侍ジャパンに脅威 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MLB公式は6日（日本時間7日）、来春開催されるワールド・ベースボール・クラシック（WBC）の米国代表にフィリーズのカイル・シュワーバー外野手が参加することを発表&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/a6b05b25d261101548d503b74646f79d9fa66eb3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【WBC】侍ジャパン・栗山監督「鈴木誠也の返事をギリギリまで ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4NtVdic_PILF1EnbWGhIK00L7OWia1mqRje2XII0YdX-seqTtc7TYmvS-tM4dHlIW25-3VvYR" alt="【WBC】侍ジャパン・栗山監督「鈴木誠也の返事をギリギリまで ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>侍ジャパンの栗山英樹監督は6日（日本時間7日）、大リーグのウインターミーティングが開催されているサンディエゴでワールド・ベースボール・クラシック（WBC）の&nbsp;...</p></div>
            </div>
        </a><a href='https://full-count.jp/2022/12/07/post1315091/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>侍J栗山監督、ダルビッシュのWBC参戦に感謝「感動した」「日本の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFc7pdWchDO_6r57nBikA2bqdHHmEC-ezGxMBV5bDhZl8xt2HgJsiCHhcoA6N1uDpbgyuk-AWj" alt="侍J栗山監督、ダルビッシュのWBC参戦に感謝「感動した」「日本の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>野球日本代表「侍ジャパン」の栗山英樹監督は6日（日本時間7日）、米カリフォルニア州サンディエゴで行われたワールド・ベースボール・クラシック（WBC）のメディア&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/d7d55ab4b84be33bc29cfac97eae113eb520ced2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ダルビッシュ急転、WBC出場表明の裏側 心変わりの理由は栗山監督 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTx5lFhah-_ty3ry_ebhixzLCJNzP1sNhkKpJZnPos7xkjU2QIFeyE6kEpOXrpfMrBz201sMkAh" alt="ダルビッシュ急転、WBC出場表明の裏側 心変わりの理由は栗山監督 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>栗山監督に『来年のWBC出場しなさい』と言われたので出場します」 6日、自身のツイッターにこうつづり、併せて栗山監督とのツーショット写真を投稿したのが&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/4ab4209d657a04ba3fdd0b291e852fcf7b3956ff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ダルビッシュがWBC出場を明言！当時、出場した2009年のWBC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSxwA0lzxMXT6XwZ1KTl8RmRHFvDaD5RMGIDAiV4Uf1KMok1_SHg-lSwKESU3cbAlsrPzXcH-3" alt="ダルビッシュがWBC出場を明言！当時、出場した2009年のWBC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>パドレスのダルビッシュ 有投手（東北高出身）が自身のSNSで来年のワールド・ベースボール・クラシック（WBC）出場を明言し、大きな盛り上がりを見せている。</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOKC071PC0X01C22A2000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>栗山監督、WBCへ「本気でいく」 ダルビッシュ参加歓迎</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRou-2i3uxodgnUqk9voDtKNprnxkx5vkics4AWfbAqE7b3O4bK4QypUvO3YGFRrskGjl3E5RvF" alt="栗山監督、WBCへ「本気でいく」 ダルビッシュ参加歓迎" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【サンディエゴ=共同】来春開催の第5回ワールド・ベースボール・クラシック（WBC）で日本代表の指揮を執る栗山英樹監督が6日、サンディエゴで行われた記者会見に出席&nbsp;...</p></div>
            </div>
        </a><a href='https://full-count.jp/2022/12/07/post1315155/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>侍J栗山監督、鈴木誠也のWBC出場を「待っている」 決勝R途中参戦 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQx9rZeXySRTPAhxkeVwvsndb_LawInxqCg6cmm9OswtCKLcv4l9GGJUiDeL73p7WJtTQWJX4cn" alt="侍J栗山監督、鈴木誠也のWBC出場を「待っている」 決勝R途中参戦 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>野球日本代表「侍ジャパン」の栗山英樹監督は6日（日本時間7日）、米カリフォルニア州サンディエゴで行われたワールド・ベースボール・クラシック（WBC）のメディア&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221207-6VI5KEH5LRMFNBWF7RLUT23NGI/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>元巨人のマイコラス ＷＢＣ米国代表入りか カージナルスの番記者 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="元巨人のマイコラス ＷＢＣ米国代表入りか カージナルスの番記者 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>元巨人で米大リーグ、カージナルスのマイルズ・マイコラス投手（３４）が来春のワールド・ベースボール・クラシック（ＷＢＣ）に米国代表として出場する可能性が浮上&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221206/k10013914831000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>パドレス ダルビッシュ WBC出場の意向 ツイッターで表明</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkJrknP8na3TdSMcA4kfI_3EqO0HXE8wuu5nGofX-B5bsrYPcSELN_EH2BB_jfIOqrxYUkgb7t" alt="パドレス ダルビッシュ WBC出場の意向 ツイッターで表明" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】大リーグ、パドレスのダルビッシュ有投手が来年3月に開催されるWBC＝ワールド・ベースボール・クラシックに出場する意向をみ…</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/wbc/20221207-OYT1T50062/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「侍ジャパン」栗山監督、ＷＢＣ出場意向の大谷翔平と ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEa9_W7VSf_J_9XjI-MlOIcVjhz84-5NnReQCcd4sg5tcDrR1f_yT8KUBCE3yIQUL5ZUoGqeXS" alt="「侍ジャパン」栗山監督、ＷＢＣ出場意向の大谷翔平と ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 【サンディエゴ（米カリフォルニア州）＝帯津智昭】野球日本代表「侍ジャパン」の栗山監督は６日、国・地域別対抗戦「２０２３ワールド・ベースボール・&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}