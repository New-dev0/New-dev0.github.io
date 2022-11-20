import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Onur Bulut</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Onur Bulut"/>
        <meta name="description" content="Trending News about Onur Bulut" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Onur Bulut</h1>
            <Image width={800} height={500} src="https://cdn.sporx.com/img/3/2022/20221119-2-56048280-82921840-thumb.jpg" alt="Onur Bulut"/>
            <h3>Recent News</h3>
            <a href='https://www.sporx.com/onur-bulut-elemelere-kadar-boyle-istiyoruz-SXHBQ996785SXQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Onur Bulut: &#39;Elemelere kadar böyle istiyoruz&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRavOUY5ijMJSHQkw3h3VwPQE5lIpDPQmJKChT6DHpDHbPgAmFSXHIFlhCnQJAVaNZGfagaoMZq" alt="Onur Bulut: &#39;Elemelere kadar böyle istiyoruz&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kayserisporlu Onur Bulut, Milli formayla sahaya çıktığı Çekya karşılaşması sonrası açıklamalarda bulundu. Onur Bulut çok mutlu olduğunu dile getirerek,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/spor/samet-akaydin-ile-onur-bulut-milli-oldu-cekya-karsisinda-ilk-a-milli-takim-macina-ciktilar/haber-1320767'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Samet Akaydin ile Onur Bulut milli oldu! Çekya karşısında ilk A Milli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEhGJFXH-SoCgzPiG1KypdDNHrIZiBR9ZHkgHmewF_9_2prlgDWsuKCO6RbnHf9tSgKLaF82e8" alt="Samet Akaydin ile Onur Bulut milli oldu! Çekya karşısında ilk A Milli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çekya karşısında ilk 11&#39;de kendine yer bulan Samet Akaydin ve Onur Bulut, A Milli Takım formasını ilk kez giydi. Samet Akaydin, savunma üçlüsünde Çağlar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}