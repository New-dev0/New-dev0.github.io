import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mehdi Taremi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mehdi Taremi"/>
        <meta name="description" content="Trending News about Mehdi Taremi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mehdi Taremi</h1>
            <Image width={800} height={500} src="https://thepeoplesperson.com/wp-content/uploads/2022/11/Mehdi-Taremi-min.jpg" alt="Mehdi Taremi"/>
            <h3>Recent News</h3>
            <a href='https://thepeoplesperson.com/2022/11/21/the-case-for-mehdi-taremi-becoming-manchester-uniteds-centre-forward-255735/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The case for Mehdi Taremi becoming Manchester United&#39;s centre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5cmrWL_l6-bzTviDzRqfDB8h2LdL1e1MX0fqmY7E6o5JFv5gnaY2FWGg2TLj1G-tRJ2iC66b5" alt="The case for Mehdi Taremi becoming Manchester United&#39;s centre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iran may have been rolled over by England during the Qatar World Cup&#39;s Group B opener, but Mehdi Taremi put forward a good case for being a smart piece of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ghgossip.com/mehdi-taremi-wife-who-is-sahar-ghoreishi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mehdi Taremi Wife: Who is Sahar Ghoreishi?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQT5Y8sOQmm1EE6Cf7mlQM3pl_5VCp2eI0Rn8eT6byIhKwojfmeFa37UjGCfd4P7cgSwLBXdBic" alt="Mehdi Taremi Wife: Who is Sahar Ghoreishi?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iranian attacker Mehdi Taremi competes professionally for both the Iran national team and Primeira Liga club Porto. Medhi Taremi Biography.</p></div>
            </div>
        </a><a href='https://www.pulselive.co.ke/sports/football/qatar-2022-world-cup-records-fall-as-iran-and-netherlands-score-late/6fpz9ns'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022: World Cup records fall as Iran and Netherlands score late</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuivexAtBfaFPlRIcLuMFFOEVroAMT43xSCz_RiF-05qWLmPghjPfR7IVBnPVT496zKhhsRmHt" alt="Qatar 2022: World Cup records fall as Iran and Netherlands score late" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Davy Klaasen scored late to bury Senegal but just missed out on a World Cup record. | Pulselive Kenya.</p></div>
            </div>
        </a>
        </Template></>;
}