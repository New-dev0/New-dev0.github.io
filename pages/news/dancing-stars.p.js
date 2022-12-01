import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dancing Stars</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dancing Stars"/>
        <meta name="description" content="Trending News about Dancing Stars" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dancing Stars</h1>
            <Image width={800} height={500} src="https://heute-at-prod-images.imgix.net/2022/11/29/e7a7aa0b-1c5f-4338-a1c5-53399905f9bf.jpeg?rect=2%2C0%2C1332%2C666&w=1280&auto=format" alt="Dancing Stars"/>
            <h3>Recent News</h3>
            <a href='https://www.heute.at/s/bald-bei-dancing-stars-assinger-ueberrascht-in-show-100241446'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bald bei &quot;Dancing Stars&quot;? Assinger überrascht in Show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNW3uAxTeE4omL-TcMMSzQ0ve-Bf3goKjq1mj_AtKtHmuF9brvjifKQix5BO-rtpNoJDwXG5QC" alt="Bald bei &quot;Dancing Stars&quot;? Assinger überrascht in Show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Da dürften die Zuschauer große Augen gemacht haben: Bei der Promi-&quot;Millionenshow&quot; schwang Armin Assinger plötzlich das Tanzbein.</p></div>
            </div>
        </a>
        </Template></>;
}