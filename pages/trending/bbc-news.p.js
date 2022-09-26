import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BBC News</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BBC News"/>
        <meta name="description" content="Trending News about BBC News" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BBC News</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/D6D0/production/_126829945_a-eward.png" alt="BBC News"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/uk-england-stoke-staffordshire-63012150'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nurses wanted for Staffordshire &#39;virtual wards&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjArZKk00bLUafYc751B395HQbHs_lFC5dEbYdUMCw_SZmk7PqR1tiHwaWjdIe37_YggyJk1Am" alt="Nurses wanted for Staffordshire &#39;virtual wards&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The NHS is seeking up to 95 nurses to staff a scheme which would care for patients in their home.</p></div>
            </div>
        </a><a href='https://www.bbc.com/hindi/media-63025562'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>भारत-पाकिस्तान क्या चीन से सबक लेकर एक साथ आ पाएंगे? - BBC News ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSN7bNa6zX7GRzKOV2MXpjECFdaDKvhPZMDNZEbqqrXyJwlUZG5-1rZlBDg8xWaPbV7S-ShddwB" alt="भारत-पाकिस्तान क्या चीन से सबक लेकर एक साथ आ पाएंगे? - BBC News ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दोनों ही देशों की जनता महंगाई से परेशान है लेकिन फिर भी सीमापार से होने वाला व्यापार का&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}