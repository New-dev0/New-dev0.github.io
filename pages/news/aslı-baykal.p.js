import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aslı Baykal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aslı Baykal"/>
        <meta name="description" content="Trending News about Aslı Baykal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aslı Baykal</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/17/2003754/kapak_180613.jpg" alt="Aslı Baykal"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/siyaset/chpden-istifa-etmisti-asli-baykaldan-akpye-katilacak-iddiasina-yanit-2003754'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CHP&#39;den istifa etmişti: Aslı Baykal&#39;dan &#39;AKP&#39;ye katılacak&#39; iddiasına yanıt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgycQevyTQdPsX7eIx-Gc7j8zXGoiLKJeQLYKXBL9eL6tTq6DkYB1sdF_eT5sf-gvwDF_sol5k" alt="CHP&#39;den istifa etmişti: Aslı Baykal&#39;dan &#39;AKP&#39;ye katılacak&#39; iddiasına yanıt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP&#39;den istifa eden eski CHP Genel Başkanı Deniz Baykal&#39;ın kızı Aslı Baykal, AKP&#39;ye katılacak iddialarına, Hiçbir yere katıldığım yok yanıtını verdi.</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/gundem/asli-baykal-chpye-savas-acti-gayrimillileri-cimbizimla-teker-teker-toplayacagim-3890619'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Baykal CHP&#39;ye savaş açtı: Gayrimillileri cımbızımla teker teker ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDeziPLCRomgF5-_o4z1lcBv_1llk49hqTRhEJvorNJwAZxoXt1fihf0h3PyFBvtF5f5Iwk8Wu" alt="Aslı Baykal CHP&#39;ye savaş açtı: Gayrimillileri cımbızımla teker teker ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Geçtiğimiz günlerde CHP&#39;den istifa eden Eski CHP Genel Başkanı Deniz Baykal&#39;ın kızı Aslı Baykal, &#39;gayrimilli&#39; olarak nitelendirdiği eski partisine yönelik&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/asli-baykaldan-ak-partiye-katilacagi-iddialarina-yanit-haber-1589667'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Baykal&#39;dan AK Parti&#39;ye katılacağı iddialarına yanıt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGWFQCJtJzaSqbKMMK0097Ulo39aY_kPnKojpUokVIjx9M5epkQjK40_4fm4lr20OAF4tkdTVU" alt="Aslı Baykal&#39;dan AK Parti&#39;ye katılacağı iddialarına yanıt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eski CHP Genel Başkanı Deniz Baykal&#39;ın kızı Aslı Baykal, Onedio Haber Müdürü Abdullah Demir&#39;e konuştu ve &quot;Benim şu an yaptığım teorik bir çalışma. Hiçbir yere&nbsp;...</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/asli-baykal-dan-akp-ye-katilacak-iddiasina-yanit-410354'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Baykal&#39;dan &quot;AKP&#39;ye katılacak&quot; iddiasına yanıt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPpxkvIdrZAO4HMjysLKcQ-7rTTUL0UMe0yh8TZOL7CzRQzshIzNk07vX6LEEusUy-_49gNDyV" alt="Aslı Baykal&#39;dan &quot;AKP&#39;ye katılacak&quot; iddiasına yanıt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP&#39;den istifa eden eski CHP Genel Başkanı Deniz Baykal&#39;ın kızı Aslı Baykal, &#39;AKP&#39;ye katılacak&#39; iddialarına, &#39;Hiçbir yere katıldığım yok&#39; yanıtını verdi.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/asli-baykal-ak-parti-ye-katiliyor-iddialarina-yanit-verdi-1107864'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Baykal &#39;AK Parti&#39;ye Katılıyor&#39; İddialarına Yanıt Verdi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxJvl0keYV0xiIvBK3yCRS-xQy39XpR8qDpjcIRAWxXRWOuM5VI9R8WWVfvIoXtRfgtegFvK4I" alt="Aslı Baykal &#39;AK Parti&#39;ye Katılıyor&#39; İddialarına Yanıt Verdi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP&#39;den istifa eden Aslı Baykal, AK Parti&#39;ye katılacağı yönündeki iddialara yanıt verdi. Onedio Haber Müdürü Abdullah Demir&#39;e konuşan Baykal,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.odatv4.com/siyaset/asli-baykal-akp-ye-geciyor-iste-aciklamasi-258831'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Baykal AKP&#39;ye geçiyor... İşte açıklaması</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMewEIxSAYnK7I5S7CV6LSUrQDnQbA7KyU8snuBrMmLfGiU1DwhfZF-eQrY0-BhCUevWdV-XQY" alt="Aslı Baykal AKP&#39;ye geçiyor... İşte açıklaması" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP&#39;den istifa eden Deniz Baykal&#39;ın kızı Aslı Baykal, Odatv&#39;ye konuşarak AKP&#39;ye katılacağının sinyalini verdi...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/guncel/2022/11/17/asli-baykal-neden-istifa-etti-chp-ile-hesaplasacagiz-cikisinin-perde-arkasi-ne-mehmet-sevigenden-carpici-aciklamalar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aslı Baykal neden istifa etti? CHP ile &#39;hesaplaşacağız&#39; çıkışının ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRBDW52H7uA8Ci3TgB9lm-jYPgcyqWp7MH0m-BaOhwxjtj2UQFZe0-2yMlhpTwekPYaS9rJaqg" alt="Aslı Baykal neden istifa etti? CHP ile &#39;hesaplaşacağız&#39; çıkışının ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Haber&#39;de canlı yayınlanan Arka Plan programına katılan 23. Dönem İstanbul Milletvekili Mehmet Sevgen konu ile ilgili çarpıcı açıklamalarda bulundu. Sevigen, &quot;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}