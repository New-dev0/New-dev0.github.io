import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enzo fernandez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enzo fernandez"/>
        <meta name="description" content="Trending News about Enzo fernandez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enzo fernandez</h1>
            <Image width={800} height={500} src="https://www.lavenir.net/resizer/gC-HVRL0WYquQUYvTGl5BkefWME=/1200x630/filters:format(jpeg):focal(545x371.5:555x361.5):watermark(cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/UFVD77VYQZHRHBUO5OR7E7I6TY.png,0,-0,0,100)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/ISH3VCIBW5HP3DKVJRW46VDOAY.jpg" alt="Enzo fernandez"/>
            <h3>Recent News</h3>
            <a href='https://www.lavenir.net/sports/football/2022/11/26/le-but-sublime-denzo-fernandez-le-jeune-crack-de-largentine-video-5VOXVB6MJBEGPMLMYDDKLQSIQ4/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le but sublime d&#39;Enzo Fernández, le jeune crack de l&#39;Argentine (vidéo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSX3S-OVcsycJVnWYMuFVfU5IP-9LX2Tuc1v4_wi44BagAv2-AosciU9PuzJjI1h8nsIauCbIis" alt="Le but sublime d&#39;Enzo Fernández, le jeune crack de l&#39;Argentine (vidéo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le jeune milieu de terrain argentin a fait une entrée remarquée face au Mexique, ponctuée par un joli but.</p></div>
            </div>
        </a>
        </Template></>;
}