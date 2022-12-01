import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paul Unongo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paul Unongo"/>
        <meta name="description" content="Trending News about Paul Unongo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paul Unongo</h1>
            <Image width={800} height={500} src="https://leadership.ng/wp-content/uploads/2022/05/LeadershipHeader.png" alt="Paul Unongo"/>
            <h3>Recent News</h3>
            <a href='https://leadership.ng/second-republic-minister-paul-unongo-dies-at-87/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Second Republic Minister, Paul Unongo, Dies At 87</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3CT4KSyp52XOxdznfV09eFgn-KZil1cLUj4fknx25rjOQ-SWaa2wzQZq_oFuXnII1OleFZVAi" alt="Second Republic Minister, Paul Unongo, Dies At 87" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elder statesman and former minister of Steel Development in the Second Republic, Wantaregh Paul Unongo is dead.</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/buhari-mourns-paul-unongo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buhari mourns Paul Unongo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR6EpMRZKfxwjqEACk8akN-2VUliYfmGtT3J0Bp0_9jznj80b-UXCNeBIk2vtX34TJHru_zcgo5" alt="Buhari mourns Paul Unongo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>—Says Nigeria has lost elder statesman. By Johnbosco Agbakwuru, Abuja. President Muhammadu Buhari has mourned the demise of Dr. Paul Unongo, saying that the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thisdaylive.com/index.php/2022/11/30/fec-mourns-second-republic-minister-paul-unongo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FEC Mourns Second Republic Minister, Paul Unongo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfsV8jDWRX_ZwEhyMNOauC5QQqA9qwl_JBggC7qmyRkZQW95kZ9ziIgrNM6eWQSC2nVWgW8sXm" alt="FEC Mourns Second Republic Minister, Paul Unongo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deji Elumoye in Abuja. The Federal Executive Council (FEC) has observed a minute of silence in honour of Second Republic Minister of Power and Steel,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thecable.ng/paul-unongo-second-republic-minister-is-dead'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paul Unongo, second republic minister, is dead</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNj_PB9YJlgBTJ-Xpq0XVf4U2bAV0KLczat0-WJ_RtSItaHeQBJ2fptyS6OlAYhcSrxprvCjyi" alt="Paul Unongo, second republic minister, is dead" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A family source said Unongo died on Tuesday. He was 87 years old the time of his death. Until his death, he was the governing council chairman of the Nigerian&nbsp;...</p></div>
            </div>
        </a><a href='https://saharareporters.com/2022/11/29/former-nigerian-minister-paul-unongo-dies-87'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Nigerian Minister, Paul Unongo Dies At 87 | Sahara Reporters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjEtI06Aqpipqhux9tqKZ1bljZ9d7NreUZTH5RIYuZp3809czfMGS2esICMsLJMF9qscC9OvvF" alt="Former Nigerian Minister, Paul Unongo Dies At 87 | Sahara Reporters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A former Minister of Steel Development in the Second Republic, Wantaregh Paul Unongo, is dead. SaharaReporters learnt that the elder statesman died Tuesday&nbsp;...</p></div>
            </div>
        </a><a href='https://thenationonlineng.net/senate-president-mourns-2nd-republic-minister-paul-unongo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senate President mourns 2nd republic minister Paul Unongo The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5I7Ed_UOLD16ThH8uGCfXH4b8zD-zyx1KhQrf1I1hWZtiBd7TqZ0TTHX1PzPSJ22xCe_3mrSN" alt="Senate President mourns 2nd republic minister Paul Unongo The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The President of Senate, Dr Ahmad Lawan, has commiserated with the family of a former minister of Steel Development, Paul Unongo, who died on Tuesday.</p></div>
            </div>
        </a>
        </Template></>;
}