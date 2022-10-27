import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Messi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Messi"/>
        <meta name="description" content="Trending News about Messi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Messi</h1>
            <Image width={800} height={500} src="https://www.madhyamam.com/h-upload/2022/10/26/1825415-messi-23.jpg" alt="Messi"/>
            <h3>Recent News</h3>
            <a href='https://www.madhyamam.com/sports/football/lionel-messi-breaks-peles-record-for-most-goals-assists-ever-1088998'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>പെലെയെ മറികടന്ന് മെസി | Madhyamam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSM9XyAkV9vCvr1_Nzc1_JWoPSIlnAnId8BrmNXqeawnrwPyYkMt9g57LSpadlZu9VCG2g-zdH7" alt="പെലെയെ മറികടന്ന് മെസി | Madhyamam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ബ്യൂണസ് അയേഴ്സ്: റെക്കോർഡ് ബുക്കിൽ ബ്രസീലിയൻ സൂപ്പർ താരം പെലെയെ മറികടന്ന്&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kairalinewsonline.com/2022/10/26/568910.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi; കരാർ കാലാവധി ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWeIij1MrQcLYLMnFw7jNfe3iEL0C7HO-pgee1Pz9om9Y6HJVDTjxe_PjqkoQuO8cU-I9xiwi2" alt="Lionel Messi; കരാർ കാലാവധി ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>അർജന്റീനിയൻ ഇതാഹസ താരം ലയണൽ മെസി ഉജ്ജ്വല ഫോമിലാണ്. സീസണിൽ മികച്ച പ്രകടനം&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}