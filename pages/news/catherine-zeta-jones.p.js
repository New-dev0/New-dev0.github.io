import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Catherine Zeta-Jones</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Catherine Zeta-Jones"/>
        <meta name="description" content="Trending News about Catherine Zeta-Jones" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Catherine Zeta-Jones</h1>
            <Image width={800} height={500} src="https://images.hellomagazine.com/imagenes/celebrities/20221124157936/catherine-zeta-jones-statement-about-health-photo-michael-douglas-children/0-767-381/catherine-zeta-jones-family-t.jpg" alt="Catherine Zeta-Jones"/>
            <h3>Recent News</h3>
            <a href='https://www.hellomagazine.com/celebrities/20221124157936/catherine-zeta-jones-statement-about-health-photo-michael-douglas-children/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Catherine Zeta-Jones is grateful for health as she poses with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3Mh9e1Q1qJC3jMfccA9vUdTDMKBEqhoD3z16A-EyoeQ5n0nXMxufh8iVfL5iR3wcwa4QhLtf7" alt="Catherine Zeta-Jones is grateful for health as she poses with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catherine Zeta-Jones took to Instagram to make a statement about being thankful for health as she posed alongside husband Michael Douglas and their children&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/celebrity-news/1701175/catherine-zeta-jones-family-husband-michael-douglas-thanksgiving-serious-update-pictures'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Catherine Zeta Jones shares new family snap with hubby Michael ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgVV-NqRQ5oh3ywWa2JSR7dOJOIX39RKlQxu6pD6JwxkNUyzmq8ZwBLohWGB27mZfx-vtYcgRX" alt="Catherine Zeta Jones shares new family snap with hubby Michael ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catherine Zeta Jones has taken to Instagram to share a heart-warming snap as the family celebrates Thanksgiving, while also sharing their realities.</p></div>
            </div>
        </a><a href='https://www.stuff.co.nz/entertainment/celebrities/300748830/catherine-zetajones-is-grateful-for-health-as-she-celebrates-thanksgiving'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Catherine Zeta-Jones is grateful for health as she celebrates ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT27a2xHTJnBL11bv1qk6Mk2UZKgcMvnp42vdtBbUySDF9PEv1t3aZU6kbxr9jBgBqur_OknwjD" alt="Catherine Zeta-Jones is grateful for health as she celebrates ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Welsh-born actress is currently seen in the latest supernatural horror-comedy series, Wednesday on Netflix.</p></div>
            </div>
        </a>
        </Template></>;
}