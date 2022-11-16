import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Doddie Weir</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Doddie Weir"/>
        <meta name="description" content="Trending News about Doddie Weir" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Doddie Weir</h1>
            <Image width={800} height={500} src="https://www.ruck.co.uk/wp-content/uploads/2022/11/Screenshot-2022-11-14-at-08.33.54.png" alt="Doddie Weir"/>
            <h3>Recent News</h3>
            <a href='https://www.ruck.co.uk/doddie-weirs-son-plays-very-different-position-to-his-dad-hes-absolutely-rapid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doddie Weir&#39;s son plays very different position to his Dad, he&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIvmmHMhzvvK1NqQjOuryoWg8Ot20CgeVduZ6vZfYxq3KBNoJu-H2nQ71GsAlyGuIpvUzbOz39" alt="Doddie Weir&#39;s son plays very different position to his Dad, he&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doddie Weir has been enjoying watching his eldest son Hamish follow in his footsteps and play for the Melrose first team this season.</p></div>
            </div>
        </a>
        </Template></>;
}