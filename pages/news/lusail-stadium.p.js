import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lusail stadium</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lusail stadium"/>
        <meta name="description" content="Trending News about Lusail stadium" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lusail stadium</h1>
            <Image width={800} height={500} src="https://cdn.yenicaggazetesi.com.tr/news/2022/12/91220222318520594603.jpeg" alt="Lusail stadium"/>
            <h3>Recent News</h3>
            <a href='https://www.yenicaggazetesi.com.tr/hollanda-ile-arjantin-macina-buyuk-ilgi-606353h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>90 bin kişilik Lusail Stadyumu&#39;nda boş koltuk yok</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVt9jv2pxCthyK8semqug6USpqYtPJ90VR47WnQ8CKXZwpzb-6w9SBsetJBEmNUCHfd9Idyaxn" alt="90 bin kişilik Lusail Stadyumu&#39;nda boş koltuk yok" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arjantin&#39;in Katar 2022&#39;de oynadığı beş maçın üçü, yaklaşık 90.000 kişilik kapasiteyle bu Dünya Kupası&#39;nın en büyüğü olan Lusail Stadyumu&#39;nda oynandı ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.webtekno.com/katar-dunya-kupasi-stadyumlara-ne-olacak-h130267.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bütün Katarlıları İçine Koysak Bile Dolmayacak Olan Dünya Kupası ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQv-RFZJoJZFmQEf_6Npzcxd0E9n1c-nr8U-5rm3Bas_8rU_hLVMZ-bQ4rkLP8kS_zwF5sEIAbR" alt="Bütün Katarlıları İçine Koysak Bile Dolmayacak Olan Dünya Kupası ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nüfusu oldukça az olan, futbolun pek ilgi görmediği Orta Doğu ülkesi Katar, 2022 Dünya Kupası için dev stadyumlar inşa etmişti. Bu stadyumlar, Dünya Kupası&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}