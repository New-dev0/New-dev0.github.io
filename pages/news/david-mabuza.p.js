import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>David Mabuza</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,David Mabuza"/>
        <meta name="description" content="Trending News about David Mabuza" /></Head><Template>
            <h1 style={{fontSize: "30"}}>David Mabuza</h1>
            <Image width={800} height={500} src="https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/nwl3adwgxkrarpwyslci" alt="David Mabuza"/>
            <h3>Recent News</h3>
            <a href='https://ewn.co.za/2022/11/20/culpable-homicide-case-opened-after-mabuza-motorcade-accident'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Culpable homicide case opened after Mabuza motorcade accident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5F7QplBvbZhdLsuHEmPxX-hgwBi_dVlPacWfB-731FVQRUszxftsROTQGW38v58KNk8cADHC7" alt="Culpable homicide case opened after Mabuza motorcade accident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deputy President David Mabuza&#39;s motorcade was involved in a serious accident on Sunday, leaving one dead and two sustaining serious injuries.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/news/crime-and-courts/pics-police-officer-in-david-mabuzas-security-detail-killed-in-mpumalanga-crash-c1e3bb32-7ded-40dd-a6f2-0918ccc5a660'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PICS: Police officer in David Mabuza&#39;s security detail killed in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTT6PbWVs4Fr1I0RZcdMCmUXWCgGC98btgYL8929ji3w-tWQY_A7SNS2MuC__kfi3pLshKF0Q4n" alt="PICS: Police officer in David Mabuza&#39;s security detail killed in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durban - Deputy President David Mabuza escaped unharmed after a crash on the Mpumalanga freeway in which one person was killed and two were seriously&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/news24/southafrica/news/deputy-presidents-convoy-crash-one-bodyguard-dead-two-others-injured-20221120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deputy president&#39;s convoy crash: One bodyguard dead, two others ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQy8GtBLgwT4bG4EeOvv1Ub5JhHw5tHLEHETGanHNPG8Pwhb4HxUGVBpAynAlvx7icyqW5IVV6a" alt="Deputy president&#39;s convoy crash: One bodyguard dead, two others ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of Deputy President David Mabuza&#39;s bodyguards has died after Mabuza&#39;s convoy was involved in an accident on Sunday morning.</p></div>
            </div>
        </a><a href='https://www.enca.com/news/david-mabuza-presidential-convoy-involved-car-accident'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>David Mabuza&#39;s convoy in car crash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR44yYM04CdRB6m0E4LDa0JRnBDJUc33NDsapqHxTPk1X08MZAYsWSQBFWKffc1OoH85-JW-bLP" alt="David Mabuza&#39;s convoy in car crash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A convoy transporting Deputy President, David Mabuza has been involved in a car accident.</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/news/south-africa/2022-11-20-one-dead-as-deputy-president-david-mabuzas-convoy-crashes-in-middelburg/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>One dead as David Mabuza&#39;s convoy crashes in Middelburg</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTolM3hOqbze1X6k_icF_sMbRu3-mxsH_Ac1PW8l--U5Ty30ZRz6HXpTTMPAMohxN14mJ8hUieU" alt="One dead as David Mabuza&#39;s convoy crashes in Middelburg" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The motorcade of deputy president David Mabuza was involved in a horrific accident which left one person dead in Middelburg, Mpumalanga on Sunday.</p></div>
            </div>
        </a><a href='https://www.sabcnews.com/sabcnews/deputy-president-david-mabuza-involved-in-a-car-accident-claiming-the-life-of-his-bodyguard/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deputy President David Mabuza&#39;s convoy involved in a car accident ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjNEzp6WAYwF5aaOSd5m3y5S0ZMYpzW4d1uQKjIFRd93AcnTy3G4Uu3ByKK0r-p261Ibd-ekiH" alt="Deputy President David Mabuza&#39;s convoy involved in a car accident ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It is uncertain at the moment whether Mabuza was present at the time of the accident , after the vehicle the bodyguards were traveling in experienced a burst&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}