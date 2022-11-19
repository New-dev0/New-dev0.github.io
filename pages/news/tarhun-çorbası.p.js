import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tarhun çorbası</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tarhun çorbası"/>
        <meta name="description" content="Trending News about Tarhun çorbası" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tarhun çorbası</h1>
            <Image width={800} height={500} src="https://i2.hbrcdn.com/haber/2022/11/18/tarhun-corbasi-nedir-nasil-yapilir-tarhun-15438751_6320_amp.jpg" alt="Tarhun çorbası"/>
            <h3>Recent News</h3>
            <a href='https://www.haberler.com/haberler/tarhun-corbasi-nedir-nasil-yapilir-tarhun-15438751-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tarhun çorbası nedir, nasıl yapılır? Tarhun çorbası ve Tarhana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQe3VOF7hUib1FG04MkBG9KyGG3yvpxZREdhtpOiJtr_eLXhGRN5V9TorM92DtfCFbM2fNoYs4a" alt="Tarhun çorbası nedir, nasıl yapılır? Tarhun çorbası ve Tarhana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Masterchef yemek tarifleri merak ediliyor. Masterchef&#39;te bugün Tarhun çorbası yapılacak. İzleyiciler Tarhun çorbası hakkında, Tarhun çorbası nedir,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/tarhun-corbasi-tarifi-masterchef-tarhun-corbasi-nasil-yapilir-tadina-doyulmayan-lezzet-1216658-myyemek'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tarhun çorbası tarifi: MasterChef Tarhun çorbası nasıl yapılır ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQH65ASWbBs9gZznMrZ_w8JIv6w3UPvsDn2UQCb0jq0Sp574ma0Z5Ie_3JN1wfIy4dYBPhLHZpA" alt="Tarhun çorbası tarifi: MasterChef Tarhun çorbası nasıl yapılır ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tarhun çorbasının yapılışı merak ediliyor. TV 8 ekranlarında yayınlanan MasterChef&#39;in dış çekimleri bu hafta Konya&#39;da gerçekleştirildi.</p></div>
            </div>
        </a>
        </Template></>;
}