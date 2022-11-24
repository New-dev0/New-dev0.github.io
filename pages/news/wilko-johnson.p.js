import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wilko Johnson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wilko Johnson"/>
        <meta name="description" content="Trending News about Wilko Johnson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wilko Johnson</h1>
            <Image width={800} height={500} src="https://image.stern.de/32941436/t/52/v1/w1440/r1.7778/-/23--der-ehemalige-dr--feelgood-gitarrist-ist-tot---16-9---spoton-article-1034041.jpg" alt="Wilko Johnson"/>
            <h3>Recent News</h3>
            <a href='https://www.stern.de/lifestyle/leute/wilko-johnson--der-ehemalige-dr--feelgood-gitarrist-ist-tot-32941432.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wilko Johnson: Der ehemalige Dr.-Feelgood-Gitarrist ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQrckvEkDJYejCfeCQMvPqquQQ29jBSQQLA4ZPk1uT4gKp1zigyQeObxg3Y7-JTpFPOB-WnwVjS" alt="Wilko Johnson: Der ehemalige Dr.-Feelgood-Gitarrist ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gitarrist Wilko Johnson ist gestorben. Der Musiker wurde 75 Jahre alt. Mit der Band Dr. Feelgood gelang ihm der Durchbruch.</p></div>
            </div>
        </a><a href='https://www.n-tv.de/leute/Dr-Feelgood-Mitgruender-Wilko-Johnson-ist-tot-article23739212.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gitarrist und Schauspieler: Dr.-Feelgood-Mitgründer Wilko Johnson ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUu9b-BXD6UYVDkeEE_gcwmFP_4UckXBkc8thdQeSYnsB-pLyp63EyR5eA-K6yIZmUfJYzo8AZ" alt="Gitarrist und Schauspieler: Dr.-Feelgood-Mitgründer Wilko Johnson ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit seiner Band Dr. Feelgood gelang Wilko Johnson in den 70er-Jahren der Durchbruch. Der Musiker war für seinen unverwechselbaren Gitarren-Stil bekannt.</p></div>
            </div>
        </a><a href='https://www.krone.at/2864454'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trauer um Gitarristen - „Game of Thrones“-Henker Wilko Johnson ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmKqWiajW6om-a6-bxepHb46hGt_VJha5txTPUjW1trVZHdA6pDHHVFM3v40c8jI0VXeXgYUSg" alt="Trauer um Gitarristen - „Game of Thrones“-Henker Wilko Johnson ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit der legendären Pub-Rockband Dr Feelgood feierte der spätere „Game of Thrones“-Schauspieler in den 1970ern Erfolge, nun ist Gitarrist Wilko ...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/kultur/musik/gitarrist-wilko-johnson-ist-tot-dr-feelgood-mit-75-jahren-gestorben-a-a87d15c8-d7e5-4770-b8fb-402421a7c7d8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dr.-Feelgood-Songwriter: Wilko Johnson ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSaA3thk6SccVAm-MxLdt6TtyzMZ-LVaJEOuBWEe2WzOQTenS08oaQnBh9a8mVxtr8CNbCyqMpG" alt="Dr.-Feelgood-Songwriter: Wilko Johnson ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit seinem abgehackten, präzisen Spiel beeinflusste der Gitarrist der Band Dr. Feelgood die entstehende Punkszene. Später spielte er einen Henker in »Game&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sueddeutsche.de/kultur/musik-dr-feelgood-gitarrist-wilko-johnson-ist-tot-dpa.urn-newsml-dpa-com-20090101-221123-99-636164'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dr. Feelgood: Gitarrist Wilko Johnson ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwgG4TDwndvibI9snelaVwTPhjidOx-6Lx8RWQwXo9WfLKbt6fgYKn19tjOJCRk6LmmM2R2Ol4" alt="Dr. Feelgood: Gitarrist Wilko Johnson ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der einflussreiche britische Musiker und gelegentliche Schauspieler Wilko Johnson ist tot. Der ehemalige Gitarrist und Sänger der Band Dr. Feelgood starb...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6219267/gitarrist-von-dr-feelgood-und-henker-bei-got-wilko-johnson-ist-tot'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gitarrist von Dr Feelgood und Henker bei &quot;GoT&quot;: Wilko Johnson ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRw9Wm1JY2_2nh7OfDmFTl6lWvLaUaaoi5oL3A6FFd3iNVlGNiqJb32Zk0G4EElhuGkmyeiUKG" alt="Gitarrist von Dr Feelgood und Henker bei &quot;GoT&quot;: Wilko Johnson ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit der legendären Pub-Rockband Dr Feelgood feierte er in den 1970ern Erfolge, nun ist Gitarrist Wilko Johnson tot. Am Montag verstarb der Musiker im Alter&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvmovie.de/news/wilko-johnson-ist-tot-er-war-game-of-thrones-star-und-dr-feelgood-guitarist-129049'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wilko Johnson ist tot | Er war „Game of Thrones”-Star und „Dr ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShee_03yPvm7mM9twbD42uyvh6YqgPxa8L-ndl_JLKGN_PLlUMtQEGxyR9Thwve3CYE22Epig7" alt="Wilko Johnson ist tot | Er war „Game of Thrones”-Star und „Dr ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wilko Johnson, bekannt als Gitarrist der Band „Dr. Feelgood“ und aus der Serie „Game of Thrones“, ist am 21. November verstorben.</p></div>
            </div>
        </a>
        </Template></>;
}