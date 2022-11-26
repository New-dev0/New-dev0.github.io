import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Carhartt</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Carhartt"/>
        <meta name="description" content="Trending News about Carhartt" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Carhartt</h1>
            <Image width={800} height={500} src="https://www.cio.com/wp-content/uploads/2022/11/Katrina-Agusti-HR-copy.jpg?quality=50&strip=all&w=1024" alt="Carhartt"/>
            <h3>Recent News</h3>
            <a href='https://www.cio.com/article/413012/carhartt-turns-to-data-under-new-cio.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carhartt turns to data under new CIO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoSXE2yBeft44BkTzhoMoer5K7jhOzgDWy-v_EIlAKseqT2XU3VidFzzKUmnqw-ixbAKEbfQb8" alt="Carhartt turns to data under new CIO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19-year Carhartt vet Katrina Agusti takes the IT reins at the workwear manufacturer with an eye toward capitalizing on its cloud journey by improving data&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}