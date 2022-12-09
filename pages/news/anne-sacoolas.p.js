import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anne Sacoolas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anne Sacoolas"/>
        <meta name="description" content="Trending News about Anne Sacoolas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anne Sacoolas</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/FEBE/production/_126441256_dunn1justice4harry19.jpg" alt="Anne Sacoolas"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/uk-england-northamptonshire-63891657'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Dunn: Anne Sacoolas gets suspended jail term for fatal crash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7jrqC99LR3QJoagtggpa-xhoQyXQxTmprUrFpvNA3aI8p2bzdRz5_El9Ns5IMwyzR_zld1rPihw" alt="Harry Dunn: Anne Sacoolas gets suspended jail term for fatal crash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 19-year-old&#39;s family say justice is &quot;complete&quot; as US citizen Anne Sacoolas is sentenced.</p></div>
            </div>
        </a><a href='https://www.thejournal.ie/anne-sacoolas-sentencing-harry-dunn-5941187-Dec2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US woman Anne Sacoolas avoids UK jail sentence over death of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-KliIRiHtv0ONQSdzdSe70kZlSWtERGmrGrCoqLTMcBoSHLmYCZ3L2rY4uRL4X7RoV4_CyEe_" alt="US woman Anne Sacoolas avoids UK jail sentence over death of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 45-year-old declined to come to the Old Bailey in person to be sentenced today.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/uk-news/2022/dec/08/anne-sacoolas-killer-british-teenager-harry-dunn-sentenced'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Dunn&#39;s mother calls killer&#39;s failure to appear in court &#39;despicable&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6To9hnoOtRIrkFLcPZovaxZeOj8v6DrMvcquS4mRzctlouIQpGSTNIzCmdwAtiCvbhdNKCpNR" alt="Harry Dunn&#39;s mother calls killer&#39;s failure to appear in court &#39;despicable&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The mother of the British teenager Harry Dunn has said her promise to win him justice has been fulfilled after his killer was sentenced, but said it was “&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/08/uk/anne-sacoolas-sentencing-harry-dunn-death-intl-gbr/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US citizen Anne Sacoolas handed suspended sentence for causing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRU3C0mjqzzKyOq4hjodzwY1VSfyH57Z2RgD3gz6-ofO0rZQNCGJvnzTYoAKKgu7iTzyyMwnmcH" alt="US citizen Anne Sacoolas handed suspended sentence for causing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>American citizen Anne Sacoolas was sentenced to eight months imprisonment, suspended for 12 months, at the Old Bailey in London for causing the death of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/world/2022/12/08/anne-sacoolas-harry-dunn-sentenced/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>American Anne Sacoolas avoids jail in case of crash that killed U.K. ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS70brygnPXIo_unff-WrCz6xvH_GXnPOLVDf-nn_ld6RuGInBG6rZNpARcj5q9K8Eli6rdbnSe" alt="American Anne Sacoolas avoids jail in case of crash that killed U.K. ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The case, involving a tragic traffic accident, became an international diplomatic dispute, requiring the attention of two U.S. presidents.</p></div>
            </div>
        </a>
        </Template></>;
}