import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lewandowski</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lewandowski"/>
        <meta name="description" content="Trending News about Lewandowski" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lewandowski</h1>
            <Image width={800} height={500} src="https://cdnuploads.aa.com.tr/uploads/Contents/2022/11/26/thumbs_b_c_458d4a4061db72779b948e5f93d3088c.jpg?v=183600" alt="Lewandowski"/>
            <h3>Recent News</h3>
            <a href='https://www.aa.com.tr/tr/dunyadan-spor/lewandowski-dunya-kupasindaki-ilk-golunu-atti/2748927'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewandowski, Dünya Kupası&#39;ndaki ilk golünü attı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJyt_mNBsx5FmzPj8grSkQuOOsAzk-7OvJAfKcw1Cx-lqCrIstasTV6kfvZMlCvapceodd0xFU" alt="Lewandowski, Dünya Kupası&#39;ndaki ilk golünü attı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası&#39;nda Polonya, C Grubu&#39;ndaki ikinci maçında Suudi Arabistan&#39;ı 2-0 yendi. Polonyalı yıldız Lewandowski, Dünya Kupası&#39;ndaki ilk golünü&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/lewandowski-ilk-golunu-atti-gozyaslarini-tutamadi-haber-1591015'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewandowski ilk golünü attı, gözyaşlarını tutamadı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRP9SAvg4BXHfy_axf1ngOgVzYq2kjnkTTpB9cKF6ws8FvoXU0VZ4hFhviNjmGmug-gqfJslMJe" alt="Lewandowski ilk golünü attı, gözyaşlarını tutamadı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suudi Arabistan&#39;ı 2-0 yendikleri maçta, dünya kupalarındaki ilk golünü atan Polonyalı yıldız Lewandowski, gol sonrasında gözyaşlarına hakim olmadı.</p></div>
            </div>
        </a><a href='https://www.goal.com/tr/haber/lewandowski-dunya-kupasi-ndaki-ilk-golunu-atti-szczesny-penalti-kurtardi-polonya-suudi-arabistan-macindan-sag-cikti/blt2a3f134460988b79'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewandowski, Dünya Kupası&#39;ndaki ilk golünü attı! Szczesny penaltı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7VsnvFANZ-0MhQJgU9sw7V7I0cquV7Ncl4K8QI1gR_q1QQHFmrzBXeW5nsc_G0LCj6ZfKiTVY" alt="Lewandowski, Dünya Kupası&#39;ndaki ilk golünü attı! Szczesny penaltı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Robert Lewandowski, Polonya&#39;nın Suudi Arabistan&#39;ı mağlup ettiği maçta ilk Dünya Kupası golünü attı.</p></div>
            </div>
        </a><a href='https://www.ntvspor.net/futbol/lewandowski-yi-aglatan-gol-pele-detayi-63822a9f66db228e5caffe83'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewandowski&#39;yi ağlatan gol: Pele detayı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTF1EDJ1MqzDwRM-6arN-XoTCUwtUddVlhyRdc_3Y0r2_WcGavdXhuWttqgm3H39NnxZsbZ8HK" alt="Lewandowski&#39;yi ağlatan gol: Pele detayı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polonya, Dünya Kupası C grubunda Suudi Arabistan&#39;ı 2-0 mağlup etti. Maçta ikinci golü atan Lewandowski ilki başardı.</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/lewandowski-muradina-erdi-polonya-galibiyete-uzandi-411426'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewandowski muradına erdi, Polonya galibiyete uzandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOxki7Qk-yLupDMWlSxJHcY9MednqcABZN3aeZTnnx8jxxbwilIgl40k6XEOC3wcMP2jBDgQ5V" alt="Lewandowski muradına erdi, Polonya galibiyete uzandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polonya, Dünya Kupası C grubunda Suudi Arabistan ile karşılaştı. Maçı 2-0 Polonya kazanırken, yıldız golcü Robert Lewandowski, Dünya Kupası&#39;nda fileleri&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/galeri/spor/polonya-suudi-arabistani-devirdi-robert-lewandowski-dunya-kupasindali-ilk-golunu-atti-gozyaslarini-tutamadi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polonya, Suudi Arabistan&#39;ı devirdi: Robert Lewandowski, Dünya ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZp7F5VcNMgETdS-G0hjMVRz3jzGYnDJSMJyocmdRAIyVR0q7TswuLGWskChIe2dIebqQ_Vh8a" alt="Polonya, Suudi Arabistan&#39;ı devirdi: Robert Lewandowski, Dünya ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen 2022 Dünya Kupası&#39;nda heyecan sürüyor... C grubu 2. hafta karşılaşmasında Polonya, Suudi Arabistan 2-0 mağlup etti.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/lewandowski-dunya-kupasi-nda-golle-tanisti-polonya-kazandi-1110019'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewandowski Dünya Kupası&#39;nda Golle Tanıştı, Polonya Kazandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTj2IHM5A0nHrxCIr26RLq4RijY6qOBrB8tjiP1jGA11N2Zay-iaxtFWai5KFLARkKylCeO-17a" alt="Lewandowski Dünya Kupası&#39;nda Golle Tanıştı, Polonya Kazandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Dünya Kupası C Grubu&#39;nda yer alan Polonya ve Suudi Arabistan karşı karşıya geldi. Polonya maçı 2-0 kazanırken, Lewandowski bir ilke imza attı.</p></div>
            </div>
        </a>
        </Template></>;
}