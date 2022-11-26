import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Russland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Russland"/>
        <meta name="description" content="Trending News about Russland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Russland</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/11/87990011470108066_BLD_Online-10.jpg" alt="Russland"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/russland-geraet-bei-g20-gipfel-in-bali-unter-druck/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russland gerät bei G20-Gipfel in Bali unter Druck</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBljnbjVu6Z4jWop4eqmhPI0AdDuPxxCzwPzrpb-XkJdnwVo8pv1y0UtK5q1RbUDuQoDeGdH19" alt="Russland gerät bei G20-Gipfel in Bali unter Druck" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beim Gipfel in Nusa Dua auf der indonesischen Insel Bali verzichteten bisherige Unterstützer wie China und Indien darauf, eine gemeinsame Abschlusserklärung zu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000140869340/russland-steht-bei-g20-gipfel-unter-druck'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russland steht bei G20-Gipfel unter Druck</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQioFRwmLzkIYOR7gDuGJ2y6yq5AvjWLQN7CyJa7jGLN55dEV4F0FExuqgb59cA3TFindG1APhS" alt="Russland steht bei G20-Gipfel unter Druck" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die wichtigsten Industrie- und Schwellenländer der Welt wollen in Bali die russische Invasion in die Ukraine verurteilen. Moskau tut indes so,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/politik/notfalltreffen-g7-nato-ukraine-krieg-russland-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Abschuss aus Russland unwahrscheinlich&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOEflIthj2xWT13Jyw_Le_uF8Mu3M2zcXmH90MspJTUBuvdsEmRJXdUwQKsHPWJgRhBfPZVn84" alt="&quot;Abschuss aus Russland unwahrscheinlich&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die in Polen eingeschlagene Rakete ist laut US-Präsident Biden wahrscheinlich nicht von Russland aus abgefeuert worden.</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/ausland/europa/polen-russland-rakete-einschlag-ukraine-103.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raketeneinschlag in Polen: Biden bezweifelt Abschuss aus Russland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTl8LvC6_wx5qebnP_b5nYAPd9hId2E1oTmv47al7hxjTcMLnqX_b3CVfpN6i3x7he9KE8vrnE9" alt="Raketeneinschlag in Polen: Biden bezweifelt Abschuss aus Russland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach Einschätzung der USA ist die in einem Dorf im Südosten Polen eingeschlagene Rakete vermutlich nicht aus Russland abgefeuert worden.</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/politik/gerhard-mangott-russland-muesste-sich-sofort-und-dringend-entschuldigen/281232'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerhard Mangott: Russland müsste sich &quot;sofort und dringend ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQldczZs7RIp6fGaYO9GP_bGkE7ZzCm2YzDaiRAnFJp90y07LTr_s8UNmTOlPayi9ym1Hy5FkPj" alt="Gerhard Mangott: Russland müsste sich &quot;sofort und dringend ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach einem noch unbestätigten russischen Raketeneinschlag in Polen bei dem Dienstagabend zwei Menschen getötet wurden, sieht der Politikwissenschaftler&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/politik/ausland/konflikte--biden--abschuss-der-rakete-aus-russland--unwahrscheinlich--32915202.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konflikte: Biden: Abschuss der Rakete aus Russland ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8mAS_n-btxXSTRTQidLD3JZzjAAW5iCk6IyKofXuwhP8Jrl-fYlTcreCKboUGaaYx9EvPk-bu" alt="Konflikte: Biden: Abschuss der Rakete aus Russland ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nusa Dua/Warschau/Moskau - Die in Polen eingeschlagene Rakete ist nach Angaben von US-Präsident Joe Biden wahrscheinlich nicht von Russland aus.</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/politik/welt/2167846-Ukraine-Krieg-und-Inflation-auf-der-Tagesordnung.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russland gerät in Bali unter Druck</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvgdtaTxB8jLD4hpUeAQ_-NEXTb1UYVDaFKUJzlgkAPQN5M_OnH-AIludaU3MVG5unWU_CmugM" alt="Russland gerät in Bali unter Druck" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Entwurf für die Gipfel-Abschlusserklärung enthält eine Aufforderung zu Kriegsende. Bisherige Moskau-Unterstützer China und Indien blockieren nicht.</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/politik/europa/2167949-Russland-zieht-sich-auch-am-Ostufer-des-Dnjepr-zurueck.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russland zieht sich auch am Ostufer des Dnjepr zurück</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-arbu57H0dzBpuH0Ne2BEO4arlZQKzKp9jGXMaUsXj3bJOr7HUDuWjamlXEIQCJcA6szd40y7" alt="Russland zieht sich auch am Ostufer des Dnjepr zurück" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Oleschky, das gegenüber von Cherson liegt, wurden Bilder von verlassenen russischen Bunkern gezeigt. Die von Russland installierten Behörden erklärten, sie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/politik/g20-gipfel-russland-diplomatisch-isoliert/281206'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20-Gipfel: Russland diplomatisch isoliert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVA7yoCo_ptAtC2eIg-_cGFKYQOGxoWIWwJwVHMycPbzdc-aQMHQishGbp74O2-rbxbKz-Bo5q" alt="G20-Gipfel: Russland diplomatisch isoliert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>China zeigt Russland mittlerweile die kühle Schulter, die G20-Teilnehmer verurteilen den Angriffskrieg auf Kiew im Entwurf des Abschlussberichts.</p></div>
            </div>
        </a><a href='https://www.austrianwings.info/2022/11/russische-luftangriffe-raketen-in-polen-eingschlagen-angeblich-todesopfer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russische Terror-Luftangriffe: Raketen in Polen eingschlagen, zwei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpNtX7uNB1vmqW1AwaXxQRtuIelXqBNGAHlOtCB9fsdFPQn-1lT38auS4xs9KoaetwUuaVCgxc" alt="Russische Terror-Luftangriffe: Raketen in Polen eingschlagen, zwei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Den ganzen Tag über überzieht die Armee des russischen Diktators und Kriegsverbrechers Wladimir Putin die Ukraine mit Raketenterror - wir berichteten.</p></div>
            </div>
        </a>
        </Template></>;
}