import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kevin Spacey</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kevin Spacey"/>
        <meta name="description" content="Trending News about Kevin Spacey" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kevin Spacey</h1>
            <Image width={800} height={500} src="" alt="Kevin Spacey"/>
            <h3>Recent News</h3>
            <a href='https://www.washingtonpost.com/arts-entertainment/2022/11/16/kevin-spacey-more-charges-uk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>U.K. authorities authorize new criminal charges against Kevin Spacey</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDadTYKofxdw53J-AyUsok_lvUUQr98bopgPgp2vpwG64OraJYP_U2-yWNvnRmnyrz0wToAUnS" alt="U.K. authorities authorize new criminal charges against Kevin Spacey" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prosecutors in Britain authorized seven new criminal charges against Kevin Spacey, who is already slated to stand trial on five sexual assault charges there&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/entertainment/celebrity-news/international/kevin-spacey-faces-seven-more-sex-assault-charges-against-a-man-03588fe8-0e3b-4094-b4a5-6f82b776b914'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey faces seven more sex assault charges against a man</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSL_IO9pMeiYlulL8gpy1IdwsgEpBcApW2MBltpaeG8aatyUD9hypxV9V8QBFKqAWEE-Zyurtic" alt="Kevin Spacey faces seven more sex assault charges against a man" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The fresh charges were announced by the Crown Prosecution Service on Wednesday with the alleged assaults taking place between 2001 and 2004.</p></div>
            </div>
        </a><a href='https://www.avclub.com/kevin-spacey-faces-7-new-sexual-assault-charges-uk-1849789759'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey facing seven new sexual assault charges in the U.K.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREjrkBA_iWMYbdPA49_CYAWWZc1B2Yox9TU3XWTgB3h4U2d-1uTTMpb41zGzdC08LNhhpxnPny" alt="Kevin Spacey facing seven new sexual assault charges in the U.K." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Spacey now faces a total of 12 sexual offense charges in the upcoming case in the United Kingdom.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/uk-news/2022/nov/16/kevin-spacey-charged-sexual-offences'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey charged in UK with seven more sexual offences</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRN20PaAY8i51ZvBk_7dtjPlwlDfCFYbraHMbpLPisRTeUHr79hqGddb0LNv4oIv0QPNnWQBTOj" alt="Kevin Spacey charged in UK with seven more sexual offences" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Police say actor is accused of number of offences against one man, who has emerged as fourth complainant.</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/hollywood/2022/11/kevin-spacey-has-been-charged-with-7-more-sex-offenses-in-the-uk'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey Has Been Charged With 7 More Sex Offenses in the UK</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5fD9l2EtVx1_g3RGULoJEMMZcgN6excQM_eFdXYQfs0UqfCWfVw_Z28Z6IGZbBEJDM9HMIWMd" alt="Kevin Spacey Has Been Charged With 7 More Sex Offenses in the UK" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Oscar winner has been charged with “multiple sexual assaults against one man between 2001 and 2004,” according to the Crown Prosecution Service.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/16/arts/uk-kevin-spacey-sexual-assault-charges.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey Faces New Sexual Assault Charges in U.K.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7MelD1elsepRkSx4286ltHJaqxRegxNoJnBFRAXmJ7yVGuuGBIlrrytD5MHsx9Wh_jUG1eosa" alt="Kevin Spacey Faces New Sexual Assault Charges in U.K." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The authorities authorized seven new counts against the actor, including three for sexual assault. Mr. Spacey was already facing a criminal trial in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}