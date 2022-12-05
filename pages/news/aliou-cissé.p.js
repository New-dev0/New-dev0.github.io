import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aliou Cissé</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aliou Cissé"/>
        <meta name="description" content="Trending News about Aliou Cissé" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aliou Cissé</h1>
            <Image width={800} height={500} src="https://derivates.kicker.de/image/upload/c_crop,x_0,y_140,w_3031,h_1705/w_1200,q_auto/v1/2022/12/04/ed6d9c52-593e-435e-bc39-a51b29f77503.jpeg" alt="Aliou Cissé"/>
            <h3>Recent News</h3>
            <a href='https://www.kicker.de/ciss-laesst-seine-zukunft-offen-928293/artikel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegals Trainer Aliou Cissé lässt seine Zukunft offen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkJ04e5_hYiI6qk_IhsWNlfEufX4j61zUBlMIXWnT8Qo5_W4vfON1N71njxsuYOzQnOUnwyRA5" alt="Senegals Trainer Aliou Cissé lässt seine Zukunft offen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aliou Cissé hat Senegal bis ins Achtelfinale der WM geführt, doch nach dem 0:3 gegen England ließ der 46-Jährige die Fragen nach seiner Zukunft&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}