import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nuno Mendes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nuno Mendes"/>
        <meta name="description" content="Trending News about Nuno Mendes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nuno Mendes</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2868861/v0bc627/og_image.jpg" alt="Nuno Mendes"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2868859'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verletzt raus - Tränen-Abgang von Portugal-Jungstar Nuno Mendes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5Ngry_XLBQaWlysIzVI95iPTI8HVjXQP9LiJtQKk-Vvtj1B89fZnO4tl75MNID8woqKD2pywv" alt="Verletzt raus - Tränen-Abgang von Portugal-Jungstar Nuno Mendes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tief traurige Szene beim Spiel zwischen Portugal und Uruguay am Montagabend! Jungstar Nuno Mendes musste kurz vor der Pause verletzt raus - und ...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-katar-portugal-youngster-nuno-mendes-erlebt-bitteres-tranen-aus-gegen-uruguay'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 Katar: Portugal-Youngster Nuno Mendes erlebt bitteres ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRP3mVfSGlgyV-7wihM5ghSNt53HY558TbcRflY-XANvNb-x_8U-mPsn2Tu3jEYg_SeoERbYqJA" alt="WM 2022 Katar: Portugal-Youngster Nuno Mendes erlebt bitteres ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der portugiesische Youngster Nuno Mendes verletzt sich im Gruppenspiel gegen Uruguay und muss den Platz verlassen. Dem 20-Jährigen stehen Tränen in den&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}