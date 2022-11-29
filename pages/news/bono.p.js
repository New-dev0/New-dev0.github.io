import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bono</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bono"/>
        <meta name="description" content="Trending News about Bono" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bono</h1>
            <Image width={800} height={500} src="https://www.radiofrance.fr/s3/cruiser-production/2022/11/49506146-5191-4567-bda3-2f3832cadaad/1200x630_capturebono4.png.jpg" alt="Bono"/>
            <h3>Recent News</h3>
            <a href='https://www.radiofrance.fr/franceinter/podcasts/l-invite-de-8h20-le-grand-entretien/l-invite-de-8h20-le-grand-entretien-du-lundi-28-novembre-2022-9207315'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bono, chanteur du groupe U2 : &quot;Les plus grands leaders que j&#39;ai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTujdsiZT_iiXJg7xTpF0dsI5vvVvMI-uXFMruSQZD6PO3orc5TL7YtnaQOzcmW46dT14QOLco_" alt="Bono, chanteur du groupe U2 : &quot;Les plus grands leaders que j&#39;ai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bono, chanteur légendaire du groupe irlandais U2 publie son autobiographie &quot;Surrender&quot; (Fayard). La rock star aux 170 millions d&#39;albums vendus, raconte la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/monde/europe/manifestations-en-ukraine/guerre-en-ukraine-on-ne-peut-pas-laisser-volodymyr-zelensky-et-la-liberte-perdre-lance-bono-le-chanteur-du-groupe-u2_5507733.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guerre en Ukraine : &quot;On ne peut pas laisser Volodymyr Zelensky et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeKtMiblOBFkDVfEqBpAgbJRT7-sryLOqr4xyc9ur73cwJnuu3fbWLklOMjjQ_lg9zSS-_S2ha" alt="Guerre en Ukraine : &quot;On ne peut pas laisser Volodymyr Zelensky et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans son livre autobiographique &quot;Surrender&quot; (éditions Fayard), le chanteur irlandais de U2, Bono, compare le président ukrainien à Martin Luther King,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/musique/le-chanteur-bono-impressionne-par-lacuite-intellectuelle-demmanuel-macron-28-11-2022-OMSA2S6EJ5APZLFAVBB2Q6Y7ZE.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur Bono impressionné par «l&#39;acuité intellectuelle» d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8Fx61Oj3Kh2zWQjjCwmxxTTqjvXI_2Sg9tsT7Z1qDsI46DcsmUqeJZTxMg2MhuRHjd0UAobLa" alt="Le chanteur Bono impressionné par «l&#39;acuité intellectuelle» d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emmanuel Macron a reçu un soutien inattendu ce lundi. L&#39;emblématique chanteur du groupe U2, Bono, a confié sur France inter avoir été impressionné par&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/culture/musique/les-memoires-de-bono-chanteur-de-u2-un-groupe-de-rock-au-succes-planetaire-en-cinq-videos-cultes-13158500.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les mémoires de Bono, chanteur de U2 : un groupe de rock au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQf3Gt2YIwHVS0PTwHlHw_is2g5u5v5K88hV0ETFXnZ_Qpbefb13hjyD7vzwCYpNxJGTVwAvxwS" alt="Les mémoires de Bono, chanteur de U2 : un groupe de rock au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans ses mémoires, « Surrender », le très charismatique leader de U2 raconte sa vie à travers 40 chansons cultes du mythique groupe de rock irlandais.</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/politique/article/ces-mots-de-bono-sur-macron-font-fondre-le-petit-c-ur-de-ses-soutiens_210828.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ces mots de Bono font fondre le petit cœur des macronistes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHQiKFHu8BIEwmz7Ga048q01bi4JN1pa708WYvbIALuKvJyhhM6jFAJWvMEv77FcppUn3vrVjz" alt="Ces mots de Bono font fondre le petit cœur des macronistes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le leader du groupe U2 a multiplié les compliments à l&#39;égard d&#39;Emmanuel Macron. De quoi faire tomber la Macronie en pamoison.</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/people/musique/le-chanteur-bono-loue-l-energie-inhabituelle-d-emmanuel-macron_AN-202211280315.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur Bono loue &quot;l&#39;énergie inhabituelle&quot; d&#39;Emmanuel Macron</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7tFtIQdiVxFvimo-4qcE7FwtfPh24OX1MDm6TxktaQ78l_AVnCNHYrkNlMgfvnRemqDxOlhQI" alt="Le chanteur Bono loue &quot;l&#39;énergie inhabituelle&quot; d&#39;Emmanuel Macron" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chanteur du groupe U2 commente un passage de son autobiographie, dans lequel il compare le chef d&#39;État français à un patron de la Silicon Valley.</p></div>
            </div>
        </a><a href='https://www.radiofrance.fr/franceinter/on-ne-peut-pas-laisser-zelensky-perdre-on-ne-peut-pas-laisser-la-liberte-perdre-clame-le-chanteur-bono-2316372'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;On ne peut pas laisser Zelensky perdre, on ne peut pas laisser la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR2tb5jQD9kzx73FxizLgGChnOvFH-l_8PHjNTlyG8qujXezEX-_WzATLRWffa0kyUVfVuv23nV" alt="&quot;On ne peut pas laisser Zelensky perdre, on ne peut pas laisser la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invité sur France Inter, le leader du groupe U2 est très élogieux envers le président ukrainien Volodymyr Zelensky, qu&#39;il a rencontré le printemps dernier&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}