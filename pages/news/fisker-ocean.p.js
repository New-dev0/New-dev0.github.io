import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fisker Ocean</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fisker Ocean"/>
        <meta name="description" content="Trending News about Fisker Ocean" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fisker Ocean</h1>
            <Image width={800} height={500} src="https://image.motor.at/images/facebook/7382223/fisker3.jpg" alt="Fisker Ocean"/>
            <h3>Recent News</h3>
            <a href='https://motor.at/news/der-erste-fisker-ocean-wurde-nun-in-graz-produziert/402224391'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Der erste Fisker Ocean wurde nun in Graz produziert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSb_g2OZuc6ikPWUhWZ-Fvvo-x_KeBhCpQ4WBknLwSyfCDIylKVOq3Oihe_x--PVPLufKYiEPOq" alt="Der erste Fisker Ocean wurde nun in Graz produziert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach zwei Jahren Entwicklungsarbeit wurde heute der erste Fisker Ocean bei Magna produziert. Alles lief nach Plan.</p></div>
            </div>
        </a><a href='https://www.electrive.net/2022/11/17/magna-baut-ersten-fisker-ocean/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magna baut ersten Fisker Ocean - electrive.net</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9VTHpjuoe6xZlMuOfmXcSubzLhSALg_uG4P3egv3yS3BU4_o7MNAxKXQImL2IvVroTbiQkYyM" alt="Magna baut ersten Fisker Ocean - electrive.net" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beim Auftragsfertiger Magna in Graz ist planmäßig die Fertigung des Fisker Ocean angelaufen. Die Produktion des Elektro-SUV, für das Fisker bisher über&nbsp;...</p></div>
            </div>
        </a><a href='https://industriemagazin.at/automotive/magna-startet-elektro-suv-produktion-des-fisker-ocean/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magna startet Elektro-SUV-Produktion des Fisker Ocean</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTI5_MOrZB4w668c-nT5cuCcJ_4Wy7TfEpeVKCaL4bM_v7fByn2HQ_z61CYtqfyCx3llgWsAjlc" alt="Magna startet Elektro-SUV-Produktion des Fisker Ocean" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das amerikanische Elektro-SUV-Startup Fisker startet die Produktion des vollelektrischen Fisker Ocean bei Magna Steyr in Graz. Bis Ende des Jahres 2023…</p></div>
            </div>
        </a>
        </Template></>;
}