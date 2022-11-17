import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Germany</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Germany"/>
        <meta name="description" content="Trending News about Germany" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Germany</h1>
            <Image width={800} height={500} src="https://www.thinkgeoenergy.com/wp-content/uploads/2022/11/PT-images_5.jpg" alt="Germany"/>
            <h3>Recent News</h3>
            <a href='https://www.thinkgeoenergy.com/zerogeo-commences-aerial-survey-for-geothermal-potential-of-lower-saxony-germany/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ZeroGeo commences aerial survey for geothermal potential of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtuSBbFcSPpMzRL6Daqbb7ZwYxWcKBjOK9Xb6xh7AD-npN9C7KX9OVc458LQWW9qLpnkrRRFmb" alt="ZeroGeo commences aerial survey for geothermal potential of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The aerial gravity and magnetics survey to evaluate the geothermal potential of Lower Saxony, Germany is set to commence by mid to late November 2022.</p></div>
            </div>
        </a><a href='https://www.france24.com/en/africa/20221116-germany-to-end-participation-in-un-peacekeeping-mission-in-mali'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Germany to end participation in UN peacekeeping mission in Mali</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHwo6R71GP-82vFRVs5GOaSzsRQ24dmOSoLP9WQ7jlFP-j2YaonBHlgZYRQoKc8z5mE43KgfVK" alt="Germany to end participation in UN peacekeeping mission in Mali" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The German military have been in Mali since 2013 with a presence of up to 1,400 soldiers as part of the MINUSMA mission. The German troops are in part meant to&nbsp;...</p></div>
            </div>
        </a><a href='https://farmersreviewafrica.com/germany-commits-eur15m-to-pay-poor-rural-people-in-preserving-ecosystems/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Germany commits EUR15m to pay poor rural people</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlaSKw3rtPxatCM-Vq9zHdb8RgYWNdu622OMj75N6EtfWwIgoyw_mzVxjUFF7pouqR_kk34Mt3" alt="Germany commits EUR15m to pay poor rural people" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Germany&#39;s financing pledge is also a way to encourage the international community to diversify financial instruments to fund sustainable climate adaptation and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}