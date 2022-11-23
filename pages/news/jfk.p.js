import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>JFK</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,JFK"/>
        <meta name="description" content="Trending News about JFK" /></Head><Template>
            <h1 style={{fontSize: "30"}}>JFK</h1>
            <Image width={800} height={500} src="https://assets1.cbsnewsstatic.com/hub/i/r/2022/11/22/513b00ad-8824-4351-8225-8e4bf8fe8fd6/thumbnail/1200x630/337095347e552530619a020129052595/jfk.jpg" alt="JFK"/>
            <h3>Recent News</h3>
            <a href='https://www.cbsnews.com/losangeles/news/tuesday-marks-59th-anniversary-of-jfk-assassination/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tuesday marks 59th anniversary of JFK assassination</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROYeusE4Dd_vl_PVQeNcNkFYOxHp78Cn2DHhQJ_Ge2OKJEAK9MykHuPMoN-hZgPBAIqqvNXJJN" alt="Tuesday marks 59th anniversary of JFK assassination" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lee Harvey Oswald, the accused gunman, was shot and killed two days after the assassination. President Kennedy had not announced a second run for office, but he&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wxyz.com/news/59-years-after-jfks-assassination-the-limo-he-was-in-is-on-display-at-the-henry-ford'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>59 years after JFK&#39;s assassination, the limo he was in is on display ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWBXfHXxHxJosFIWG_7P-A1X-9nE6cjloonnWqpPm9nD1HEf7NHMW5LK0BFrDUhA-QWltwv2h2" alt="59 years after JFK&#39;s assassination, the limo he was in is on display ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tuesday marks the 59th anniversary of the assassination of President John F. Kennedy. The limo he was riding in at the time is on display in metro Detroit.</p></div>
            </div>
        </a><a href='https://www.wfaa.com/article/news/local/jfk-dallas-1963-anniversary-a-tragic-thing-59-years-later-watch-wfaas-breaking-coverage-of-the-jfk-assassination/287-76f03930-d060-4076-ab8d-6d8312a43a07'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;A tragic thing&#39;: 59 years later, watch WFAA&#39;s breaking coverage of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStVYBbq9RKOuGuG2KeX3pikDgkv2WKrHCTvKBBPCW27YSOxHu8Gx11RfLfK-uzhrbLz-huA8fb" alt="&#39;A tragic thing&#39;: 59 years later, watch WFAA&#39;s breaking coverage of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DALLAS — Fifty-nine years ago Tuesday, WFAA photographer Bert Shipp was stationed at the Dallas Trade Mart, awaiting the arrival of President John F.</p></div>
            </div>
        </a><a href='https://www.dallasnews.com/arts-entertainment/2022/11/22/here-are-our-top-stories-on-the-jfk-assassination-and-its-aftermath/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Our top stories on the JFK assassination and its aftermath</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWlWDInRm4UVJYPCLcJta1UovXm0zPNCASpUfidm9P-DMel-oePjavImlB_H-hsELvjKUOMFyR" alt="Our top stories on the JFK assassination and its aftermath" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No subject in the history of Dallas arouses more passion and curiosity than the assassination of President John F. Kennedy in Dealey Plaza.</p></div>
            </div>
        </a><a href='https://www.telemundo47.com/historias-destacadas/hay-gato-encerrado-encuentran-felino-dentro-de-equipaje-en-el-aeropuerto-jfk/2343219/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hay gato encerrado: encuentran felino dentro de equipaje en el ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqlKOcPmlCjo72509iopKA8qkyym4yn_nAEHP1N-3EN_wwngjyoMs5SvnftK1K9wC6rXAGXtAR" alt="Hay gato encerrado: encuentran felino dentro de equipaje en el ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los oficiales de la Administración de Seguridad del Transporte vieron un gato mientras realizaban la inspección en el aeropuerto de John F. Kennedy.</p></div>
            </div>
        </a><a href='https://www.wfla.com/news/national/today-in-history-nov-22-jfk-is-assassinated/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Today in History: Nov. 22, JFK is assassinated</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaOfTBxOPfHJHXRTwOYMLtfGq4eZUlBUzTSRRiyM3YUHR-t46AtZ3yzLXydBsczAh72calnVfM" alt="Today in History: Nov. 22, JFK is assassinated" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today&#39;s Highlight in History: On Nov. 22, 1963, John F. Kennedy, the 35th President of the United States, was shot to death during a motorcade in Dallas; Texas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/cat-inside-checked-luggage-jfk-airport-new-york-tsa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TSA officer &quot;shocked&quot; to find cat inside checked luggage at JFK airport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQySdcPLQMi0gU5uaTyCEQh1hRxVoFLZG-yZsCxDklrrSo9EDGsAOBwQ30ONXmnRUbqj9RKa_hm" alt="TSA officer &quot;shocked&quot; to find cat inside checked luggage at JFK airport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Small pets can be perfectly good air travel companions, provided their owners follow the rules. For example, most airlines require animals to remain in&nbsp;...</p></div>
            </div>
        </a><a href='https://people.com/politics/conversations-inside-air-force-one-after-jfk-assassination/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JFK&#39;s Assassination, 59 Years Later: Conversations Inside Air Force ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSA1hNFPY9ipXH-XyQ-MbNQf6WSfbICVGtL90cuHUf5unFcfqFW-gcXHTGhXZS2WP5H0P54C0qh" alt="JFK&#39;s Assassination, 59 Years Later: Conversations Inside Air Force ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Historian Steve Gillon pulls back the curtain on one of the most dramatic moments in American history, 59 years after John F. Kennedy was assassinated in&nbsp;...</p></div>
            </div>
        </a><a href='https://nbc-2.com/news/weird/2022/11/22/x-ray-shows-live-cat-trapped-in-checked-luggage-at-jfk-airport/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>X-ray shows live cat trapped in checked luggage at JFK airport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvPCtlrlNhohLZ1_yOOg2bbNlNeHqTfbrdgKOX4htkuLq2a76e8OU89op5oikFTIAO8INFnOfz" alt="X-ray shows live cat trapped in checked luggage at JFK airport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A TSA agent in New York City spotted a live feline trapped inside checked luggage at John F. Kennedy International Airport — but safely got the cat out of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fox5ny.com/news/cat-checked-bag-jfk-airport'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live cat found inside checked bag at JFK Airport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGA1nbEEJgg917svVmpqwu8m6Ku2ER8Duc-GnF4C2YYBI126mICl9MYTpYm_iDdRbxgh1593RH" alt="Live cat found inside checked bag at JFK Airport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A TSA officer at JFK Airport in New York City was shocked to find an orange cat inside a checked bag.</p></div>
            </div>
        </a>
        </Template></>;
}