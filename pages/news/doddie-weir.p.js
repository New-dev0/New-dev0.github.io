import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Doddie Weir</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Doddie Weir"/>
        <meta name="description" content="Trending News about Doddie Weir" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Doddie Weir</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/8dd721d0fa47b3f77a94facb1294a33c5c85152e/0_115_3072_1842/master/3072.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fb94660d7826077f01f3b0427d0d414a" alt="Doddie Weir"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/sport/2022/nov/28/doddie-weir-obituary'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doddie Weir obituary</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQFkO2-wQnjaEkyfowP0lWKKT4Dow7wGQNn8rOi_54hsTyByJSz1ci5mc0Z1Tre2srjeO-KPaJf" alt="Doddie Weir obituary" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scotland and Lions rugby player who became a campaigner after being diagnosed with motor neurone disease.</p></div>
            </div>
        </a><a href='https://www.news24.com/sport/rugby/scottish-rugby-legend-doddie-weir-dies-aged-52-20221126'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scottish rugby legend Doddie Weir dies aged 52</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGEGECiiIvnAYXQDWKW7KXVGCjmkc79Q8c4AfnNWfiklCrtBy4qDa-50_Axj8lzjPQDq4J1N8g" alt="Scottish rugby legend Doddie Weir dies aged 52" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Scottish rugby international Doddie Weir has died at the age of 52 after a long battle with Motor Neurone Disease, his family announced.</p></div>
            </div>
        </a><a href='https://www.skysports.com/rugby-union/news/12321/12756274/doddie-weir-rob-burrow-hails-mnd-hero-as-tributes-pour-in-for-warrior-scotland-rugby-legend'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doddie Weir: Rob Burrow hails &#39;MND hero&#39; as tributes pour in for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLePQ42odN1a7knsA2olN1NYJe09XA_5RUyer4uML2GwGovi83TrBW-RHz3ECy2OwDoUXa3Uoo" alt="Doddie Weir: Rob Burrow hails &#39;MND hero&#39; as tributes pour in for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fellow motor neurone disease sufferer and campaigner Rob Burrow paid tribute to an inspirational &quot;warrior&quot; Doddie Weir following his death at the age of 52.</p></div>
            </div>
        </a><a href='https://www.express.co.uk/life-style/health/1702680/doddie-weir-mnd-research-funding-grant-shapps'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Red tape&#39; holding back funds to fight disease that killed Doddie Weir</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTY0YQV9jxiyYRNJ6pdTVEfZ3EySrkLS2jUZVONsFUwEs69K6O9zpYQxMkQ6iF2yWcZ4URqv0tC" alt="&#39;Red tape&#39; holding back funds to fight disease that killed Doddie Weir" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Crucial funding for motor neurone disease research is being held back by &#39;red tape and bureaucracy&#39;, campaigners have said.</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/rugby/doddie-weir-alan-tait-newcastle-falcons-scotland-motor-neurone-disease-b1043252.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doddie Weir was a genuine one-off... his brilliant legacy will live on</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRK9VvC3YMvaxgG3bdXs_xMC4gnGCeOHDxLc43kMdNoCIkim603bxoAf68HhL4gcSueW6aYf0Xm" alt="Doddie Weir was a genuine one-off... his brilliant legacy will live on" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alan Tait remembers friend and former team-mate Doddie Weir, who has died after a battle with motor neurone disease.</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/scotland-head-coach-townsend-pays-tribute-to-inspirational-doddie-weir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scotland head coach Townsend pays tribute to &#39;inspirational&#39; Doddie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS38_Pu1tIoEMD0dtm12m8YiSxB5ueTLFh4LputAUE7byfIzUN9x8jdp9Qjs7JOdhYv3eLx5tbr" alt="Scotland head coach Townsend pays tribute to &#39;inspirational&#39; Doddie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scotland head coach Gregor Townsend has spoken of the “huge legacy” former team-mate Doddie Weir will have following his death.</p></div>
            </div>
        </a>
        </Template></>;
}