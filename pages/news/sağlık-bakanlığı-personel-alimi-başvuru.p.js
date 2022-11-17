import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sağlık Bakanlığı personel-alimi Başvuru</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sağlık Bakanlığı personel-alimi Başvuru"/>
        <meta name="description" content="Trending News about Sağlık Bakanlığı personel-alimi Başvuru" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sağlık Bakanlığı personel-alimi Başvuru</h1>
            <Image width={800} height={500} src="https://www.isinolsa.com/images/resize/100/600x315/haberler/2022/11/saglik_bakanligi_2022_4_atama_kurasi_ile_personel_alimi_ilani_yayimlandi_h43167_cacdc.jpg" alt="Sağlık Bakanlığı personel-alimi Başvuru"/>
            <h3>Recent News</h3>
            <a href='https://www.isinolsa.com/sozlesmeli-personel-alimi/saglik-bakanligi-2022-4-atama-kurasi-ile-personel-alimi-ilani-h43167.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sağlık Bakanlığı 2022 /4 Atama Kurası ile Personel Alımı İlanı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiBjh_UKK9QPL8vSfeVLzOsM2qcxjiofcXvib5b-k26r0aQpdX3gL6H5igig2Z7IF7WufeHQRg" alt="Sağlık Bakanlığı 2022 /4 Atama Kurası ile Personel Alımı İlanı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sağlık Bakanlığı atama kurası ile personel alımı ilanı yayımlandı. 2022/4 İlk Defa ve yeniden Atama Kurası ile personel ataması yapılacak.</p></div>
            </div>
        </a><a href='https://kamupersonelialim.com/kamu-personeli-alimi/saglik-bakanligi-2022-atama-kurasi-ile-sozlesmeli-personel-alimi-6051h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sağlık Bakanlığı 2022 Atama Kurası İle Sözleşmeli Personel Alımı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPvFW6WE497gsHUPK99YVkqrT-tYOMW8lDhFwxZ0LJE1UP9ridLruA3noikg9H2kMXljkgAoox" alt="Sağlık Bakanlığı 2022 Atama Kurası İle Sözleşmeli Personel Alımı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bakanlık farklı kadrolarda olmak üzere Sağlık Hizmetleri Temel Kanunun ek maddesi kapsamında Kamu Kurum ve Kuruluşlarına açıktan kura ile atama duyurusunu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}