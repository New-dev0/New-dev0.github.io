import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tofu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tofu"/>
        <meta name="description" content="Trending News about Tofu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tofu</h1>
            <Image width={800} height={500} src="https://article.innovadatabase.com/articleimgs/article_images/638060948348825094MicrosoftTeams-image%20(78).png" alt="Tofu"/>
            <h3>Recent News</h3>
            <a href='https://www.foodingredientsfirst.com/news/japans-historic-and-nutritious-kori-tofu-unveiled-in-europe-in-novel-cereal-bread-and-snack-applications.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Japan&#39;s historic and nutritious Kori-Tofu unveiled in Europe in novel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmB4XuWldhyrjkXLt3to1_8JzwG45NcrUui14ealB7Rss1ZmwMAvY7P1gTVEkGL7no7j9quUbI" alt="Japan&#39;s historic and nutritious Kori-Tofu unveiled in Europe in novel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Traditional Japanese Kori-Tofu has made its debut in Europe, with Asahimatsu Foods pitching the versatility of the signature tofu to food industry&nbsp;...</p></div>
            </div>
        </a><a href='https://lifehacker.com/how-to-make-a-tofu-scramble-that-doesnt-suck-1849865839'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to Make a Tofu Scramble That Doesn&#39;t Suck</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLCfKgWGs0Ukh1131z_72YLKYZe7J7THUAtU32dmKoUZZsvaA_X3sBBFXRv3yg7Vvi3V5IQWXX" alt="How to Make a Tofu Scramble That Doesn&#39;t Suck" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tofu scrambles are often the only vegan option on a brunch menu, and to be perfectly honest, they don&#39;t do that much for me. A pile of barely-cooked tofu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}