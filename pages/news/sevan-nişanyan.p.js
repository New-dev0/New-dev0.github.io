import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sevan Nişanyan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sevan Nişanyan"/>
        <meta name="description" content="Trending News about Sevan Nişanyan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sevan Nişanyan</h1>
            <Image width={800} height={500} src="https://cdn.yenicaggazetesi.com.tr/news/2022/11/161120221636210549018.jpg" alt="Sevan Nişanyan"/>
            <h3>Recent News</h3>
            <a href='https://www.yenicaggazetesi.com.tr/ermeni-yazar-seven-nisanyan-kadir-misirogluna-ovguler-yagdirdi-kadir-misiroglunun-zekasini-kemalistler-anlayamaz-598181h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ermeni yazar Seven Nişanyan Kadir Mısıroğlu&#39;na övgüler yağdırdı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSUgrc3KI8QW8iAVGAWOcZiVW8dV3sgoaxwWRtQRaPKS1BnQmJEpKXbKTVDJzymVPCLFf-57ik" alt="Ermeni yazar Seven Nişanyan Kadir Mısıroğlu&#39;na övgüler yağdırdı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ermeni yazar Sevan Nişanyan, Mustafa Kemal Atatürk düşmanı Kadir Mısıroğlu&#39;na övgüler yağdırdı. Nişanyan, Mısıroğlu için &#39;&#39;Kendi sahasında oldukça bilgili&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yurtgazetesi.com.tr/guncel/sevan-nisanyandan-kadir-misirogluna-ovgu-kemalistlere-hakaret-tepki-yagdi-h213063.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sevan Nişanyan&#39;dan Kadir Mısıroğlu&#39;na övgü, Kemalistlere hakaret ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS4WN-rt1pxUd8ZY2XMyW99rIRcTmMqhVXzSyd1JC-R6tp6Kx1t-bsBRa2fKMuC66n6b9NSzioC" alt="Sevan Nişanyan&#39;dan Kadir Mısıroğlu&#39;na övgü, Kemalistlere hakaret ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ateist yazar Sevan Nişanyan, &#39;Keşke Yunan kazansaydı&#39; diyen Atatürk düşmanı Kadir Mısıroğlu&#39;na övgüler yağdırdı.</p></div>
            </div>
        </a><a href='https://www.habervakti.com/sevan-nisanyan-kadir-misiroglu-zekiydi-kemalciler-onu-anlayamaz-cunku-ahlak-anlayislari-yok'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sevan Nişanyan: Kadir Mısıroğlu zekiydi, Kemalciler onu anlayamaz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSiq39NIWOTAK65Ns7cZ-dReIojBX_lXLSVxRereCnEq3ttr5Z83EOnPC9n6W7FZ154qAMOo06H" alt="Sevan Nişanyan: Kadir Mısıroğlu zekiydi, Kemalciler onu anlayamaz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiyeli bir Ermeni olan dilbilimci Sevan Nişanyan, Kemalistlerin düşünceleri nedeniyle ağır hakaretlerde bulunduğu tarihçi-yazar Kadir Mısıroğlu&#39;nun zeki&nbsp;...</p></div>
            </div>
        </a><a href='https://www.veryansintv.com/esine-bok-doken-nisanyan-misiroglunu-ovdu-kemalistleri-hedef-aldi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eşinin başına bok döken Nişanyan, Mısıroğlu&#39;nu övdü, Kemalistleri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTm3Jh-H1Lkg3yRPpjQW3PUPTKTlAwIGbjkaWHBsjrB0TXaTBJB5Mp1z0OxbXGCcGIoC_xa_1RC" alt="Eşinin başına bok döken Nişanyan, Mısıroğlu&#39;nu övdü, Kemalistleri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nişanyan&#39;ın bok kavanozu vukuatı 2008 yılına dayanıyor. O dönem Agos Gazetesi yazarı olan ve aynı zamanda İstanbul Bilgi Üniversitesi&#39;nde Türk Dili ve Tarihi&nbsp;...</p></div>
            </div>
        </a><a href='https://haberalternatif.com/feto-savunucusu-sevan-nisanyandan-kemalistlere-kadir-misiroglu-hakareti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FETÖ SAVUNUCUSU SEVAN NİŞANYAN&#39;DAN KEMALİSTLERE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTI51aZyS8FNXeHG07uZnBh4NJ92iT19wlLnFYzNiqYGfR8i3ypTsLGCmhTSbVb6TC3-fYjc4S4" alt="FETÖ SAVUNUCUSU SEVAN NİŞANYAN&#39;DAN KEMALİSTLERE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ergenekon-Balyoz kumpaslarının FETÖ savuncusu, eski Taraf yazarı,Sevan Nişanyan&#39;dan Kadir Mısıroğlu üzerinden Kemalistlere hakaret...</p></div>
            </div>
        </a>
        </Template></>;
}