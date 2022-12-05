import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>InfoWars</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,InfoWars"/>
        <meta name="description" content="Trending News about InfoWars" /></Head><Template>
            <h1 style={{fontSize: "30"}}>InfoWars</h1>
            <Image width={800} height={500} src="" alt="InfoWars"/>
            <h3>Recent News</h3>
            <a href='https://www.ft.com/content/e180feb6-4806-47ed-8ddb-23ede4263943'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>InfoWars founder Alex Jones files for bankruptcy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyWu1O5_KRzIgKjkhKRF22UOAeEsqvrg2lUjjmgwmzwtELaEx6wawcidyC0PXZfmpW5G5YNtKb" alt="InfoWars founder Alex Jones files for bankruptcy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Far-right host was hit with almost $1.5bn in damages over false claims on Sandy Hook school shooting.</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/world/infowars-host-alex-jones-files-for-personal-bankruptcy-1400494.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Infowars host Alex Jones files for personal bankruptcy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAotGF4LaihosR8sP-kIpgrfR7Vi6DZ8xIrursR3ilpPtRouuaduUuSrFaOLdB5st9yG2erTYz" alt="Infowars host Alex Jones files for personal bankruptcy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He has been ordered to pay nearly 1.5 billion dollars in damages over lies he spread about the Sandy Hook school massacre.</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/world/us/2022/12/02/infowars-website-founder-alex-jones-files-for-bankruptcy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>InfoWars website founder Alex Jones files for bankruptcy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjLA5ALYMY7qQXmBNymZ9TUwq9iFTVgjNGjuViqVXLWwX_uhs_GOPkppUxqcXumQuMP-nOMnld" alt="InfoWars website founder Alex Jones files for bankruptcy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Website filed for protection in April amid multiple defamation lawsuits brought over same false claims.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/12/02/infowars-host-alex-jones-files-for-bankruptcy-protection.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Jones files for bankruptcy protection, lists Sandy Hook families ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2zMets_I1EkczaVKajgoDJbHSFuF3Z_6qpkJJ6Zqb1cFKJmyymSuGP9Hyvbbcf8_pcNJ0G6PP" alt="Alex Jones files for bankruptcy protection, lists Sandy Hook families ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The bankruptcy filing by Alex Jones comes weeks after he was ordered to pay more than $1 billion to the family of Sandy Hook massacre victims.</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/news/us-news/infowars-host-alex-jones-files-bankruptcy-court-records-show-rcna59793'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Infowars host Alex Jones files for bankruptcy, court records show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTonkbVSET7N5wqLqyA-z5aDtraWx7fFOsMUTm0ReJsW05My8WTnDFOZUduOEjeTp4rSfVHN2Kv" alt="Infowars host Alex Jones files for bankruptcy, court records show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Conspiracy theorist Alex Jones, on the hook for more than $1 billion due to lies he spread about the 2012 Sandy Hook massacre, filed for bankruptcy,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}