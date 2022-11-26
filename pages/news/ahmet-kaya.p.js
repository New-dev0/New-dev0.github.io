import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ahmet Kaya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ahmet Kaya"/>
        <meta name="description" content="Trending News about Ahmet Kaya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ahmet Kaya</h1>
            <Image width={800} height={500} src="https://www.izgazete.net/images/resize/100/600x315/haberler/2022/11/ahmet-kaya-izmir-de-anilacak_c9daa.jpg" alt="Ahmet Kaya"/>
            <h3>Recent News</h3>
            <a href='https://www.izgazete.net/kultur-sanat/ahmet-kaya-izmir-de-anilacak-h89308.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ahmet Kaya İzmir&#39;de anılacak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVoSo-gqEgOe4BgBZ-i2PFh-6yz7SPokOBaey4UCckrxuZBl0Itxp86WpwPNMMz9mu9S6e-Luv" alt="Ahmet Kaya İzmir&#39;de anılacak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Şarkılarıyla her kuşaktan, her kesimden insanın gönlünü fetheden unutulmaz sanatçı Ahmet Kaya, ölümünün 22. yılında kendi şarkıları ile İzmir&#39;de anılacak.</p></div>
            </div>
        </a>
        </Template></>;
}