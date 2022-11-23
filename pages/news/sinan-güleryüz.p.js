import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sinan Güleryüz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sinan Güleryüz"/>
        <meta name="description" content="Trending News about Sinan Güleryüz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sinan Güleryüz</h1>
            <Image width={800} height={500} src="https://i.sonhaberler.com/2/1280/720/storage/files/images/2022/11/22/sinan-guleryuz-oh7B_cover.jpg" alt="Sinan Güleryüz"/>
            <h3>Recent News</h3>
            <a href='https://www.sonhaberler.com/sinan-guleryuz-kimdir-tolga-guleryuz-ile-kardes-mi-haber-886466'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sinan Güleryüz kimdir, Tolga Güleryüz ile kardeş mi?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-LjvI9nli0nzabyTHfGIsa2uikL2E7leRA0PQ3GlVrBmya3r-d8ykIZcYa9tC_V7rJLMeiK4a" alt="Sinan Güleryüz kimdir, Tolga Güleryüz ile kardeş mi?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Önceki akşam tiyatrocuları taşıyan aracın kaza geçirmesi sonucu 3 tiyatrocu ölmüştü. Ölenler arasında Tolga Güleryüz de bulunuyordu. Güleryüz&#39;ün ölümü yakınları&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}