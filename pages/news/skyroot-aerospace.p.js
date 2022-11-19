import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Skyroot Aerospace</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Skyroot Aerospace"/>
        <meta name="description" content="Trending News about Skyroot Aerospace" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Skyroot Aerospace</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/17A30/production/_127661869_nagabharathdaka.jpg" alt="Skyroot Aerospace"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/world-asia-india-63658530'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skyroot: The private firms helping India aim high in space</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_DHmA3VD2SlLSNogbFc5qNQJWch9tFWQkbi8XLF3BHo87Id7Y3flBl4B-Bw7ZS5yJTHp_BhbK" alt="Skyroot: The private firms helping India aim high in space" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;We started with a leap of faith.&quot; That&#39;s what Naga Bharath Daka says when asked about Skyroot Aerospace, the Indian space-tech start-up he co-founded with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/technology/tech-news/skyroot-aerospace-successfully-launches-india-s-first-private-rocket-11668755832126.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India launches first privately made rocket | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFSvKh7gre1I-dGH65MtKnWARIRFqF7TTXze609us_uzMmOokpxqaAincxA70AYm2CGQk73mm9" alt="India launches first privately made rocket | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Space startup Skyroot Aerospace launched its maiden demonstrator mission at 11.30 am from the Satish Dhawan Space Centre at Sriharikota in Andhra Pradesh.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/science/story/skyroot-aerospace-vikram-s-launch-isro-private-sector-india-space-program-2298753-2022-11-18'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skyroot&#39;s Vikram-S rocket launched successfully, marks entry of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrrL5774sv5wPYX0xTVmQtJTbup9aLBkx6XtJO5pht9GJ52yemK0btsiwnMaC5njetVh4Mo-u3" alt="Skyroot&#39;s Vikram-S rocket launched successfully, marks entry of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The mission marks the thumping entry of the private sector into the Indian space program on the lines of the US, Europe, and China.</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/trends/story/skyroot-aerospace-makes-history-indias-first-privately-built-rocket-successfully-launched-into-space-353321-2022-11-18'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skyroot Aerospace makes history! India&#39;s first privately built rocket ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLYgE_ymO3Xsrlz7nneGOcgNOb1zqbrUiOPZZ8nkhaH-2vRYD5rARJajuxLWjMtpj12mwJZbkn" alt="Skyroot Aerospace makes history! India&#39;s first privately built rocket ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following the successful execution of the Prarambh Mission Skyroot co-founder &amp; CEO, Pawan Kumar Chandana said the event symbolised the potential of New&nbsp;...</p></div>
            </div>
        </a><a href='https://techcrunch.com/2022/11/17/india-private-rocket-vikram-s-launch-skyroot/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India&#39;s first private rocket, built by startup Skyroot, makes successful ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjpvLyhzvpqhNbsYODWd13Gj-yBGrsgnBQT6JNC_4-0IrRkkI6g3hg_NRJ4FzMd23xAXpfZaFo" alt="India&#39;s first private rocket, built by startup Skyroot, makes successful ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Indian Space Research Organization (ISRO) on Friday successfully launched Vikram-S — the country&#39;s first private rocket.</p></div>
            </div>
        </a><a href='https://www.siasat.com/skyroot-aerospace-fascinating-story-of-hyderabad-startups-2460219/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skyroot Aerospace: Fascinating story of Hyderabad startup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSarlWO5zfARe7Ygp451DLesE45jTwquDtCB28bEj4cnSJEM_ls3_jQ3MJC4QPE39AXM4Y3FM51" alt="Skyroot Aerospace: Fascinating story of Hyderabad startup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hyderabad boys who dared to enter the tough and risky space of building rockets and launching satellites have broken into the big league.</p></div>
            </div>
        </a>
        </Template></>;
}