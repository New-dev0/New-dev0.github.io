import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UAE</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UAE"/>
        <meta name="description" content="Trending News about UAE" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UAE</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95646586,width-1070,height-580,imgsize-72662,overlay-economictimes/photo.jpg" alt="UAE"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/uk/uae-to-release-metaverse-version-of-abu-dhabis-yas-island-soon/articleshow/95646587.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UAE to release metaverse version of Abu Dhabi&#39;s Yas Island soon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOao4trWBmtMe3Rb9HbrdDHtHnC7gTd6nRSbr_MzbQC94BEIkg08Hi5RaPAcszpS523VYmgCDV" alt="UAE to release metaverse version of Abu Dhabi&#39;s Yas Island soon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This year, in 2023, one more island seems to be getting added to the list of islands in the UAE. It is also very special as it will be a digital island.</p></div>
            </div>
        </a><a href='https://www.khaleejtimes.com/business/what-is-withholding-tax-and-its-proposed-application-in-the-uae'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is withholding tax and its proposed application in the UAE</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTssKlE_oYHys_DV5AysvRgMZomFytb1swHMpwxFRlsN5P70fD6143bs_SQuzfn8M7mqlMTITa" alt="What is withholding tax and its proposed application in the UAE" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Usually, WHT applies to cross-border payments as well. WHT rates vary based on the nature of goods and services received and the relationship status with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.khaleejtimes.com/business/uae-remains-top-choice-of-investors-as-fdi-inflows-to-hit-22-billion-this-year'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UAE remains top choice of investors as FDI inflows to hit $22 billion ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrz7lFd-n6ONbGCca8g8mYcNsVKQFxZXrKUGT6gooXvheR99_QOmHKHNIHrGh4nHp9zxU2Pka-" alt="UAE remains top choice of investors as FDI inflows to hit $22 billion ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The UAE will continue to drive foreign direct investment (FDI) capital into the region as investors prefer the emirate due to its business-friendly policie.</p></div>
            </div>
        </a><a href='https://www.argusmedia.com/en/news/2393015-uae-tightens-hsfo-bunker-regulations'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UAE tightens HSFO bunker regulations</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="UAE tightens HSFO bunker regulations" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vessels refuelling with high-sulphur fuel oil (HSFO) at all United Arab Emirates (UAE) ports will now have to submit a copy of an International Air&nbsp;...</p></div>
            </div>
        </a><a href='https://www.euronews.com/travel/2022/11/20/soon-youll-be-able-to-visit-abu-dhabis-yas-island-in-the-metaverse'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Soon you&#39;ll be able to visit Abu Dhabi&#39;s Yas Island in the Metaverse</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrHUe2E_mddrVQ1l2UPKE2YVfz_senn82e_fvcYQpx3n-yCzftDT5K81BO2lEPsq11nnMcv4jy" alt="Soon you&#39;ll be able to visit Abu Dhabi&#39;s Yas Island in the Metaverse" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The largest emirate in the United Arab Emirates (UAE), Abu Dhabi has 200 islands to its name, but in 2023 it&#39;s due to add one more - if you include digital&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}