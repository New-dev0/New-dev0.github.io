import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İzmir deprem</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İzmir deprem"/>
        <meta name="description" content="Trending News about İzmir deprem" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İzmir deprem</h1>
            <Image width={800} height={500} src="https://i.cnnturk.com/i/cnnturk/75/1200x675/63911926d265a20348777a84" alt="İzmir deprem"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnturk.com/turkiye/son-dakika-haberi-kusadasi-korfezinde-korkutan-deprem-aydin-ve-izmirde-de-hissedildi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika haberi... Kuşadası Körfezi&#39;nde korkutan deprem! Aydın ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRK5nUD28beHGVF-JJtQIczy33NHWJLJkUPl2EGy0w11N96OG99oMVfTluuuEruuE3qu4tsQ1n5" alt="Son dakika haberi... Kuşadası Körfezi&#39;nde korkutan deprem! Aydın ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gelen son dakika haberine göre; Aydın&#39;ın Kuşadası ilçesi açıklarında 4.0 büyüklüğünde bir deprem meydana geldi. Depremin İzmir ve Aydın&#39;dan hissedildiği...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/yasam/son-dakika-kusadasi-korfezinde-deprem-6269641'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: Kuşadası Körfezi&#39;nde deprem! İzmir ve Aydın&#39;da da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4fORXikCPU3mnXv-5xSY53f8_0nWbCqBxsVV7wjuwJrms8R8EvdGNuUq9JvmBCuDgSzb6JC74" alt="SON DAKİKA: Kuşadası Körfezi&#39;nde deprem! İzmir ve Aydın&#39;da da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AFAD&#39;tan gelen son dakika haberine göre saat 01.35&#39;te merkez üssü Aydın&#39;ın Kuşadası Körfezi açıklarında, Richter ölçeğine göre 4 büyüklüğünde deprem meydana&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/kusadasi-korfezi-nde-korkutan-deprem-izmir-ve-aydin-dan-hissedildi-110107077346'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kuşadası Körfezi&#39;nde korkutan deprem! İzmir ve Aydın&#39;dan hissedildi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjrgeubuNVsVP4hhIYJKp4yMRkCNqL2UyrNweKOHIiY3WK0NPg0EQrvf_aAEgzUJu3SSJlnHXj" alt="Kuşadası Körfezi&#39;nde korkutan deprem! İzmir ve Aydın&#39;dan hissedildi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İzmir ve Aydın&#39;da hissedilen depreme ilişkin AFAD&#39;dan paylaşılan verilerde, depremin yerin 7 kilometre derinliğinde meydana geldiği rapor edildi. deprem.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/son-dakika-kusadasi-korfezinde-deprem-42184012'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika! Kuşadası Körfezi&#39;nde deprem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRC-hyJBVvBcIXsNoddWD_s4W77K9VaWwByI9AktLlxCV8TVnhh7yBquxJuDSK2JVa9BIjjSso-" alt="Son dakika! Kuşadası Körfezi&#39;nde deprem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AFAD&#39;ın verilerine göre saat 01:35&#39;te, Kuşadası Körfezi&#39;nde 4.0 büyüklüğünde bir deprem meydana geldi. Deprem; İzmir, Aydın ve çevre illerden hissedildi.</p></div>
            </div>
        </a><a href='https://www.yenihaberden.com/kusadasi-korfezinde-korkutan-deprem-izmir-ve-aydinda-hissedildi-1757233h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kuşadası Körfezi&#39;nde korkutan deprem! İzmir ve Aydın&#39;da hissedildi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-0NFJH2ub-Dqgtsc_WVSv_TD5ZSPhS6apWY-hTe8lGe9TpuyqMBuNXEuYYpKsjepFL9OOtUQs" alt="Kuşadası Körfezi&#39;nde korkutan deprem! İzmir ve Aydın&#39;da hissedildi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İzmir ve Aydın&#39;da hissedilen depreme ilişkin AFAD&#39;dan paylaşılan verilerde, depremin yerin 7 kilometre derinliğinde meydana geldiği belirtildi. AFAD&#39;dan alınan&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}