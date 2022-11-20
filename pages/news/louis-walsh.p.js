import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Louis Walsh</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Louis Walsh"/>
        <meta name="description" content="Trending News about Louis Walsh" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Louis Walsh</h1>
            <Image width={800} height={500} src="https://focus.sundayworld.com/4wc06J9Th2QHh9acNNkW8Zp_6s4=/0x0/smart/prod-mh-ireland/052109b9-78a2-4a21-825f-f67e40986493/51a5085b-3833-4292-82c1-1eb6c6b77776/PL.jpg" alt="Louis Walsh"/>
            <h3>Recent News</h3>
            <a href='https://www.sundayworld.com/showbiz/irish-showbiz/louis-walsh-says-ronan-keating-is-not-good-enough-to-be-the-new-james-bond/1426568092.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louis Walsh says Ronan Keating is &#39;not good enough&#39; to be the new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVfbX4V_rDJR1eVEB5jiGuvRvLRLV0zu82Ue2tkHEGqhD10vWzK91c0fCGfFvRHefx1x0sVx88" alt="Louis Walsh says Ronan Keating is &#39;not good enough&#39; to be the new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Louis Walsh has said Ronan Keating is “not good enough” to be the next James Bond as the search begins for Daniel Craig&#39;s replacement.</p></div>
            </div>
        </a><a href='https://extra.ie/2022/11/19/entertainment/ronan-keating-storm-louis-walsh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronan Keating&#39;s Night Out With Storm After Louis Walsh Admits He&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRTrdwA2Vb43Bv6JgWahvgdnalqUhT61qzEYQtXvu1HU9VrWp7EyJV_L_F3OGP3vSvgr0TtabR" alt="Ronan Keating&#39;s Night Out With Storm After Louis Walsh Admits He&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ronan Keating enjoyed a night out in London with his wife Storm after his former manager Louis Walsh fired a broadside at him on RTE.</p></div>
            </div>
        </a>
        </Template></>;
}