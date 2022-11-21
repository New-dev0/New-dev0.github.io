import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>福岡市長選挙</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,福岡市長選挙"/>
        <meta name="description" content="Trending News about 福岡市長選挙" /></Head><Template>
            <h1 style={{fontSize: "30"}}>福岡市長選挙</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221120/K10013897841_2211202009_1120203344_01_03.jpg" alt="福岡市長選挙"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221120/k10013897841000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡市長選 現職の高島宗一郎氏 4回目の当選</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRa2RYzbhpIjcvVRP6zHciGRe4s-MDYkNjYnDViGFsD3F-VBgyylROiZ__YLjDPf-Qp-cn0QSjY" alt="福岡市長選 現職の高島宗一郎氏 4回目の当選" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】現職と新人の3人による争いとなった福岡市長選挙は、無所属で現職の高島宗一郎氏（48）が4回目の当選を果たしました。</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/election/local/20221120-OYT1T50102/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡市長選、現職の高島宗一郎氏が４選…立民など推薦の前市議ら ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfXu0b-ff0IPgHj-PcwUw4zPq8-RQECbZ0VtGWMPxJ0cUc-q3b-PlZjfPgOotxGN9OUU4AK6VR" alt="福岡市長選、現職の高島宗一郎氏が４選…立民など推薦の前市議ら ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 福岡市長選は２０日、投票が行われ、現職の高島宗一郎氏（４８）（無所属）が、新人で前市議の田中慎介氏（４４）（無所属＝立憲民主、国民民主、社民&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/af2c6d8ebbac4745ecbf46a37dbe2bd29245ec9c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡市長選挙投票日 午後８時まで投票を受け付け（FBS福岡放送）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqCaLca0ipi-oVl6FdiSj7JJ50JULAa0CI20cWoqT5wRn1SHXiWgvnN2Rte306fCDCkiNctFKH" alt="福岡市長選挙投票日 午後８時まで投票を受け付け（FBS福岡放送）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>福岡市では２０日午後、市長選挙の投票が続いています。 福岡市長選挙に立候補しているのは届け出順に現職の高島宗一郎氏、新人で会社員の熊丸英治氏、新人で元市議の&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOJC1547Y0V11C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡市長選挙、現職の高島氏が4選 新人2氏破る</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRR9XFkt20LppiTaEh0zS79KrfXIyVAKzPOjtUmDJYx1o21f3lZjIpmLDk-QcqdApTlEArmn7xG" alt="福岡市長選挙、現職の高島氏が4選 新人2氏破る" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>任期満了に伴う福岡市長選が20日投開票され、無所属で現職の高島宗一郎氏（48）が4回目の当選を決めた。いずれも無所属新人で会社員の熊丸英治氏（53）、元福岡市議の&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nishinippon.co.jp/item/n/1017413/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡市長選の投票率34.31％ 前回を2.89ポイント上回る</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxx7uxUgu1XpwjgdyqOv36xziej1llxJIYB768Rah4aV5EHfLdycgYG7qCGZLblx8i_9v7A9hY" alt="福岡市長選の投票率34.31％ 前回を2.89ポイント上回る" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>20日投開票の福岡市長選は有権者の約7割が棄権し、投票率は34・31％。過去最低だった前回2018年の31・42％...｜西日本新聞meは、九州のニュースを中心に最新情報を&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221121-TWKCZD3COBMMVDNFM3FGIMTYEI/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡市長選、高島氏４選果たす</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZBankSMqwi2xgtWkg9oitM5UiXN5pZVqKSlyAA-7jvlONjn5i0oibq_QbB5fia2jxxoFUcqER" alt="福岡市長選、高島氏４選果たす" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>任期満了に伴う福岡市長選は２０日投開票され、無所属現職の高島宗一郎氏（４８）が、元市議の田中慎介氏（４４）＝立民、国民、社民推薦＝と、不動産賃貸会社員の熊丸&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nishinippon.co.jp/item/n/1017414/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡市長選・有権者の声</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKFY_kZcUqSj7zJxlR0nXL6SYFlQHvRR0FWFQFzKZ8NT37b9fmxkJhPn9U0NfKFvbsJT_w-00t" alt="福岡市長選・有権者の声" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>障害者目線の街に東区の会社員、山崎海斗さん（23）私は先天性多発性関節拘縮症（生まれつき手足などの関節が曲がったま...｜西日本新聞meは、九州のニュースを中心に&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nishinippon.co.jp/item/n/1017415/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡市長選敗戦の田中氏「変革の声結実できず残念」</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6v8q0TVDDft6GW81o18GWMH9_iWq9ud7Pt_mPga9rpRRcDYlNDgz_TljCbGkKGAzmy9AOT3yr" alt="福岡市長選敗戦の田中氏「変革の声結実できず残念」" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>市政を変えてほしいという多くの声を結実できず残念」。現職の当選確実を受け、無所属新人の田中慎介氏（44）は福岡市...｜西日本新聞meは、九州のニュースを中心に&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}