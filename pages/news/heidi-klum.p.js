import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Heidi Klum</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Heidi Klum"/>
        <meta name="description" content="Trending News about Heidi Klum" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Heidi Klum</h1>
            <Image width={800} height={500} src="https://image.gala.de/22972240/t/mI/v4/w1440/r1.7778/-/gettyimages-1336678964.jpg" alt="Heidi Klum"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.de/stars/news/heidi-klum--so-zeigt-sich-das-supermodel-mit-ihrer-tochter-leni-22972238.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heidi und Leni Klum: In der neuesten Werbekampagne zeigt sich ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6j885zzG8PCNuwKfgfmWmhbNuQqMD3y52-x0TUWpokjCQ6DTccTZjV-vBoBJdtZ81Yvqhyhn3" alt="Heidi und Leni Klum: In der neuesten Werbekampagne zeigt sich ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heidi Klum, 49, und ihre Tochter Leni Klum, 18, haben es schon wieder getan. Das Mutter-Tochter Duo ließ sich gemeinsam für das Label Intimissimi ablichten.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6221990/heidi-und-leni-klum-posierten-zusammen-in-pyjamas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heidi und Leni Klum posierten zusammen in Pyjamas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTP-hzBHcRDqT6KoomUIN36UO5T5-UViaqrij1IFDaQpR4pCcS-RNiY_rLPL6O4SRbbfEpsg0fP" alt="Heidi und Leni Klum posierten zusammen in Pyjamas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kritik an vorherigen Fotos lässt das Mutter-Tochter-Duo scheinbar unbeeindruckt. Für eine Nachtwäsche-Kampagne posieren Leni und Heidi Klum erneut im&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/stars/diesmal-ohne-heidi-und-sexier-denn-je-leni-klum-laesst-die-huellen-fallen/402242466'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diesmal ohne Heidi und sexier denn je: Leni Klum lässt die Hüllen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6JzgJBBxdAx8vqWS8zj-86LoQNX-f0e5gRrt6L-jLf1BZONTBvTKHoCCWklonyj7RbciQnl84" alt="Diesmal ohne Heidi und sexier denn je: Leni Klum lässt die Hüllen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nachdem sie zusammen mit ihrer Mutter Heidi Klum kürzlich für die Unterwäsche-Marke Intimissimi in Unterwäsche posiert hatte - eine kontroverse Kampagne,&nbsp;...</p></div>
            </div>
        </a><a href='https://k.at/entertainment/heidi-und-leni-klum-posierten-zusammen-in-pyjamas/402242454'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heidi und Leni Klum posieren erneut für Unterwäsche-Label</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVpFs7qBaJj5Ytd91rp-0oqwDXJEmT3v3QmFO1Q4kNXCL7iBoMNt2PpSn122_Uo6NBCxhEfpmk" alt="Heidi und Leni Klum posieren erneut für Unterwäsche-Label" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heidi Klum: Einige Wochen nach ihrem gemeinsamen Fotoshooting, das für Aufsehen gesorgt hat, haben sich Heidi Klum und Tochter Leni erneut für ein&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/lifestyle/prominente--heidi-und-leni-klum-posieren-erneut-zusammen---in-pyjamas-32964626.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prominente: Heidi und Leni Klum posieren erneut zusammen - in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_cKMz8rQVPq6eqT28YOgMaOl8doP6ur7tDOgvgkw__8mol4FKim9ojLLhDmj4tyoRDRDf1GKH" alt="Prominente: Heidi und Leni Klum posieren erneut zusammen - in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles - Vor Wochen hatte ihr gemeinsames Fotoshooting für Aufsehen und auch viel Kritik gesorgt: Nun haben sich das Model Heidi Klum (49) und.</p></div>
            </div>
        </a><a href='https://www.berliner-kurier.de/show/trotz-kritik-heidi-und-leni-klum-shooten-wieder-zusammen-fuer-unterwaesche-marke-li.292532'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trotz Kritik: Heidi und Leni Klum shooten wieder zusammen für ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDyGpv-lv8UpYwRbOd9dEwKqcUnVSzvTJXnFrXC0-dO1q4XWJ0UL_V5GyS3dINtrY9z5NwHYSd" alt="Trotz Kritik: Heidi und Leni Klum shooten wieder zusammen für ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viele Menschen störten sich an dem gemeinsamen Werbe-Clip. Jetzt legen die Klums nach.</p></div>
            </div>
        </a>
        </Template></>;
}