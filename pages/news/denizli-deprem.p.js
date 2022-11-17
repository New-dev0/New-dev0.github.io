import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Denizli deprem</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Denizli deprem"/>
        <meta name="description" content="Trending News about Denizli deprem" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Denizli deprem</h1>
            <Image width={800} height={500} src="" alt="Denizli deprem"/>
            <h3>Recent News</h3>
            <a href='https://www.sozcu.com.tr/2022/gundem/denizlide-art-arda-depremler-7483789/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizli&#39;de art arda depremler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSf79FZaXRMO7w8axe0CnTMKIH5faw2dSZi9pllkjUCYZCLMM0V5UPI9XcTOx6BpOER6KBQWRZA" alt="Denizli&#39;de art arda depremler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İkinci deprem ise 19:43&#39;te yaşandı. Pamukkale ilçesine bağlı Fatih Mahallesi&#39;nin merkez üssü olduğu deprem 7 kilometre derinlikte gerçekleşti. AFAD depremin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/denizlide-3-2-siddetinde-deprem-meydana-geldi-42172018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizli&#39;de 3.2 büyüklüğünde deprem meydana geldi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvkL46CXkVNXuQJySqZuRI2695pkI1sjGOfIFCXjPT_2fI8VfgDwsyOXCtkCK5KDPY_Nb02GmG" alt="Denizli&#39;de 3.2 büyüklüğünde deprem meydana geldi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Dakika Haberler - Denizli&#39;de merkez üssü Pamukkale ilçesinde 3.2 büyüklüğünde orta şiddetli bir deprem meydana geldi. Herhangi bir can ve mal kaybının&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/turkiye/denizlide-3-2-siddetinde-deprem'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizli&#39;de 3.2 şiddetinde deprem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTl6Rj7d-nUUhC1O7KMxvgyMNh6RXiB5Aj6SWW5dHFsenE-C_WiU2OzqASCVfdEGBfsIPVU1-4b" alt="Denizli&#39;de 3.2 şiddetinde deprem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Denizli&#39;de merkez üssü Pamukkale ilçesinde 3.2 büyüklüğünde orta şiddetli bir deprem meydana geldi.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/yasam/son-dakika-denizlide-deprem-meydana-geldi-cevre-illerde-de-hissedildi-afad-ve-kandilli-rasathanesi-son-depremler-listesi-6242184'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika Denizli&#39;de deprem meydana geldi! Çevre illerde de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8CVvb6aGX2N8t_s5TN99nLSQ-vCy3NnPFWU0w-URZPWk7wfmDixCpZT_UkAQNYZ07GGjegFAS" alt="Son Dakika Denizli&#39;de deprem meydana geldi! Çevre illerde de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AFAD ve Kandilli Rasathanesi son depremler listesi verilerine göre Denizli&#39;de 3.2 şiddetinde bir deprem meydana geldi. Sarsıntıları hisseden ve Denizli&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/son-dakika-denizli-de-korkutan-deprem-iste-afad-ve-kandilli-rasathanesi-son-depremler-sayfasi-1107664'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: Denizli&#39;de Korkutan Deprem! İşte AFAD ve Kandilli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmp1EwncaQBZ3vjyOhP8DypRwotoJ7afIEgMm1PymMnzhxW9Qbnmr_RVH9S4IKcWUqS8BiUHZR" alt="Son Dakika: Denizli&#39;de Korkutan Deprem! İşte AFAD ve Kandilli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye; Kuzey Anadolu Fay Hattı, Batı Anadolu Fay Hattı ve Doğu Anadolu Fay Hattı üzerinde yer aldığı pek çok bölgede irili ufaklı depremler yaşanıyor.</p></div>
            </div>
        </a><a href='https://www.denizlihaber.com/yasam/gundem/denizlide-pes-pese-depremler-meydana-geldi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>denizlihaber.com - Denizli Haberleri Denizli&#39;de peş peşe depremler ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRu20Fg9Y3lElwHzCDoiCIJednRAagPx0TxEo-XyOMgytr8J_5pOAhxp4Cng46M3QD1rRmQFC1V" alt="denizlihaber.com - Denizli Haberleri Denizli&#39;de peş peşe depremler ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Denizli peş peşe meydana gelen iki depremle sarsıldı. Boğaziçi Üniversitesi Kandilli Rasathanesi&#39;nin verilerine göre; ilk deprem Sarayköy&#39;ün Ahmetli&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}