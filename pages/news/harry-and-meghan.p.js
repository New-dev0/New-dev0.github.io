import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harry and Meghan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harry and Meghan"/>
        <meta name="description" content="Trending News about Harry and Meghan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harry and Meghan</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/9e24cc7be8ed2788e1d7c1f5173034a74373b795/0_0_3991_2396/master/3991.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=25b71164ba341d39ca5f95e5e2cc0c9e" alt="Harry and Meghan"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/media/2022/dec/02/harry-meghan-film-is-high-stakes-for-former-royals-and-for-netflix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry &amp; Meghan film is high stakes for former royals – and for Netflix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSEvyaU0iGSAe27bBDv6X2f_fVrBAqM6t8YZsXejX5ASRUlNGBcqPU5rRywEMBtpxMiGPl8chDR" alt="Harry &amp; Meghan film is high stakes for former royals – and for Netflix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Documentary teaser comes at awkward time for royal family amid race row and Prince and Princess of Wales&#39; US tour.</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/uk-63824394'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry and Meghan Netflix series &#39;behind closed doors&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOVvJW8lg0fwGk2_r0S4WzmVjsW38_K6OZBaWlqTdKBGPkZo91le5w8zdXwQE0FkluxlQtD8oC" alt="Harry and Meghan Netflix series &#39;behind closed doors&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first trailer comes amid a race row sparked by comments made to a black guest at a royal reception.</p></div>
            </div>
        </a><a href='https://pagesix.com/2022/12/02/prince-harry-meghan-markle-docuseries-will-allege-palace-bullying/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince Harry, Meghan Markle docuseries will allege palace &#39;bullying&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-mIaqsN73mYXzwM65JCT-8GtiBpN0lJYb66SbhuN2IBlPIyFk9uyZza2YZfBxxJNKvB7Cor_9" alt="Prince Harry, Meghan Markle docuseries will allege palace &#39;bullying&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prince Harry and Meghan Markle will claim they were bullied by palace officials in their new Netfix show, &quot;Harry &amp; Meghan,&quot; sources told Page Six.</p></div>
            </div>
        </a><a href='https://www.vogue.com/article/do-we-need-harry-and-meghan-netflix-docuseries'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>We All Want Harry and Meghan&#39;s Netflix Docuseries, But Do We ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmyNLmDti4tGNGgiR0L7sleUEG6NhmzHpkXto75KskrkSwUvIiFZOFE41Nz1cqz9F5S9h9ktus" alt="We All Want Harry and Meghan&#39;s Netflix Docuseries, But Do We ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The new trailer for Liz Garbus&#39;s long-rumored and now confirmed docuseries about the Sussexes opens with a question: “Why did you want to make this&nbsp;...</p></div>
            </div>
        </a><a href='https://www.euronews.com/culture/2022/12/02/netflix-release-first-look-at-harry-meghan-docuseries-amid-royal-racism-row'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix release first look at &#39;Harry &amp; Meghan&#39; docuseries amid royal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTp6mVWvyV0GJyqDKQfkdWjTxaOmTrlTWsO_tOFczvGBOJElSdNWuGnaUIa2P451ijZgd1FQ0xp" alt="Netflix release first look at &#39;Harry &amp; Meghan&#39; docuseries amid royal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As the Prince and Princess of Wales begin engagements on their trip to Boston, Netflix has released a trailer for the upcoming documentary series &#39;Harry&nbsp;...</p></div>
            </div>
        </a><a href='https://wwd.com/fashion-news/fashion-scoops/harry-meghan-documentary-netflix-release-date-info-1235435382/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What to Know About &#39;Harry and Meghan&#39; Netflix Documentary ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5cxQGdy0G48mWlEVkqk0IOx2QmhlHaDQfJreQLwW1Il2OIRQLHYYhLr6CwU8YBtWJWTF3BdSd" alt="What to Know About &#39;Harry and Meghan&#39; Netflix Documentary ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Thursday, Netflix released a first look teaser for an upcoming docuseries about Prince Harry and Meghan Markle titled &#39;Meghan and Harry.&#39;</p></div>
            </div>
        </a>
        </Template></>;
}