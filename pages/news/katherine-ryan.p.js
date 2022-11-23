import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Katherine Ryan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Katherine Ryan"/>
        <meta name="description" content="Trending News about Katherine Ryan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Katherine Ryan</h1>
            <Image width={800} height={500} src="https://static.independent.co.uk/2022/11/22/21/Copy%20of%20IndependentPhoto_TEMPLATE%20%281%29.png?quality=75&width=1200&auto=webp" alt="Katherine Ryan"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.co.uk/arts-entertainment/tv/news/katherine-ryan-louis-theroux-alleged-sexual-abuser-b2230923.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katherine Ryan tells Louis Theroux about &#39;open secret&#39; of alleged ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPIxhATKE0xo7npcsfoAN5RPWHe-0TBm-M6AzOkgaHTeAUcajGn4G76K3o-6rec7XVknmlLubr" alt="Katherine Ryan tells Louis Theroux about &#39;open secret&#39; of alleged ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katherine Ryan has made further comments on an alleged sexual predator in the entertainment industry, claiming that he is an “open secret”.</p></div>
            </div>
        </a><a href='https://www.nme.com/news/tv/katherine-ryan-claims-tv-personality-perpetrator-sexual-assault-3353910'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katherine Ryan claims prominent TV personality is “perpetrator of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQI7vq8MVZaCMrfAgAbrg5WnLZD_QMUxZl6WiSSpH7tI4MYsj78PJk28h-oaKFnB-_LEFTwiKIj" alt="Katherine Ryan claims prominent TV personality is “perpetrator of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katherine Ryan has claimed a prominent UK TV personality who she previously confronted is a “perpetrator of sexual assault”.</p></div>
            </div>
        </a><a href='https://metro.co.uk/2022/11/22/katherine-ryan-claims-predator-of-sexual-assault-is-an-open-secret-17806922/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katherine Ryan claims predator of sexual assault is an &#39;open secret&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3I5eRPHEacpancEJzKiJ5HQ-NqY-ax0Wx8cNJKXYb3Fd6TdUTWNzEik-Q_F-R-D33rptLnr7B" alt="Katherine Ryan claims predator of sexual assault is an &#39;open secret&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katherine Ryan has claimed that the sexual predator who she refuses to name is an &#39;open secret&#39; within the entertainment industry.</p></div>
            </div>
        </a><a href='https://news.yahoo.com/katherine-ryan-says-a-prominent-tv-personality-is-a-sexual-predator-164227895.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katherine Ryan says a prominent TV personality is &#39;a sexual predator&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDafJ93gkwV2j7kdPw1jSMK_LTQ8rNcI7yOnmhCLcgPEXKZeer0IU0yur2j8YqPX5R3uKuDOMj" alt="Katherine Ryan says a prominent TV personality is &#39;a sexual predator&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The comedian refused to name who the man was in an interview with Louis Theroux.</p></div>
            </div>
        </a><a href='https://uk.news.yahoo.com/katherine-ryan-jokes-marriage-plastic-surgery-dont-care-punchline-110417644.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katherine Ryan on jokes about her marriage and plastic surgery: &#39;I ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQIFG3dGn6NTCUqHSnRn993lmmgHL4Fa0b14hHI2EvR_i5ArWgDDPQvOQTMHLWZHlsv6HQNtoBn" alt="Katherine Ryan on jokes about her marriage and plastic surgery: &#39;I ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Canadian comedian Katherine Ryan meets Louis Theroux for a chat about her life and career.</p></div>
            </div>
        </a>
        </Template></>;
}