import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vivo Y16</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vivo Y16"/>
        <meta name="description" content="Trending News about Vivo Y16" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vivo Y16</h1>
            <Image width={800} height={500} src="https://malayalam.samayam.com/photo/msid-94476364,imgsize-123/pic.jpg" alt="Vivo Y16"/>
            <h3>Recent News</h3>
            <a href='https://malayalam.samayam.com/tech/news/vivo-y16-budget-smartphone-launched-in-india/articleshow/94476359.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vivo Y16 | ബജറ്റ് വിപണി പിടിക്കാൻ വിവോ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFI9TJ6qriJHiJD-hPx-PCxfPpqz9HRpgLLTdGs3DXiJ_hG6i8eWqqBgfAYMPeStdUL4X-j5Dl" alt="Vivo Y16 | ബജറ്റ് വിപണി പിടിക്കാൻ വിവോ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>newsVivo Y16 |വിവോ വൈ16 രണ്ട് വേരിയന്റുകളിലാണ് ഇന്ത്യയിലെത്തിയത്. ബേസ് വേരിയന്റിൽ 3 ജിബി&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/malayalam/technology/vivo-y16-launched-in-india-with-13mp-camera-5000mah-battery-check-price-specs-details-107712'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vivo Y16 : വിവോയുടെ പുതിയ ബജറ്റ് ഫോൺ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQThzOzmO-FWHx4zUjLgjQIJ2CoLFdnu0N1TwbRsAN1S5XYBCA9AmetulFs_odghSBvZOEHePW" alt="Vivo Y16 : വിവോയുടെ പുതിയ ബജറ്റ് ഫോൺ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>5000 എംഎഎച്ച് ബാറ്ററി, 13 എംപി ഡ്യുവൽ റിയർ ക്യാമറ സെറ്റപ്പ്, മീഡിയടെക് ഹീലിയോ പി35&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}