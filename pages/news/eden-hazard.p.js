import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eden Hazard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eden Hazard"/>
        <meta name="description" content="Trending News about Eden Hazard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eden Hazard</h1>
            <Image width={800} height={500} src="https://cdn.ntvspor.net/7d92ed907cfc4a87bc56bd308ecd8099.jpg?crop=0,0,941,529&w=940&h=529&mode=crop" alt="Eden Hazard"/>
            <h3>Recent News</h3>
            <a href='https://www.ntvspor.net/futbol/hazard-iyi-durumda-olursam-dunya-kupasi-ni-kazanabiliriz-63832acb66db228e5cb00240'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hazard: İyi durumda olursam Dünya Kupası&#39;nı kazanabiliriz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_8XphUA2hda-A6IrOvqAffWL566TTst2VJPH-Lp1Q-8dRr39T6cOkhWKO43Xs3IDOG10s5m9P" alt="Hazard: İyi durumda olursam Dünya Kupası&#39;nı kazanabiliriz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kanada karşısında çekingen oynadık. Ama topla ilişkisi iyi olan oyunculara sahibiz. Kendi oyunumuzu oynamaya cesaret etmeliyiz” diye konuştu. Hazard hakkındaki&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}