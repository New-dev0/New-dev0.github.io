import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Uğur Dündar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Uğur Dündar"/>
        <meta name="description" content="Trending News about Uğur Dündar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Uğur Dündar</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/29/2007485/kapak_230626.jpg" alt="Uğur Dündar"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/fenerbahcede-ugur-dundardan-ataturk-stadyumu-onerisine-yanit-2007485'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe&#39;de Uğur Dündar&#39;dan &#39;Atatürk Stadyumu&#39; önerisine yanıt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnBEbQTfoJowknJ3_pC98zzkVUaNMstksURKgrArgVlbV3cjRk1bjW2otZid7LCljjPN96Iv1e" alt="Fenerbahçe&#39;de Uğur Dündar&#39;dan &#39;Atatürk Stadyumu&#39; önerisine yanıt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Kulübü Yüksek Divan Kurulu Başkanı Uğur Dündar, katıldığı bir televizyon programında açıklamalarda bulundu. Dündar, sarı-lacivertli takımın&nbsp;...</p></div>
            </div>
        </a><a href='https://t24.com.tr/haber/ugur-dundar-aydin-dogan-iyi-patrondu-ona-cok-baski-yaptilar,1075679'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uğur Dündar: Aydın Doğan iyi patrondu, ona çok baskı yaptılar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQDIkU1PJCDbD6iWi4GKfCyaUd1lOpFxEvuPGrNPVpmt_ZvRJKzkbq4BzTCZDamXpILX23oP99b" alt="Uğur Dündar: Aydın Doğan iyi patrondu, ona çok baskı yaptılar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hukuk fakültesine kaydımı yaptırdım fakat o sırada bir gazetecinin hayatıyla ilgili bir film seyrettim. Dedim benim mesleğim bu: Gazetecilik… Hukukla da&nbsp;...</p></div>
            </div>
        </a><a href='https://www.futbolarena.com/fenerbahce/ugur-dundar-insallah-sampiyon-olacagiz-392236h/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uğur Dündar: &#39;İnşallah şampiyon olacağız&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ12cTano6EWSA3KObgq0bSBO6QpBoy-AF-g_fW6zzmg78Xq4eEhUQ65-HIRQZujx4E1sg-ey_Q" alt="Uğur Dündar: &#39;İnşallah şampiyon olacağız&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Yüksek Divan Kurulu Başkanı Uğur Dündar, &quot;Bu sezon futbol dışında basketbol ve mümkün olduğunda diğer branşlarda da şampiyonluk hedefliyoruz.</p></div>
            </div>
        </a>
        </Template></>;
}