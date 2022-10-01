import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kantara Movie Review</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kantara Movie Review"/>
        <meta name="description" content="Trending News about Kantara Movie Review" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kantara Movie Review</h1>
            <Image width={800} height={500} src="" alt="Kantara Movie Review"/>
            <h3>Recent News</h3>
            <a href='https://telugu.filmibeat.com/reviews/kantara-movie-review-and-rating-rishab-shetty-one-man-show-as-actor-and-director-113459.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kantara Movie Review రిషబ్ శెట్టికి పెర్ఫార్మెన్స్ పూనకం ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUAgfgc1-8V1QkuI599XLsosY-1Rxc6N7P3LiUP-DLZV3rWBgz6vLBH4uN0R8YHNWRQILGarVh" alt="Kantara Movie Review రిషబ్ శెట్టికి పెర్ఫార్మెన్స్ పూనకం ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rating: 3.5/5. Star Cast: రిషబ్ షెట్టి, సప్తమీ గౌడ, అచ్యుత్ కుమార్, కిషోర్ కుమార్, సుచాన్ శెట్టి.</p></div>
            </div>
        </a>
        </Template></>;
}