import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ABD</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ABD"/>
        <meta name="description" content="Trending News about ABD" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ABD</h1>
            <Image width={800} height={500} src="https://i2.milimaj.com/i/milliyet/75/0x0/6387c20686b24a47c4192353.jpg" alt="ABD"/>
            <h3>Recent News</h3>
            <a href='https://www.milliyet.com.tr/siyaset/bakan-akar-abdli-mevkidasiyla-gorustu-6865598'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye&#39;den ABD&#39;ye 51. madde vurgusu: Tek hedef teröristler!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSffK1qulYnQRDHmHBV_Lf0zf_EUUb1Pa-foPNdPPijo2ec3P7SpgS1rl-hZpRPfIibvxx53yU_" alt="Türkiye&#39;den ABD&#39;ye 51. madde vurgusu: Tek hedef teröristler!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanı Hulusi Akar, ABD Savunma Bakanı James Austin ile telefonda görüştü. Akar görüşmede Birleşmiş Milletler Antlaşması&#39;nın 51. maddesine&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/dunya/abdden-cine-suclama-mahkumlari-uc-yildir-goremiyoruz-2007568'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD&#39;den Çin&#39;e suçlama: Mahkumları üç yıldır göremiyoruz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2rdgtCtgr6I_C2WIYRsz0RkFBmrbLK9J2Ffg2ZbEuKfUsbLFIm4q4FQKiabWBGDJIJiQpjyHw" alt="ABD&#39;den Çin&#39;e suçlama: Mahkumları üç yıldır göremiyoruz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD&#39;nin Pekin Büyükelçisi Nicolas Burns, Çin&#39;deki Covid-19 kısıtlamalarının diplomatik misyonların faaliyetlerini ve konsolosluk işlerinin yürütülmesini zora&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/son-dakika-kara-harekati-oncesi-abd-ile-kritik-gorusme-42180023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: Kara harekatı öncesi ABD ile kritik görüşme</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUt_x-Ks4k2pZtu7-hqk9cSiLLW7-qmm1bT-_6DyyALEEZGccMpnouHeCJuNIANNAL4NNNJUxO" alt="Son dakika: Kara harekatı öncesi ABD ile kritik görüşme" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Dakika Haberler - Milli Savunma Bakanı Hulusi Akar, ABD Savunma Bakanı James Austin ile telefonda görüştü. Görüşmede Bakan Akar, terörle mücadele&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/gundem/bakan-akar-abdli-mevkidasiyla-gorustu-operasyonlarda-tek-hedef-teroristler-3893028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bakan Akar ABD&#39;li mevkidaşıyla görüştü: Operasyonlarda tek hedef ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcST1saJ0kotc65sHM_W56iRs5vbcqcqYalC5wiaNW04VTIUQnUuwTP4usEVOGAiO6rrn8lbyvYC" alt="Bakan Akar ABD&#39;li mevkidaşıyla görüştü: Operasyonlarda tek hedef ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanı Hulusi Akar, ABD&#39;li mevkidaşı Lloyd James Austin ile telefonda görüştü. Bakan Akar, Türkiye&#39;nin terörle mücadele operasyonlarında &#39;tek&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/turkiye/son-dakika-haberi-milli-savunma-bakani-akar-abdli-mevkidasi-ile-gorustu,2i_NPb9lPkyh3V9IfUHobw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA HABERİ: Milli Savunma Bakanı Akar, ABD&#39;li ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_IGKJcnnF1cN0pubCRLUblkLPn1QNM11PZX11p1kj2YQ4K9fCShZaZTFT70O4gj1-VE3y5n3c" alt="SON DAKİKA HABERİ: Milli Savunma Bakanı Akar, ABD&#39;li ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SON DAKİKA HABERİ: Milli Savunma Bakanı Hulusi Akar, ABD Savunma Bakanı James Austin ile telefonda görüştü. Görüşmede ikili ilişkiler ve bölgesel konular&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dha.com.tr/gundem/bakan-akar-abdli-mevkidasi-ile-gorustu-2169788'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bakan Akar, ABD&#39;li mevkidaşı ile görüştü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_mSkyFP7V_Sw4MHxuuCc4rCOA-OFJXezoSMVgL-CYHWnwgSL8X2ppZu11nCHDeM63LdYQJk5S" alt="Bakan Akar, ABD&#39;li mevkidaşı ile görüştü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanı Hulusi Akar, ABD Savunma Bakanı Lloyd James Austin ile telefonda görüştü.</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/turkiye-ile-abd-arasinda-kritik-temas-1712137.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye ile ABD arasında kritik temas!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDgu90PqRWp-pA9kAv7IN_w6eNPZBagyCdNJkr2Er-BnV3t4qAL0_rEdcQ8I1lhsHWasBavsuc" alt="Türkiye ile ABD arasında kritik temas!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanı Hulusi Akar, ABD Savunma Bakanı Lloyd James Austin ile telefonda görüştü.</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/gundem/bakan-akar-abd-savunma-bakani-austin-ile-telefonda-gorustu-727336.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bakan Akar, ABD Savunma Bakanı Austin ile telefonda görüştü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdeJdX8UQW2p8I6P6N_n7Q0ewDrU80oY9FXYdclhH1t_VL46yQOqbrnIF0XXL_7-_OlEnsw8mH" alt="Bakan Akar, ABD Savunma Bakanı Austin ile telefonda görüştü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanı Hulusi Akar, ABD Savunma Bakanı Lloyd James Austin ile telefonda görüştü. Görüşmede ikili ve bölgesel savunma ve güvenlik konuları ele&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}