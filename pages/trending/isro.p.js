import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ISRO</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ISRO"/>
        <meta name="description" content="Trending News about ISRO" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ISRO</h1>
            <Image width={800} height={500} src="https://orissadiary.com/wp-content/uploads/2022/10/FROMLE_1.jpe" alt="ISRO"/>
            <h3>Recent News</h3>
            <a href='https://orissadiary.com/36-oneweb-satellites-successfully-launched-by-isro-nsil-from-sriharikota/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>36 OneWeb Satellites Successfully Launched by ISRO/ NSIL from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4uL54iDOtCkaZ0Cc4KcXJgandSQYqUj8E_PzKMn2Al44U5GA8mX3kehnYLo5Zusdko1qCcnS0" alt="36 OneWeb Satellites Successfully Launched by ISRO/ NSIL from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bhubaneswar – OneWeb today confirmed the successful deployment of 36 satellites launched by NewSpace India Limited (NSIL), from the Satish Dhawan Space&nbsp;...</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/isro-enters-into-commercial-launch-market-by-placing-36-oneweb-satellites-into-orbit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO enters into commercial launch market by placing 36 &#39;OneWeb ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSuEYyrYaNDhrDSCzuIsiHTMktf5tSYR20jWcLUEAvr0rHtEvI-nl3py9qZnDOJks2XDeHpo3t2" alt="ISRO enters into commercial launch market by placing 36 &#39;OneWeb ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sriharikota (Andhra Pradesh): In a historic maiden commercial flight, an Indian heavy-lift rocket GSLV MkIII – renamed for this mission as LVM3 M2,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sci-tech/science/isros-dedicated-commercial-satellite-mission-lvm3-m2oneweb-india-1-lifts-off/article66046363.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO&#39;s heaviest rocket successfully places 36 satellites in orbit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0iebLX8tfRSGV4icCUmlmc425ccxOi-jpsKgk9c5696S6ZzTbnX1XgIdjd_pgX9QDPTA5-P9O" alt="ISRO&#39;s heaviest rocket successfully places 36 satellites in orbit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LVM3-M2 is the dedicated commercial satellite mission of NewSpace India Limited (NSIL), a Central Public Sector Enterprise (CPSE) under the Department of Space,&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/india/isro-launches-36-oneweb-satellites-precisely-completes-mission-of-many-firsts-8225696/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO&#39;s heaviest rocket successfully places 36 broadband satellites ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeCzA2tZZxAbxFx4lsPAop_I2MCWExqOOz3Ddx82B5QBqzFgxK6uYE214Ryz3KzvEo2C9v-vna" alt="ISRO&#39;s heaviest rocket successfully places 36 broadband satellites ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This was the first foray of any Indian launch vehicle, other than ISRO&#39;s workhorse PSLV, into the commercial space market. With this, India also entered the&nbsp;...</p></div>
            </div>
        </a><a href='https://lagatar24.com/isros-heaviest-rocket-blasts-off-from-sriharikota-with-36-satellites-onboard/127805/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO&#39;s heaviest rocket blasts off from Sriharikota with 36 satellites ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjYjNd76oygAtUbQi-wUD7Ttk8mJV2sPPgx_0A0knz6NssoN2a3V6QQkI76Qiu9T8NP6dTyMY4" alt="ISRO&#39;s heaviest rocket blasts off from Sriharikota with 36 satellites ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lagatar24 Desk. New Delhi, Oct 23: The heaviest rocket of the Indian Space Research Organisation– LVM3-M2/OneWeb India-1 blasted off from this spaceport on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/isro-launches-36-satellites-in-1st-commercial-mission-101666551065839.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isro launches 36 satellites in 1st commercial mission</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyu8gDq6F07bZOR9f_vCglQ9dDCWpf3jIkJW1KXH8hzTUw2RQiwB442Usls-HF5hmg7QWJ6eiI" alt="Isro launches 36 satellites in 1st commercial mission" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The launch of the LVM-3 — with its largest ever payload of 5796 kg — at 12.07am on Sunday also marked India&#39;s entry into the global commercial launch&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sci-tech/isro-renames-gslv-mark-iii-as-lvm-3/article66049577.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO renames GSLV Mark-III as LVM-3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOYTpHY9oJFTUb2TR9kXaOxX6INCBXVew3dk6qzpDeLuavpR_46QsZsPLmC2HS5uN9IVlZwuAL" alt="ISRO renames GSLV Mark-III as LVM-3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The LVM-3 rocket will also be used for India&#39;s maiden human space flight tentatively scheduled for late 2024.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/india-news/land-has-been-acquired-for-launch-site-in-tamil-nadu-isro-chief'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO: दूसरी लॉन्च साइट के लिए तमिलनाडु में हुआ जमीन का अधिग्रहण ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSMhVAkYtkcSicwxQ2FOOkcEkvMQ2n2EKvqcrFVeCRG07xIhXyMLZRZ6R3ykl94wFNNbV7B_zN" alt="ISRO: दूसरी लॉन्च साइट के लिए तमिलनाडु में हुआ जमीन का अधिग्रहण ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इसरो प्रमुख एस. सोमनाथ ने बताया, अंतरिक्ष एजेंसी फिलहाल यहां से करीब 650 किलोमीटर दूर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-isro-acquired-land-for-second-spaceport-in-tamil-nadu-isro-chief-23159297.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>तमिलनाडु में दूसरे स्पेसपोर्ट के लिए ISRO ने किया भूमि का अधिग्रहण ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="तमिलनाडु में दूसरे स्पेसपोर्ट के लिए ISRO ने किया भूमि का अधिग्रहण ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ISRO प्रमुख ने कहा लॉन्च पैड के लिए डिजाइन तैयार है। सुरक्षा के लिहाज से एक बार जब जमीन&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-pm-modi-congratulates-isro-on-successful-launch-of-36-broadband-satellites-23158995.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>पीएम मोदी ने 36 ब्राडबैंड उपग्रहों के सफल प्रक्षेपण पर ISRO को दी बधाई ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKPNHVBDJc9yK1tFRtmdxJ-Cl1B824fOxkYnY1PiuZ8hD3SAzpgXXnUxn92xZJXBy2MWTy6dxP" alt="पीएम मोदी ने 36 ब्राडबैंड उपग्रहों के सफल प्रक्षेपण पर ISRO को दी बधाई ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इसरो ने शनिवार और रविवार की रात 1207 बजे आंध्र प्रदेश के श्रीहरिकोटा के सतीश धवन&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}