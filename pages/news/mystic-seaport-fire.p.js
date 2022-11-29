import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mystic Seaport fire</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mystic Seaport fire"/>
        <meta name="description" content="Trending News about Mystic Seaport fire" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mystic Seaport fire</h1>
            <Image width={800} height={500} src="https://media.nbcconnecticut.com/2022/11/DroneRanger-Photo-of-Mystic-Fire-on-November-28-2022-1.jpg?quality=85&strip=all&resize=1200%2C675" alt="Mystic Seaport fire"/>
            <h3>Recent News</h3>
            <a href='https://www.nbcconnecticut.com/news/local/intense-flames-rip-through-mystic-along-river/2924101/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It Could Take Days to Determine Cause of Massive Fire at Mystic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTztY4qeCuh3jFPAIyVAIixCvU_dVkTgBNWjh7Bc_AsLUvbtcFuh87V1c0sOk4FMZRTwsffSG77" alt="It Could Take Days to Determine Cause of Massive Fire at Mystic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mystic Fire Chief Anthony Manfredi said it could take a few days to determine what caused a massive wind-driven fire along the Mystic River in Mystic Sunday&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fox61.com/article/news/local/new-london-county/mystic-fires-at-seaport-marine/520-cec7e64b-ec06-4b84-9e9e-92df8e81baff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seaport Marine buildings burn to the ground in 4-alarm Mystic fire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRj-EBlNsrNbxQKSNIZLAhI9lM2o4H3KIlpGrNesoim26QG9JpZukkxI26bTmh-FjO6GH7HKZMr" alt="Seaport Marine buildings burn to the ground in 4-alarm Mystic fire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mystic officials are investigating after a massive fire burned one of the Seaport Marine buildings to the ground Sunday night.</p></div>
            </div>
        </a><a href='https://whdh.com/news/massive-fire-tears-through-marina-in-mystic-ct/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Massive fire tears through marina in Mystic, CT</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWqVjE4yD4UzJ3xSBaiLpP7gajq89oOr3oYI3HZ9rWWOzpCumvSEFJFCj3Sao_FojB0EK_v67C" alt="Massive fire tears through marina in Mystic, CT" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The fire started on Washington Street at the Seaport Marine Warehouse. Windy conditions made it difficult for firefighters to get the flames under control, made&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/us/mystic-connecticut-seaport-marina-sees-massive-wind-driven-fire-destroy-buildings-force-residents-from-homes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mystic, Connecticut seaport marina sees massive wind-driven fire ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSc44_h4v4Pnh-1CdqaM7fBdXcyMpc-2z7axdKHgTMb2QVbO7Q9Wv6oyECK_SkwTgRcZSCZyC9J" alt="Mystic, Connecticut seaport marina sees massive wind-driven fire ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An intense fire engulfed the seaport marina in Mystic, Connecticut overnight, prompting several agencies to respond and residents to evacuate homes as the&nbsp;...</p></div>
            </div>
        </a><a href='https://abc7ny.com/fire-mystic-waterfront-connecticut/12502840/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fire tears through historic Mystic, Connecticut waterfront destroying ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSIOXyNzKTmNX9pM4_wxoOfa9g_cHmcanbkqKWlWTwcQYWQFm6r9oQC_bz_ZVtpto_NDy3Arbi" alt="Fire tears through historic Mystic, Connecticut waterfront destroying ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A massive fire has engulfed several buildings along the historic Mystic waterfront in Connecticut.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/boston/news/mystic-connecticut-fire-seaport-marine-connecticut/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wind-driven fire tears through Mystic, Connecticut marina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBiuo5dOr-s2cHC42EY4lUXf7ReXIEGopRfbsBkZWboMklGZ_UJjLUMho1PN-p_4OzyOVNxazc" alt="Wind-driven fire tears through Mystic, Connecticut marina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Flames broke out at Seaport Marine on Washington Street just before 9 p.m.. Firefighters used water from the Mystic River to put out the fire, which burned for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}