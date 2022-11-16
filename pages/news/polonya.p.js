import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Polonya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Polonya"/>
        <meta name="description" content="Trending News about Polonya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Polonya</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/D3Uk-ZIWL0e8fy8mXDxNwg.jpg?width=1080&mode=crop&scale=both" alt="Polonya"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/dunya/son-dakika-haberi-polonyada-sinir-koyune-fuze-2-olu,JlSAJ0Fn-UCl2LdTnvo3YQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA HABERİ: Polonya&#39;da sınır köyüne füze: 2 ölü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROvMVyg_5U6EI-xSJxpOiHOCy-GjtUOZ0aJLC-tFemIB9N42lv1FiDagrgSPan2CJ_tDcC-TW_" alt="SON DAKİKA HABERİ: Polonya&#39;da sınır köyüne füze: 2 ölü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NATO üyesi Polonya&#39;nın Przewodow köyüne füze düştü. Kaynağı bilinmeyen füzenin düşmesi sonucu 2 kişi öldü. Polonya ordunun savaşa hazırlık durumunun&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/turkce/articles/cl7qvek2p4vo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rus füzesinin Polonya&#39;ya düştüğü iddia edildi, Biden soruşturma için ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMj-SOpbB3yI2Fl9-YwN_ka6v4a7D8pEHtfONIo76jdLdghmuA6IkDEGfcjdVwove9ltSZqW3-" alt="Rus füzesinin Polonya&#39;ya düştüğü iddia edildi, Biden soruşturma için ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polonya, Salı günü iki roketin Ukrayna sınırındaki topraklarına düşerek, iki kişiyi öldürdüğünü açıkladı. Olayın, Rusya&#39;nın Salı günü Ukrayna&#39;ya düzenlediği&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/dunya/son-dakika-polonyanin-ukrayna-sinirindaki-koye-dusen-fuze-nedeniyle-2-kisi-hayatini-kaybetti-2003133'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: Polonya&#39;nın Ukrayna sınırındaki köye düşen füze ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpZHabVnwL2z5QIC9sjkW_iVw4fP8zDDC9vx22gQan-zorGV5tsISB4KLTm6ALA7G82i8tSAfh" alt="Son Dakika: Polonya&#39;nın Ukrayna sınırındaki köye düşen füze ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NATO olayla ilgili &quot;Bu haberleri araştırıyoruz ve müttefikimiz Polonya ile yakın koordinasyon içindeyiz&quot; açıklamasını yaparken, Rusya iddiaları reddederek &quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/dunya/polonyanin-ukrayna-sinirindaki-koye-dusen-fuze-nedeniyle-2-kisi-hayatini-kaybetti/2739071'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polonya&#39;nın Ukrayna sınırındaki köye düşen füze nedeniyle 2 kişi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKnO7H7ZacjgjvPzlOGcp5YsB981xcWaguurgtXHpZct6FF7sRd3wPGjKgR-meBx-BBSs4cCBW" alt="Polonya&#39;nın Ukrayna sınırındaki köye düşen füze nedeniyle 2 kişi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polonya&#39;nın Ukrayna sınırında bulunan Przewodow köyüne kaynağı bilinmeyen bir füzenin düştüğü ve 2 kişinin hayatını kaybettiği bildirildi.</p></div>
            </div>
        </a><a href='https://tr.euronews.com/2022/11/15/rusya-savunma-bakanligi-polonya-ukrayna-sinirindaki-hedeflere-hicbir-saldiri-yapilmamistir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD istihbaratı: Rus füzeleri Polonya sınırını geçti; Moskova ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWh2IYLQw-QIUpqHfVNRjsaU3onQcYvy7HiQMYaNGYD8p2PpVzhF2wAjeZH5pCQhkwxBQHUDTq" alt="ABD istihbaratı: Rus füzeleri Polonya sınırını geçti; Moskova ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rusya Savunma Bakanlığı, Polonya&#39;nın Ukrayna sınırında bir köye düşen ve iki kişinin ölümüne neden olan füzelerin Rusya ile herhangi bir ilgisinin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/polonya-ukrayna-sinirindaki-koye-fuze-dustu-2-olu-410133'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polonya-Ukrayna sınırındaki köye füze düştü: 2 ölü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkVM55Asg8XJIezrtgBmN430qz5YJMmgULXPJ8fQZd6NYzFqPNuek3UrTc35Wv5ovOTSriQyBq" alt="Polonya-Ukrayna sınırındaki köye füze düştü: 2 ölü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rusya Savunma Bakanlığı &#39;provokasyon&#39; açıklaması yaptı. NATO, Polonya&#39;ya füze düşmesiyle ilgili, &quot;Bu haberleri araştırıyoruz ve müttefikimiz Polonya ile yakın&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}