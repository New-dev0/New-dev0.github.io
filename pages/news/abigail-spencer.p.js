import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Abigail Spencer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Abigail Spencer"/>
        <meta name="description" content="Trending News about Abigail Spencer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Abigail Spencer</h1>
            <Image width={800} height={500} src="https://imgix.bustle.com/uploads/image/2022/12/8/5b742382-0a2f-4118-ac57-be08688ed383-meg1.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt="Abigail Spencer"/>
            <h3>Recent News</h3>
            <a href='https://www.bustle.com/entertainment/harry-meghan-markle-netflix-doc-abigail-spencer-suits-costar-reactions'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meghan Markle&#39;s &#39;Suits&#39; Co-Star Recalls “Screaming” Talk About ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpF5PdeEVwYqkwQavK_27Hqa9xO3R5JlHkWjOaX9Uh7EOqDOk8kvTIH3kvXLh8iLt2374nXgre" alt="Meghan Markle&#39;s &#39;Suits&#39; Co-Star Recalls “Screaming” Talk About ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I could just feel everything in her body vibrating,&quot; Abigail Spencer said, revisiting the moment she found out about her pal&#39;s royal romance.</p></div>
            </div>
        </a>
        </Template></>;
}