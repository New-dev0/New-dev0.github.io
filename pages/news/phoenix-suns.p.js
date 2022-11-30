import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Phoenix Suns</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Phoenix Suns"/>
        <meta name="description" content="Trending News about Phoenix Suns" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Phoenix Suns</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/28/PPHX/4e69433f-e634-463e-b04e-42bb55a368dd-suns-viral-dancing-video.JPG?auto=webp&crop=685,385,x89,y165&format=pjpg&width=1200" alt="Phoenix Suns"/>
            <h3>Recent News</h3>
            <a href='https://www.azcentral.com/story/entertainment/people/2022/11/29/phoenix-suns-viral-dancing-video/69684021007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Try watching without smiling&#39;: Video of Phoenix Suns dancing with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdg7ym9ZQEhcH0H1GStc4eQZsFVS8NYg4hT_1g8wseCKNSBY5zbuEkW33VytwCvhgP2lWKA5Vz" alt="&#39;Try watching without smiling&#39;: Video of Phoenix Suns dancing with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>See Phoenix Suns players Mikal Bridges and Deandre Ayton dance with a young fan before their game against the Detroit Pistons at Footprint Center.</p></div>
            </div>
        </a>
        </Template></>;
}