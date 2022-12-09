import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BLACKPINK</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BLACKPINK"/>
        <meta name="description" content="Trending News about BLACKPINK" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BLACKPINK</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221208-00010001-penonline-000-3-view.jpg?exp=10800" alt="BLACKPINK"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/98ad5d228e7dbb9f7e355a284ce46a5d0763e5e9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS、BLACKPINK…世界を席巻するエンタメ王国・韓国の強さは ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIKuusD6rHYBgvSkOVmHxL5888mGAtc3_LegbA9Khgag5ZQKeegJFbmxGgSio5_uXu1v8M7nL2" alt="BTS、BLACKPINK…世界を席巻するエンタメ王国・韓国の強さは ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年を振り返ると、ニューヨークにいる筆者にとって、アジア系の中でも韓国系勢（韓国人やアメリカで生まれた韓国人）の存在感は大きかった。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/60bedcd8be519b214ac4e9a8f5e98aa9870ab128'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BLACKPINKのJISOOがロンドン満喫中の写真公開 現在、ワールド ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTxP0PX_IHAVnAK63biAmQBGcTIGLNuK11kJL6lXmgj_mlGfUjVLlKb8GFVdtXQ0uTPELScWV67" alt="BLACKPINKのJISOOがロンドン満喫中の写真公開 現在、ワールド ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>韓国の女性4人組グループBLACKPINKのJISOOが7日までに、自身のインスタグラムを更新。ロンドンを満喫中の写真を投稿した。</p></div>
            </div>
        </a>
        </Template></>;
}