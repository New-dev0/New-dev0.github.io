import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brooklyn</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brooklyn"/>
        <meta name="description" content="Trending News about Brooklyn" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brooklyn</h1>
            <Image width={800} height={500} src="https://media.architecturaldigest.com/photos/6377b425abb4b34435a704d5/16:9/w_1280,c_limit/1381547264" alt="Brooklyn"/>
            <h3>Recent News</h3>
            <a href='https://www.architecturaldigest.com/story/vanessa-hudgens-sells-condo-in-historic-brooklyn-waterfront-building'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vanessa Hudgens Sells Condo in Historic Brooklyn Waterfront ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqxeJ6aWs8io5sSArKl1M1zHUs3J7KUfEz85GawC-Aeb0jYnVjRp3XQ4i0XprUO1dVPJeOzkoZ" alt="Vanessa Hudgens Sells Condo in Historic Brooklyn Waterfront ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vanessa Hudgens bought a unit in the Cass Gilbert–designed building in 2018 and has now sold it at a loss.</p></div>
            </div>
        </a><a href='https://ny.eater.com/2022/11/18/23466283/ariapita-opening-restaurant-brooklyn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caribbean Restaurant Ariapita Opens in Brooklyn</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQihuntH0GZOcah5CFuNxF7cuzT-IZgI88RCKhHaMMyfpUzNXaguaSRpaoXTwM8mRDrRg_m2IZB" alt="Caribbean Restaurant Ariapita Opens in Brooklyn" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With dishes like curries and bhaji (leafy greens in coconut milk) as well as ingredients like coconut, cumin, and cassava that reflect the West African, Indian,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bkmag.com/2022/11/18/tweets-of-the-week-wait-could-this-be-our-last-roundup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tweets of the Week: Wait, could this be our last roundup? - Brooklyn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQtIkHbEzw1re1GArTAj14j5g-A2cL9fl1iJpExWxYNzpaT4g8qAveEroebX6mPyvc-wgPEoMl" alt="Tweets of the Week: Wait, could this be our last roundup? - Brooklyn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This week we ponder what to do if Twitter dies, &#39;totally normal&#39; November weather, dating woes and the Dems&#39; new leader, Rep. Jeffries.</p></div>
            </div>
        </a>
        </Template></>;
}