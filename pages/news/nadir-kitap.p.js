import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nadir Kitap</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nadir Kitap"/>
        <meta name="description" content="Trending News about Nadir Kitap" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nadir Kitap</h1>
            <Image width={800} height={500} src="https://www.diken.com.tr/wp-content/uploads/2018/03/sansur-sb.jpg" alt="Nadir Kitap"/>
            <h3>Recent News</h3>
            <a href='https://www.diken.com.tr/nadir-kitap-ve-kitantik-erisime-engellendi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadir Kitap ve kitantik&#39;e erişim engeli - Diken</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5I1m5x5LxE68vFQ4PNU_0eGzpws2pQS9t06wj_nzfBNNWnu9hzo-1AFdNszyZrWf3JwJOh8X_" alt="Nadir Kitap ve kitantik&#39;e erişim engeli - Diken" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30/11/2022 - Kitapçıların online satış yaptığı &#39;Nadir Kitap&#39; (www.nadirkitap.com) ve &#39;kitantik&#39; (www.kitantik.com) e-ticaret platformları,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/nadir-kitap-ve-kitantike-mahkeme-karariyla-erisim-engeli-haber-1591638'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadir Kitap ve Kitantik&#39;e &#39;mahkeme kararı&#39;yla erişim engeli</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5CLwnEL1pjC3z3aMBe5qGXv9n6PL2IURfbGxCsGkftJ49rhY-xB-BrbPLPSeVezBbpQs5nFhS" alt="Nadir Kitap ve Kitantik&#39;e &#39;mahkeme kararı&#39;yla erişim engeli" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Online sahaf&#39; platformları Nadir Kitap ve Kitantik&#39;e akşam saatlerinde mahkeme kararıyla erişim engeli getirildi, ancak hiçbir tebligat yapılmadı.</p></div>
            </div>
        </a><a href='https://haber.sol.org.tr/haber/nadir-kitapa-erisim-engeli-357366'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadir Kitap&#39;a erişim engeli</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAAsfClZBTl3s8elPJIIacULT3fWqfZt0N25vjqi9_tGKltOmScrnfdYwElaSJcPzUobRYhLGW" alt="Nadir Kitap&#39;a erişim engeli" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erişim engellemesinin gerekçesi henüz açıklanmazken, Nadir Kitap&#39;tan yapılan açıklamada, “30.11.2022 tarihinde, akşam saatlerinde web sitemize mahkeme kararıyla&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gercekgundem.com/kultur-sanat/kitapseverlerin-ilgi-odagi-nadir-kitapa-erisim-engeli-402479'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kitapseverlerin ilgi odağı Nadir Kitap&#39;a erişim engeli</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_bLXcYRsG46g_paa5LfUY9nsOKZFlLrFYvdPHaKfvdr25vdJcNDfQfJnsRuXNJrd_eBsiU9Jb" alt="Kitapseverlerin ilgi odağı Nadir Kitap&#39;a erişim engeli" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tüm Türkiye&#39;den yüzlerce kitapçının online olarak satış yaptığı Nadir Kitap&#39;ın internet sitesine erişim engeli getirildi.</p></div>
            </div>
        </a>
        </Template></>;
}