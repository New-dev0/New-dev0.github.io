import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TRT SPOR</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TRT SPOR"/>
        <meta name="description" content="Trending News about TRT SPOR" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TRT SPOR</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/480000/481548.jpg" alt="TRT SPOR"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/2022-dunya-kupasi-detay/bize-portekizi-anlat-beto-265429.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bize Portekiz&#39;i anlat Beto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgY07PzJz0ziAAxWhcn54stQASNxdFSWvOaVkYVvLEqzGWZ4mIlYxo0JRlZB2RJYJE-vYqUgpc" alt="Bize Portekiz&#39;i anlat Beto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yolu Türkiye ve Göztepe&#39;den de geçen Portekiz&#39;in eski milli kalecisi, Dünya Kupası ve Türkiye&#39;ye dair anılarını TRT SPOR Dijital ile paylaştı.</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/2022-dunya-kupasi-detay/bize-japonyayi-anlat-yoshi-265445.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bize Japonya&#39;yı anlat Yoshi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeCCOXQzVFssBl-LzijnWCY64DWOtF_jFjpVsB5qfFK3JJulN2n6_oTpuN0EJiAOGJvZtXizS0" alt="Bize Japonya&#39;yı anlat Yoshi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TRT SPOR Dijital ekibimiz Türkçe sosyal medya içerikleri üreten Yoshi Enomoto ile buluştu. Dünya Kupası&#39;nda boy gösterecek Japaonya için Yoshi,&quot; 2002&#39;de de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/futbol/spor-toto-super-lig/irfan-can-kahveci-performansiyla-dikkat-cekiyor-265434.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İrfan Can Kahveci performansıyla dikkat çekiyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTR2N4uBLR_Zf9bJDuCKXHbLZPT9xtSDaoe6a7NlEO6B7dpi1Mal3qM89ReOm71WHpNonyyZQok" alt="İrfan Can Kahveci performansıyla dikkat çekiyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçeli İrfan Can Kahveci, kariyerinin en iyi dönemlerinden birini yaşıyor. Şimdiden en golcü sezonuna ulaşan 27 yaşındaki futbolcu,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}