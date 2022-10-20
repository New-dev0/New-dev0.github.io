import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Babar Azam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Babar Azam"/>
        <meta name="description" content="Trending News about Babar Azam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Babar Azam</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/19/93b5c5ea869f54404763af3f749b28ca1666189401359127_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Babar Azam"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/sports/cricket/ind-vs-pak-how-babar-azam-select-the-bat-and-how-many-bats-he-carry-know-here-2241786'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs PAK: टीम इंडिया के सामने किस बैट से बल्लेबाजी करेंगे बाबर आजम ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRs4mdeaXFIf5XFtdXQULzdxZ1CQs6NYnDDLEONSPpIx7pGZ7gBSb-lmQKhaEN1le60ypzB0CAn" alt="IND vs PAK: टीम इंडिया के सामने किस बैट से बल्लेबाजी करेंगे बाबर आजम ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Babar Azam: भारत के खिलाफ महामुकाबले से पहले पाकिस्तान के कप्तान बाबर आजम ने बताया कि वह&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-t20-world-cup-2022-babar-azam-reply-on-how-many-bats-he-carries-and-when-will-get-married-4770157.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>टी20 विश्व कप में भारत के खिलाफ किस बल्ले से खेलेंगे बाबर आजम, जानिए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSebeZjjOL3DDNDn_BXeEXNrQPbSjWSgT5QAKMT_EECBKt75F_U628TThNKGDv1viK99CBdzyo" alt="टी20 विश्व कप में भारत के खिलाफ किस बल्ले से खेलेंगे बाबर आजम, जानिए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टी20 विश्व कप में 23 अक्टूबर को भारत और पाकिस्तान की टीमें आमने-सामने होने वाली हैं.</p></div>
            </div>
        </a>
        </Template></>;
}