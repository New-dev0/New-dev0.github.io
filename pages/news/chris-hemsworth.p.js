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
            <Image width={800} height={500} src="https://pagesix.com/wp-content/uploads/sites/3/2022/11/chris-hemsworth-with-family.jpg?quality=75&strip=all&w=1200" alt="Chris Hemsworth"/>
            <h3>Recent News</h3>
            <a href='https://pagesix.com/2022/11/17/chris-hemsworth-discovers-genetic-predisposition-for-alzheimers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth discovers he has genetic predisposition for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-cPyzj8d3Zgzusgw-a_3dOr41y2EJVWheOLpHsxYaBi8sd6P9wf5Cxl9Dx7epjCnScYndNYVZ" alt="Chris Hemsworth discovers he has genetic predisposition for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth discovered he has a genetic predisposition for Alzheimer&#39;s, making him &quot;eight to 10 times more likely&quot; to battle the disease.</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/hollywood/2022/11/chris-hemsworth-exclusive-interview-alzheimers-limitless'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth Changed His Life After an Ominous Health Warning</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1mW0VjnoHldYKMZ7X2JDTwalhh_YnvH_PGrFJT4wWL-yreeprPUJltGNdevWM-i_gp7uutJmv" alt="Chris Hemsworth Changed His Life After an Ominous Health Warning" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In an exclusive sit-down with Vanity Fair, the actor discusses movies, the future of Thor, his businesses, fatherhood, and how discovering he has a genetic&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bhpioneer.com/lifestyles/entertainment/i-want-to-simplify-my-life-says-chris-hemsworth/article_1414e1db-b136-5a83-b3bc-cbcb225aae7b.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I want to simplify my life, says Chris Hemsworth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5eg5_jPW4so5F8AbvQvixnOIgHb6Z1pWriGvwHb7LbIscgMsYD0fuyWvK6S7Gn3rGnxqAd8vw" alt="I want to simplify my life, says Chris Hemsworth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 39-year-old actor was desperate for success earlier in his career, but Chris has become much more philosophical and relaxed about his work in recent years.</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/17/chris-hemsworth-at-high-risk-for-alzheimers-from-apoe4-genes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Chris Hemsworth&#39;s genes put him at risk for Alzheimer&#39;s disease</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-cPyzj8d3Zgzusgw-a_3dOr41y2EJVWheOLpHsxYaBi8sd6P9wf5Cxl9Dx7epjCnScYndNYVZ" alt="How Chris Hemsworth&#39;s genes put him at risk for Alzheimer&#39;s disease" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth&#39;s “biggest fear” became a reality when the “Thor” actor found out he carries two copies of a dominant gene that puts him at a greater risk&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hollywoodreporter.com/tv/tv-news/chris-hemsworth-increased-risk-alzheimers-limitless-1235264392/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth on the “Intensity” of Discovering He&#39;s at Increased ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWUX4U4Rul6klG4oAQ0pUBYQJoTSI-EEm83Z_zXam1Tytt4P0hKGyiahFfKSYmv8_CN7beKZHF" alt="Chris Hemsworth on the “Intensity” of Discovering He&#39;s at Increased ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth on the experience of learning he has the APOE4 gene, which is linked to an increased risk of Alzheimer&#39;s disease, during Limitless.</p></div>
            </div>
        </a><a href='https://consequence.net/2022/11/chris-hemsworth-alzheimers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;My biggest fear&quot;: Chris Hemsworth reveals genetic predisposition ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhoO6B9FnbXYvxEKucbmMFBVGXBxj1hkny14zxZ7V5Kl5gXWiVASN9wyMYbm6KUdkejdqOti7Q" alt="&quot;My biggest fear&quot;: Chris Hemsworth reveals genetic predisposition ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Thor star received genetic testing for the docuseries, Limitless, which finds him grappling with aging and our bodies&#39; natural decline. He had planned to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/entertainment/chris-hemsworth-learns-hes-8-to-10-times-more-likely-get-alzheimers-disease-new-show-limitless'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth learns he&#39;s &#39;8 to 10 times&#39; more likely to get ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkqWtGCP8E-cwC7LAxuY9vAG14VEbVzHSVcg83XhkzI8-Hlb25QK0XT_EIeaaMqmoB0MyooYPj" alt="Chris Hemsworth learns he&#39;s &#39;8 to 10 times&#39; more likely to get ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth received some surprising news on his new Disney+ series, &quot;Limitless.&quot; On the show, Hemsworth tackles physical and mental challenges in hopes&nbsp;...</p></div>
            </div>
        </a><a href='https://screenrant.com/thor-next-mcu-appearance-chris-hemsworth-last-comments/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth Wants Thor&#39;s Next MCU Appearance To Be His Last</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBDoTYt95jDJJ6jPsrL9MbfdDslJG8P7LJMoxhk_ShF9iH280gmGWCUDzD4UiJAEgoNVO50BEL" alt="Chris Hemsworth Wants Thor&#39;s Next MCU Appearance To Be His Last" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Hemsworth&#39;s time as Thor in the Marvel Cinematic Universe could be coming to a close, as the actor thinks his next appearance should be the end.</p></div>
            </div>
        </a><a href='https://thedirect.com/article/chris-hemsworth-thor-die-next-mcu-appearance'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth Thinks Thor May Die In Next MCU Appearance</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTf72WVuaoXm1u43qv4QDevL2AcyBOzX0Mfn4qcFFIojAyIhwWHmJcLoxwNW3j0emiUW_vzV7t-" alt="Chris Hemsworth Thinks Thor May Die In Next MCU Appearance" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The man behind Thor himself has stated that he thinks his character will eventually die on screen.</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/chris-hemsworth-wife'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meet Chris Hemsworth&#39;s Wife and Kids: Details on His Family</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRixYuMO2H17i-E6wqXdY4EkZ3EQKYDAkLYnqydVmAQsUHUSgv7jA7JQsBz0WqVvUHwuNzGbgCl" alt="Meet Chris Hemsworth&#39;s Wife and Kids: Details on His Family" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There&#39;s simply so much to say about Chris Hemsworth&#39;s impressive career as an actor. One of the biggest roles he&#39;s known for to date happens to be Thor in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}