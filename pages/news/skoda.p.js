import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Skoda</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Skoda"/>
        <meta name="description" content="Trending News about Skoda" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Skoda</h1>
            <Image width={800} height={500} src="https://cdn.motor1.com/images/mgl/E6wVJz/s1/mppxzalbmr4.jpg" alt="Skoda"/>
            <h3>Recent News</h3>
            <a href='https://tr.motor1.com/reviews/623474/skoda-rs-ailesi-ilk-surus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skoda RS Ailesi | Bu Üçlü Çok Güçlü | İlk Sürüş</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVQm5Pl7KxBNcsNInQWa2v0pMijVTSNxNx0tDsgTTbR5HC-8HQLEL4h0P-UQBsteYNXXxCE2Dn" alt="Skoda RS Ailesi | Bu Üçlü Çok Güçlü | İlk Sürüş" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aslında Skoda&#39;nın RS ailesinin çok köklü bir geçmişi bulunuyor. Çek markanın motor sporlarında, özellikle de Ralli dünyasında bulunan otomobillerinin DNA&#39;sını&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}