import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Digitaler Führerschein</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Digitaler Führerschein"/>
        <meta name="description" content="Trending News about Digitaler Führerschein" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Digitaler Führerschein</h1>
            <Image width={800} height={500} src="https://images-tt-com.nmo.at/v2/assets.tt.com/im-content/images/f75923da-c360-5af2-9636-33464da0e0ad?p=eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0Ijo2MzB9fQ%3D%3D" alt="Digitaler Führerschein"/>
            <h3>Recent News</h3>
            <a href='https://www.tt.com/artikel/30837906/digitaler-fuehrerschein-im-ersten-monat-mehr-als-115-000-mal-aktiviert'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Digitaler Führerschein im ersten Monat mehr als 115.000 Mal aktiviert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRpV2Cq_xvQgizozMRrhyISi9cwIM_S1If_55gHKbH6bl7nw6F7E8UXBDh0LlLcjYTPrP4XAkYI" alt="Digitaler Führerschein im ersten Monat mehr als 115.000 Mal aktiviert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wien – Der digitale Führerschein ist der erste digitale Ausweis Österreichs. Laut Innenminister Gerhard Karner und Staatssekretär für Digitalisierung Florian&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vol.at/digitaler-fuehrerschein-im-ersten-monat-mehr-als-115-000-downloads/7752148'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Digitaler Führerschein: Im ersten Monat mehr als 115.000 Downloads</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQx6_Nf7cV1ECUMz_jN3ekemU69hCB4JfH0AVvltQQMahW6nsUHAlDG1Af4aOJV8SjUJGZfIGSh" alt="Digitaler Führerschein: Im ersten Monat mehr als 115.000 Downloads" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laut Innenminister Gerhard Karner und Staatssekretär für Digitalisierung Florian Tursky wurde der digitale Führerschein im ersten Monat 115.249 Mal&nbsp;...</p></div>
            </div>
        </a><a href='https://k.at/news/mehr-als-115000-digitale-fuehrerscheine-im-ersten-monat/402225822'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Digitaler Führerschein: Mehr als 115.000 Exemplare im ersten Monat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9V9YR-vm5Iekqdt0L8z1quS7oy60UrGvQa4n8lJfORhGm1VE0PSTi92684F20MRbGO1B-wqS4" alt="Digitaler Führerschein: Mehr als 115.000 Exemplare im ersten Monat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Von der Polizei wurden die digitalen Führerscheine bisher rund 4.600 Mal gescannt. Das teilten Innenminister Gerhard Karner und der für die Digitalisierung&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bmi.gv.at/news.aspx?id=4C51766D4A2B564C742F513D'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karner/Tursky: Über 115.000 digitale Führerscheine in einem Monat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0--pgYcQKOh-tzyo19_X0Zd_n_IjR5In4uznGTD_n_dXH9HdGJeSONdNx2NAXwbXQ62W204Bl" alt="Karner/Tursky: Über 115.000 digitale Führerscheine in einem Monat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor einem Monat wurde durch Innenminister Gerhard Karner und Staatssekretär für Digitalisierung Florian Tursky der digitale Führerschein präsentiert – der&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}