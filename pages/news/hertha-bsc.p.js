import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hertha BSC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hertha BSC"/>
        <meta name="description" content="Trending News about Hertha BSC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hertha BSC</h1>
            <Image width={800} height={500} src="https://content.herthabsc.com/site/binaries/_bsc_1668878179571/content/gallery/bildergalerien/2223/spiele/testspiele-2223/hertha-bsc---tsv-1860-munchen/citypress_bscm60-2223_44.jpeg" alt="Hertha BSC"/>
            <h3>Recent News</h3>
            <a href='https://www.herthabsc.com/de/nachrichten/2022/11/spielbericht-bscm60-2223'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wörthersee-Cup: Niederlage im Elfmeterschießen | Hertha BSC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKnwmjeWp0c2Z5IU3VU7KLIFrUYTPVsMLQqqvCdNDOWXNuiEKafzAcPuin4Jz2TwPuSP1cQ-Jd" alt="Wörthersee-Cup: Niederlage im Elfmeterschießen | Hertha BSC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor dem Keeper unserer U23 verteidigten Sonny Ziemer – ebenfalls aus unserer Regionalliga-Auswahl –, Filip Uremović, Lucas Tousart und Maximilian Mittelstädt.</p></div>
            </div>
        </a><a href='https://www.rbb24.de/sport/beitrag/2022/11/fussball-testspiele-hertha-bsc-woerthersee-cup-1860-muenchen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hertha BSC verliert im Elfmeterschießen gegen 1860 München</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT12MLBUWPFMngHOSRqQgrGx5EgjxBBlj8qHfNgdrxGctCwT61fDlpo_jGhRUvzfGBm-cLRCghv" alt="Hertha BSC verliert im Elfmeterschießen gegen 1860 München" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hertha BSC hat im Halbfinale des Wörthersee-Cups gegen Drittligist TSV 1860 München 6:7 (3:3) nach Elfmeterschießen verloren.</p></div>
            </div>
        </a><a href='https://www.abendzeitung-muenchen.de/liveticker/sport-fussball-testspiel-tsv-1860-muenchen-gegen-hertha-bsc-testspiel-liveticker-heute-aufstellung-307/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wörthersee-Cup im Liveticker: TSV 1860 gegen Hertha BSC heute ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeEp8GAGQzKpGALYqOfhvdfT2MgpHM1KWiVQN_IA2cM5jTnvss4DNpEU4G06YGrzP6u3e5d02X" alt="Wörthersee-Cup im Liveticker: TSV 1860 gegen Hertha BSC heute ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der TSV 1860 testet am Samstag. Verfolgen Sie das Spiel gegen Hertha BSC im AZ-Liveticker!</p></div>
            </div>
        </a><a href='https://www.ligainsider.de/hertha-bsc/6/hertha-bsc-niederlage-gegen-1860-muenchen-im-woerthersee-cup-329776/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hertha BSC: Niederlage gegen 1860 München im Wörthersee-Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRIrlLxZsiHQYSlNk2BbD2tih7a7GICDma4tM6ujtuIdaGxTSGW517PppKz1XlPPznwYz8fkvRU" alt="Hertha BSC: Niederlage gegen 1860 München im Wörthersee-Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für Hertha BSC stand am Samstag das Halbfinale im Wörthersee-Cup auf dem Programm. Als Gegner[…]</p></div>
            </div>
        </a><a href='https://www.ligainsider.de/nader-el-jindaoui_35734/hertha-bsc-bdquo-influencer-ldquo-nader-el-jindaoui-erstmals-bei-den-profis-329777/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hertha BSC: „Influencer“ Nader El-Jindaoui erstmals bei den Profis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQl9DibBMUr3ezpmk9deExAPj7dAtCRKQRdeMiBbTROIPPOG-HJxwNrS_B4lDTal7XdCfNPDLVa" alt="Hertha BSC: „Influencer“ Nader El-Jindaoui erstmals bei den Profis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Überraschung bei Hertha BSC! U23-Angreifer Nader El-Jindaoui wurde erstmals seit seiner Ankunft bei den Hauptstädtern[…]</p></div>
            </div>
        </a><a href='https://www.herthabsc.com/de/galerie/2223/spiele/testspiele-2223/hertha-bsc---tsv-1860-munchen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die Bilder zum Spiel: Hertha BSC - TSV 1860 München | Hertha BSC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRixyvC9PC11FBtpNMr3dCzn7idYQ-5eQE2_knKIk58hZCi6EnZejOeqm3KkJaSKzr7lSWKi3DN" alt="Die Bilder zum Spiel: Hertha BSC - TSV 1860 München | Hertha BSC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Impressionen des Halbfinals unserer Herthaner beim Wörthersee-Cup in Klagenfurt.</p></div>
            </div>
        </a><a href='https://www.kicker.de/hertha-gegen-tsv-2022-vereine-freundschaftsspiele-4825040/spielbericht'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3:4 im Elfmeterschießen: Hertha BSC verliert Test gegen 1860</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5gPUhmm7ggVlylJ4DKX5iUUeOHD0rZbfTLcGk6_Dn2VLYQ1XijF26D6SaOYenO8Ob9fH2Unl4" alt="3:4 im Elfmeterschießen: Hertha BSC verliert Test gegen 1860" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Halbfinale trafen die deutschen Mannschaften auch direkt aufeinander, doch entgegen der Ligazugehörigkeit war es der Drittligist, der früh in der Begegnung&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/sport/fussball/bundesliga/id_100082936/hertha-bsc-holt-instagram-star-zu-den-profis.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hertha BSC holt Instagram-Star zu den Profis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtgdCeyFCVv2ao89jB0eMoVurC0cYM9ekRfrTrMsvyVs5AcFwiV2nnvjoO0gzAPoP-3vpn-ZdP" alt="Hertha BSC holt Instagram-Star zu den Profis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Fußballer Nader El-Jindaou ist auf Instagram bereits ein Star. Nun soll der Durchbruch bei der Hertha gelingen. Trainer Schwarz holte ihn zu den Profis.</p></div>
            </div>
        </a><a href='https://www.dasding.de/newszone/hertha-nader-el-jindaoui-profi-debuet-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hertha BSC: Nader kickt für die Profis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfEXtSPYQZ9brqEoj52oVkxnK1gKqER-XbBZNgK2H9wqDzElh8eRRCyMgwq1PeswS_0kePPwmB" alt="Hertha BSC: Nader kickt für die Profis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nader El-Jindaoui spielt eigentlich bei Herthas U23. Trainer Sandro Schwarz holte ihn jetzt in sein Team.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/bundesliga/2022/11/hertha-trainer-sandro-schwarz-holt-instagram-star-nader-el-jindaoui-zu-den-profis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hertha-Trainer Sandro Schwarz holt Instagram-Star Nader El ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1EicBzYR-QvRbQmNqO0YNrNipTIDWkwxvHfqir8_cTExFAZYumRc17tXkgSgcc9VE_1bqsDbQ" alt="Hertha-Trainer Sandro Schwarz holt Instagram-Star Nader El ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hertha-Trainer Sandro Schwarz nimmt Instagram-Star Nader El-Jindaoui mit zum Wörthersee-Cup. Der 26-Jährige ersetzt Davie Selke.</p></div>
            </div>
        </a>
        </Template></>;
}