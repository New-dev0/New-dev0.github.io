import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alfons schuhbecks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alfons schuhbecks"/>
        <meta name="description" content="Trending News about Alfons schuhbecks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alfons schuhbecks</h1>
            <Image width={800} height={500} src="https://www.tageskarte.io/fileadmin/content/_processed_/2/3/csm_imago0170897271h_c19a46b274.jpg" alt="Alfons schuhbecks"/>
            <h3>Recent News</h3>
            <a href='https://www.tageskarte.io/war-noch-was/detail/neuer-mieter-am-platzl-vinothek-uebernimmt-alfons-schuhbecks-altes-buero.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neuer Mieter am Platzl: Vinothek übernimmt Alfons Schuhbecks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRm-HnMj3lNDo7BOBe56DU2OL4zSGh3t6BwZGU8ViwT8hxk1Z2A3hrxaukkh8rsvPQNCrobRg1O" alt="Neuer Mieter am Platzl: Vinothek übernimmt Alfons Schuhbecks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alfons Schuhbeck muss von einer weiteren Immobilie Abschied nehmen. Sein ehemaliges Reservierungsbüro am Platzl hat einen neuen Mieter bekommen: ein edles&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/region/muenchen/id_100081676/alfons-schuhbecks-altes-buero-vinothek-zieht-in-die-geschaeftsraeume-des-starkochs-10497567.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alfons Schuhbecks altes Büro: Vinothek zieht in die Geschäftsräume ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTrAplW_dwo0FtTi514fr9Lot7AbiClZVTY37CjmvpVPmdndD-8kEGEYRCZWIkghkzLeHUdqMgg" alt="Alfons Schuhbecks altes Büro: Vinothek zieht in die Geschäftsräume ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Schuhbeck-Imperium wird verkauft – auch das alte Büro des Starkochs hat den Mieter gewechselt. Nun wird dort ein edles Weingeschäft eröffnet.</p></div>
            </div>
        </a>
        </Template></>;
}