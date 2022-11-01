import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gmail</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gmail"/>
        <meta name="description" content="Trending News about Gmail" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gmail</h1>
            <Image width={800} height={500} src="http://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2022/10/31/108109-gmail.jpg?itok=KMEo0L5T" alt="Gmail"/>
            <h3>Recent News</h3>
            <a href='https://www.zeebiz.com/hindi/how-to-recall-send-email-in-gmail-know-step-by-step-process-102011'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>क्या आपके Gmail से गलत जगह Email चला गया? जानिए कैसे इसे रिकॉल कर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlDfyOHN_FMUv8sNUIK5j-q-njYyLVSXN3BLcQNe0cWPn3BHgiwEqO3bwf2yFLDjEuFGFQ5xaB" alt="क्या आपके Gmail से गलत जगह Email चला गया? जानिए कैसे इसे रिकॉल कर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recall send email in Gmail: अगर आपने गलती से किसी और ईमेल आईडी पर मेल सेंड कर दिया तो Gmail उसे रिकॉल&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/technology-science/how-to-recall-an-email-in-gmail-article-95206828'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to recall an email in Gmail</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGu0b-gD9Rdl5QkFzaFg7S2FDKglgD48wzYwUK06k0fjsIpGTt45644mZAddODBmPJwyOWeQOW" alt="How to recall an email in Gmail" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The documents could contain personal information, and you might have sent them to the wrong email address. Mistaken email delivery to the recipient is another&nbsp;...</p></div>
            </div>
        </a><a href='https://www.androidpolice.com/how-to-create-gmail-group-email/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to create a group email in Gmail</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcReMRwu2aj0C2AeAXqflzT-tXh7LZKXqoS0R7W-agzmAItbwPLEBCFDmDAU0iJH86_XBRfzp4hL" alt="How to create a group email in Gmail" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gmail allows you to create group emails from your browser or the app. The process is similar for both and only takes a few minutes to set up.</p></div>
            </div>
        </a><a href='https://mmnews.tv/gmail-offers-option-to-retrieve-sent-email/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gmail offers option to retrieve sent email</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJdRJJG38ja1ud2mhV9L8V8VN0t68BzBgy2TPN8zPqSK1_enHsmzdBRkc6toBYIz8vY_uZYqhE" alt="Gmail offers option to retrieve sent email" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The undo tool in Gmail is one of its most useful and underutilized functions. If you want to use this feature, you have 30 seconds to edit or cancel an&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gnttv.com/technology/story/found-mistake-your-sent-email-use-undo-send-feature-gmail-recall-your-mail-465163-2022-10-31'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>भेजे गए Email में हो गई है गलती? ऐसे करें Undo Send फीचर का इस्तेमाल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpEccv4cElwlKzjL0PnfHTMjgErAVp1U4KBHMjc27cVw7o2WpuPf-5nzBAGIT_ylnuJDGXh063" alt="भेजे गए Email में हो गई है गलती? ऐसे करें Undo Send फीचर का इस्तेमाल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>जीमेल यूजर्स को अपने मेल को वापस लेने वाला ऑप्शन देता है. हालांकि, इसके बारे में बहुत&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}