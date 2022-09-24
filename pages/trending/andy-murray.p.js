import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andy Murray</title></Head><Template>
            <h1 style={{fontSize: "30"}}>Andy Murray</h1>
            <Image width={800} height={500} src="https://www.atptour.com/-/media/images/news/2022/09/23/20/38/demon-laver-cup-2022-friday.jpg" alt="Andy Murray"/>
            <h3>Recent News</h3>
            <a href='https://www.atptour.com/en/news/laver-cup-2022-friday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex de Minaur Battles Past Andy Murray To Earn Team World First ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSn7iTb4g6vmkwZmGTaIF8TMFRsizeDWhR0J5ynunXUAs9OMIjuY6A4TS8U06_nhzx6VCX2JXV7" alt="Alex de Minaur Battles Past Andy Murray To Earn Team World First ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alex de Minaur earned Team World its first point at the Laver Cup on Friday evening, when he rallied past Andy Murray 5-7, 6-3, 10-7 in a bruising encounter&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/tennis/story/laver-cup-roger-federer-rafael-nadal-share-priceless-tips-with-andy-murray-2004124-2022-09-24'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Laver Cup: Roger Federer, Rafael Nadal share priceless tips with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5_k1jjVQylSYiNPSYUsy2XNy8oHF4qVvKycj9q0lE15Y-WOeHOnlAn17eba7K5JlAdVW3IVW8" alt="Laver Cup: Roger Federer, Rafael Nadal share priceless tips with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laver Cup 2022: Roger Federer and Rafael Nadal, on Friday, September 23, shared some priceless tips with Andy Murray during Team Europe&#39;s campaign.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/tennis/article-11244723/Andy-Murray-loses-Alex-Minaur-despite-having-former-rival-Novak-Djokovic-offering-advice.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andy Murray loses to Alex de Minaur despite having former rival ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHVkGF88a8LOw71RsjjMQWJ7JkNQTqM9dRFHI0O7sgsuxgYZT7WxQ8JIAuUL9INc3-zqayiG1K" alt="Andy Murray loses to Alex de Minaur despite having former rival ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andy Murray was finally back at London&#39;s O2 Arena on Friday night, a long time on from when his career arguably reached its peak.</p></div>
            </div>
        </a><a href='https://www.eurosport.co.uk/tennis/laver-cup-1/2022/tonight-was-special-surreal-andy-murray-reflects-on-a-really-cool-night-with-roger-federer-farewell_vid1755098/video.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Tonight was special, surreal&#39; - Andy Murray reflects on a &#39;really cool ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMY1An7k5P8meK4x3mhvvMo9RnQTioD6rm97m97lxc2O92o1Eo-xs8ixmXTd3eo72nV9cxq8Dd" alt="&#39;Tonight was special, surreal&#39; - Andy Murray reflects on a &#39;really cool ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Tonight was special, surreal&#39; - Andy Murray reflects on a &#39;really cool&#39; night with Roger Federer bidding farewell to tennis as part of the Laver Cup.</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/tennis/1673560/Andy-Murray-Novak-Djokovic-advice-coaching-Laver-Cup-Alex-de-Minaur-tennis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andy Murray asks Novak Djokovic for Laver Cup help and advice ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRi1_l8W2S5ByRg9qabajitIpX3CLeqd6MQTMkNbbz3e9RmK8_A-wtYddL2bRZTx81t_ExqEKH" alt="Andy Murray asks Novak Djokovic for Laver Cup help and advice ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andy Murray asked Novak Djokovic for some help during a crucial point in his match with Alex de Minaur.</p></div>
            </div>
        </a><a href='https://www.eurosport.com/tennis/laver-cup/2022/try-it-roger-federer-and-rafael-nadal-coach-andy-murray-in-memorable-changeover-at-laver-cup_sto9157068/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Try it!&#39; - Roger Federer and Rafael Nadal coach Andy Murray in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRzPuhNNz7IS0PdqyJbx5W80CH3pydU8nE0tDn_sgxgCrxSrKqfBtq72jrTll6WT976KLh02oqK" alt="&#39;Try it!&#39; - Roger Federer and Rafael Nadal coach Andy Murray in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There was a changeover tennis fans will long remember during Andy Murray&#39;s Laver Cup clash with Alex de Minaur as Roger Federer and Rafael Nadal coached.</p></div>
            </div>
        </a><a href='https://www.tennismajors.com/laver-cup-autres-actualite-2/these-are-some-of-the-best-minds-ever-in-the-game-andy-murray-on-playing-with-the-big-three-and-borg-backing-him-at-laver-cup-625856.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“These are some of the best minds ever in the game” – Andy Murray ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcToTUhY0gkMGe-rAjVxP77wfrE_LcmJyQ5byUt372RV7C4SMslewCv_YqK2HLFHqBfgvhYujTCy" alt="“These are some of the best minds ever in the game” – Andy Murray ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>What&#39;s it like having Novak Djokovic offering you tactical advice during a Laver Cup match? Andy Murray felt it tonight and loved the experience.</p></div>
            </div>
        </a>
        </Template></>;
}