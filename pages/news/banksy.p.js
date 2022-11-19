import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Banksy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Banksy"/>
        <meta name="description" content="Trending News about Banksy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Banksy</h1>
            <Image width={800} height={500} src="https://www.zdf.de/assets/banksy-streetart-ukraine-100~1280x720?cb=1668790773002" alt="Banksy"/>
            <h3>Recent News</h3>
            <a href='https://www.zdf.de/nachrichten/panorama/banksy-ukraine-krieg-russland-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kunst auf Trümmern: Banksy in der Ukraine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSCvq8LBsj1eL2FypGF6SeBcqYprctWSwQ-va1qYjsuvuheq0V8BwW2c9y19MDJb0J668AgoM3K" alt="Kunst auf Trümmern: Banksy in der Ukraine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der anonyme britische Künstler Banksy zeigt mit Werken seine Solidarität mit den Ukrainern. Ein Video zeigt ihn anscheinend bei der Arbeit.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/feuilleton/kunst-und-architektur/banksys-streetart-in-der-ukraine-laesst-ruinenmalerei-aufleben-18470369.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Streetart in der Ukraine: Banksys David hat Putin schon besiegt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ010Y-WghFMNwmMj_MX53hu5Msh21-Uk-xjmQ8fD48gY9FZbB1HmI-zKPY5rNdL000ECgGzyXA" alt="Streetart in der Ukraine: Banksys David hat Putin schon besiegt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Renaissance der Ruinenmalerei: Der Graffiti-Magier Banksy schreibt in der Ukraine die Kunstgeschichte der nur scheinbar Unterlegenen neu.</p></div>
            </div>
        </a><a href='https://www.krone.at/2860060'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Street-Art im Krieg - Banksy veröffentlichte Video mit Werken in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQoVkSLtdqdnLW5_gffr_59k8VMD4brSOrlv3RHyvoGn3aX3zDkP22dq8GTs5aH_3W1kSXnjRH2" alt="Street-Art im Krieg - Banksy veröffentlichte Video mit Werken in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der mysteriöse britische Street-Art-Künstler Banksy hat ein Video auf Instagram veröffentlicht, in dem er sich zu einer ganzen Reihe von Werken in ...</p></div>
            </div>
        </a><a href='https://www.tt.com/artikel/30837935/banksy-reihe-in-ukraine-befeuert-spekulationen-ueber-identitaet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Banksy-Reihe in Ukraine befeuert Spekulationen über Identität</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRG6h_FD3TXd6f3Dt7T41C1pbGwgWyKk2Oss3wxgNLnKl8_7yllJ0cn8WwpkZ4z42w1kv_JCnSr" alt="Banksy-Reihe in Ukraine befeuert Spekulationen über Identität" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der mysteriöse britische Streetart-Künstler Banksy bringt den Menschen in der Ukraine mit mehreren Werken seine Solid...</p></div>
            </div>
        </a><a href='https://www.zeit.de/kultur/kunst/2022-11/banksy-ukraine-streetart-graffiti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Banksy in der Ukraine: Endlich mal Kitsch, wo er gebraucht wird</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbuj7YvG0VNhYPvTx85TZDPtP809VWpku1J4SOkYVNW6QzRqry9yN4GpQLTCcVzmv_TIC5aVXp" alt="Banksy in der Ukraine: Endlich mal Kitsch, wo er gebraucht wird" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Brite Banksy ist der Campino der politischen Kunst. Nun aber hat er Wandbilder in der Ukraine hinterlassen und damit seine&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}