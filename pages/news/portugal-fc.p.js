import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal fc</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal fc"/>
        <meta name="description" content="Trending News about Portugal fc" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal fc</h1>
            <Image width={800} height={500} src="https://img.resized.co/breaking-news/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5icmVha2luZ25ld3MuaWVcXFwvcHJvZFxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMTFcXFwvMTcxNDM5NTJcXFwvR2V0dHlJbWFnZXMtMTQzNjQ2NTMzMi1lMTY2ODY5NjAyMjE1NS5qcGdcIixcIndpZHRoXCI6MTIwMCxcImhlaWdodFwiOjYyNyxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmJyZWFraW5nbmV3cy5pZVxcXC9pbWFnZXNcXFwvbm8taW1hZ2UucG5nXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjlmMGVjMDAwYTUxYmRiYThjYmJkODZjM2Y4YTQzNDk5MzFiYmU1MDcifQ==/twitter-not-objecting-to-irish-court-orders-sought-by-benfica-football-club.jpg" alt="Portugal fc"/>
            <h3>Recent News</h3>
            <a href='https://www.breakingnews.ie/ireland/twitter-not-objecting-to-irish-court-orders-sought-by-benfica-football-club-1393661.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter not objecting to Irish court orders sought by Benfica football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgdOd1YPy2eRgVlbuBQ266ddwZkuZpqhh24q2x9fTdYYcHELijFipwlyeY33y8-Y08yw_DtEpR" alt="Twitter not objecting to Irish court orders sought by Benfica football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal-based Benfica football club was Twitter to reveal the holder of an account that has posted allegedly defamatory information.</p></div>
            </div>
        </a>
        </Template></>;
}