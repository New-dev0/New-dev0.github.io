import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paul Dwyer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paul Dwyer"/>
        <meta name="description" content="Trending News about Paul Dwyer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paul Dwyer</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/638b14bc7af50725b034de90.jpg" alt="Paul Dwyer"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/kelebek/hayat/paul-dwyer-kimdir-nereli-kac-yasinda-paul-dwyer-esi-kimdir-kariyeri-hakkinda-bilgiler-42181444'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paul Dwyer kimdir, nereli, kaç yaşında? Paul Dwyer eşi kimdir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtElghYb7lAD3Ydty-04O-UB8Pi2xZuGfSiM1UVENBq_xYI4ApBUyA2gTgQdrsKQG9aRXWXEAN" alt="Paul Dwyer kimdir, nereli, kaç yaşında? Paul Dwyer eşi kimdir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paul Dwyer, kariyeri ve hayatı ile araştırılan isim olmaya devam ediyor. Sempatik tavırları ve ikili ilişkileri ile ekran başındaki pek çok kişinin&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/paul-dwyer-ile-ilgili-tum-detaylar-paul-dwyer-kimdir-kac-yasinda-nereli-egitimi-ve-meslegi-ne-1111674'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paul Dwyer Kimdir, Kaç Yaşında, Nereli, Eğitimi ve Mesleği Ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSW58HiMwjlQbos__FXqo-T9slackkUoEMgBlcqeYS0OjqdXsnUIRTxARp6HNkJcyz7A_ZZ0rLs" alt="Paul Dwyer Kimdir, Kaç Yaşında, Nereli, Eğitimi ve Mesleği Ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aslen İskoç olan sanatçı, çocukluğunu İskoçya&#39;da geçirdi. Küçük yaşlarda gitar eğitimi aldı. İngiltere&#39;de bulunan Royal Nothern College of Music&#39;de klasik gitar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}