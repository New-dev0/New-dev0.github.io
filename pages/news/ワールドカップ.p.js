import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ワールドカップ"/>
        <meta name="description" content="Trending News about ワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ワールドカップ</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221120/K10013897951_2211210034_1121003926_01_07.jpg" alt="ワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221120/k10013897951000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカーワールドカップ カタール大会が開幕</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMcOVCzc4kLZHzVdf3pc0ghqlbbW0q0Mx56X9UnR-cY1ulxtM50rKWNO16LcZ-yMF59N8XBQtn" alt="サッカーワールドカップ カタール大会が開幕" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】中東で初めてのサッカーワールドカップとなるカタール大会の開幕セレモニーが20日、カタール北部のスタジアムで行われました。…</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQODH203HU0Q2A121C2000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカーW杯開幕 開催国カタール黒星、緊張で動き鈍く</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfsdCDggoxg3iq6HADAiH-DeNvSUGZ8ZXlOBnxP98fj0Oeda-BmZsoMYmMIoGz0B6l7bDTEpoDVQ" alt="サッカーW杯開幕 開催国カタール黒星、緊張で動き鈍く" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【アルホル=本池英人】サッカーの第22回ワールドカップ（W杯）カタール大会が20日、北部アルホルで開幕し、1次リーグA組の開催国カタールはエクアドルに0-2で敗れた。</p></div>
            </div>
        </a><a href='https://www.vogue.co.jp/celebrity/article/bts-jung-kook-world-cup-2022-opening-ceremony'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTSのJung Kook（ジョングク）、ワールドカップカタール大会の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAgDLJV9F5A3nStsT-oH5udcaH2QqXkMq0QWUz8YoxhtgasVjoLualDwFNW9EdTLicimSXA9n_" alt="BTSのJung Kook（ジョングク）、ワールドカップカタール大会の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップ（W杯）カタール2022のオープニングセレモニーが11月20日（現地時間）、北部アル・ホールにあるアル・バイト・スタジアムで行われた。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221120/k10013897981000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ開幕セレモニー BTS ジョングクさん出演へ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTn57VUpwC-npP4rXDoluGYLy9_lHbSuQbDce2VqH-dPMhi-spp_J89DUUwLvSJVgRpTZlzHpCQ" alt="ワールドカップ開幕セレモニー BTS ジョングクさん出演へ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】20日に開幕するサッカーのワールドカップ、カタール大会の開幕セレモニーに韓国の人気グループ、BTSのジョングクさんが出演…</p></div>
            </div>
        </a><a href='https://rugby-rp.com/2022/11/20/japan/92341'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本代表・李承信、次のワールドカップには「出たい」ではなく ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnEqa0NHc1tTvS9BhaR-5XyR3jFfCqG7lgHmeWcPZN0SGOsB110Q404vDL9NJOifkpzQgaSVge" alt="日本代表・李承信、次のワールドカップには「出たい」ではなく ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ワールドカップに出たいのではない。出るつもりでいるのだ。 「自分が出て当然というか、出るべきだというマインド.</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221121-I7DQY2RDPRIMPDPCRA5HHD4FQE/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>地元カタール、エクアドルに完敗 サッカーのワールドカップが開幕</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0PVTXS4SGr-DZwowJAudg0KxTEoejSpc_2RYby3ZGA_QcC5unY1WMzE3H5JIjGbT_jY8xUkqv" alt="地元カタール、エクアドルに完敗 サッカーのワールドカップが開幕" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【アルホル（カタール）＝奥山次郎】４年に一度のサッカーの祭典、第２２回ワールドカップ（Ｗ杯）カタール大会が２０日、アルホルのアルベイト競技場で開幕し、１次&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/6b0f77074954239c08e84d254f51b944576a066a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>バレンシア２発 エクアドルがカタールに快勝 ワールドカップの歴史 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT32EqsCHmkDPvM-jqNQ0LSTBOJvSBqhQ2OS1DosIw_IMFreHodAP1jTsP18Bxj0GthHobUKtPb" alt="バレンシア２発 エクアドルがカタールに快勝 ワールドカップの歴史 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【アルホル（カタール）＝奥山次郎】エクアドルが長いワールドカップ（Ｗ杯）の歴史を塗り替えた。カタールを２－０で下した試合は、開催国の初戦に付けた初黒星。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/76c63f689c104fe65c4fe767a763f343a64774d2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ開幕！ エクアドル、“エース”の2発で快勝…カタール ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHx8PGUqAF1Yi94AYPkIS5iPmD7RA5TU-ASu3NTJ4NXWhLFxF-Liq7AGG9FqQMR99t4UJ0wHJg" alt="ワールドカップ開幕！ エクアドル、“エース”の2発で快勝…カタール ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022・グループA第1節が20日に行われ、カタール代表とエクアドル代表が対戦した。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/fcd4f79b8cbe0b6443bf21cfa512ded985b17967'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFAワールドカップ開幕へ、ファントークンが上昇（CoinDesk ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9jlafEIZSbOBGrbkCcBRrzRiRXUba4hKS8lYRXuHvw0SIBxi6Xcch0U9YcbdHGkc1bShjg_bD" alt="FIFAワールドカップ開幕へ、ファントークンが上昇（CoinDesk ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FTX破綻の影響が広がるなか、スポーツファントークンは11月20日に始まる「FIFAワールドカップ カタール2022」を前に上昇した。 大手ファントークンプラットフォームの&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221121-OYT1T50056/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>エクアドル代表、幻の大会第１号ゴール…最新のオフサイド判定 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwrgWtTEvSlJOrr6NO4tId4QUDFdk2tGgIbzVOaUiXin7CxBry7vwoLZTNMr_KQImb6wEs15P_" alt="エクアドル代表、幻の大会第１号ゴール…最新のオフサイド判定 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は２０日に開幕し、開幕戦は２００６年ドイツ大会で１６強経験のあるエクアドル代表が初出場の&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}