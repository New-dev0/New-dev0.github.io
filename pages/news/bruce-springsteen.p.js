import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Springsteen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Springsteen"/>
        <meta name="description" content="Trending News about Bruce Springsteen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Springsteen</h1>
            <Image width={800} height={500} src="https://i.ds.at/ttyD9w/rs:fill:1200:600/plain/2022/11/10/springsteen.jpg" alt="Bruce Springsteen"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000140711189/bruce-springsteen-ihr-lieblingslied-vom-boss'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Springsteen: Ihr Lieblingslied vom &quot;Boss&quot;?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRH2jdLbTPeJiL67SQp5IvdSvKJG3RU6PqwdeIwGj-6354Vc9oLOO13ODNZKJhFTjMbtK3p5qRd" alt="Bruce Springsteen: Ihr Lieblingslied vom &quot;Boss&quot;?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ob &quot;Born in the USA&quot;, &quot;Dancing in the Dark&quot;, &quot;Streets of Philadelphia&quot; oder &quot;I&#39;m on Fire&quot;: Welches Lied von Bruce Springsteen ist Ihr Favorit?</p></div>
            </div>
        </a>
        </Template></>;
}