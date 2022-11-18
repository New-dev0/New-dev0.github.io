import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nancy Pelosi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nancy Pelosi"/>
        <meta name="description" content="Trending News about Nancy Pelosi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nancy Pelosi</h1>
            <Image width={800} height={500} src="https://i.ds.at/j8l1Cw/rs:fill:1200:600/plain/2022/11/17/pelosi.jpeg" alt="Nancy Pelosi"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000140953529/nancy-pelosi-gibt-fuehrung-der-us-demokraten-in-repraesentantenhaus-ab'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi gibt Führung der US-Demokraten in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQuo_cjdvBVvioyMGGGBTKdo4IPo8pIf-hOQjAc67M84WP3DLtJnrGSfPv3CcBYd0_ajDuwWndA" alt="Nancy Pelosi gibt Führung der US-Demokraten in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pelosi will weiterhin Abgeordnete bleiben. Der Republikaner Kevin McCarthy soll ihr als Speaker nachfolgen. Biden würdigt &quot;entschiedene Verteidigerin der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6216876/nancy-pelosi-gibt-fuehrung-der-demokraten-im-us-repraesentantenhaus-ab'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi gibt Führung der Demokraten im US ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_wRrGe8kEelExvLT07qMpO0zoUkjXm4-YLFOh6ouj8DcnUsFRv-JUMyLnh3YgQbBZB55yz_iQ" alt="Nancy Pelosi gibt Führung der Demokraten im US ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie war die erste Frau an der Spitze des Hauses. Nun macht sie Platz für eine jüngere Führungsgeneration in der Partei. Im Kongress will Nancy Pelosi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/ausland/amerika/usa-repraesentantenhaus-ruecktritt-pelosi-101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rücktritt von Nancy Pelosi: &quot;Zeit für eine jüngere Generation&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFS7ua4risW5IP2JLVZ6LLI5_RGTe3FuLtF4RJQpwMaCFWoI8Ucs9cVHLTXB_qrWm0143xLqxe" alt="Rücktritt von Nancy Pelosi: &quot;Zeit für eine jüngere Generation&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als erste Frau übernahm Nancy Pelosi den Vorsitz im US-Repräsentantenhaus - nun gibt sie die Führung der Demokraten in der Parlamentskammer ab.</p></div>
            </div>
        </a><a href='https://orf.at/stories/3294249/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US-Repräsentantenhaus: Pelosi gibt Führung der Demokraten ab</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_STfY2tC7WgU8xKRn-jG7NplY10ymFeL4wdu9Px5ZfWpe33GPMffmb5xC878iAHjnJ7yBhKc1" alt="US-Repräsentantenhaus: Pelosi gibt Führung der Demokraten ab" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Vorsitzende des US-Repräsentantenhauses, Nancy Pelosi, wird ihre Partei in der US-Parlamentskammer künftig nicht mehr anführen.</p></div>
            </div>
        </a><a href='https://www.zeit.de/politik/ausland/2022-11/nancy-pelosi-gibt-fuehrung-der-us-demokraten-im-repraesentantenhaus-ab'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi: Pelosi gibt Vorsitz der Demokraten im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2HYKZsOzTIhJUu_RC6oTmsJ99jOQKxqHkA2ptm8zzEQLi4_O7KdtiLhQ0C_pXeAO9xqcdfkSl" alt="Nancy Pelosi: Pelosi gibt Vorsitz der Demokraten im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stehender Beifall, auch von Republikanern: In einer emotionalen Rede hat Pelosi erklärt, sie werde die Führung der Demokraten abgeben.</p></div>
            </div>
        </a>
        </Template></>;
}