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
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221123-00000183-spnannex-000-3-view.jpg?exp=10800" alt="WBC"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/7df9da4264e462c34319a591cea3356e76a459c5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>大谷効果？来春WBCチケット発売開始で大争奪戦 一時アクセス殺到 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuJmUZDZXQ6PMm_Ne5YjMsyumKHFxwAubiqAzq_3rbyqNYv921Au2H9C5a3eIazxxTmhCgpbYD" alt="大谷効果？来春WBCチケット発売開始で大争奪戦 一時アクセス殺到 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>来年3月のワールド・ベースボール・クラシック（WBC）日本ラウンドのチケットが23日、午前11時から各チケットサイトなどで発売された。エンゼルス・大谷翔平投手（28）&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/3fa2617adef5507162bbe4109e3bd593a032091a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ＤｅＮＡ】今永、ＷＢＣ出場へ高まる意欲「心も体も整理して ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtKEtZ0-qHXDAEJ_N3we5hXtG6uUuQPLfLIPaxBrDV4YKAzxmR30K2MVKjH4uTG_rsQqqJ5E9L" alt="【ＤｅＮＡ】今永、ＷＢＣ出場へ高まる意欲「心も体も整理して ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本代表「侍ジャパン」の強化試合を終えた横浜ＤｅＮＡの今永昇太投手（２９）が、来春のワールド・ベースボール・クラシック（ＷＢＣ）への意欲を強くしている。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/23e4e1a470aa05ca3639f40689f5ce56f3b711e1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＷＢＣで大谷翔平は「２番ＤＨ・抑え投手」…侍ジャパンのヘッド ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRMKU6SDAiBCpVnKUbWMk6G2-v3meIioW3HouxcfUGnVFyrudnHmhHfTFU_HE3EE1bhxeN2azSg" alt="ＷＢＣで大谷翔平は「２番ＤＨ・抑え投手」…侍ジャパンのヘッド ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>岩手県奥州市出身で米大リーグ・エンゼルスの大谷翔平選手（２８）の活躍を振り返るファンイベント「”翔タイム“２０２２」が２３日、市文化会館Ｚホールで開かれた。</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221124-2DFNFZD4Q5IQFCX4VZLVYWDJGY/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＤｅＮＡ・今永昇太、２０２３年ＷＢＣでも初対面の選手にお電話 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBjQ1YhSK_XgPWEJcQFbBCXGjB0u9uoSy5I8jU02-XJmxeqy2ctASk8eBEdf2qVk0HyFuzAzuD" alt="ＤｅＮＡ・今永昇太、２０２３年ＷＢＣでも初対面の選手にお電話 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＤｅＮＡ・今永昇太投手（２９）が２３日、２０２３年３月のワールド・ベースボール・クラシック（ＷＢＣ）に向けて「初対面の人が集まるとすぐに打ち解け切らない。</p></div>
            </div>
        </a>
        </Template></>;
}