import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bank Strike</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bank Strike"/>
        <meta name="description" content="Trending News about Bank Strike" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bank Strike</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202211/bank_strike_0-sixteen_nine.jpg" alt="Bank Strike"/>
            <h3>Recent News</h3>
            <a href='https://www.aajtak.in/business/utility/story/nation-wide-bank-strike-on-19-nov-called-off-by-aibea-know-the-details-tutd-1578808-2022-11-19'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank Strike: निकल गया बीच का रास्ता, आज बैंक नहीं रहेंगे बंद</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0IbMshAJtxrRnUPDlBkXI9yvTT4Fq97zZwPqK_x2Jega6GidqiVxoV5KEmnBgAn8x4DSCJ7v5" alt="Bank Strike: निकल गया बीच का रास्ता, आज बैंक नहीं रहेंगे बंद" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bank Strike: 19 नवंबर को होने वाली बैंक की हड़ताल टल गई है. कर्मचारियों और बैंक संघ के बीच&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/business/nationwide-bank-strike-called-off-all-banking-transactions-to-continue-report-101668828078358.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nationwide Bank strike called off, all banking transactions to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWc3iR0ol4RjHww9r9hB1mjL2gkHYaMGr03C53xo119GKcpW_5lciDSCwKnS5y7EQ9XYXWkPyX" alt="Nationwide Bank strike called off, all banking transactions to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earlier, the bank employees were scheduled to go on strike today over several issues which include violation of Industrial Disputes Act, harassment of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/uttar-pradesh/meerut-city-bank-strike-news-nationwide-strike-in-banks-today-functioning-may-be-affected-in-meerut-also-23213757.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank Strike: बैंकों में आज होने वाली देशव्यापी प्रस्‍तावित हड़ताल स्‍थगित ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6ga6P1KSNrKyZY8twXY6LTP7HBRBWW3uH2yZeueWEx6S61QsYrxGQN413t5ty4vLub2v7rPqm" alt="Bank Strike: बैंकों में आज होने वाली देशव्यापी प्रस्‍तावित हड़ताल स्‍थगित ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मेरठ, जागरण संवाददाता। Bank Strike ऑल इंडिया बैंक एम्पलाइज एसोसिएशन (एआइबीइए) ने शनिवार को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/bank-strike-19-november-postponed-bank-customers-got-relief-2262493'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank Strike: आज होने वाली बैंक कर्मचारियों की देशव्यापी हड़ताल टली ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNB4B9HRGFygtALJgCWyVcJtt26ulnBdk6QD6HwSblAfKEfsGRG0R65w8qK1uYxKtSoQasB6Ak" alt="Bank Strike: आज होने वाली बैंक कर्मचारियों की देशव्यापी हड़ताल टली ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bank Strike News: बैंक यूनियनों ने कर्मचारियों को निकाले जाने, आउटसोर्सिंग और वेज रिवीजन को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/aibea-calls-off-19-nov-nation-wide-bank-strike-11668791386192.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nation-wide bank strike on 19 Nov called off by AIBEA | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuw4AvJxKVgNgpmNJnI_sLEpd8TlZtvhMhwNCYwe5JoD_Xn9RlaICUCXTaN90wuSxopgllTxyT" alt="Nation-wide bank strike on 19 Nov called off by AIBEA | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Indian Banks&#39; Association (IBA) has agreed to address the majority of the demands made by the All India Bank Employees&#39; Association (AIBEA),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.india.com/hindi-news/business-hindi/bank-strike-cancel-today-bank-employees-have-decided-to-cancel-the-nationwide-strike-be-happy-banks-now-open-today-5751732/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank Strike: बैंककर्मियों ने वापस लिया देशव्यापी हड़ताल का फैसला, आज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY8Qqlqjk2UkflEZnBVMa06x3SYkGfIVRNfmwcjzaLzUbrxa0bOSD6YCbNGqxuZ3Rl26_i4Vez" alt="Bank Strike: बैंककर्मियों ने वापस लिया देशव्यापी हड़ताल का फैसला, आज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एआईबीईए के महासचिव सीएच वेंकटचलम ने बताया कि जिन मुद्दों को लेकर हड़ताल प्रस्तावित थी,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/personal-finance/bank-strike-deferred-after-aibea-meeting-with-chief-labour-commissioner-15209171.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank Strike Deferred after AIBEA meeting with Chief Labour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRhtzXsWYg6P7dudhclN0eNCvLiZ8UY7vy56ON6F2R9TcoAGvvlbW9hFiDG2j9gYF4bsV3KmQl" alt="Bank Strike Deferred after AIBEA meeting with Chief Labour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bankers had threatened to go on strike protesting against issues like layoffs, outsourcing, and delays in implementing wage revisions, among others.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/personal-finance/news-bank-strike-on-nov-19-aibea-calls-off-todays-nation-wide-bank-strike-208567'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank strike on Nov 19: AIBEA calls off today&#39;s nation-wide bank strike</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNTQiLupMKjWzmm52HnfVoP9S1UE4wZakH8Mu8RejVnXX9ZYAUkjNEL8E5PFwN6ZFU3PuOYQp0" alt="Bank strike on Nov 19: AIBEA calls off today&#39;s nation-wide bank strike" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The All India Bank Employees&#39; Association (AIBEA) has withdrawn its November 19 strike call after an understanding was reached with the Indian Banks&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/business/business-news/bank-strike-on-19-november-bank-atm-service-hit-on-saturday-all-over-the-nation/articleshow/95605634.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank Strike: वीकेंड पर हो सकती है पैसों की किल्लत, ATM हो सकते हैं खाली</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMD7V82YikNyadhOFTbB6h-q2G2XAYfHYVJZn62iojoV65aayYYzXzj1PSBkYNerV4RSYFtGLW" alt="Bank Strike: वीकेंड पर हो सकती है पैसों की किल्लत, ATM हो सकते हैं खाली" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bank Strike: 19 नवंबर को देशभर के बैंकों की हड़ताल के कारण आपको बैंक संबंधी कामों में परेशानी&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/business/bank-strike-deferred-after-iba-unions-agree-on-employee-demands-9562581.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No bank strike today as IBA, unions agree on employee demands</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQM5MdY-HezC1tNK8DHb0P5ys-NK8hifKr0N16A8QeYDyytMT5Tba0WSBXa54fZmAlP_oQNb1Zl" alt="No bank strike today as IBA, unions agree on employee demands" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The unions had threatened to go on strike protesting against staff layoffs, outsourcing in banks, and delay in implementing wage revision in some banks,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}