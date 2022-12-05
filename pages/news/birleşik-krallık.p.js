import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Birleşik Krallık</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Birleşik Krallık"/>
        <meta name="description" content="Trending News about Birleşik Krallık" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Birleşik Krallık</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/12/4/2008871/kapak_154958.jpg" alt="Birleşik Krallık"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/dunya/birlesik-krallik-suc-dairesi-rus-is-insanini-tutukladi-2008871'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Birleşik Krallık suç dairesi Rus İş insanını tutukladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8oA40h0Ns_73IUqT1snqeFnMQQt2ivLz0K4XT112jjHo8lT-nlHCZOGfYGIXQPXZFSDX3U1EK" alt="Birleşik Krallık suç dairesi Rus İş insanını tutukladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Birleşik Krallık Ulusal Suç Ajansı anti-kleptokrasi birimi, 58 yaşındaki Rus iş insanını Londra&#39;daki evinde tukukladığını bildirdi. Ulusal Suç Ajansı, Rus&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}