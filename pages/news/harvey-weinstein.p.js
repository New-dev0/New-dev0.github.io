import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harvey Weinstein</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harvey Weinstein"/>
        <meta name="description" content="Trending News about Harvey Weinstein" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harvey Weinstein</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/15/ap22319047950694_wide-1ff5bc633d49b47e5b52fa34c6850eb91891b3e1-s1400-c100.jpg" alt="Harvey Weinstein"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/15/1136856763/harvey-weinstein-rape-trial-jennifer-siebel-newsom-california-gavin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The wife of California&#39;s governor gives tearful testimony at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmN6EdJYFreYDLaGWh2OYZenodInwvVg_IcdRKRn143g51LGnbHQTw7AVCkoMgKC1tSSHyeq02" alt="The wife of California&#39;s governor gives tearful testimony at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jennifer Siebel Newsom, a filmmaker, nearly screamed through tears Monday as she told the court Harvey Weinstein raped her 17 years ago and spoke of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/15/us/jennifer-siebel-newsom-harvey-weinstein-trial/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Judge drops 4 of 11 charges against Harvey Weinstein</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvsogAyIs7Jlz0EJzDmGEJE0j0I33M4cKN6oWjah-fmLpBCK4yzh4trj-cBii64eX9QsRG-kAr" alt="Judge drops 4 of 11 charges against Harvey Weinstein" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The judge overseeing Harvey Weinstein&#39;s sexual assault trial in Los Angeles dropped four of the 11 charges against him on Tuesday after prosecutors said&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/15/harvey-weinstein-trial-judge-drops-four-charges'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weinstein trial: defense demands graphic details from Jennifer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6mlnIJH1eoKXjIRtiQR2ETrJWVI7DmYy_yfwo86ZR4CoxYRbfX7nt8GtMSGcT3QeRlTSBY1iq" alt="Weinstein trial: defense demands graphic details from Jennifer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her testimony came as the judge overseeing the Los Angeles trial dropped four of the 11 sexual assault charges against Harvey Weinstein after prosecutors said&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/14/us/jennifer-siebel-newsom-harvey-weinstein-trial/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jennifer Siebel Newsom, wife of California Gov. Gavin Newsom ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRm2zHn_bA4ggjDu-mrjKJZb7_NCndmKcuY9TPxqJbKs65Z_UoLJry-JXQXeJnWSx_vmxDITyxU" alt="Jennifer Siebel Newsom, wife of California Gov. Gavin Newsom ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jennifer Siebel Newsom, a filmmaker and the wife of California Gov. Gavin Newsom, took the stand in Harvey Weinstein&#39;s sexual assault trial in Los Angeles&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kcra.com/article/judge-drops-4-of-11-counts-against-harvey-weinstein-at-trial-nov-15/41970419'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harvey Weinstein attorney cross-examines accuser Jennifer Siebel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDWJWMIArovyX2arTv3h66DcSux9wq5uAem63hT8GF1GP357PUgnkodFLJNBxYJ53w3sG5lgrx" alt="Harvey Weinstein attorney cross-examines accuser Jennifer Siebel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The remaining charges against Weinstein, who is serving a 23-year sentence for a conviction in New York, are two counts of rape and five other sexual&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/hollywood/2022/11/harvey-weinstein-los-angeles-trial-jennifer-siebel-newsom-testimony'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“You Don&#39;t Say No to Harvey Weinstein”: Jennifer Siebel Newsom ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2m-ImYQQqz9CZytj6M3Q4zf25nOpz8HubOLevClCJpzGY9rI2u40lj0Whs6O1C45LkGEaUNcW" alt="“You Don&#39;t Say No to Harvey Weinstein”: Jennifer Siebel Newsom ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The filmmaker—who is married to California governor Gavin Newsom—has accused the convicted rapist of sexually assaulting her in 2005.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/lifestyle/2022/11/15/jennifer-siebel-newsom-testimony-harvey-weinstein/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Calif. first lady Siebel Newsom gives graphic testimony in Weinstein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRP2KN3tM7C5JcN56biGKXDlP-O4wS0Pw-2v1iP93gGVEJcwUONZHT9getXp3DXiexbEcLMZvrr" alt="Calif. first lady Siebel Newsom gives graphic testimony in Weinstein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jennifer Siebel Newsom, wife of California Governor Gavin Newsom, gave an emotional testimony against disgraced movie mogul Harvey Weinstein in Los Angeles.</p></div>
            </div>
        </a><a href='https://variety.com/2022/film/news/harvey-weinstein-four-rape-charges-dropped-1235433594/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harvey Weinstein Now Facing Fewer Counts of Rape as Judge ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQIlvehZ3884cZr6rggcX69l_i01uJGH9QVZM99XtqcSXN677nzZ4ujyEs0D7yEX9Kt7RBZ78Ns" alt="Harvey Weinstein Now Facing Fewer Counts of Rape as Judge ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harvey Weinstein will now face four fewer charges in his Los Angeles rape trial, as Jane Doe #5 will not testify.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/harvey-weinstein-judge-drops-four-sexual-assault-counts-los-angeles-trial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Judge drops 4 of 11 sexual assault counts against Harvey Weinstein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuN5zLhKibkAOidY9Ffn8xgxsONsW9pBC2-kTRI5ha3J0iCCEsn4DHOBcmKVWuoFXArM6sJo8B" alt="Judge drops 4 of 11 sexual assault counts against Harvey Weinstein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prosecutors said they were not proceeding with the counts involving one accuser, a move that seemed likely when the accuser was left out of opening&nbsp;...</p></div>
            </div>
        </a><a href='https://deadline.com/2022/11/harvey-weinstein-rape-trial-four-charges-dropped-los-angeles-1235173223/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harvey Weinstein Prosecutors Drop Four Charges In L.A. Rape Trial ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1oRHNEnkfIBhuiOdkCBiyU4DCxIpYqdxMaoc4zoj0S1LxGXlovtxyi9gy0iyKIRssylPsdJx5" alt="Harvey Weinstein Prosecutors Drop Four Charges In L.A. Rape Trial ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prosecutors in Harvey Weinstein&#39;s Los Angeles rape trial said they have decided not to move forward with five counts.</p></div>
            </div>
        </a>
        </Template></>;
}