import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mbappe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mbappe"/>
        <meta name="description" content="Trending News about Mbappe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mbappe</h1>
            <Image width={800} height={500} src="" alt="Mbappe"/>
            <h3>Recent News</h3>
            <a href='https://www.sozcu.com.tr/spor/dunyadan-spor/fransa-polonya-maci-canli-yayin-dunya-kupasi-son-16-turu-7517020/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fransa Polonya&#39;yı rahat geçerken Kylian Mbappe yıldızlaştı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhJ0BB7PaW_OL5TiUAyjnqZG8G6ken_-ZDho96BDdCsNfONarAVSoRxmz94D0lFLcA8HTRCqSE" alt="Fransa Polonya&#39;yı rahat geçerken Kylian Mbappe yıldızlaştı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dünya şampiyonu unvanlı Fransa, 2022 Dünya Kupası Son 16 Turu&#39;nda Polonya&#39;yı mağlup ederek çeyrek finale adını yazdırdı. Fransa&#39;nın yıldız futbolcusu Kylian&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/katarda-mbappenin-gecesi-266397.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katar&#39;da Mbappe&#39;nin gecesi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQG-bxlbPaddXwHScoFuPSQt5ZXZ_dumMU6dTX0O7KeEa5yC67hjUC65GI_ezS7P4rAqClDllAB" alt="Katar&#39;da Mbappe&#39;nin gecesi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fransa&#39;nın yıldız oyuncusu Kylien Mbappe, Polonya karşısında 2 gol atarak turnuvadaki gol sayısını 5&#39;e yükseltti. Rusya 2018&#39;de de 4 gol atan Mbappe,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.urfadegisim.com/mbappe-dunya-kupasi-na-damga-vuruyor/68846/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mbappe, Dünya Kupası&#39;na damga vuruyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqJCj5-tyvqibcA_alqdd_DcV6qspF4_31N-i5VuJIN_fp8zHDcHZd1j-kZovKyaXEXAmfghSV" alt="Mbappe, Dünya Kupası&#39;na damga vuruyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen FIFA 2022 Dünya Kupası&#39;nda Fransa, Polonya&#39;yı 3-1 yendi ve çeyrek final bileti aldı. Fransa&#39;nın 2 golünü Cezayir asıllı Fransız...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/dunya-kupasi/mbappeden-polonyaya-muthis-gol'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mbappeden Polonyaya müthiş gol</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQW7cl9JLV12kG51eGWBZj5M9mELhqPC4oXSm8I6bLbJiWaOlWF-q1TpfeGlLfW4Uf-_7JSvCj" alt="Mbappeden Polonyaya müthiş gol" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fransa&#39;nın Polonya&#39;yı 3-1 mağlup ederek çeyrek finale yüksekdiği maçta Kylian Mbappe, 2 gol attı. Mbappe&#39;nin 2&#39;nci golü ise büyük beğeni topladı.</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/mbappe-atti-son-sampiyon-ceyrek-finale-kaldi-haber-1592176'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mbappe attı, son şampiyon çeyrek finale kaldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKNfY4FI6XpuLeE8T49iYqlDP7G2Fm4D4v0IIwHy2893yfEAjuCK6VrVPpvBo1sR5Ji3BR8ZUS" alt="Mbappe attı, son şampiyon çeyrek finale kaldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası son 16 turunda Fransa ile Polonya çeyrek final için mücadele etti. Fransa Mbappe&#39;nin 2 gol bulduğu maçtan 3-1 galip ayrılarak çeyrek finale&nbsp;...</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/mbappe-buyuledi-giroud-rekor-kirdi-fransa-ceyrek-finale-yukseldi-412414'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mbappe büyüledi, Giroud rekor kırdı, Fransa çeyrek finale yükseldi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRr2AtMMePelh1IoTObi2D2Yl0GG7DrRjMrKRIPvvQg7alAV7kpeSfy6ybvycSOIEDuC7wRYNaz" alt="Mbappe büyüledi, Giroud rekor kırdı, Fransa çeyrek finale yükseldi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fransa, Dünya Kupası&#39;nda Polonya 3-1 mağlup etti ve çeyrek finali yükseldi. Kylian Mbappe&#39;nin 2 gol 1 asistle yıldızlaştığı maçta Olivier Giroud ise&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kurdistan24.net/tr/story/84365-D%C3%BCnya-Kupas%C4%B1%E2%80%99nda-Fransa-%C3%A7eyrek-finalde:-Mbappe%E2%80%99den-2-gol-1-asist'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupası&#39;nda Fransa çeyrek finalde: Mbappe&#39;den 2 gol 1 asist</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJz3m8sisMrzikMNBA9cLUgMO1Bi3C40xH6bzC-pL5e_GDfpwqtWpPIN5TvGvejxbkHrsPw_f-" alt="Dünya Kupası&#39;nda Fransa çeyrek finalde: Mbappe&#39;den 2 gol 1 asist" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası son 16 turunda Fransa ile Polonya karşı karşıya geldi. Mücadele 3-1 Fransa üstünlüğüyle sona erdi. Maçta goller; 44. dakikada Olivier Giroud, 74.</p></div>
            </div>
        </a>
        </Template></>;
}