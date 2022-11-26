import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>全国旅行支援延長</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,全国旅行支援延長"/>
        <meta name="description" content="Trending News about 全国旅行支援延長" /></Head><Template>
            <h1 style={{fontSize: "30"}}>全国旅行支援延長</h1>
            <Image width={800} height={500} src="https://www.traicy.com/wp-content/uploads/2022/10/ryokoushien40.jpg" alt="全国旅行支援延長"/>
            <h3>Recent News</h3>
            <a href='https://www.traicy.com/posts/20221126256078/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>じゃらんnet、「全国旅行支援」の年内延長に対応 一部国内DPは ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVRZbIymVHIV1Q66B8FKfzo4TsjkoK9I-GqlGl_jsAf5jLYDpYbFh3Omx7Eph8xsTR_HwmbAmk" alt="じゃらんnet、「全国旅行支援」の年内延長に対応 一部国内DPは ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>また、すでに予約済みのじゃらん国内宿・ホテルの会員予約は、利用条件を満たす場合には、延長対応後に予約変更操作によりクーポンの利用で割引を適用できる。JALじゃらん&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}