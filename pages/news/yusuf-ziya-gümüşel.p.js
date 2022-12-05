import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yusuf Ziya Gümüşel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yusuf Ziya Gümüşel"/>
        <meta name="description" content="Trending News about Yusuf Ziya Gümüşel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yusuf Ziya Gümüşel</h1>
            <Image width={800} height={500} src="https://i.gazeteduvar.com.tr/2/1280/720/storage/files/images/2022/12/03/vakif-lg3y_cover.jpg" alt="Yusuf Ziya Gümüşel"/>
            <h3>Recent News</h3>
            <a href='https://www.gazeteduvar.com.tr/hiranur-vakfinin-kurucusu-yusuf-ziya-gumusele-cinsel-istismar-suclamasi-haber-1592009'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hiranur Vakfı&#39;nın kurucusu Yusuf Ziya Gümüşel&#39;e cinsel istismar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJ7NJd3yy1_D-uutqZLlif0g_iG6TVi5nclHcXuRXH-Pft8gbuGKjDnLRr64yjGc4Zej4wVl_psg" alt="Hiranur Vakfı&#39;nın kurucusu Yusuf Ziya Gümüşel&#39;e cinsel istismar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hiranur Vakfı&#39;nın kurucusu Yusuf Ziya Gümüşel&#39;in kızı H.K.G. babasının kendisini 6 yaşında imam nikahıyla &#39;evlendirdiğini&#39;, çocukluğunda her gün cinsel&nbsp;...</p></div>
            </div>
        </a><a href='https://t24.com.tr/haber/hiranur-vakfi-nin-kurucusu-yusuf-ziya-gumusel-in-kizi-sikayetci-oldu-6-yasinda-imam-nikahi-ve-tecavuz,1076498'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hiranur Vakfı&#39;nın kurucusu Yusuf Ziya Gümüşel&#39;in kızı şikâyetçi oldu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdHbfUzmFEWTTP3HSwdCgSrHA30loAHRqSYZsXz7zW18ivszgy0fIvxXhariaS368wSjDdpc_U" alt="Hiranur Vakfı&#39;nın kurucusu Yusuf Ziya Gümüşel&#39;in kızı şikâyetçi oldu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İsmailağa Cemaati&#39;ne bağlı Hiranur Vakfı&#39;nın kurucusu Yusuf Ziya Gümüşel&#39;in kızı H.K.G. babasının kendisini 6 yaşındayken imam nikahıyla “evlendirdiğini”,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.evrensel.net/haber/476137/ismailaga-cemaatine-bagli-hiranur-vakfi-kurucusu-yusuf-ziya-gumusele-cinsel-istismar-suclamasi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İsmailağa Cemaati&#39;ne bağlı Hiranur Vakfı kurucusu Yusuf Ziya ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSuzjUMhwbEHObf_nEjV38ojbWcW2KVUS6Tzc-ynwOCVMv-k9FmzG9qi1XWuvgz85PpVulUY6MG" alt="İsmailağa Cemaati&#39;ne bağlı Hiranur Vakfı kurucusu Yusuf Ziya ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hiranur Vakfı&#39;nın kurucusu Yusuf Ziya Gümüşel&#39;in kızı H.K.G. babasının kendisini 6 yaşında evlendirdiğini, her gün cinsel istismara uğradığını anlatarak&nbsp;...</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/karanlik-dunya-bir-cocugu-yuttu-tarikat-karanliginda-henuz-6-yasinda-412258'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karanlık dünya bir çocuğu yuttu: Tarikat karanlığında henüz 6 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdg6vx8_C9ScLgZehBxSXLWdxkUgAftJ2wHUReYXTiepvT72HFQN6Vdku62df4TquzAOD7giDL" alt="Karanlık dünya bir çocuğu yuttu: Tarikat karanlığında henüz 6 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İsmailağa Cemaati&#39;ne bağlı Hiranur Vakfı&#39;nın kurucusu Yusuf Ziya Gümüşel&#39;in kızı H.K.G. babasının kendisini 6 yaşındayken imam nikahıyla &#39;evlendirdiğini&#39;,</p></div>
            </div>
        </a>
        </Template></>;
}