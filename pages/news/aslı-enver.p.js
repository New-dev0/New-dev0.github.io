import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aslı Enver</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aslı Enver"/>
        <meta name="description" content="Trending News about Aslı Enver" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aslı Enver</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/27/2006618/kapak_133929.jpg" alt="Aslı Enver"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/yasam/asli-enverden-gecmisiyle-ilgili-dikkat-ceken-itiraf-abartili-davranmisim-2006618'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver&#39;den geçmişiyle ilgili dikkat çeken itiraf: &#39;Abartılı davranmışım&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQF-LsOta7IK9j3hPe-VLQsTUKDBgwvUz3l4lgj2R0HSWI-EmrESz3dEzfTGJXOSpTlzFfBldrB" alt="Aslı Enver&#39;den geçmişiyle ilgili dikkat çeken itiraf: &#39;Abartılı davranmışım&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oyuncu Aslı Enver, iş insanı Berkin Gökbudak ile sürpriz bir kararla nikah masasına oturdu. Evlilik sonrası hamile olduğu ortaya çıkan Enver&#39;den dikkat&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/magazin/asli-enverden-gecmisiyle-ilgili-dikkat-ceken-itiraf-abartili-davranmisim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver&#39;den geçmişiyle ilgili olay itiraf! Abartılı davranmışım</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQeMkof-XIoT7DT2geuyLd31TSV42VnL2j6OVAD1sLs4DbvXwVkZyj83jNAMRva53zIlX5mE-_N" alt="Aslı Enver&#39;den geçmişiyle ilgili olay itiraf! Abartılı davranmışım" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kavak Yelleri, Suskunlar, Kayıp ve İstanbullu Gelin projelerle adından söz ettiren Aslı Enver, geçtiğimiz günlerde sürpriz bir kararla Berkin Gökbudak&#39;la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/magazin/asli-enverden-gecmisiyle-ilgili-olay-itiraf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver&#39;den geçmişiyle ilgili olay itiraf!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcToelP4_vUE4WL3EG3prRdE7VQfizJLtbL6uAT6U-md_PDfwWzKr-k1nlnbS_f8mcYCrPCUEHf8" alt="Aslı Enver&#39;den geçmişiyle ilgili olay itiraf!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Hayat Bilgisi&#39;, &#39;Kavak Yelleri&#39;, &#39;Suskunlar&#39; ve &#39;İstanbullu Gelin&#39; dizileriyle adını geniş kitlelere duyuran Aslı Enver, bir süredir aşk yaşadığı sevgilisi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/galeri/magazin/asli-enver-berkin-gokbudakla-evlendi-anne-olmak-icin-gun-sayan-asli-enverden-cok-konusulacak-itiraflar-abartili-davranmisim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver sürpriz bir şekilde Berkin Gökbudak&#39;la evlendi! Anne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSaPmAeAmif8sCXtn7rNLp8MZGwfHEgQUzgsDQB8vvfmMYT8Uz7aWNNKPstN1pn0r7H4aMlx8WpuQ" alt="Aslı Enver sürpriz bir şekilde Berkin Gökbudak&#39;la evlendi! Anne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kavak Yelleri dizisi ile tanınan ardından Suskunlar, Kayıp ve İstanbullu Gelin projeleriyle şöhretine şöhret katan Aslı Enver, geçen günlerde sürpriz bir...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/asli-enver-gecmiste-abartili-davranmisim-magazin-haberleri-3542360-magazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver: Geçmişte abartılı davranmışım - Magazin haberleri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0Rhc5Salpr1k3P9E-hKL41v_DxSyoV60Qsf7AmBqkMDCMPL-Wj0K9XXd8n4Rfj1uB1uOz0buW" alt="Aslı Enver: Geçmişte abartılı davranmışım - Magazin haberleri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aslı Enver, 12 Kasım 2022&#39;de ikinci kez nikah masasına oturmuştu. Ünlü oyuncu, yaklaşık 6 aydır aşk yaşadığı sevgilisi Berkin Gökbudak ile hayatını&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/magazin/anne-olmaya-hazirlanan-asli-enverin-gecmis-pismanligi-cok-abartili-davranmisim/haber-1322616'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anne olmaya hazırlanan Aslı Enver&#39;in geçmiş pişmanlığı: &quot;Çok ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-MTyUlsf4VudXxqEy8vYkYD-4F1MwI2MkgGRbSiGJnUgIafoxgwA6FVraLT3BG6fWsx_DgKQy" alt="Anne olmaya hazırlanan Aslı Enver&#39;in geçmiş pişmanlığı: &quot;Çok ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aslı Enver, anne olacağı haberini aldıktan sonraki ilk röportajını verdi. İş insanı Berkin Gökbudak ile yuva kuran Aslı Enver, Instyle Türkiye Dergisi&#39;ne&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/asli-enver-den-bebek-aciklamasi-gecmisteki-bazi-davranislarimin-431966-mymagazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver&#39;den bebek açıklaması: Geçmişteki bazı davranışlarımın...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiieTH_2VyAcMG_UGz_AEqYjsVf3cHIFJvHd64iUhcWT5QF2btMUQA1s-JjjReXLjFvUckrNG7" alt="Aslı Enver&#39;den bebek açıklaması: Geçmişteki bazı davranışlarımın..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Berkin Gökbudak&#39;la aile arasında bir törenle evlenen oyuncu Aslı Enver, bir zamanlar gelecek korkusu yaşadığını itiraf ederek çarpıcı ifadeler kullandı.</p></div>
            </div>
        </a>
        </Template></>;
}