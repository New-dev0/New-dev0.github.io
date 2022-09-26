import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Babar azam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Babar azam"/>
        <meta name="description" content="Trending News about Babar azam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Babar azam</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/09/25/9bccf5f9c077ac86ddc619cad3c4c8871664101200508428_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Babar azam"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/sports/cricket/former-pakistan-player-kamran-akmal-also-sharply-criticized-captain-babar-azam-and-pcb-chairman-rameez-raja-for-poor-team-selection-2223790'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;टीम में &#39;फेवरेटिज्म&#39; को मिल रहा है बढ़ावा&#39;, बाबर आजम और PCB चेयरमैन पर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNIjao3mVQmkeEcqMfooDBylbJD0xCI749Qy18wQl2cNdS8niqS29K92qnZ0gjCafwhte9hJsf" alt="&#39;टीम में &#39;फेवरेटिज्म&#39; को मिल रहा है बढ़ावा&#39;, बाबर आजम और PCB चेयरमैन पर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kamran Akmal On Rameez Raja: एशिया कप 2022 फाइनल मैच में श्रीलंका से हारने के बाद पाकिस्तान क्रिकेट&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}