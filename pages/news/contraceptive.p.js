import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Contraceptive</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Contraceptive"/>
        <meta name="description" content="Trending News about Contraceptive" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Contraceptive</h1>
            <Image width={800} height={500} src="" alt="Contraceptive"/>
            <h3>Recent News</h3>
            <a href='https://health.mil/News/Articles/2022/12/01/Military-Health-System-Offers-a-Variety-of-Contraceptive-Care-Services'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Military Health System Offers a Variety of Contraceptive Care Services</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzMZ58MJwm348cntI4Ihwb9YjCynvOXN_PMBWRGzWDOxlMQlYqY6nXSuKig5uGEa8nzdutY6YL" alt="Military Health System Offers a Variety of Contraceptive Care Services" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>However, &quot;specialty fertility care, such as IVF and intrauterine insemination, is limited to larger military hospitals and clinics,&quot; she said. &quot;At Wright-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}