import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ahmet Davutoğlu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ahmet Davutoğlu"/>
        <meta name="description" content="Trending News about Ahmet Davutoğlu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ahmet Davutoğlu</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/17/2003800/kapak_221420.jpg" alt="Ahmet Davutoğlu"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/siyaset/son-dakika-ahmet-davutoglu-2017ye-kadar-turkiye-uyusturucuda-transit-ulke-konumundaydi-2003800'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika... Ahmet Davutoğlu: 2017&#39;ye kadar Türkiye ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPKXLr-_tZ-oxtdpcLnHPPJuZS8QV_vHUIt25fZFh_Kr9v5-Bzhb5Dp1BrJmev4WBjgZgWgnLg" alt="Son Dakika... Ahmet Davutoğlu: 2017&#39;ye kadar Türkiye ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika gelişmesi... Gelecek Partisi lideri Davutoğlu, Ağustos 2021&#39;de 1.3 ton kokain dolu haldeyken Brezilya&#39;da el konulan Türk uçağıyla ilgili,&nbsp;...</p></div>
            </div>
        </a><a href='https://gazetekarinca.com/ahmet-davutoglu-siyasi-liderlerin-kullandigi-ucak-satildiktan-sonra-uyusturucu-tasirken-yakalandi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ahmet Davutoğlu: Siyasi liderlerin kullandığı uçak satıldıktan sonra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRC2t4n1vkcXioqCJnHfihOq1YBfh3GimvrNjLrVuuuxWdsOvsn2Yn83zhKQaAJor92a93nBYe" alt="Ahmet Davutoğlu: Siyasi liderlerin kullandığı uçak satıldıktan sonra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gelecek Partisi Genel Başkanı Ahmet Davutoğlu; Başbakanlığı döneminde kendisinin, 90&#39;lı yıllarda ise siyasi liderlerin kullandığı uçağın satıldıktan sonra&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/2022/gundem/davutoglu-basbakanken-kullandigim-ucakla-uyusturucu-tasindi-7485307/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Davutoğlu: Başbakanken kullandığım uçakla uyuşturucu taşındı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhwFNrBxIXH7jel4w0icFAk0UFIWb8yb3S6peV3T8WGmfeN3yhYtuB3VHdO-atRjWf9jvRX68o" alt="Davutoğlu: Başbakanken kullandığım uçakla uyuşturucu taşındı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Davutoğlu: Başbakanken kullandığım uçakla uyuşturucu taşındı - Gelecek Partisi Genel Başkanı Ahmet Davutoğlu, partisinin uyuşturucu ile mücadele eylem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.odatv4.com/siyaset/ahmet-davutoglu-bakanlik-yaparken-kullandigim-ucakta-kokain-yakalandi-258832'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ahmet Davutoğlu: “Bakanlık yaparken kullandığım uçakta kokain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjnKlkbYNPkq1NFgJPP_FLIB6qieGoINmSdaBb53ZXK8UqbNd-kww2MCAS9ewo9fJ2brE3uO4u" alt="Ahmet Davutoğlu: “Bakanlık yaparken kullandığım uçakta kokain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gelecek Partisi Genel Başkanı Ahmet Davutoğlu, “Bir devletin haysiyeti, milletin haysiyeti olan ve &#39;Bizim cumhurbaşkanlarımızın, başbakanlarımızın kullandığı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.evrensel.net/haber/474931/ahmet-davutoglu-basbakanlik-donemimde-kullandigim-ucakla-uyusturucu-tasindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ahmet Davutoğlu: Başbakanlık dönemimde kullandığım uçakla ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuFi2rjUIPt-XphvMCiTijmCUCPM1nWz5MeECeJ_FAQuaGJV7F4AiJqqX2zGQnVUVse3W5bKnU" alt="Ahmet Davutoğlu: Başbakanlık dönemimde kullandığım uçakla ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahmet Davutoğlu, başbakanlık döneminde kullandığı uçak satıldıktan sonra uçakta uyuşturucu taşındığı olayı hatırlatarak &#39;Üzerinde ay yıldız olan uçak&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/ahmet-davutoglu-gundem-olan-ucagi-hatirlatti-basbakanlik-ucagi-ile-uyusturucu-tasindi-1107910'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ahmet Davutoğlu Gündem Olan Uçağı Hatırlattı: &#39;Başbakanlık Uçağı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNYQi4wgKEmk7dAIAGTTT1BtbsA0IKGGr5DSH2rpmeSKj3HyaHvhmb9kz_VYzeHxed07bIyQeF" alt="Ahmet Davutoğlu Gündem Olan Uçağı Hatırlattı: &#39;Başbakanlık Uçağı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahmet Davutoğlu, Gelecek Partisi&#39;nin uyuşturucu ile mücadele planını açıkladı. Davutoğlu, &#39;Bu ülke adına utanç duyduğum&#39; olay diyerek başbakanlık uçağı ile&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}