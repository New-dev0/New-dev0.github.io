import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prometheus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prometheus"/>
        <meta name="description" content="Trending News about Prometheus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prometheus</h1>
            <Image width={800} height={500} src="https://i2.milimaj.com/i/milliyet/75/0x0/637908ab86b24a5810a83da7.jpg" alt="Prometheus"/>
            <h3>Recent News</h3>
            <a href='https://www.milliyet.com.tr/bilgi-rehberi/prometheus-filmi-konusu-ve-oyuncu-kadrosu-prometheus-filmi-kac-yilinda-cekildi-6859876'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prometheus filmi konusu ve oyuncu kadrosu! Prometheus filmi kaç ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2_q8Z7Y26ZnC3I2BnP8RA-WM3pH0wLgqhhNDI9airxRIkzjG5UmSbRLc8cvBMff4nmnz3HPkN" alt="Prometheus filmi konusu ve oyuncu kadrosu! Prometheus filmi kaç ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prometheus filmi bu akşam Star TV ekranında izleyici ile buluşmaya hazırlanıyor. Yönetmen koltuğunda Ridley Scott&#39;ın oturduğu Prometheus filmi 1 Haziran&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/prometheus-konusu-nedir-oyunculari-kimlerdir-15440363-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prometheus konusu nedir, oyuncuları kimlerdir? Prometheus nerede ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTx3cxP3vdGlGIqjKqxhugoUNX6ONRdosPym-a0GS6_VOAr0jgtHnHX_3Pzlwh280492dgYQX04" alt="Prometheus konusu nedir, oyuncuları kimlerdir? Prometheus nerede ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prometheus oyuncu kadrosunda kimler var? Sinemaseverlerin beğenisini toplayan Prometheus filmi televizyon ekranlarında da izleyicilerin beğenisini topluyor.</p></div>
            </div>
        </a><a href='https://www.tgrthaber.com.tr/aktuel/prometheus-filmi-oyunculari-kim-konusu-nedir-prometheus-filmi-nerede-cekildi-2856233'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prometheus filmi oyuncuları kim, konusu nedir? Prometheus filmi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSF3xU5W7CLWfia_eh36BqJVRyTA_EEnaF3oq8puzjQ9thUhR_BLml3vjv-ODucnilvGARqk-m0" alt="Prometheus filmi oyuncuları kim, konusu nedir? Prometheus filmi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bilim kurgu türündeki Prometheus filmi, 2012 yılında vizyona girdi. Seri olarak vizyona giren filmin 5. filmi olma özelliğini de taşıyan Prometheus filminin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sondakikaizmir.com/guncel/prometheus-filmi-oyunculari-isimleri-konusu-prometheus-filmi-ne-zaman-h17217.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prometheus filmi oyuncuları isimleri konusu Prometheus filmi ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMBlm5POEGnHUbiPqjOhGou7pM3pbyrwywYxHZyCI-uJOcKCyAZBfLttjUjv039E0DDDn5OzTf" alt="Prometheus filmi oyuncuları isimleri konusu Prometheus filmi ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prometheus filmi oyuncu kadrosu, hikayesi, ne anlatıyor, Prometheus filmi kaç yılında çekildi soruları yanıt buldu.</p></div>
            </div>
        </a><a href='https://medyanotu.com/prometheus-nerede-cekildi-hangi-ulke-yapimi-prometheus-oyuncu-kadrosunda-kimler-var/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prometheus nerede çekildi, hangi ülke yapımı? Prometheus oyuncu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxDNQgj757T04xRGdZARQNPSuRBX9l1kZtTGlwOqFqY2FS0O__T4BRSHpFvoJz9Sz8MxNw-gUQ" alt="Prometheus nerede çekildi, hangi ülke yapımı? Prometheus oyuncu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bugün Star TV&#39;de Prometheus filmi gösterilecek. Film başlamadan önce seyirciler, Prometheus&#39;un konusu nedir, oyuncuları kimlerdir? Prometheus nerede, hangi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}