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
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221130-00524599-sdt-000-2-view.jpg?exp=10800" alt="さくら保育園"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/5cf150c05d46c77b19ec7ad076c9a01c70fa89a2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【不適切保育】市が会見で確認内容明らかに 静岡・裾野市（Daiichi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ9Kqe9DDm4MtoGRUR6ux8pTad1ga_yO9G5v-cXrVGb6_UQs2vo2X4EUqU3yFYIshMCyMfwIftT" alt="【不適切保育】市が会見で確認内容明らかに 静岡・裾野市（Daiichi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡・裾野市の私立「さくら保育園」で不適切な保育が行われていた問題で、市は、３０日 午後、園への対応と、是正指導などについて会見を開き発表した。</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCZ5VXYQCZUTPB00G.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>園児を倉庫に閉じ込め、足つかみ宙づり 保育士3人を問題行為で処分</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2QONmEzcQuButXfkQFX9wktgvkuHnKrEOgAckzTUQc5gfnjE0MMUV1nNPvVzvm53zJcYRGu24" alt="園児を倉庫に閉じ込め、足つかみ宙づり 保育士3人を問題行為で処分" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市は30日、同市公文名のさくら保育園で、30～40代の女性保育士3人が園児を倉庫に閉じ込めたり、頭をバインダーでたたいたりしていたと発表した。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/shizuoka/20221130/3030018449.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>保育士３人不適切な保育 裾野市長“虐待”で刑事告発の意向 ｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1VAoKLJYpgfVd6VJ5pHW2OlLYy0BYEsid4qoIX24P1ia8IgjBODiQyHnPOPgtT1mSiM9dqo7O" alt="保育士３人不適切な保育 裾野市長“虐待”で刑事告発の意向 ｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】裾野市の保育園で保育士３人が受け持っている１歳の園児らを倉庫に閉じ込めるなど不適切な保育を行っていた問題を受けて裾野市の村田悠市長は「一連…</p></div>
            </div>
        </a><a href='https://www.tokyo-np.co.jp/article/216975'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>園児に暴言、宙づり、暗い倉庫に閉じ込め…裾野市の3保育士が不 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBR_w8Bzc_40b334Bv9OnXMwTS1SUPrrkU7YFgxBro3dqK_7oWhiRc7sBt8pUDtdAxixFtEkqk" alt="園児に暴言、宙づり、暗い倉庫に閉じ込め…裾野市の3保育士が不 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡県裾野市の社会福祉法人「桜愛会」が運営する「さくら保育園」で、一歳児を担当する保育士三人が園児に対し、宙づりにしたり、容姿をけなす...</p></div>
            </div>
        </a><a href='https://www.at-s.com/news/article/shizuoka/1157560.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>募る不信「終始あいまい」 裾野の私立保育園、説明会出席の保護者 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSq-BuAcMMNw1AGR948seHbUKlzqNYxJXOK6pm06SKMseZHcRl1LgglixCxQcK0euu62ptp3tex" alt="募る不信「終始あいまい」 裾野の私立保育園、説明会出席の保護者 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>さくら保育園は２９日夜、園児に対する不適切な指導について保護者説明会を裾野市内で開いた。出席した保護者からは「あいまいな説明に終始した」などと不信の声が聞か&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/eec46d702722dcfda214aea53b79b980c8de5a07'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「宙づりの後、放置」「刃物を見せ脅す」…保育士が1歳児に“虐待 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuayUhdGC2Uo_uIL5dsem8H20o_UZacSrkZox5h6SYRv6C6JDarybSwow-hLsKK_TYpLZd8tig" alt="「宙づりの後、放置」「刃物を見せ脅す」…保育士が1歳児に“虐待 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>静岡・裾野市の保育園で、保育士らが1歳の園児に対し、宙づりにしたり、刃物を見せて脅したりするなど“虐待”していたことが分かりました。市によると、園は今年6月&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}