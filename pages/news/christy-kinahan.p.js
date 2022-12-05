import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christy Kinahan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christy Kinahan"/>
        <meta name="description" content="Trending News about Christy Kinahan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christy Kinahan</h1>
            <Image width={800} height={500} src="" alt="Christy Kinahan"/>
            <h3>Recent News</h3>
            <a href='https://www.sundayworld.com/crime/irish-crime/dapper-don-christy-kinahan-facing-four-years-in-prison-after-being-indicted-in-spain/681064714.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Dapper Don&#39; Christy Kinahan facing four years in prison after being ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSr7O-GxEIvp9ZbjXmHWlmQnmmmvXW7ayqwuG4VD8MtIKgZf0Lb9fdH_4BS1cFQ9PVljCLU5PZN" alt="&#39;Dapper Don&#39; Christy Kinahan facing four years in prison after being ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CRIME godfather Christy Kinahan Snr will have to return to the Costa del Sol for his passport fraud trial after being indicted by Spanish prosecutors and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theolivepress.es/spain-news/2022/12/02/twelve-year-operation-shovel-fizzles-out-with-dapper-don-christy-kinahan-sr-facing-just-four-years-in-jail-over-passport-fraud/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twelve-year Operation Shovel fizzles out with &#39;Dapper Don&#39; Christy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBLsDLo0THph12putDiuS4vJCMfNT2VkqDIb9ybtM5V3D7LwWhYsEoSxyq54fqZcX-ijFPXZAd" alt="Twelve-year Operation Shovel fizzles out with &#39;Dapper Don&#39; Christy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christy Kinahan Sr, the alleged head of a drug trafficking empire, is facing a return to Spain to stand trial and a potential four-year jail sentence in.</p></div>
            </div>
        </a>
        </Template></>;
}