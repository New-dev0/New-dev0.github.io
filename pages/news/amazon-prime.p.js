import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amazon prime</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amazon prime"/>
        <meta name="description" content="Trending News about Amazon prime" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amazon prime</h1>
            <Image width={800} height={500} src="https://tamil.cdn.zeenews.com/tamil/sites/default/files/2022/11/20/258506-jioplanprepaid.jpg" alt="Amazon prime"/>
            <h3>Recent News</h3>
            <a href='https://zeenews.india.com/tamil/technology/jio-free-amazon-prime-netflix-subscription-plan-420397'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>அன்லிமிடெட் காலிங்... நெட்பிளிக்ஸ், அமேசான் பிரைம் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKnXCJcjdrtN5SNSi36sB4vJeirMX6whnIVEDXGQ8_zvTzN14u3owlMLk5ESw2OnxTKUnoTJ3H" alt="அன்லிமிடெட் காலிங்... நெட்பிளிக்ஸ், அமேசான் பிரைம் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>அன்லிமிடெட் காலிங்... நெட்பிளிக்ஸ், அமேசான் பிரைம் இலவசம்! ஜியோவின் சூப்பர் பிளான்&nbsp;...</p></div>
            </div>
        </a><a href='https://www.seithisolai.com/%E0%AE%85%E0%AE%AE%E0%AF%87%E0%AE%9A%E0%AE%BE%E0%AE%A9%E0%AF%8D-%E0%AE%A8%E0%AF%86%E0%AE%9F%E0%AF%8D%E0%AE%83%E0%AE%AA%E0%AE%BF%E0%AE%B3%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%B8%E0%AF%8D-%E0%AE%87.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>அமேசான், நெட்ஃபிளிக்ஸ் இலவசம்.... அன்லிமிடெட் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRUy5AFRaPXj0x_H9L-FFqUZNeFVKvVn90lm0h1k3-tS4GZ5QM0z80krMjD98jCv44J1Ri7jgr" alt="அமேசான், நெட்ஃபிளிக்ஸ் இலவசம்.... அன்லிமிடெட் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>அமேசான், நெட்ஃபிளிக்ஸ் இலவசம்…. அன்லிமிடெட் காலிங்…. ஜியோவின் அசத்தல் பிளான்….!!!!</p></div>
            </div>
        </a>
        </Template></>;
}