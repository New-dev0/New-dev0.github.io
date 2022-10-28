import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bade Achhe Lagte Hain 2</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bade Achhe Lagte Hain 2"/>
        <meta name="description" content="Trending News about Bade Achhe Lagte Hain 2" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bade Achhe Lagte Hain 2</h1>
            <Image width={800} height={500} src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/10/2022_10$largeimg_645562353.JPEG" alt="Bade Achhe Lagte Hain 2"/>
            <h3>Recent News</h3>
            <a href='https://www.tribuneindia.com/news/lifestyle/anjum-fakih-who-is-seen-in-kundali-bhagya-as-well-as-bade-achhe-lagte-hain-2-confesses-her-love-for-negative-roles-444840'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anjum Fakih, who is seen in Kundali Bhagya as well as Bade Achhe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAxTI1JzGiBO1lNf6aQL2xRiz2LhXI4Df1BKjguvnMvWQ1l4WazADvGkrpcOZD1hgCLx4i_3eH" alt="Anjum Fakih, who is seen in Kundali Bhagya as well as Bade Achhe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Says Anjum, “Playing negative or grey characters excites me to another level. I have always thought of becoming the vamp of Indian television, but I believe&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}