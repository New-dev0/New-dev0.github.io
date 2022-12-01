import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Député Meyer Habib</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Député Meyer Habib"/>
        <meta name="description" content="Trending News about Député Meyer Habib" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Député Meyer Habib</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/meyer-habib-7826db-0@1x.jpeg" alt="Député Meyer Habib"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/politique/le-depute-meyer-habib-vise-par-une-enquete-pour-detournement-de-fonds-publics-2240391.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le député Meyer Habib visé par une enquête pour &quot;détournement ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjudKQ2g6ZpWIpgcFupdtFGb8OIF6Ceg2nCk-9dzyxxMFcpUpYw4-8nI76jL1uTN34gpS_R-su" alt="Le député Meyer Habib visé par une enquête pour &quot;détournement ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les enquêteurs soupçonneraient des irrégularités dans la rémunération de ses collaborateurs parlementaires. Meyer Habib dans le viseur de la justice.</p></div>
            </div>
        </a><a href='https://www.liberation.fr/societe/police-justice/le-depute-de-droite-meyer-habib-vise-par-une-enquete-pour-detournement-de-fonds-publics-20221130_RVSYEE55PFD4LHHOPJH65BS2KQ/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le député de droite Meyer Habib visé par une enquête pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcToGw-xxitdRMc7L1rhRdGPgfZAUpNvgnf40Ph2sMrv035VfTFkoM4hOXgU_bHUniEy92f4mNWk" alt="Le député de droite Meyer Habib visé par une enquête pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon les informations de BFMTV, les enquêteurs soupçonnent des irrégularités dans la rémunération de ses collaborateurs parlementaires.</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/politique/20221130.OBS66591/le-depute-meyer-habib-vise-par-une-enquete-pour-detournement-de-fonds-publics.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le député Meyer Habib visé par une enquête pour « détournement ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREMK6irx-IgiPtvxuqCsj4u7jwj82l8rR3tNxwZXk4M6gpi3Kmaa-RLtkgFD_RHlbg-QvbyXYF" alt="Le député Meyer Habib visé par une enquête pour « détournement ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon BFMTV, les enquêteurs soupçonnent des irrégularités dans la rémunération de ses collaborateurs parlementaires, et l&#39;enquête est liée à un signalement de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bienpublic.com/politique/2022/11/30/le-depute-meyer-habib-vise-par-une-enquete-pour-detournement-de-fonds-publics'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Politique. Le député Meyer Habib visé par une enquête pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Politique. Le député Meyer Habib visé par une enquête pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les enquêteurs soupçonnent des irrégularités dans la rémunération des collaborateurs parlementaires de cet élu, apparenté au groupe LR et proche du Premier&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}