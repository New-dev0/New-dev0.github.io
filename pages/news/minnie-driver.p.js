import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Minnie Driver</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Minnie Driver"/>
        <meta name="description" content="Trending News about Minnie Driver" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Minnie Driver</h1>
            <Image width={800} height={500} src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/12/minnie-driver-attends-20th-century-769732910.jpg?crop=721px%2C105px%2C2003px%2C1336px&resize=1920%2C1080" alt="Minnie Driver"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.ie/tvandshowbiz/9842501/maeve-binchy-minnie-driver-inside-surprise-friendship-simple-question/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maeve Binchy would write to me and ask simple question after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmPAM-EHO3yCNVbpkYof6Wwcpnmmm9xXwY1Qw-WmqBA3p627rZB03NVB093zZnrWjbnSELzhiR" alt="Maeve Binchy would write to me and ask simple question after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ACTRESS Minnie Driver has revealed Maeve Binchy used to write to her to make sure she was eating.The pair grew close when Minnie was cast in the 1995.</p></div>
            </div>
        </a>
        </Template></>;
}