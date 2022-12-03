import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Takeoff</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Takeoff"/>
        <meta name="description" content="Trending News about Takeoff" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Takeoff</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221202154632-01-takeoff-migos-file-restricted.jpg?c=16x9&q=w_800,c_fill" alt="Takeoff"/>
            <h3>Recent News</h3>
            <a href='https://www.kbia.org/2022-12-02/a-man-has-been-charged-with-murdering-migos-rapper-takeoff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A man has been charged with murdering Migos rapper Takeoff</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="A man has been charged with murdering Migos rapper Takeoff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Houston police announced Friday that Patrick Xavier Clark, 33, has been charged with murder in connection with Takeoff&#39;s fatal shooting outside a bowling&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/02/entertainment/takeoff-rapper-murder-arrest/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Houston police make arrest for the killing of rapper Takeoff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHms50rXdIX5LtQb1ialRURuicixHmkNP-oucvMlxPtTtr5OJtSwXLyhnkcdfR7REFJhdrI0BQ" alt="Houston police make arrest for the killing of rapper Takeoff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One month after the fatal shooting of Takeoff, Houston authorities arrested and charged a man with murder in connection with the rapper&#39;s killing,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/02/arts/music/takeoff-migos-murder-arrest.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suspect in Shooting of Rapper Takeoff Arrested on Murder Charge ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1KxtFK1y5tb6EW0A-xC2j8ZHtXQd-tsC4_klZjbinhmbQIOg1ENs3FizuNFmwdW4z1nddscQA" alt="Suspect in Shooting of Rapper Takeoff Arrested on Murder Charge ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Houston Police said that Patrick Xavier Clark, 33, was being charged with murder, and that Takeoff had been an “innocent bystander.”</p></div>
            </div>
        </a><a href='https://www.theguardian.com/us-news/2022/dec/02/takeoff-killing-murder-arrest-migos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suspect arrested in killing of rapper Takeoff, say Houston police</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHjP_DWbbOuk6yQaBHqefJFuKsgp2-ewOjnlRtBDGuJO_KkrAPF_WwcyR2uuxvYBn2qH1DUskE" alt="Suspect arrested in killing of rapper Takeoff, say Houston police" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Authorities announce that member of Migos, who was shot at a bowling alley last month, was &#39;an innocent bystander&#39;</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/arts-entertainment/2022/12/02/takeoff-murder-suspect-arrest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man charged with murder in shooting of Migos rapper Takeoff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVkOQM-EjwkMVUbZSOwiTVlUQrD5LK_t9KvUe5Ky4vSmlqw92zp3eg9dLNJ6m5OYWo_xafEwwu" alt="Man charged with murder in shooting of Migos rapper Takeoff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrick Xavier Clark was arrested Thursday and charged with the murder of Migos rapper Takeoff, who was fatally shot Nov. 1 after a private party.</p></div>
            </div>
        </a><a href='https://www.pbs.org/newshour/arts/man-arrested-in-fatal-shooting-of-migos-rapper-takeoff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man arrested in fatal shooting of Migos rapper Takeoff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqR9N64yt7vSQMXt20-WjqlSsIrsc16e6R_kwxnpGP3qJW0QRLDWYlI-ZD1IXaVwcFtu0CFJ6-" alt="Man arrested in fatal shooting of Migos rapper Takeoff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Houston police said Friday that 33-year-old Patrick Xavier Clark was charged with murder and has been arrested in connection with the rapper&#39;s death.</p></div>
            </div>
        </a>
        </Template></>;
}