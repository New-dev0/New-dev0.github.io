import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Galler</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Galler"/>
        <meta name="description" content="Trending News about Galler" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Galler</h1>
            <Image width={800} height={500} src="" alt="Galler"/>
            <h3>Recent News</h3>
            <a href='https://www.sozcu.com.tr/spor/futbol/canli-izle-abd-galler-dunya-kupasi-b-grubu-7492782/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galler ABD karşısında puanı penaltı ile kurtardı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8bxtoInnUe-3utLuVCkDTb_6XZkKMpsq2kI8Ym6sft1ju7aUirNDyfH1TxgZ4Xogndw58higN" alt="Galler ABD karşısında puanı penaltı ile kurtardı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galler ABD karşısında puanı penaltı ile kurtardı! - 2022 Dünya Kupası B Grubu&#39;nda ABD ile Galler 1-1 berabere kaldı. 64 yıl sonra Dünya Kupası&#39;nda gol atan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/dunya-kupasi-2022/haberler/2022/11/21/abd-galler-1-1-mac-sonucu-ozet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD Galler 1-1 MAÇ SONUCU ÖZET</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAhIZhu1FWbgwugknP46D0G54-aOqAyg1j7Zugw4euLDe2EApYcWoRLRMTh1xLS1x7dMcs7plv" alt="ABD Galler 1-1 MAÇ SONUCU ÖZET" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası B Grubu&#39;nda ABD ile Galler arasında oynanan maçı A Milli Futbol Takımı Teknik Direktörü Stefan Kuntz da takip etti. Kuntz&#39;a yardımcısı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/ozet-abd-ile-galler-yenisemedi-265704.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖZET | ABD ile Galler yenişemedi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBndBpO7CZKIrAIHx0VX-FifxvhVX8tr1WHn4SQXNYVPmACoc213b5kQOo3v8AfQVekaZrFrPf" alt="ÖZET | ABD ile Galler yenişemedi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;ın ev sahipliği yaptığı FIFA Dünya Kupası 2022 B Grubu mücadelesinde ABD ile Galler 1-1 berabere kaldı.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/gareth-bale-abdye-dur-dedi-abd-1-1-galler-2004978'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gareth Bale ABD&#39;ye dur dedi: ABD 1-1 Galler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTC5dtEwtzyNnNQ3owEHx4reIRw75WQ-w-Oo7bBwvnJRN6BzCOFYUBg2KN0lJJzrYNcC7F6IF6q" alt="Gareth Bale ABD&#39;ye dur dedi: ABD 1-1 Galler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD, Katar&#39;da düzenlenen 2022 FIFA Dünya Kupası&#39;nda Galler ile 1-1 berabere kaldı.</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/skorer/abd-galler-1-1-6860716'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD - Galler: 1-1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKy_RvWtESpY0Zipn4E-8Zn-QGufuVChHIYqmntFK-AqA8OPpK2Xm63_J15ddhTlfaAkV_8nsL" alt="ABD - Galler: 1-1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahmed Bin Ali Stadyumu&#39;nda mücadelede ABD&#39;nin golünü 36. dakikada Weah kaydetti. Galler&#39;in golünü ise penaltıdan Gareth Bale attı. ABD ikinci maçında İngiltere&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/galler-64-yil-sonra-ilk-puanini-aldi-haber-1590251'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galler 64 yıl sonra ilk puanını aldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7IaEAjl3uVDyJKU3lhiUCr9X3_PbLQQHcxMeDYHy1aB3gbrdpjB4GHOPVFe4aY9gaHSXww9ko" alt="Galler 64 yıl sonra ilk puanını aldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>64 yıl sonra organizasyona katılan Galler&#39;i kaptan Gareth Bale sırtladı. Ahmed bin Ali Stadyumu&#39;ndaki mücadelenin ilk yarısında daha etkili oynayan ABD, 36.</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/dunyadan-spor/abd-ile-galler-berabere-kaldi/2744635'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD ile Galler berabere kaldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ABD ile Galler berabere kaldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD, üstün oyununun karşılığını Ballon d&#39;Or ödülü bulunan dünyaca ünlü Liberyalı eski futbolcu George Weah&#39;ın oğlu Tim Weah&#39;ın 36. dakikada kaydettiği golle&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}