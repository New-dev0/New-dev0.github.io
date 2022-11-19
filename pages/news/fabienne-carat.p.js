import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fabienne carat</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fabienne carat"/>
        <meta name="description" content="Trending News about Fabienne carat" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fabienne carat</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/cms/1200x630_crop/2022/11/18/6d93dfa97b0ec7cc1fed7601042779661c41060968ac22ab174f564386e171a3.jpg" alt="Fabienne carat"/>
            <h3>Recent News</h3>
            <a href='https://tvmag.lefigaro.fr/programme-tv/actu-tele/fabienne-carat-laetitia-millot-sara-mortensen-ces-actrices-decouvertes-dans-plus-belle-la-vie-20221118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fabienne Carat, Laëtitia Millot, Sara Mortensen... Ces actrices ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkd7cuuU5njm7wS7GAa-LhV0w52IVCeGHthcPSnVnqMQAEjLfvSlF6IqSLJ-jZ-9sDgD5jm152" alt="Fabienne Carat, Laëtitia Millot, Sara Mortensen... Ces actrices ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après plus de dix-huit ans de bons et loyaux services, le programme tire sa révérence. Pour l&#39;occasion, Le Figaro a recensé les comédiennes dont la carrière&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}