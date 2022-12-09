import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fenerbahçe Beko</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fenerbahçe Beko"/>
        <meta name="description" content="Trending News about Fenerbahçe Beko" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fenerbahçe Beko</h1>
            <Image width={800} height={500} src="https://images.eurohoops.net/2022/12/fe0ff4b0-moley-fener-alba-600x314.jpg" alt="Fenerbahçe Beko"/>
            <h3>Recent News</h3>
            <a href='https://www.eurohoops.net/tr/euroleague-tr/1430882/lider-fenerbahce-beko-berlinde-albayi-paramparca-etti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lider Fenerbahçe Beko, Berlin&#39;de ALBA&#39;yı Paramparça Etti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQl-_LnZeNYwDa-ggvDTJPQ3JvTmFbx6AaFfHlHbv0sM15tiGvJXJ5V07whpSLf3eA2KBJ8G9Bz" alt="Lider Fenerbahçe Beko, Berlin&#39;de ALBA&#39;yı Paramparça Etti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague normal sezonunun 12. hafta karşılaşmasında lider Fenerbahçe Beko, ligdeki son 8 maçını kaybeden ALBA Berlin&#39;in konuğu oldu. İkinci&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/basketbol/2022/12/08/alba-berlin-fenerbahce-beko-maci-canli-izle-a-berlin-fbahce-beko-canli-skor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alba Berlin Fenerbahçe Beko maçı CANLI İZLE A. Berlin-F.Bahçe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnJbBn8izpmSdnt_4nQ7xG_XYfAzNhHW9a7nj1sOpNQAUcH23zNApwJag2o4EfnWrnLkyBUwAo" alt="Alba Berlin Fenerbahçe Beko maçı CANLI İZLE A. Berlin-F.Bahçe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines Euroleague&#39;in THY Avrupa Ligi 12. haftasında temsilcimiz Fenerbahçe Beko, deplasmanda Alba Berlin&#39;le karşı karşıya geliyor.</p></div>
            </div>
        </a><a href='https://www.fenerbahce.org/haberler/basketbol-erkek/2022/12/alba-berlin-75-104-fenerbahce-beko'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alba Berlin 75-104 Fenerbahçe Beko - Fenerbahçe SK</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTA4NgMXzL68ta0QYhNdzpOJbl_RG76yKSQ5mC1E_vJzOwfaO7Ytl-JPFYr1MW2ttGLzzkTL3tV" alt="Alba Berlin 75-104 Fenerbahçe Beko - Fenerbahçe SK" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Beko Erkek Basketbol Takımımız, Turkish Airlines EuroLeague 12. hafta maçında Alba Berlin&#39;e konuk oldu. Almanya&#39;dan 29 sayı farkla 104-75 galip&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/sporskor/son-dakika-thy-euroleague-fenerbahce-beko-alba-berlini-farkli-yendi,9yg7SLRX0kahMqVbOnx5Yw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: THY EuroLeague | Fenerbahçe Beko, ALBA Berlin&#39;i ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtFMvupd-9lwdv8laXMCRgLBjFsdyUPU8XhCrSysGQSvQ4D23pPt2OMnXhszgqMm8MMl63PpsA" alt="SON DAKİKA: THY EuroLeague | Fenerbahçe Beko, ALBA Berlin&#39;i ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SON DAKİKA: THY EuroLeague&#39;in 12. haftasında Fenerbahçe Beko deplasmanda ALBA Berlin&#39;i 29 sayı farkla 104-75 yenerek 10. galibiyetini aldı.</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/fenerbahce-beko-dan-berlin-de-tarihi-fark-412963'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko&#39;dan Berlin&#39;de tarihi fark</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQL8FOKsXVUenylcm-bNtznH6wvd8HXm4wHjoSUEYCl6oOx_Cf1WdNe7Nyrn3jta7mwkAxyKN8O" alt="Fenerbahçe Beko&#39;dan Berlin&#39;de tarihi fark" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY EuroLeague&#39;in 12. hafta maçında Fenerbahçe Beko deplasmanda ALBA Berlin&#39;i 29 sayı farkla 104-75 yenerek 10. galibiyetini aldı.</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/spor/fenerbahce-beko-sov-yapti-liderligi-birakmadi/haber-1325598'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko şov yaptı! Liderliği bırakmadı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnZtkAkRELaDZw2oDELHsUAG8P2EYG5rORCmPVBGG4PTNcagtlC_9v4e6InanYemGFQis8guLB" alt="Fenerbahçe Beko şov yaptı! Liderliği bırakmadı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Beko, THY EuroLeague&#39;de deplasmanda ALBA Berlin&#39;i 104-75 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/basketbol/fenerbahce-beko-alba-berlini-deplasmanda-yuzledi-7521809/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko Alba Berlin&#39;i deplasmanda &#39;Yüzledi&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVc_BGFHnpTZSTMrADBDSgGm5o1CPoRCgEDPQecKhQbNXHZaMFk2Vx9W2VzldBnNwR1ld5wpSp" alt="Fenerbahçe Beko Alba Berlin&#39;i deplasmanda &#39;Yüzledi&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Beko, konuk olduğu Alba Berlin&#39;i farklı mağlup ederek Euroleague&#39;deki liderliğini sürdürdü. Yayınlanma: 00:49 - 09 Aralık 2022.</p></div>
            </div>
        </a>
        </Template></>;
}