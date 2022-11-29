import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Esube.iskur.gov.tr</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Esube.iskur.gov.tr"/>
        <meta name="description" content="Trending News about Esube.iskur.gov.tr" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Esube.iskur.gov.tr</h1>
            <Image width={800} height={500} src="https://iaahbr.tmgrup.com.tr/b12510/806/378/0/97/716/432?u=https://iahbr.tmgrup.com.tr/2022/11/28/iskur-coktu-mu-iskura-neden-girilmiyor-esubeiskurgovtr-acilmiyor-28-kasim-2022-iskur-ne-zaman-duzelir-1669632910071.jpg" alt="Esube.iskur.gov.tr"/>
            <h3>Recent News</h3>
            <a href='https://www.ahaber.com.tr/gundem/2022/11/28/iskur-coktu-mu-iskura-neden-girilmiyor-esubeiskurgovtr-acilmiyor-28-kasim-2022-iskur-ne-zaman-duzelir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İŞKUR çöktü mü? İŞKUR&#39;a neden girilmiyor? esube.iskur.gov.tr ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoni4C2tWg__On0-oXz4AIYNztTT_rkv6jdCPajDN7frp2bsICLpCFqRWlmoaOAPtkKxgaROYw" alt="İŞKUR çöktü mü? İŞKUR&#39;a neden girilmiyor? esube.iskur.gov.tr ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İŞKUR çöktü mü? İŞKUR&#39;a neden girilmiyor? esube.iskur.gov.tr açılmıyor! 28 Kasım 2022 İŞKUR ne zaman düzelir? GÜNDEM ahaber.com.tr.</p></div>
            </div>
        </a><a href='https://www.timeturk.com/genel/saglik-bakanligi-iskur-basvurusu-neden-yapilmiyor-sayfa-neden-acilmiyor/haber-1755497'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sağlık Bakanlığı İŞKUR başvurusu neden yapılmıyor? Sayfa neden ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNd3oZOl98ioz3OC0NBQIzb1g45AmGg2QVqEctkLPRYVqyllgVyZVlkTKAPkLM2Jl7Sid0ZRrT" alt="Sağlık Bakanlığı İŞKUR başvurusu neden yapılmıyor? Sayfa neden ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İŞKUR üzerinden Sağlık Bakanlığı personel alımlarına ilişkin süreç başladı. Başvurular 28 Kasım ile 2 Aralık tarihleri arasında yapılabilecek. Resmi Gazete&#39;de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}