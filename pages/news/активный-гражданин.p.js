import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Активный гражданин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Активный гражданин"/>
        <meta name="description" content="Trending News about Активный гражданин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Активный гражданин</h1>
            <Image width={800} height={500} src="https://www.retail.ru/upload/resize-images/combined/4df68bf1cebd4ec6a72687fb4ef218c873585a0c5cr.jpg" alt="Активный гражданин"/>
            <h3>Recent News</h3>
            <a href='https://www.retail.ru/news/5post-nachal-sotrudnichat-s-proektom-aktivnyy-grazhdanin-17-noyabrya-2022-222642/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5Post начал сотрудничать с проектом «Активный гражданин»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6-mIsP3uL-ZdhzrPn9BcQKZnpFxe9r4wUVGpGU9GSlLkTNkiqdnT-pOFnza_UPQyIJdSx97xI" alt="5Post начал сотрудничать с проектом «Активный гражданин»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>5Post начал сотрудничать с проектом «Активный гражданин» – новости российских торговых сетей для ритейлеров и поставщиков ✓ на портале Retail.ru.</p></div>
            </div>
        </a>
        </Template></>;
}