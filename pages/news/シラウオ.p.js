import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>シラウオ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,シラウオ"/>
        <meta name="description" content="Trending News about シラウオ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>シラウオ</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/lnews/aomori/20221130/6080018099_20221130133614_m.jpg" alt="シラウオ"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/lnews/aomori/20221130/6080018099.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>シラウオを生のまま食べないで 顎口虫の症状を青森県内で確認 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfOeYsFK7QLicc2OUsZK0wBUjOMmmiUVxE8AixcnYILiG9WLb6u734zSq9JAYa3X_3ZqHtd8gL" alt="シラウオを生のまま食べないで 顎口虫の症状を青森県内で確認 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】皮膚の下に寄生虫が入り込みかゆみや腫れなどを引き起こす「顎口虫（がっこうちゅう）」による症状を訴える人が青森県内で確認されました。 同様…</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/national/20221130-OYT1T50264/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>皮膚の腫れ訴える１３０人、患者１人から「顎口虫」…シラウオ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSy5kznLH1zkiSkvDXup-wKaP-DCYw3ifEuBCp5uGOedpdDvbuQyDODGZ8DUzAmzvbkWfSgAqJ1" alt="皮膚の腫れ訴える１３０人、患者１人から「顎口虫」…シラウオ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 青森県上十三保健所管内や八戸市の医療機関で９月下旬～１１月下旬、皮膚の腫れなどを訴えて受診する患者が約１３０人に上っていることが、青森県の調査&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221129-7TFRTUDSBJLXVL3OHNY33XQHSQ/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>寄生虫か百人超皮膚病変 青森、シラウオを生食</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2tRctv3RYHy3E_8VnY5ha2kcvdqOqV3lWJLMyeg1ix7hiuEd1gpY1DJHcLvpMWOFiYA6nWRyJ" alt="寄生虫か百人超皮膚病変 青森、シラウオを生食" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>青森県は２９日、寄生虫に起因してかゆみや腫れが出る「皮膚爬行（はこう）症」とみられる患者が９月下旬以降、県内で約１３０人に上ったと明らかにした。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/74e30c8c9f8546ed770fd66ca9126350c6f3d209'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>シラウオ生食で寄生虫か 青森で百人超が皮膚病変（共同通信）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS0vFN2svxIMrvIjLUBJ_C6hu2dFQuxyPlBc4UCwObxn6j63nLHDOF4pO_FQtRp1yR2_GpkE9MF" alt="シラウオ生食で寄生虫か 青森で百人超が皮膚病変（共同通信）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>青森県は29日、寄生虫に起因してかゆみや腫れが出る「皮膚爬行症」とみられる患者が9月下旬以降、県内で約130人に上ったと明らかにした。多くの人が淡水魚のシラウオを&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCY6WJQQCYULUC01P.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>皮下はう寄生虫に感染か、130人にかゆみなど 多くがシラウオ食す</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTehLTOKoO16HzwUMBY9sGOrh__ITX-cy99WJomrRdfwZ-w4-ZzlDVSAYK_X6TOToz8SMs3qKPb" alt="皮下はう寄生虫に感染か、130人にかゆみなど 多くがシラウオ食す" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>青森県八戸市内や上十三保健所管内で、おなかなどの皮膚にかゆみやみみず腫れの症状を訴える患者が約130人に上っている。患者の多くが加熱されていないシラウオを食べ&nbsp;...</p></div>
            </div>
        </a><a href='https://plus.luremaga.jp/2022/11/30/202381/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>《皮膚の下をモゾモゾ》顎口虫症が青森県で初確認。</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdX1q-g0GZdJtfy1_kVgPm59JteC5eP6aRjG9ESf54decxW8k5Gxf89WHysmvSN_G1S-cIhI0u" alt="《皮膚の下をモゾモゾ》顎口虫症が青森県で初確認。" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>9月下旬から11月下旬の間にクリーピング病（皮膚爬行症）の患者約１３０名が上北郡内及び八戸市内の医療機関を受診しており、一部の患者病変から寄生虫の一種である顎口虫&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}