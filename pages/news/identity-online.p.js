import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Identity Online</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Identity Online"/>
        <meta name="description" content="Trending News about Identity Online" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Identity Online</h1>
            <Image width={800} height={500} src="https://disrupt-africa.com/wp-content/uploads/2022/11/The-owletonline-1.jpg" alt="Identity Online"/>
            <h3>Recent News</h3>
            <a href='https://disrupt-africa.com/2022/11/21/owlet-ceo-olusehinde-kolawole-refreshes-brand-identity-with-new-owlet-app-and-owlet-online-logos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Owlet CEO Olusehinde Kolawole refreshes brand identity with new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQ7Vvk0VgtxtWn41c_R68_fQGbNVNAi147MG4pOIRBJrREzpDmLzkazK_QGm3BpG3ueg-rHcTf" alt="Owlet CEO Olusehinde Kolawole refreshes brand identity with new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Owlet is rebranding! The Owlet, home of Owlet App and Owlet Online rebrands with exciting new looks and mind-blowing features.</p></div>
            </div>
        </a>
        </Template></>;
}