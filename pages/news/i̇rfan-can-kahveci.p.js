import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İrfan Can Kahveci</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İrfan Can Kahveci"/>
        <meta name="description" content="Trending News about İrfan Can Kahveci" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İrfan Can Kahveci</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/480000/481560.jpg" alt="İrfan Can Kahveci"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/futbol/spor-toto-super-lig/irfan-can-kahveci-performansiyla-dikkat-cekiyor-265434.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İrfan Can Kahveci performansıyla dikkat çekiyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTR2N4uBLR_Zf9bJDuCKXHbLZPT9xtSDaoe6a7NlEO6B7dpi1Mal3qM89ReOm71WHpNonyyZQok" alt="İrfan Can Kahveci performansıyla dikkat çekiyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçeli İrfan Can Kahveci, kariyerinin en iyi dönemlerinden birini yaşıyor. Şimdiden en golcü sezonuna ulaşan 27 yaşındaki futbolcu,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}