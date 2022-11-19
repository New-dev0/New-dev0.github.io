import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chris Hemsworth</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chris Hemsworth"/>
        <meta name="description" content="Trending News about Chris Hemsworth" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chris Hemsworth</h1>
            <Image width={800} height={500} src="https://bloximages.chicago2.vip.townnews.com/bhpioneer.com/content/tncms/assets/v3/editorial/4/ab/4abdfe88-c340-55f4-9ba6-e74edee483da/6376d5d95004a.image.jpg?crop=1000%2C525%2C0%2C62&resize=1000%2C525&order=crop%2Cresize" alt="Chris Hemsworth"/>
            <h3>Recent News</h3>
            <a href='https://www.bhpioneer.com/lifestyles/entertainment/chris-hemsworth-reveals-genetic-predisposition-to-alzheimers/article_0be1b78c-49ec-5136-bfe2-2292538962e9.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth reveals genetic predisposition to Alzheimer&#39;s</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7RKtlxPrqPmh4ennJCvBJ5KpPeGTh3tHc6j9VO2WZB4cJ1Eq8DEQ_tbimvc9QbTjdYHUe_OOP" alt="Chris Hemsworth reveals genetic predisposition to Alzheimer&#39;s" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth is genetically predisposed to Alzheimer&#39;s disease. The 39-year-old actor has been told by medical experts that he is &quot;between eight and ten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hollywoodreporter.com/tv/tv-news/chris-hemsworth-increased-risk-alzheimers-limitless-1235264392/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth on the “Intensity” of Discovering He&#39;s at Increased ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWUX4U4Rul6klG4oAQ0pUBYQJoTSI-EEm83Z_zXam1Tytt4P0hKGyiahFfKSYmv8_CN7beKZHF" alt="Chris Hemsworth on the “Intensity” of Discovering He&#39;s at Increased ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth on the experience of learning he has the APOE4 gene, which is linked to an increased risk of Alzheimer&#39;s disease, during Limitless.</p></div>
            </div>
        </a><a href='https://pagesix.com/2022/11/17/chris-hemsworth-discovers-genetic-predisposition-for-alzheimers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth discovers he has genetic predisposition for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-cPyzj8d3Zgzusgw-a_3dOr41y2EJVWheOLpHsxYaBi8sd6P9wf5Cxl9Dx7epjCnScYndNYVZ" alt="Chris Hemsworth discovers he has genetic predisposition for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth discovered he has a genetic predisposition for Alzheimer&#39;s, making him &quot;eight to 10 times more likely&quot; to battle the disease.</p></div>
            </div>
        </a><a href='https://www.bhpioneer.com/lifestyles/entertainment/i-want-to-simplify-my-life-says-chris-hemsworth/article_1414e1db-b136-5a83-b3bc-cbcb225aae7b.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I want to simplify my life, says Chris Hemsworth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5eg5_jPW4so5F8AbvQvixnOIgHb6Z1pWriGvwHb7LbIscgMsYD0fuyWvK6S7Gn3rGnxqAd8vw" alt="I want to simplify my life, says Chris Hemsworth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth is eager to &quot;simplify&quot; his life. The 39-year-old actor was desperate for success earlier in his career, but Chris has become much more&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/17/chris-hemsworth-at-high-risk-for-alzheimers-from-apoe4-genes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Chris Hemsworth&#39;s genes put him at risk for Alzheimer&#39;s disease</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-cPyzj8d3Zgzusgw-a_3dOr41y2EJVWheOLpHsxYaBi8sd6P9wf5Cxl9Dx7epjCnScYndNYVZ" alt="How Chris Hemsworth&#39;s genes put him at risk for Alzheimer&#39;s disease" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth learned he had two copies of a dominant gene that puts him at a greater risk for Alzheimer&#39;s, but doctors say it doesn&#39;t mean he&#39;ll develop&nbsp;...</p></div>
            </div>
        </a><a href='https://consequence.net/2022/11/chris-hemsworth-alzheimers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;My biggest fear&quot;: Chris Hemsworth reveals genetic predisposition ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhoO6B9FnbXYvxEKucbmMFBVGXBxj1hkny14zxZ7V5Kl5gXWiVASN9wyMYbm6KUdkejdqOti7Q" alt="&quot;My biggest fear&quot;: Chris Hemsworth reveals genetic predisposition ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Thor star received genetic testing for the docuseries, Limitless, which finds him grappling with aging and our bodies&#39; natural decline. He had planned to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wtnh.com/news/connecticut/chris-hemsworth-reveals-he-has-at-risk-gene-for-alzheimers-disease-but-what-does-that-mean/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth reveals he has at-risk gene for Alzheimer&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjBbv8gRESvn2cJEo8A5GVVwDXtuJrG6X_DGf2pc8KPSXB38Qrx2EtOLO7EYKqaJJL5t-mp9Wp" alt="Chris Hemsworth reveals he has at-risk gene for Alzheimer&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marvel star Chris Hemsworth has a gene that puts him at risk of developing Alzheimer&#39;s disease, the Thor actor announced during a media tour for his new&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}