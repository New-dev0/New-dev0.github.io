import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İzmir depremi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İzmir depremi"/>
        <meta name="description" content="Trending News about İzmir depremi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İzmir depremi</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/26/2006267/kapak_060928.jpg" alt="İzmir depremi"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/turkiye/son-dakika-izmirde-32-buyuklugunde-deprem-2006267'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: İzmir&#39;de 3.2 büyüklüğünde deprem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfJSLrCsfl85tI2254VSlfecRVSWHzJNl-6tRe74se3tW7bhWhL5yrd1da4azjAJssfc2lalqD" alt="Son Dakika: İzmir&#39;de 3.2 büyüklüğünde deprem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi... İzmir&#39;de, merkez üssü Gaziemir ilçesi olmak üzere, Richter ölçeğine göre 3.2 büyüklüğünde deprem meydana geldi.</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/turkiye/son-dakikaizmirde-3-2-buyuklugunde-deprem-son-depremler,RsYhDsLA8ECI6PJsgyBeGA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: İzmir&#39;de 3.2 büyüklüğünde deprem | Son depremler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSoKeS6XOeRBWPkWW8dkroZS6vEOhM6BUx6C21-JdIjiOHjLpoKKMhicMdxe8i_8U3mKAtF6S15" alt="SON DAKİKA: İzmir&#39;de 3.2 büyüklüğünde deprem | Son depremler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AFAD&#39;dan son dakika deprem açıklaması geldi. Merkez üssü İzmir&#39;in Gaziemir ilçesi olan 3.2 büyüklüğünde deprem meydana geldi. Depremi hisseden vatandaşlar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/gundem/izmirde-3-2-buyuklugunde-deprem-6863187'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İzmir&#39;de 3,2 büyüklüğünde deprem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7uskWKhoSFTcZRnptdL-NXmmUdPBqLfo1OQ7OFx02d--IR1KdPOiP02FeSGFHu7HWxHwbxJIG" alt="İzmir&#39;de 3,2 büyüklüğünde deprem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Merkez üssü İzmir&#39;in Gaziemir ilçesi olan 3.2 büyüklüğünde deprem meydana geldi. Depremi hisseden vatandaşlar büyük korku yaşayarak uykularından uyandı.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/izmir-deprem-son-dakika-32-buyuklugunde-afad-ve-kandilli-son-depremler-ile-izmirde-deprem-mi-oldu-merkez-ussu-neresi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İzmir&#39;de 3.2 büyüklüğünde deprem! 26 Kasım AFAD ve Kandilli son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSbM6C_lgCQPlQNsBkiEFK6BrooNYPWJLO4F1I8dEtKKEGyrXmXL1-pScRw69Uqao8QSGoTloR" alt="İzmir&#39;de 3.2 büyüklüğünde deprem! 26 Kasım AFAD ve Kandilli son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İzmir deprem son dakika haberi ile duyuruldu. Kandilli ve AFAD tarafından depremin büyüklüğü 3.2 olarak açıklanırken şehrin sakinleri deprem mi oldu,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}