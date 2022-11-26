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
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/6381140b4e3fe0216cfc0f9c.jpg" alt="Denizlispor"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/sporarena/denizlispor-ile-bodrumspor-puanlari-bolustu-42177253'>
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
        </a><a href='https://www.yenisafak.com/denizlispor-0-0-bodrumspor-mac-ozeti-izle-video-h-3892192'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor 0-0 Bodrumspor Maç Özeti İzle (VİDEO)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRm79m7yTErVOMp1KFIPoHQdHXYtZlLNiMorCpmSzgLlVmLqhoWjgC_NQ3Hp_OUEofGFfk8k9uT" alt="Denizlispor 0-0 Bodrumspor Maç Özeti İzle (VİDEO)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig 15. hafta maçları kaldığı yerden devam ediyor. Ligin son sırasında yer alan Altaş Denizlispor evinde Bodrumspor&#39;u konuk etti.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/denizlispor-bodrumspor-0-0-2311198'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor - Bodrumspor: 0-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3aT7VxY7ZhK3J7XTPQVQYIrBBcgaewbySYmPk8FRS5CPUJIsNoi8H3Ftvtuel-X42CxQV8SMm" alt="Denizlispor - Bodrumspor: 0-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1&#39;inci Lig&#39;in 15&#39;inci haftasında Altaş Denizlispor ile Bodrumspor berabere kaldı.</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/futbol/spor-toto-1-lig/canli-denizlispor-bodrumspor-265846.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ne Denizli ne Bodrum</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiWUD7sz3R_j-m8McX7QUsZQH9NopAecn9eHt3KtKA0_HiLD68CGncCXvs253Ip26V-z2aTk8O" alt="Ne Denizli ne Bodrum" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 15. haftasında Denizlispor ile Bordumspor 0-0 berabere kaldı.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/denizli-haberleri/100312585-denizlispor-bodrumspor-fotograflar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizlispor - Bodrumspor (FOTOĞRAFLAR)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY36lncbLl7LYIKBwhXYK4M7OYq5lL03bEFCG9LziU9goS3ZPMLBDAJPd15SueGLo4hGXy_34b" alt="Denizlispor - Bodrumspor (FOTOĞRAFLAR)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Ajansı, DHA, İHA tarafından geçilen tüm Denizli haberleri, bu bölümde Haberturk.com editörlerinin hiçbir editoryal müdahalesi olmadan otomatik&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yeniasir.com.tr/spor/denizlispor/2022/11/26/derbide-kazanan-yok'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Derbide kazanan yok</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQeb2mGGT05Ltyxag2eceuDK4hLiBoFBvPC-2318G8wgfND-6rX1KThZDegDrtFnH7xgKm71Qhg" alt="Derbide kazanan yok" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto Birinci Lig&#39;de ateş hattından kurtulmak isteyen Denizlispor ile Süper Lig mücadelesi veren Bodrumspor, Denizli Atatürk Stadı&#39;nda golsüz berabere.</p></div>
            </div>
        </a>
        </Template></>;
}