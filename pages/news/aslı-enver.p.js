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
            <Image width={800} height={500} src="https://cdn.yenicaggazetesi.com.tr/news/2022/11/261120221640564643319.jpg" alt="Aslı Enver"/>
            <h3>Recent News</h3>
            <a href='https://www.yenicaggazetesi.com.tr/asli-enverden-bebek-aciklamasi-601625h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver&#39;den bebek itirafı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4jetRHwjv2zy6XGqHdP6aEhc_9c5n38Szu788UNLMIlWUJ4Mt3fH52h9G7_E-YuISnrr5qWgq" alt="Aslı Enver&#39;den bebek itirafı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oyuncu Aslı Enver, iş insanı Berkin Gökbudak ile sürpriz bir kararla evlenmişti. Evlilik sonrası hamile olduğu ortaya çıkan Enver&#39;den dikkat çeken bir itiraf&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/asli-enver-den-bebek-aciklamasi-gecmisteki-bazi-davranislarimin-431966-mymagazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver&#39;den bebek açıklaması: Geçmişteki bazı davranışlarımın...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiieTH_2VyAcMG_UGz_AEqYjsVf3cHIFJvHd64iUhcWT5QF2btMUQA1s-JjjReXLjFvUckrNG7" alt="Aslı Enver&#39;den bebek açıklaması: Geçmişteki bazı davranışlarımın..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Berkin Gökbudak&#39;la aile arasında bir törenle evlenen oyuncu Aslı Enver, bir zamanlar gelecek korkusu yaşadığını itiraf ederek çarpıcı ifadeler kullandı.</p></div>
            </div>
        </a><a href='https://haberlerankara.com/foto/12610099/taze-gelin-asli-enverin-dekolteli-pozlari-yurek-hoplatti-karni-burnunda-hallerini-unutturdu-gorenlerin-nefesi-kesildi-tam-bir-melek-be'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taze Gelin Aslı Enver&#39;in Dekolteli Pozları Yürek Hoplattı! Karnı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS06NNt4iaBWnQg0n5Zp-yU_hKV8vVQWXEpsESblcGITrjOVoAono1E6CCV0z995S05dfGOF1Ir" alt="Taze Gelin Aslı Enver&#39;in Dekolteli Pozları Yürek Hoplattı! Karnı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taze Gelin Aslı Enver&#39;in Dekolteli Pozları Yürek Hoplattı! Karnı Burnunda Hallerini Unutturdu; Görenlerin Nefesi Kesildi! “Tam Bir Melek Be!” Son zamanların en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haber3.com/foto-galeri/magazin/asli-enver-surpriz-nikahin-ardindan-suskunlugunu-bozdu-galeri-6105217'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Enver sürpriz nikahın ardından suskunluğunu bozdu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT52U5dx5iqiYnR6ZqFFZfd8NWftp3z5kWQ-TIc9Vmpnb1o6ASAe06uk8hSr1zabhJQxNrjU6vX" alt="Aslı Enver sürpriz nikahın ardından suskunluğunu bozdu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İş insanı Berkin Gökbudak ile aile arasında düzenlenen törenle evlenen Aslı Enver, bu ani evlilik kararı ile herkesi şaşırtmıştı.</p></div>
            </div>
        </a>
        </Template></>;
}