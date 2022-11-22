import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Volbeat</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Volbeat"/>
        <meta name="description" content="Trending News about Volbeat" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Volbeat</h1>
            <Image width={800} height={500} src="https://images-tt-com.nmo.at/v2/assets.tt.com/im-content/images/9f593533-ca75-5e52-b3ff-82a277604a34?p=eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0Ijo2MzB9fQ%3D%3D" alt="Volbeat"/>
            <h3>Recent News</h3>
            <a href='https://www.tt.com/artikel/30838213/europatournee-volbeat-treten-heute-abend-in-innsbrucker-olympiahalle-auf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Europatournee: „Volbeat&quot; treten heute Abend in Innsbrucker ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS11T3IyrN6rbuV6KIELJtnP7J3sfIua8e11cAsnt4annMR78wkhtHd-NU1EkdG1_B-lnSz4IN-" alt="Europatournee: „Volbeat&quot; treten heute Abend in Innsbrucker ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Band tourt mit ihrer „Servant Of The Road World Tour&quot; mit 32 Konzerten durch Europa. Heute Abend machen die dänischen Heavy-Metaller Halt in Innsbruck.</p></div>
            </div>
        </a>
        </Template></>;
}