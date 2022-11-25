import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Timmy Duggan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Timmy Duggan"/>
        <meta name="description" content="Trending News about Timmy Duggan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Timmy Duggan</h1>
            <Image width={800} height={500} src="https://www.independent.ie/irish-news/courts/99e05/42169674.ece/AUTOCROP/w1240h700/Timmy%20Duggan.jpg" alt="Timmy Duggan"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.ie/irish-news/courts/badminton-champion-who-paid-mothers-for-access-to-children-also-threw-sexual-notes-at-young-girls-out-of-car-window-42169675.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kerry badminton champion Timmy Duggan who paid mothers for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFQ45lKDKQqJaDxYDmMYD_SD_h5mEav1nYwPZBVMMJ4VUM8SLvd0fcj9AZljL1spUeMaUtJS2Rzg" alt="Kerry badminton champion Timmy Duggan who paid mothers for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A four-time Kerry badminton champion paid women to access their children for his own “deplorable” sexual gratification, a court heard Thursday.</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/courtandcrime/arid-41014517.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Court hears &#39;deplorable&#39; details of Kerry badminton coach paying ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2s2WwSiZ6f1gtuGi2COeKIv2aoxaCqCdhQgK7blP9awf30u3PIG1DOLEmwaktHF2JxA1bsOAJ" alt="Court hears &#39;deplorable&#39; details of Kerry badminton coach paying ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A four-time Kerry badminton champion paid women to access their children for his own “deplorable” sexual gratification, a court heard Thursday. Timmy Duggan, (&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rte.ie/news/courts/2022/1124/1337994-timmy-duggan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Court hears man offered €50 to girls for sex act</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyBPIXk32twIP_pkVffqgi-YHb_lieeVGk-3XT-WvtGSd3rhxQdJLGFvg0xo9jMF3HHxqFIXS6" alt="Court hears man offered €50 to girls for sex act" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A man who paid women to let him sexually abuse their children was described in court as someone whose sexual addiction was spiralling out of control when he&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiokerry.ie/news/kerry-man-to-be-sentenced-on-monday-for-crimes-including-child-sex-abuse-307018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kerry man to be sentenced on Monday for crimes including child sex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQO-Yr8kp7oTIWQj3_XiVauasnRAzVtKSCuiNS9jmhbh-JtFUBi9DtZVzP7eqm3mVjk1y65KApR" alt="Kerry man to be sentenced on Monday for crimes including child sex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Judge Elva Duffy heard evidence against 35-year-old Timmy Duggan, of Mountain Lodge, Annagh, Tralee, at Tralee Circuit Court today. Mr Duggan has pleaded guilty&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/news/9789394/badminton-champ-paid-off-mum-child-sexual-gratification-jail/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Badminton champ who admitting paying off woman for access to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT27rC1Z1Qi5az9C603QKk_roVip5QesTLoQVclg8ralijAeJYsLtFsnQ4c94wEm2c9ECsmMCEM" alt="Badminton champ who admitting paying off woman for access to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They include sexually exploiting and sexually assaulting young children and possessing child pornography. Duggan, and the woman - who can&#39;t be named to protect&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}