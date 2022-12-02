import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bala Hatun</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bala Hatun"/>
        <meta name="description" content="Trending News about Bala Hatun" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bala Hatun</h1>
            <Image width={800} height={500} src="https://img-s3.onedio.com/id-6388a0ef16faff3a0ffbe128/rev-0/raw/s-2064a7e8c9ea92ec8940c2281a9b5c9c17650fdf.jpg" alt="Bala Hatun"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/bala-hatun-kimdir-bala-hatun-kurulus-osman-kim-canlandiriyor-1111277'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bala Hatun Kimdir? Bala Hatun Kuruluş Osman Kim Canlandırıyor?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8UduhhOUBpGazrkl4gBnQ9HTBZcYXGtBHw9YpeSFSkGXqq7U4Y9cbrxJJXZt4i0ztogyIj8fU" alt="Bala Hatun Kimdir? Bala Hatun Kuruluş Osman Kim Canlandırıyor?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son zamanlarda ise Bala Hatun karakteri tüm dikkatleri üzerine çekti. Bala Hatun karakterini canlandıran Özge Törer ise güzelliğiyle konuşuluyor. Peki Bala&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/bala-hatun-kim-oynuyor-kurulus-osman-bala-hatun-15465997-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bala Hatun kim oynuyor? Kuruluş Osman Bala Hatun kimdir? Özge ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3hvuBc19axLtQRe4BloZHO-U1vSqhyjuYRycvwj-Pz_rv_6tr63LYc0riYcQM3b2IpirscgTh" alt="Bala Hatun kim oynuyor? Kuruluş Osman Bala Hatun kimdir? Özge ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ATV ekranlarının sevilen dizisi olan Kuruluş Osman&#39;da rol alan Özge Törer&#39;in kim olduğu merak ediliyor. Bala Hatun karakterini canlandıran isim arama&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}