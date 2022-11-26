import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Denizlispor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Denizlispor"/>
        <meta name="description" content="Trending News about Denizlispor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Denizlispor</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/482000/483154.jpg" alt="Denizlispor"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/futbol/spor-toto-1-lig/canli-denizlispor-bodrumspor-265846.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CANLI | Denizlispor - Bodrumspor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIXxPb8tZQRw1oysSHNpWfSuaw4kLUnZ8452k6dIRGhlPtG3yLdArbCt-4OvESw3vjjQZpyesU" alt="CANLI | Denizlispor - Bodrumspor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 15. haftasında Denizlispor ile Bordumspor karşı karşıya geliyor. Mücadele TRT SPOR&#39;da canlı yayınlanıyor.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/denizlispor-bodrumspor-0-0-2311198'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor - Bodrumspor: 0-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3aT7VxY7ZhK3J7XTPQVQYIrBBcgaewbySYmPk8FRS5CPUJIsNoi8H3Ftvtuel-X42CxQV8SMm" alt="Denizlispor - Bodrumspor: 0-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1&#39;inci Lig&#39;in 15&#39;inci haftasında Altaş Denizlispor ile Bodrumspor berabere kaldı.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/sporarena/denizlispor-ile-bodrumspor-puanlari-bolustu-42177253'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor ile Bodrumspor puanları bölüştü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1ch9f6US3xyoAgSkO_0dliuRIrPhQTnSapTeZAyel9xrvkpqnk6-y_86DZ4nKcFN_k2ukkLXw" alt="Denizlispor ile Bodrumspor puanları bölüştü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 15. haftasında A. Denizlispor, konuk etiği Bodrumspor ile 0-0 berabere kaldı.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/birincilig/2022/11/25/denizlispor-teknik-direktoru-giray-bulak-bodrumspor-maci-sonrasi-konustu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor Teknik Direktörü Giray Bulak Bodrumspor maçı sonrası ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqZNgqe06BVe_g0MwT4zO6FyXBXyYziMKcDmlfAIjhEQBZdKD4yJj9Dkuu4PCrgg12Omnq1Es5" alt="Denizlispor Teknik Direktörü Giray Bulak Bodrumspor maçı sonrası ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 15. haftasında Denizlispor ile Bodrumspor golsüz berabere kaldı. Denizlispor Teknik Direktörü Giray Bulak karşılaşma sonrasında&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/denizli-haberleri/100312585-denizlispor-bodrumspor-fotograflar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor - Bodrumspor (FOTOĞRAFLAR)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY36lncbLl7LYIKBwhXYK4M7OYq5lL03bEFCG9LziU9goS3ZPMLBDAJPd15SueGLo4hGXy_34b" alt="Denizlispor - Bodrumspor (FOTOĞRAFLAR)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Ajansı, DHA, İHA tarafından geçilen tüm Denizli haberleri, bu bölümde Haberturk.com editörlerinin hiçbir editoryal müdahalesi olmadan otomatik&nbsp;...</p></div>
            </div>
        </a><a href='https://www.star.com.tr/spor/denizlispor-bodrumspor-ile-yenisemedi-haber-1751166/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor, Bodrumspor ile yenişemedi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAw-uZwoRmc8E7NfXBoCAWfXAIYL1tEkDwgLE_UiSJlwILeJi_MVez-sKfVWh5Tj9v0IwG8dO4" alt="Denizlispor, Bodrumspor ile yenişemedi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1&#39;inci Lig&#39;in 15&#39;inci haftasında Altaş Denizlispor ile Bodrumspor 0-0 berabere kaldı. STAT: Atatürk. HAKEMLER: Adnan Deniz Kayatepe (xx),&nbsp;...</p></div>
            </div>
        </a><a href='https://d20haber.com/spor/futbol/denizlispor-bodrumspor-ile-berabere-kaldi-0-0/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor, Bodrumspor ile berabere kaldı: 0-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmkPSii0Nes0IiekUyyOvn0nq8MTj0roOpUtmIh2I9w3ZnEmbXQPoUMIEqvDVnk2hJINh809fp" alt="Denizlispor, Bodrumspor ile berabere kaldı: 0-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Denizlispor, Bodrumspor ile berabere kaldı: 0-0 - D20Haber - Denizli&#39;deki en güncel gelişmeler, denizli haberleri, özel haberler, son dakika haberleri,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}