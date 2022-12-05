import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Laura Whitmore</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Laura Whitmore"/>
        <meta name="description" content="Trending News about Laura Whitmore" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Laura Whitmore</h1>
            <Image width={800} height={500} src="https://metro.co.uk/wp-content/uploads/2022/12/SEI_136013953-3fea_1670175993.jpg?quality=90&strip=all&w=1200&h=630&crop=1" alt="Laura Whitmore"/>
            <h3>Recent News</h3>
            <a href='https://metro.co.uk/2022/12/04/laura-whitmore-shares-rare-snap-of-daughter-decorating-christmas-tree-17875830/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Laura Whitmore shares rare snap of daughter decorating Christmas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyqbIA3F5-4xEpHF696vr9lrwjcqyhIjuKZsZIJrqur0loBE7GB-4-z6oW6_IdChraF1LUTyuq" alt="Laura Whitmore shares rare snap of daughter decorating Christmas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laura Whitemore uploaded sweet Christmassy snaps of her daughter who she shares with Iain Stirling (Picture: Shutterstock).</p></div>
            </div>
        </a>
        </Template></>;
}