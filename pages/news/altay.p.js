import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Altay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Altay"/>
        <meta name="description" content="Trending News about Altay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Altay</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/637bd68a4e3fe02590f93293.jpg" alt="Altay"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/sporarena/altay-tek-golle-kazandi-42174704'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Altay tek golle kazandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfdi4l7ZyRdpGEOoYtvXr0Pbhz0mGfuJ71_8v-z0bnEDFodCNc_vE90_VqPZO83445OE_jIETc" alt="Altay tek golle kazandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 14. haftasında Gençlerbirliği&#39;ni konuk eden Altay, rakibini 1-0 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/futbol/spor-toto-1-lig/canli-altay-genclerbirligi-265692.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CANLI Altay - Gençlerbirliği</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIXxPb8tZQRw1oysSHNpWfSuaw4kLUnZ8452k6dIRGhlPtG3yLdArbCt-4OvESw3vjjQZpyesU" alt="CANLI Altay - Gençlerbirliği" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;de 14. hafta, Altay - Gençlerbirliği&#39;ni konuk ediyor. Mücadele TRT SPOR&#39;da canlı yayınlanıyor.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/birincilig/2022/11/21/altay-1-0-genclerbirligi-mac-sonucu-ozet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Altay 1-0 Gençlerbirliği MAÇ SONUCU - ÖZET</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-zCO_Ni8vuGfowQHOTLpGBJBLUJjTy9zrTyFfwM7Hs3JxlgYJGb05JkU5DWAkBGCNr9BYMCrW" alt="Altay 1-0 Gençlerbirliği MAÇ SONUCU - ÖZET" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 14. haftasının kapanış mücadelesinde Altay ile Gençlerbirliği karşı karşıya geldi. İzmir&#39;de oynanan zorlu mücadelede Altay evinde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/altay-genclerbirligi-1-0-mac-sonucu-3540732-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Altay - Gençlerbirliği: 1-0 (MAÇ SONUCU)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-k-o5DrdWLw4XcLleBXe-NTgh54RgrkwKB6yoykvkJF89RTyAmCLTLni3T4uBZPpp88DoxK8A" alt="Altay - Gençlerbirliği: 1-0 (MAÇ SONUCU)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig 14. hafta kapanış maçında Gençlerbirliği&#39;ni ağırlayan Altay, sahadan 1-0 galip ayrıldı.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/tff-1-ligde-altay-marco-paixao-ile-guldu-2004965'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TFF 1. Lig&#39;de Altay, Marco Paixao ile güldü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqMUaldwpkSzzASwLd8LoPWs0gH3ld7sw-xW13XBy86FW9ne8bEu260z3_Fb93_uBludgJkC24" alt="TFF 1. Lig&#39;de Altay, Marco Paixao ile güldü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Altay, TFF 1. Lig&#39;in 14. haftasında kendi sahasında ağırladığı Gençlerbirliği&#39;ni 1-0 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/ozet-altay-genclerbirligi-mac-sonucu-1-0-2310805'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>(ÖZET) Altay-Gençlerbirliği maç sonucu: 1-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQI1rPNnna_DrmEroLxAdpVsBAlTAuWB7fYWYzpvut-KcmCksyVchkJ7ThDvLl2qLDizxN3cUiQ" alt="(ÖZET) Altay-Gençlerbirliği maç sonucu: 1-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Altay, Spor Toto 1. Lig&#39;in 14. haftasında konuk ettiği Gençlerbirliği&#39;ni Marco Paixao&#39;nun penaltıdan attığı golle 1-0 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/skorer/altay-genclerbirligi-1-0-6860820'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Altay - Gençlerbirliği: 1-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQyYYt8_i7oZXhynSl-_tmvAg-fgbi2B30jCfj8K9jFrBrTDS4c7icBrDIqNJ7EdkDj_pfCHS4U" alt="Altay - Gençlerbirliği: 1-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1&#39;inci Lig&#39;de son haftaların formda ekibi Altay, evinde düşme hattında yer alan Gençlerbirliği&#39;ni tek golle mağlup etti.</p></div>
            </div>
        </a>
        </Template></>;
}