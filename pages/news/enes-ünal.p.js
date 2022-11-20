import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enes Ünal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enes Ünal"/>
        <meta name="description" content="Trending News about Enes Ünal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enes Ünal</h1>
            <Image width={800} height={500} src="https://i2.hbrcdn.com/haber/2022/11/19/enes-unal-kimdir-kac-yasinda-boyu-kac-nereli-15440446_3439_amp.jpg" alt="Enes Ünal"/>
            <h3>Recent News</h3>
            <a href='https://www.haberler.com/haberler/enes-unal-kimdir-kac-yasinda-boyu-kac-nereli-15440446-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enes Ünal kimdir? Kaç yaşında, boyu kaç, nereli, mevkisi ne, hangi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsDyyiVj05lkYGpwns0flKgU2Y9TJ3aF1PzthGzZSz9Bd4mHCo4JjKDJSBgr-otuW0twpg0p0K" alt="Enes Ünal kimdir? Kaç yaşında, boyu kaç, nereli, mevkisi ne, hangi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Milli Futbol Takım&#39;ında da forma giyen Enes Ünal hakkında, Enes Ünal kaç yaşında, nereli, mevkisi ne, hangi takımda oynuyor? Futbolcu Enes Ünal milli takımda&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gidahatti.com/haber/12572529/enes-unal-kimdir-enes-unal-hayati'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enes Ünal kimdir? Enes Ünal hayatı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyTX1LEPeC2vn-FDWeyFZaRanJAW48LCDQtQuZAjzLp1aWPPGMCOls1j7hAtYjceUr3GGp8AKm" alt="Enes Ünal kimdir? Enes Ünal hayatı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>mesleği; santrafor mevkiinde oynayan Türk millî futbolcudur. La Liga takımlarından Getafe&#39;de forma giymektedir. Enes Ünal hayatı. Kulüp kariyeri. Bursaspor.</p></div>
            </div>
        </a><a href='https://www.bursaspordabugun.com/tr/haberler/detay/supersin-enes-unal-50007'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Süpersin Enes Ünal!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzRspnJl_WCwF_hYvt1Qq406zWRtMm3ucZnpmx6cSumSwl52wQgeZLfpzB-TwVUK-HP7GpqG8h" alt="Süpersin Enes Ünal!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bursaspor&#39;un gururu Enes Ünal, A Milli Takım formasıyla Çekya&#39;nın ağlarını havalandırdı. A Milli Takımımız, Mart 2023&#39;te başlayacak 2024 Avrupa Şampiyonası&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}