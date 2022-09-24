import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nagpur</title></Head><Template>
            <h1 style={{fontSize: "30"}}>Nagpur</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/08/24/1cd4da5f014180953990de3b85822dd01661330207289290_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Nagpur"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/city/nagpur/nagpur-39-vehicles-ferrying-student-do-not-have-fitness-certificates-2223115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nagpur News: नागपुर में स्कूली बच्चों की सुरक्षा की अनदेखी, 39 फीसदी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTV5xFM1y3i280_wN3CfW_RFwr_bBJhgYJj5oZxCfTIydodaDB4tMXbgzYybck1AwYotT1ySr8v" alt="Nagpur News: नागपुर में स्कूली बच्चों की सुरक्षा की अनदेखी, 39 फीसदी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>नागपुर में स्कूली बच्चों की सुरक्षा को लेकर स्कूली वाहनों द्वारा अनदेखी की जा रही है.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/i-thought-i-would-be-sent-home-when-matthew-hayden-fired-a-rocket-in-nagpur-into-a-train-that-made-him-fear-8169129/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“I thought I would be sent home” When Matthew Hayden fired a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSgAQO8rndGvWJsBE_n8hrUn8N8OfLi1QfwlcgsUafKhHpM_KRz1KyJGhzQ90iRXZIAc7gqpG6" alt="“I thought I would be sent home” When Matthew Hayden fired a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hayden said he came out in the night from the team hotel to lit up a firecracker: a rocket. It wiggled out of control and took a completely different route&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nagpurtoday.in/dmer-committee-to-probe-girls-death-at-nagpurs-gmch-for-lack-of-ventilator/09240903'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DMER committee to probe girl&#39;s death at Nagpur&#39;s GMCH for lack of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMB6b5q0pdMmyA2Z-9FAA4Nk_SVzcfZzUW-32Ns5-RSnjnaUVeQKCLChSqdjbFs2QHgXWuELzL" alt="DMER committee to probe girl&#39;s death at Nagpur&#39;s GMCH for lack of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nagpur: The Maharashtra Director of Medical Education and Research (DMER) Dr Dilip Mhaisekar has constituted a three-member committee comprising non-Nagpur&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nagpurtoday.in/administration-gears-up-to-ensure-smooth-dhammachakra-pravartan-din-event-in-nagpur/09231426'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Administration gears up to ensure smooth Dhammachakra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuf9Ji4Y0nh4s8OiXUlC6KDfHXZdvgvf4qz-iI2pr9H-6l34M2MEXEbR48ghuWUUPSLwn9MCZq" alt="Administration gears up to ensure smooth Dhammachakra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nagpur: The administration is gearing up for the Dhammachakra Pravartan Din celebrations at the historic Deekshabhoomi in Nagpur and the Dragon Palace&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}