import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ireland vs Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ireland vs Australia"/>
        <meta name="description" content="Trending News about Ireland vs Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ireland vs Australia</h1>
            <Image width={800} height={500} src="https://img.resized.co/balls_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLmJhbGxzLmllXFxcL3VwbG9hZHNcXFwvMjAyMlxcXC8xMVxcXC8yMDE4MDU1MVxcXC9VbnRpdGxlZC1kZXNpZ24tOTcxLnBuZ1wiLFwid2lkdGhcIjoxMjAwLFwiaGVpZ2h0XCI6NjI3LFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuYmFsbHMuaWVcXFwvaW1hZ2VzXFxcL2JyYW5kLWltYWdlLmpwZ1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI0MzExYjNmN2U5YmVlYmI2ZDZkMjllZjE5Nzk4NDUwY2Q5YzM4NjUzIn0=/referee-ben-o-keeffe-shares-shocking-instagram-abuse-after-ireland-australia-clash-balls-ie.png" alt="Ireland vs Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.balls.ie/rugby/ireland-australia-ben-okeefe-533424'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Referee Ben O&#39;Keeffe Shares Shocking Instagram Abuse After ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgNeQ2cOysTKuXICxxTU3zh1sxhOIZS5UZWdklowfy8xq8dMtghppi9ME5U1gOPQEW-OlpkQhs" alt="Referee Ben O&#39;Keeffe Shares Shocking Instagram Abuse After ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Referee Ben O&#39;Keeffe shared some of the horrible abusive messages he received following Ireland vs Australia at the Aviva Stadium last night.</p></div>
            </div>
        </a>
        </Template></>;
}