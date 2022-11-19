import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Meral Akşener</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Meral Akşener"/>
        <meta name="description" content="Trending News about Meral Akşener" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Meral Akşener</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/18/2003869/kapak_083314.jpg" alt="Meral Akşener"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/siyaset/erdoganin-meral-aksenere-yaptigi-cagrinin-perde-arkasi-2003869'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erdoğan&#39;ın Meral Akşener&#39;e yaptığı çağrının perde arkası</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYO06ONGdpXYMH_GwI_OkDcmdvdPc3odC8r9S-1lI5N25dYSvArjBxT4aIgop3RLcYVOjW0yyg" alt="Erdoğan&#39;ın Meral Akşener&#39;e yaptığı çağrının perde arkası" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gazeteci ve eski CHP İstanbul Milletvekili Barış Yarkadaş, AKP&#39;li Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın, İYİ Parti Genel Başkanı Meral Akşener&#39;e yaptığı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/2022/gundem/meral-aksener-erdogana-altili-masayi-terk-et-yaniti-7484936/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meral Akşener&#39;den Erdoğan&#39;a “Altılı Masa&#39;yı terk et” yanıtı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_yJoa-aY7NQ3oHY4Xr1oK_xlbbhXYzkizG4JSjrGGLsgyM7hFIlfyDN6B68sJhQyZ-JS7Ss9D" alt="Meral Akşener&#39;den Erdoğan&#39;a “Altılı Masa&#39;yı terk et” yanıtı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhurbaşkanı ve AKP Genel Başkanı Recep Tayyip Erdoğan, G20 zirvesi için gittiği Endonezya dönüşü çarpıcı bir açıklama yaptı. İYİ Parti&#39;ye bir çağrıda bulunan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/turkiye/aksenerden-cumhurbaskani-erdoganin-cagrisina-yanit,PbA5K0GN3ES5Jzd82606wA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Akşener&#39;den Cumhurbaşkanı Erdoğan&#39;ın çağrısına yanıt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTCz5vO7q_EMRopYXxZksrRFdLL8phoKoHMY-WibsjjarE1OFA4oTsef27PL7tx2kZ_2M6sXTCa" alt="Akşener&#39;den Cumhurbaşkanı Erdoğan&#39;ın çağrısına yanıt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İYİ Parti Genel Başkanı, &#39;&#39;Biz bugüne kadar sayın Erdoğan&#39;ın yaptığı zigzaglara alıştık. Masaya oturan açılım yapan kendileri. Biz Erdoğan ve arkadaşlarının&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gercekgundem.com/siyaset/meral-aksenerin-iki-kirmizi-cizgisi-var-401153'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Meral Akşener&#39;in iki kırmızı çizgisi var&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQm44dRgNgDSooepS2Ok8va1rGKzB6V1hl4qDkwDzKLJfe6EzYz-Uwa53TPheB8SWDUm14-bgIv" alt="&#39;Meral Akşener&#39;in iki kırmızı çizgisi var&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Habertürk gazetesi yazarı Kübra Par, Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın İYİ Parti&#39;ye yönelik &#39;altılı masayı terk et&#39; çağrısını ve Meral Akşener&#39;in buna&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/politika/meral-aksenerden-cumhurbaskani-erdoganin-cagrisina-yanit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meral Akşenerden Cumhurbaşkanı Erdoğanın çağrısına yanıt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROZ5SiQoZZ8Vew3fHpLVL9au2p2J46EM_fL_kz5O2tStRF_s-t1Ql0eABkzyHtIy5JFbYz2FmO" alt="Meral Akşenerden Cumhurbaşkanı Erdoğanın çağrısına yanıt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İyi Parti&#39;ye 6&#39;lı masadaki konumunu yeniden gözden geçirme çağrısı yapan Cumhurbaşkanı&#39;na cevap veren Meral Akşener&#39;in, &#39;kumar masası&#39; benzetmesi dikkat&nbsp;...</p></div>
            </div>
        </a><a href='https://tr.euronews.com/2022/11/17/erdoganin-altili-masadan-kalk-cagrisina-aksenerden-rest'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erdoğan&#39;ın &#39;Altılı Masa&#39;dan kalk&#39; çağrısına Akşener&#39;den rest</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRz-73BOVj8H8ESZrpkjULEkiOp9FdC1YZrJEPpJXHZvo2PlmAa_rOajgZHt5ByF3bzCVtfP_wX" alt="Erdoğan&#39;ın &#39;Altılı Masa&#39;dan kalk&#39; çağrısına Akşener&#39;den rest" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın, İYİ Parti&#39;nin Altılı Masa&#39;dan kalkması yönündeki temennisine cevap veren İYİ Parti Genel Başkanı Meral Akşener,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/erdoganin-meral-aksenere-altili-masayi-terk-et-cagrisi-sonrasi-gazeteci-zafer-arapkirli-sarki-sozu-yazdi-598688h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zafer Arapkirli AKP&#39;nin Meral Akşener&#39;e muhtaç kalmasına şarkı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXD6WGKWj0zgdCHxAmIJMTVZiFkuJb6LHnFsQiixUSx8wOK1BpK39eL12mwwM_eXUoq12WpmP2" alt="Zafer Arapkirli AKP&#39;nin Meral Akşener&#39;e muhtaç kalmasına şarkı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gazeteci Zafer Arapkirli, Erdoğan&#39;ın İYİ Parti Genel Başkanı Meral Akşener&#39;e Altılı Masa&#39;yı terk etmesi için çağrıda bulunmasının ardından şarkı sözü yazdı.</p></div>
            </div>
        </a>
        </Template></>;
}