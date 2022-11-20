import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kilkenny crash</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kilkenny crash"/>
        <meta name="description" content="Trending News about Kilkenny crash" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kilkenny crash</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cda1e-1600.jpg" alt="Kilkenny crash"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/ireland/2022/1119/1337096-kilkenny-crash/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Girl injured in crash was in car when it was stolen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9eeK42CVSXJ9mDlVi4KSyk6z334C8ZuhK_9t2IFtS844VCLk3wvx37rJRODjAjZg25yyfxDRk" alt="Girl injured in crash was in car when it was stolen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gardaí have confirmed that a teenage girl who was seriously injured in a fatal road crash in Co Kilkenny yesterday was a victim sitting in the car when it&nbsp;...</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/teenage-girl-with-special-needs-seriously-injured-after-kilkenny-crash-1394551.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Teenage girl with special needs seriously injured after Kilkenny crash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWM0dtugMOYXgR0lgASFZN9vBf-zHaNnnuONm8wN_zSglKrWnmTND_JJH1zOQMFxw2LTza-CCD" alt="Teenage girl with special needs seriously injured after Kilkenny crash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The young girl, who has special needs, was sitting in her father&#39;s car waiting for him to return from his office when a man got into the driver&#39;s seat and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/articles/ckm485p431jo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kilkenny: Girl seriously injured after crash with stolen car</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqEaPvUcjEf2WlS6Fvdm_Oik96QARlPmbe8hqlOJA0ZNz0ePCcF9bqR2T4ken1dQ6CFD7Et-as" alt="Kilkenny: Girl seriously injured after crash with stolen car" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A teenage girl, who was sitting in a car when it was stolen, has been taken to hospital with serious injuries. Dale Fogarty,﻿ a man in his 30s who was&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/arid-41010485.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Girl, 16, fighting for life after Kilkenny crash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqI0rXLJQpLtZ39E6hinfHzWK9LbfsRgHN5cSVXJBWfTgvc-gD4Dug637zGjB9M8XGHynyrMqv" alt="Girl, 16, fighting for life after Kilkenny crash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Teen was sitting in her father&#39;s car, which he had left running, and was waiting for him to return from his office when a man, unknown to her,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.ie/news/teenage-girl-seriously-injured-in-kilkenny-crash-was-victim-sitting-in-the-car-when-it-was-stolen-42156978.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Teenage girl seriously injured in Kilkenny crash was victim sitting in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSooNbv9Pb9m3kYyQyCd2IL2lVl0969S1738c3gjMSNOaUppfBZmuWTQYnB6-ATVtfgQNKheI_" alt="Teenage girl seriously injured in Kilkenny crash was victim sitting in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two-vehicle collision occurred at approximately 3.55pm yesterday on the N77 between Kilkenny town and Ballyragget. The driver of one of the vehicles, a man&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/car-stolen-girl-inside-involved-28533083'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Car stolen with girl inside involved in horror Kilkenny crash as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzImqGyZn6n5ffXM7easd63dtgUvLUhu7Q_rrSZAJuKKT5jaf6VRCLb3SmFQgqvUTpAUN1Jmw_" alt="Car stolen with girl inside involved in horror Kilkenny crash as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One person died and four were injured in the two-vehicle collision, which happened just before 4pm yesterday on the N77 between Kilkenny town and&nbsp;...</p></div>
            </div>
        </a><a href='https://kclr96fm.com/man-dies-and-four-people-hospitalised-after-stolen-vehicle-involved-in-collision-in-co-kilkenny/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man dies and four people hospitalised after stolen vehicle involved ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBwOIXtsRz0MN0-ErlqoF7QcKlND1ISdPzFug3jK7Pv2DmP3RE6BLEA9j22Z1V3m6RHC8vRX0R" alt="Man dies and four people hospitalised after stolen vehicle involved ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The man in his 30s who was killed was driving a car which collided with another car on the N77 between Kilkenny City and Ballyragget just before 4 o&#39;clock&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}