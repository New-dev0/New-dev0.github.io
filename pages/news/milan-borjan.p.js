import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Milan Borjan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Milan Borjan"/>
        <meta name="description" content="Trending News about Milan Borjan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Milan Borjan</h1>
            <Image width={800} height={500} src="https://i.hbrcdn.com/haber/2022/11/23/kanada-kalecisi-kim-milan-borjan-kimdir-kanada-15449087_4522_amp.jpg" alt="Milan Borjan"/>
            <h3>Recent News</h3>
            <a href='https://www.haberler.com/haberler/kanada-kalecisi-kim-milan-borjan-kimdir-kanada-15449087-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanada kalecisi kim? Milan Borjan kimdir? Kanada&#39;nın kalecisi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4x0aarer7u35VUowv0W8RBNPJ8FEy-nymBDZsq8gV9COlbPuXPyrWG8vHHyTTeWdGuOBB1fsf" alt="Kanada kalecisi kim? Milan Borjan kimdir? Kanada&#39;nın kalecisi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası&#39;nda bulunan Kanada&#39;nın kalecisi kimdir merak ediliyor. Peki, Kanada kalecisi kim? Milan Borjan kimdir? Kanada&#39;nın kalecisi Milan Borjan hangi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}