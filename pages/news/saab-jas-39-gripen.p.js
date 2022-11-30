import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SAAB JAS 39 Gripen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SAAB JAS 39 Gripen"/>
        <meta name="description" content="Trending News about SAAB JAS 39 Gripen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SAAB JAS 39 Gripen</h1>
            <Image width={800} height={500} src="https://defence-ua.com/media/illustration/articles/fed6385b5f187119.jpg" alt="SAAB JAS 39 Gripen"/>
            <h3>Recent News</h3>
            <a href='https://defence-ua.com/news/popri_pravilo_vojujuchoji_krajini_u_shvetsiji_kazhut_scho_dozvoliti_prodazh_vinischuvachiv_ukrajini_tse_horosha_ideja-9804.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Попри правило &quot;воюючої країни&quot;, у Швеції кажуть, що дозволити ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-JhohlQlICeWHFe_NU8bif28SNQ7Ej4uWoxnbQMODgvk2vQ6RbfGDqq51zHdxVzpkK5Fo2WGA" alt="Попри правило &quot;воюючої країни&quot;, у Швеції кажуть, що дозволити ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Швеції вирішили заговорити про винищувачі для ПС ЗСУ – заяву про необхідність дозволити продаж Україні винищувачів SAAB JAS 39 Gripen зробив один зі шведських&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}