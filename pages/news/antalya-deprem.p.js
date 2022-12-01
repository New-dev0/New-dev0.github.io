import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Antalya deprem</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Antalya deprem"/>
        <meta name="description" content="Trending News about Antalya deprem" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Antalya deprem</h1>
            <Image width={800} height={500} src="" alt="Antalya deprem"/>
            <h3>Recent News</h3>
            <a href='https://www.sozcu.com.tr/2022/gundem/antalyada-deprem-11-7508424/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antalya&#39;da korkutan deprem (Son depremler)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_615kkFe7_8aEM6Iv1O-N142E9NXkYV8G2HjW-v3ED2bIIhGGyBGTgUw15zgavI93jlqNwbQG" alt="Antalya&#39;da korkutan deprem (Son depremler)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antalya&#39;da korkutan deprem (Son depremler) - Antalya&#39;nın Döşemealtı ilçesinde saat 00.29&#39;da 3.5 büyüklüğünde bir deprem meydana geldi.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/antalya-da-3-3-buyuklugunde-deprem-3543192'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antalya&#39;da 3,3 büyüklüğünde deprem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhtPPXGjG7TspHnnzbRjkFpIMEBdtVuyEuRm2ln22L-H8L2WBJI8hTzOYpx8Bsy6iq2XA6Q8sV" alt="Antalya&#39;da 3,3 büyüklüğünde deprem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Afet ve Acil Durum Yönetimi Başkanlığının (AFAD) internet sitesinde yer alan bilgiye göre, saat 00.29&#39;da merkez üssü Döşemealtı ilçesi olan 3,3 büyüklüğünde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/son-dakika-antalyada-korkutan-deprem-42179434'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: Antalya&#39;da korkutan deprem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWAKgjhm0j1rexjVy9YFwRF2V5CGM93bGwPod7ggxFA_qi1pjQqGeCxNW9SZYrnuLIEIqe5Bxn" alt="Son dakika: Antalya&#39;da korkutan deprem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AFAD&#39;dan aktarılan bigliye göre; Antalya&#39;nın Döşemealtı ilçesinde saat 00.29&#39;da 3,3 büyüklüğünde deprem meydana geldi. Deprem yerin 6.2 kilometre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/turkiye/son-dakika-haberi-antalyada-korkutan-deprem301122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA HABERİ: Antalya&#39;da korkutan deprem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIZQgboGqnHgm5wV1YEVcitKmSpYzA09-ewS0QGeDb_CUjRorSvmuuL76kwrPlWiVYiLb7QULP" alt="SON DAKİKA HABERİ: Antalya&#39;da korkutan deprem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kandilli Rasathanesi&#39;nin internet sitesinde yer alan bilgiye göre; Antalya&#39;nın Döşemealtı ilçesinde saat 00.29&#39;da 3,5 büyüklüğünde deprem meydana geldi.</p></div>
            </div>
        </a><a href='https://www.mynet.com/son-dakika-antalya-da-korkutan-deprem-afad-duyurdu-110107074970'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: Antalya&#39;da korkutan deprem! AFAD duyurdu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjrgeubuNVsVP4hhIYJKp4yMRkCNqL2UyrNweKOHIiY3WK0NPg0EQrvf_aAEgzUJu3SSJlnHXj" alt="Son dakika: Antalya&#39;da korkutan deprem! AFAD duyurdu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberine göre, Antalya&#39;nın Döşemealtı ilçesinde 3,3 büyüklüğünde bir deprem meydana geldi. AFAD&#39;dan yapılan açıklamada, depremin 5.34 kilometre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.internethaber.com/antalya-manisa-ve-ege-denizinde-pes-pese-deprem-oldu-afad-ve-kandilliden-aciklama-var-2280439h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antalya, Manisa ve Ege Denizi&#39;nde peş peşe deprem oldu! AFAD ve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVvbXmiGey67_CZyvXnkBGjLAry_zvhIJIFZHj6d0ZdA35LKhRI_IIxix3FW-P0mY7hpxjQwRk" alt="Antalya, Manisa ve Ege Denizi&#39;nde peş peşe deprem oldu! AFAD ve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>EGE Denizi&#39;nde dün 4.7 ve 5 şiddetinde iki deprem meydana geldi. Hemen ardından Antalya&#39;da 3.5, Manisa Soma&#39;da da 3 şiddetinde depremler oldu.</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/antalya-deprem-mi-oldu-dun-gece-antalya-da-15462347-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antalya deprem mi oldu? Dün gece Antalya&#39;da deprem mi oldu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJkcCkpNpYlibiRxKnpWwK2tSDRCuAVDGmU6P2_btXqGB9ZucxypITlvhzkc4FP9aBaR-BpE36" alt="Antalya deprem mi oldu? Dün gece Antalya&#39;da deprem mi oldu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antalya deprem mi oldu? Sorusu, Antalya&#39;da gerçekleşen sarsıntı ile birlikte merak edilmeye başlandı. AFAD ve Kandilli verilerine göre az önce deprem mi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}