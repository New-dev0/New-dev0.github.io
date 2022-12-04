import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Fallout</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Fallout"/>
        <meta name="description" content="Trending News about The Fallout" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Fallout</h1>
            <Image width={800} height={500} src="" alt="The Fallout"/>
            <h3>Recent News</h3>
            <a href='https://gamerant.com/fallout-new-vegas-every-raider-gang-fiends-great-khans/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Every Raider Gang in Fallout: New Vegas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvZoaF6RR9A54ScWTNGCbMzCuwo8w3RPXF5XHuF1sAQ6Ho2Qmn0R9aBfpzgIoBUjRYwux_aPh4" alt="Every Raider Gang in Fallout: New Vegas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There are a variety of raider gangs in Fallout: New Vegas and these groups are what add that extra flavor to the Mojave Wasteland.</p></div>
            </div>
        </a>
        </Template></>;
}