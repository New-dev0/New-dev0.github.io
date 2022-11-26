import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kilcullen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kilcullen"/>
        <meta name="description" content="Trending News about Kilcullen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kilcullen</h1>
            <Image width={800} height={500} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSz-c3f-ABOJwwWiI3hQsWbYBD8RnbuXNIA6tM4Ou6DnWfIaxLxbexlcb8vNyKHGzadwQ6zjTZ_x8IHOzzRWfPAb5KUFoL3TgayA5F4kK2BbZ-HKOotnHVhVCl8RPBjG_s3gz3MOqEAfgvRXGwbMVh39uZSMZd2SgcYVXcjjqjEoM0lMEHCv4/w1200-h630-p-k-no-nu/billy.png" alt="Kilcullen"/>
            <h3>Recent News</h3>
            <a href='https://kilcullenbridge.blogspot.com/2022/11/billy-is-toy-show-star.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Billy is a Toy Show star</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStUFnaD-TbtI6cl1IW-StAm2AGPgQu_Hz5Lrxv8-nL5p2qAt9p-k7U_H3_EW-HnTfdjiQx7kJN" alt="Billy is a Toy Show star" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Another subject has been posted in the &#39;People of the Holly Bush&#39; Kilcullen profiles project by Kieran Behan and Brian Byrne. He is Martin Murphy. CONTACT US.</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/whats-on/rte-late-late-toy-show-25610870'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTE Late Late Toy Show viewers react to seven-year-old Garda Billy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJVbweVhintwrQBTlnv3Zpi17j8Pbu8L3GeDOh2ITm5JrFGZ6FsC3kC2SAfNKkE-2BvZfWEcGU" alt="RTE Late Late Toy Show viewers react to seven-year-old Garda Billy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Kilcullen native stole tonight&#39;s show and delighted viewers around the country. He sported a stylish mullet, and when asked by Tubs to describe the haircut&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.ie/2022/11/25/entertainment/toy-show-billy-brady'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irish Twitter Calls For Kildare Youngster To Be Next President ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRm8Tt8d9UQx2yivTEjnkoQNijjghb10DzZkf6bIsTHzIKRAeRlrYwoMK5rOPTYevQWAaPHdoiT" alt="Irish Twitter Calls For Kildare Youngster To Be Next President ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kildare 7-year-old &#39;local lad&#39; Billy Brady won the hearts of the nation in the opening minutes of the highly-anticipated Late Late Toy Show on Friday&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}