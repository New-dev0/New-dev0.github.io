import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bastian Schweinsteiger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bastian Schweinsteiger"/>
        <meta name="description" content="Trending News about Bastian Schweinsteiger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bastian Schweinsteiger</h1>
            <Image width={800} height={500} src="https://www.merkur.de/bilder/2022/11/28/91944775/30391211-jessy-wellmer-und-bastian-schweinsteiger-waren-bei-der-em-2021-gemeinsam-vor-der-kamera-3ofOMusEe3fe.jpg" alt="Bastian Schweinsteiger"/>
            <h3>Recent News</h3>
            <a href='https://www.merkur.de/sport/fussball/wm-2022-in-der-ard-jessy-wellmer-unterlaeuft-peinlicher-fauxpas-mit-bastian-schweinsteiger-ztz-91944775.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 in der ARD: Jessy Wellmer unterläuft peinlicher Fauxpas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUlPSr-Uig4dbd1jKJwJIxaBLbvkJzy-4ohQgZhd5N4sHkSKv4uFEg4h0HndPf9XY377udPCZQ" alt="WM 2022 in der ARD: Jessy Wellmer unterläuft peinlicher Fauxpas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bastian Schweinsteiger und Jessy Wellmer waren einst das TV-Duo im ZDF. Davon war am Montagabend nicht viel zu sehen.</p></div>
            </div>
        </a><a href='https://www.tz.de/sport/fussball/wm-experte-bastian-schweinsteiger-deutsche-tugenden-traurig-kritik-kimmich-zr-91944305.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: ARD-Experte Schweinsteiger vermisst deutsche Tugenden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQaykoKGggaXOvK_K7dIHm2bKjwNaGJgfI0Nqb2owQPByA-u4IGM_e37i6nfYmGJqDJjDSGku0I" alt="WM 2022: ARD-Experte Schweinsteiger vermisst deutsche Tugenden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bastian Schweinsteiger bemängelt die Mentalität in der deutschen Nationalmannschaft. Diese Entwicklung wirke sich auch außerhalb des Platzes negativ aus.</p></div>
            </div>
        </a><a href='https://www.watson.de/sport/wm%202022/474206962-wm-2022-ard-moderatorin-witzelt-ueber-peinlichen-fehler-schweinsteiger-kontert'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: ARD-Moderatorin witzelt über peinlichen Fehler ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbPxtIIc2G7bpdSNj1D4GvqanWO7IogyVstOhPKkpHLfM5cgfewfe9gWO8SJuBo7ftg44r_pug" alt="WM 2022: ARD-Moderatorin witzelt über peinlichen Fehler ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ARD-Moderatorin Jessy Wellmer hatte ein paar Probleme mit dem Vornamen des Weltmeisters von 2014.</p></div>
            </div>
        </a>
        </Template></>;
}