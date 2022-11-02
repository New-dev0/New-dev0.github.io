import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>All Souls' Day</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,All Souls' Day"/>
        <meta name="description" content="Trending News about All Souls' Day" /></Head><Template>
            <h1 style={{fontSize: "30"}}>All Souls' Day</h1>
            <Image width={800} height={500} src="https://www.thegoan.net/uploads/news/big_90897_IMG-20221101-WA0014_01112022_ANT.jpg" alt="All Souls' Day"/>
            <h3>Recent News</h3>
            <a href='https://www.thegoan.net/goa-news/agonda-cemetery-decked-up-for-all-souls-day/90897.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Agonda cemetery decked up for All Souls Day</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRm7XaR4IUmkDwb-1iBXN_AHkrORkLx48kenZUccVeniQIdZPpNhOe0AoKtbJXcXQXHOIDWbVg7" alt="Agonda cemetery decked up for All Souls Day" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Graves cemeteries across Canacona taluka have been cleaned and decorated with flowers by respective parishioners of the individual parishes in preparation&nbsp;...</p></div>
            </div>
        </a><a href='https://hungarytoday.hu/all-souls-day-in-hungary/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All Souls&#39; Day in Hungary</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQBNejqybIBxDa68HxVMgKzGbPe7cQjhpwMC8dB7vm5JRYdul8KZ1eBoIjnSVjzR_i8-Fkgu9k" alt="All Souls&#39; Day in Hungary" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All Souls&#39; Day – also known as the Day of the Dead (Halottak napja) in Hungary -, is a day of prayer and remembrance for the faithful departed,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}