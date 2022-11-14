import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Istanbul</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Istanbul"/>
        <meta name="description" content="Trending News about Istanbul" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Istanbul</h1>
            <Image width={800} height={500} src="" alt="Istanbul"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/world-news/turkey-blast-news-istanbul-blast-smells-like-terror-says-recep-erdogan-as-blast-in-istanbul-kills-6-injures-53-101668358690226.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Smells like terror&#39;, says Erdogan as blast in Istanbul&#39;s busy street ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5sd3FCu61rCjPBGsCfoynC3iMdDr70xMmbHiewTQ8haMQR13EvFIXos2UMI04uLYJJx91hRiZ" alt="&#39;Smells like terror&#39;, says Erdogan as blast in Istanbul&#39;s busy street ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Turkish state media watchdog RTUK has imposed a ban on broadcasting images of the attack. The Erdogan administration has also limited online discussion&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/13/1136348046/istanbul-explosion-deaths-istiklal-avenue'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turkey calls the blast in Istanbul an attack. At least 6 are dead</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpHBLY1XK3h7nehocNG_Ce2l78XcuN1foqTM_qus7A_wclN8qOh4n24VAGLlNqpHM0Y25do3nc" alt="Turkey calls the blast in Istanbul an attack. At least 6 are dead" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There was no immediate claim of responsibility for the blast on Istiklal Avenue. President Recep Tayyip Erdogan has vowed that the nation will not bow to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/world/story/explosion-in-istanbul-leaves-multiple-people-injured-report-2296786-2022-11-13'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6 dead, 81 injured as explosion rocks Istanbul</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgskpziDDKNUlY-fCDeMOdVoJnnMp_stfMV9a_pVrJ4UhWlQ7c-3pJxBhvCOEXMVN5UrwD-C7T" alt="6 dead, 81 injured as explosion rocks Istanbul" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish President Recep Tayyip Erdogan called the blast a “treacherous attack” and said its perpetrators would be punished, Associated Press reported.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/turkish-media-report-explosion-on-istanbul-main-pedestrian-thoroughfare-11-injured-updates'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Istanbul Blast: तुर्की की राजधानी इस्तांबुल में धमाका, छह की मौत, महिला ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGYxFlLiFl2ztToPC-SKCdlSd1u1kVxHceIQ-U-eWYYMdG5YQNZhEavFwVimAcy7PlKtF8lZ_v" alt="Istanbul Blast: तुर्की की राजधानी इस्तांबुल में धमाका, छह की मौत, महिला ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Istanbul Blast: तुर्की की राजधानी इस्तांबुल में धमाका, छह की मौत, महिला ने दिया हमले को अंजाम.</p></div>
            </div>
        </a><a href='https://www.jagran.com/world/other-istanbul-istiklal-avenue-explosion-11-injured-23201868.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Istanbul Blast: तुर्किये की राजधानी इस्तांबुल में विस्फोट, छह की मौत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJQH9H2AZXoa1rtkYMdvBrzvyBjdME7DfvX6GA3CWPafzY2ZmRVX8JScw_rbDaPEtFUEICV-nT" alt="Istanbul Blast: तुर्किये की राजधानी इस्तांबुल में विस्फोट, छह की मौत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Istanbul Blast तुर्किये मीडिया के अनुसार रविवार को इस्तांबुल के लोकप्रिय इस्तिकलाल एवेन्यू&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-europe-63615076'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Istanbul: Six dead, dozens wounded in Turkey explosion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZ2JmWFMCtjCa0yMWxXDh1ln5lU4krzioKdwtNXtVhDEKfSlcS5Y58TsbDu7MnOrjySTTCuqWx" alt="Istanbul: Six dead, dozens wounded in Turkey explosion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The blast happened in a busy shopping area in the heart of the Turkish city.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/explosion-at-centre-of-istanbul-captured-on-video-watch-11668347895825.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explosion at centre of Istanbul captured on video: Watch | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTig585wYc5oDL5JTPq4F26eu_oJg_qYCg-V2NWMFh8_G46EB0bbH73VGA8dwmbGSf43xT5iVTL" alt="Explosion at centre of Istanbul captured on video: Watch | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A video posted online showed flames erupting and a loud bang, as pedestrians turned and ran away.</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/world/many-people-injured-in-blast-in-central-istanbul-watch-video-2258592'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Istanbul Blast: इस्तांबुल में ब्लास्ट का सामने आया वीडियो, धमाके के बाद ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSW7qf-Ft1kb-A0CmejFWaRytVP93DSC-GRvSTbUJxBViNDvJQ_SOLvjJPHlG-z8ZIUoio4YuvA" alt="Istanbul Blast: इस्तांबुल में ब्लास्ट का सामने आया वीडियो, धमाके के बाद ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Istanbul News: ये धमाका टकसिम स्क्वायर पर हुआ है. धमाके के वक्त बड़ी संख्या में लोग सड़क पर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/13/europe/istanbul-turkey-explosion-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Istanbul blast that killed 6 and injured 81 is considered a terrorist ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT8csiAvNLySPFc9WpHzziumMP9JbI0p8bHDWVw5TBOEKmyCQu7zul5J67gI-HWLClYQQU4TCrs" alt="Istanbul blast that killed 6 and injured 81 is considered a terrorist ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An explosion that killed at least six people and injured at least 81 others in Istantbul on Sunday is considered to be a terrorist attack, Turkish Vice&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jansatta.com/international/blast-in-istanbul-blast-at-busy-street-in-turkey-istanbul-several-injured/2481846/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blast In Istanbul: तुर्की के इस्तांबुल में धमाका, भरी सड़क पर हुए धमाके में ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOQUALwEE3itBnWXvV2EZmDHMHCc98IdQm_9F5Zk8BTIJycnaN4E9cuINkxn6mfm5brmW57gVr" alt="Blast In Istanbul: तुर्की के इस्तांबुल में धमाका, भरी सड़क पर हुए धमाके में ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Blast In Istanbul: इस्तांबुल में हुए ब्लास्ट में अभी तक 6 की मौत की खबर सामने आ रही है।</p></div>
            </div>
        </a>
        </Template></>;
}