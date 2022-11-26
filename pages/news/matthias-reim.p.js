import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matthias Reim</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matthias Reim"/>
        <meta name="description" content="Trending News about Matthias Reim" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matthias Reim</h1>
            <Image width={800} height={500} src="https://bilder3.n-tv.de/img/incoming/crop23744386/7221324254-cImg_16_9-w1200/256182089.jpg" alt="Matthias Reim"/>
            <h3>Recent News</h3>
            <a href='https://www.n-tv.de/leute/Matthias-Reim-laesst-sich-nicht-unterkriegen-article23744382.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Von Insolvenz bis Burnout: Matthias Reim lässt sich nicht unterkriegen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsqq19k_PLrWr0QT2VKiN-9a7zqFdvMwEspCd18i-qqfU59NfGJ1opecdZvuoD72ybTxTNyebD" alt="Von Insolvenz bis Burnout: Matthias Reim lässt sich nicht unterkriegen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matthias Reim gelingt das, was vielen Musikerinnen und Musikern gern gelingen würde: ein Song für die Ewigkeit, den so schnell keiner mehr vergisst.</p></div>
            </div>
        </a><a href='https://www.tz.de/stars/hochs-und-tiefs-eines-schlagerstars-matthias-reim-wird-65-zr-91940148.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hochs und Tiefs eines Schlagerstars: Matthias Reim wird 65</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKgeiIWxF0ukCbbBQa1IyNammgjZ32UW_HNV1pgdWVjBOmxd5MMErKYqoFymmNmAdFL_C-S1bS" alt="Hochs und Tiefs eines Schlagerstars: Matthias Reim wird 65" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matthias Reim gehört zu den berühmtesten Schlagerstars Deutschlands. Schlagzeilen machte er aber nicht nur mit seiner Musik. Nun wird er 65 und zieht&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mdr.de/meine-schlagerwelt/bewegte-fuenfundsechzig-jahre-matthias-reim-feiert-geburtstag-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthias Reim wird 65 und denkt nicht ans Aufhören</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrx7t5lTm0WgG6VpsOZPFWVYSxTlKN_3oiuf8aaSY5-G3X9TGIoJ29h1yQFhrhRJJw07bW6SQd" alt="Matthias Reim wird 65 und denkt nicht ans Aufhören" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matthias Reim gehört seit den 90er Jahren zu den berühmtesten Schlagerstars im deutschsprachigen Raum. Schlagzeilen machte er während seiner Karriere aber&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nordkurier.de/ueckermuende/hat-matthias-reim-noch-groessere-fans-als-diese-beiden-2550466311.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schlager-Kult: Hat Matthias Reim noch größere Fans als diese ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6YSXTlZKWwQcM32s5P3ykHk0EaII0-0hHVE78ZmzMrgY_ttwhlbxownWcuzxD6P_Nn4d2ovIg" alt="Schlager-Kult: Hat Matthias Reim noch größere Fans als diese ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zwei Torgelower bezeichnen sich als die größten Fans des Sängers Matthias Reim. Sogar auf ihrem Grabstein soll später einmal der Name ihres Idols stehen.</p></div>
            </div>
        </a><a href='https://www.express.de/promi-und-show/schlager/matthias-reim-wird-65-die-hoehen-und-tiefen-der-schlager-ikone-373923'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthias Reim wird 65: Die Höhen und Tiefen der Schlager-Ikone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuNi4x3kxCNLNq3J8tnor4Nq_mqPo_uATril9t-71JVSMIJIopjh6H5O1gP0ZRw5UxdGu3G2AV" alt="Matthias Reim wird 65: Die Höhen und Tiefen der Schlager-Ikone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schlagerikone Matthias Reim wird 65. Der Sänger des Megahits „Verdammt ich lieb dich“ hat in seinem Leben viele Höhen und Tiefen erlebt, sowohl privat als&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}