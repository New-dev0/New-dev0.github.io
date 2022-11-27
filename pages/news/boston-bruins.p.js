import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Boston Bruins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Boston Bruins"/>
        <meta name="description" content="Trending News about Boston Bruins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Boston Bruins</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fcausewaycrowd.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1443407216.jpeg" alt="Boston Bruins"/>
            <h3>Recent News</h3>
            <a href='https://causewaycrowd.com/2022/11/26/boston-bruins-exceeding-expectations/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boston Bruins: Five Players Exceeding Expectations</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR453muNn48xbIDEnsLgB1C6gcXPBBMlruqrBGAJW1N4EGibi2vlynSNKvR3rFI6edpw9DEqFJx" alt="Boston Bruins: Five Players Exceeding Expectations" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Randy Burridge, Bill Guerin, Tim Thomas, Brad Marchand, and David Pastrnak are among the players that have exceeded expectations on multiple occasions. The&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}