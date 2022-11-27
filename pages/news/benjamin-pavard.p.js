import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benjamin Pavard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benjamin Pavard"/>
        <meta name="description" content="Trending News about Benjamin Pavard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benjamin Pavard</h1>
            <Image width={800} height={500} src="http://media1.woopic.com/api/v1/images/219%2Ftendances%2FArticles-Syndiques%2Fa1f%2Fe70%2F3f4c2e29012ae389407d4edb87%2Fbenjamin-pavard-separe-de-rachel-legrain-trapani-le-beau-gosse-est-il-toujours-celibataire%7C7286116-benjamin-pavard-montee-des-marches-du-orig-3.jpg?format=470x264&facedetect=1&quality=85" alt="Benjamin Pavard"/>
            <h3>Recent News</h3>
            <a href='https://tendances.orange.fr/culture-pop/people/article-benjamin-pavard-separe-de-rachel-legrain-trapani-le-beau-gosse-est-il-toujours-celibataire-CNT000001Vel55.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benjamin Pavard séparé de Rachel Legrain-Trapani : le beau gosse ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQV3naSlWKnOkSrmVdC9VRRE3-h0Ay5j0VBarmQ39n6A5IN24dQRojFRnfqMzyWKf5sKbkGdkx" alt="Benjamin Pavard séparé de Rachel Legrain-Trapani : le beau gosse ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que la France s&#39;apprête à affronter le Danemark aujourd&#39;hui, elle pourra compter sur le talent de Benjamin Pavard, chouchou du public depuis la Coupe&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}