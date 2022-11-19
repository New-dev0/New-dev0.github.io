import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>子宮頸がん</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,子宮頸がん"/>
        <meta name="description" content="Trending News about 子宮頸がん" /></Head><Template>
            <h1 style={{fontSize: "30"}}>子宮頸がん</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221117-00424976-kytnews-000-1-thumb.jpg?exp=10800" alt="子宮頸がん"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/0c412ffbe2632974127b5d47da976ffab6b23bd6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>若い女性で増加 子宮頸がんの“予防”を考える（ＫＹＴ鹿児島読売 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRqT0j8ZlUDMJGfUS9BOsL4hPLmWiRScojFDfy0JGefHDacLSq5WTxppgcO16_HqT6AKa3YH_f" alt="若い女性で増加 子宮頸がんの“予防”を考える（ＫＹＴ鹿児島読売 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>２０代、３０代の女性で「子宮頸がん」にかかる人が増えている。検診やワクチン接種で発症のリスクを抑えられるが、受診率、接種率は低迷している。今後、より予防効果&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}