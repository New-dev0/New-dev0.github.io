import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rafael Nadal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rafael Nadal"/>
        <meta name="description" content="Trending News about Rafael Nadal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rafael Nadal</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95280543,width-1070,height-580,imgsize-13728,overlay-economictimes/photo.jpg" alt="Rafael Nadal"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/us/rafael-nadal-cites-this-reason-after-shocking-defeat-in-paris-masters/articleshow/95280544.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal cites this reason after shocking defeat in Paris Masters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVUPvuK1EVS0yPwqERL2DtuXp5XVgGMLFM_fK-68IawOgSSKObnXSMoDTbh79Xpv1VfVStB-CE" alt="Rafael Nadal cites this reason after shocking defeat in Paris Masters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a tragic loss against Tommy Paul in the Paris Masters, Rafael Nadal feels he is not in good shape to enter the ATP finals.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/tennis/watch-rafael-nadal-produces-magical-forehand-but-bows-out-of-paris-masters-8246333/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Rafael Nadal produces magical forehand but bows out of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMtSQDOFDhxD50RHoENcWmXRIhAznQ37wE38nEG3PfyC-V5USXElnOVACEuizooR1BPGRnoy5t" alt="Watch: Rafael Nadal produces magical forehand but bows out of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Rafael Nadal forehand is undoubtedly one of the most feared shots in the history of men&#39;s professional tennis.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/03/tennis/rafael-nadal-tommy-paul-paris-intl-spt/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal isn&#39;t confident about World Tour Finals after suffering ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDsgvlFYpYC95VaUDORf_yhCxV0PPFdpdrGjniUQ1xFKaL7sp5zwYUOEgWsdJSB04Raq0KcTem" alt="Rafael Nadal isn&#39;t confident about World Tour Finals after suffering ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal is out of the Paris Masters after being defeated by Tommy Paul -- and the Spaniard isn&#39;t betting on winning the ATP Tour Finals, either.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/paris-masters-tommy-paul-pulls-off-an-upset-over-rafael-nadal-dents-spaniards-quest-to-top-rankings-530762'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris Masters: Tommy Paul pulls off an upset over Rafael Nadal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9DpOt-Ptf-jAu76f38rGT8PWjWeobITbzAYITaR6ZVWkSxELtO5jcgsiA05NaJVhqTadls4Ef" alt="Paris Masters: Tommy Paul pulls off an upset over Rafael Nadal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal was defeated by Tommy Paul on Wednesday at the Rolex Paris Masters, giving him his biggest career victory. The Spaniard`s title run and Carlos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atptour.com/en/news/nadal-paul-paris-2022-wednesday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tommy Paul Denies Rafael Nadal&#39;s No. 1 Bid In Paris | ATP Tour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqxZDZIUvLTEHyQzuzzoMZLPyuVk4Kx2uZyaHDiC5p-WW2Vq7zOyQn5fd0gO9bLAVIYIF4-djg" alt="Tommy Paul Denies Rafael Nadal&#39;s No. 1 Bid In Paris | ATP Tour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tommy Paul battles back to defeat Rafael Nadal in Paris, handing the Spaniard a loss in his first ATP Tour match since the US Open.</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/tennis/1691316/Novak-Djokovic-Rafael-Nadal-Mery-Perello-Paris-Masters-fatherhood-son-tennis-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic experience gives Rafael Nadal indication of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_ADf06uQW7slNy_BldyURkla7rFpy6ZhW35G9PC9x04rVpOp9T_VCz7id1t8ubGMmHutREuJ5" alt="Novak Djokovic experience gives Rafael Nadal indication of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Paris Masters marks Rafael Nadal&#39;s first tournament since welcoming his first child with wife Mery Perello.</p></div>
            </div>
        </a>
        </Template></>;
}