import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Australia"/>
        <meta name="description" content="Trending News about Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Australia</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/6e5d29fcfb71f662fe89e686a0ed3314033aac4c/0_14_4774_2865/master/4774.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=116ac085bac7f9da11e586a5bd8c4395" alt="Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/australia-news/2022/nov/28/australias-covid-recovery-which-capital-cities-have-bounced-back-best'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia&#39;s Covid recovery: which capital cities have bounced back ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSn3kyVn0H3z26KVHUeJx9Ny_Vsh4bb4Au-Wggg0EydB--Ctdv-Rbfz7xT4BXSgaGnLsH2vy1m5" alt="Australia&#39;s Covid recovery: which capital cities have bounced back ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visits for retail and recreation have boosted activity in Sydney and Melbourne, but work from home preferences are keeping office trips low.</p></div>
            </div>
        </a><a href='https://www.climatecouncil.org.au/resources/the-great-deluge-australias-new-era-of-unnatural-disasters/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The great deluge: Australia&#39;s new era of unnatural disasters ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ31zGsoq_O_FHuUKs-7tG7HUJvuNY-OIi3-tP5NcQBbpVUkEf5dOPI_r1m_BN58yonOv7Ksny2" alt="The great deluge: Australia&#39;s new era of unnatural disasters ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This year has seen large parts of Eastern Australia experience record-breaking rainfall and floods. From Queensland down to Tasmania, extreme weather events&nbsp;...</p></div>
            </div>
        </a><a href='https://www.australiangeographic.com.au/news/2022/11/these-megatrends-will-shape-australias-future/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>These megatrends will shape Australia&#39;s future</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1_FaMK4HndADw3cUdfOJRwP0HYTOLDIv9myiiPBqO16VLamUg8EjwrACRdoYqMXh4Uc_6wYAJ" alt="These megatrends will shape Australia&#39;s future" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From climate and sustainability to geopolitics and pandemics, scientific soothsayers have projected the global trends that will impact us most in the next&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/environment/2022/nov/27/australia-ev-electric-vehicle-car-supply-fuel-efficiency-standard'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Labor&#39;s EV strategy won&#39;t immediately fix Australia&#39;s supply ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuZzW_CsowRXmyvH7EJZcjKyq1KjbJqJl1eC4cC1SfkBN0yxCxucJbLm8wer1AbzeXOX-CQ0SG" alt="Labor&#39;s EV strategy won&#39;t immediately fix Australia&#39;s supply ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Until a fuel efficiency standard is introduced, supply will be prioritised to Europe, the US and the UK.</p></div>
            </div>
        </a>
        </Template></>;
}