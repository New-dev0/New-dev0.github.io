import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Walmart shooting</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Walmart shooting"/>
        <meta name="description" content="Trending News about Walmart shooting" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Walmart shooting</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/23/ap22327631540887_wide-b8c9ab5a73478e066801574c765f751686f733bc-s1400-c100.jpg" alt="Walmart shooting"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/23/1138872525/walmart-virginia-shooting-deaths'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police release the names of the victims in the Virginia Walmart ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5i5VOeL958Ai7xG48pUppKzEZzigo2GXTwVQXRZOelTFftFJdoVELNYH7EOZIqqiXUzHI2YXd" alt="Police release the names of the victims in the Virginia Walmart ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Walmart employee opened fire in a Virginia store late Tuesday during what are normally popular pre-Thanksgiving shopping hours.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/22/us/chesapeake-virginia-walmart-shooting/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6 victims shot and killed in a Virginia Walmart include a 16-year-old ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYKOKNsq6pD6DgTC4wyqQolNq1cr3jRj0oXjZIsJO2C_P2VrmKxLJuHTHpVE13dSvMKFJnezaA" alt="6 victims shot and killed in a Virginia Walmart include a 16-year-old ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Authorities have identified five of the six people who were killed in a Virginia Walmart after the store&#39;s manager began firing Tuesday night before killing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/dc-md-va/2022/11/23/andre-bing-walmart-shooting-employee/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Walmart shooting suspect was found with handgun, multiple ammo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ9rms08TGzs_QgUg8sEsR6JypCgG0OQK0xjHtX6rUv7Zj1QzM9Om0UOY_luQ7lqrJhd10qDKXL" alt="Walmart shooting suspect was found with handgun, multiple ammo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andre M. Bing had worked at Walmart since 2010 and was an overnight supervisor at the store in Chesapeake, company officials said.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/article/walmart-shooting-chesapeake-virginia.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What We Know About the Walmart Shooting in Virginia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHdnQk0SrmShankuCQpL1rJwEc66Une-vsWV7pgO38_-pEJcBs8ydWE_UUqirnKC0zb_InEbUE" alt="What We Know About the Walmart Shooting in Virginia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A gunman, who was an employee at the store in Chesapeake, killed six people and was later found dead, apparently of a self-inflicted gunshot wound,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wavy.com/chesapeake-walmart-mass-shooting/details-revealed-following-mass-shooting-at-chesapeake-walmart/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chesapeake Walmart shooting: Police ID victims, suspect</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9aasoWqYr3xB3ADcCmR5FJtDbsLwW9p7hJ7SFWLL55OPy7GFEjCsQ_74OIzRL_VA3xcdVYtWX" alt="Chesapeake Walmart shooting: Police ID victims, suspect" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>10 On Your Side is learning more regarding the mass shooting at a Chesapeake Walmart that took the lives of six people plus the gunman Tuesday evening.</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/11/23/virginia-police-walmart-shooting-00070630'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Bodies drop&#39; as Walmart manager kills 6 in Virginia attack</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHJ7EUJSYuXHo1MUc_QF_1pNBaHjL0mOUMsL3SEVU3emDQZYyQCP5jUqivCvzpu-CWTj2dKtol" alt="&#39;Bodies drop&#39; as Walmart manager kills 6 in Virginia attack" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The gunman, who police believe shot himself, was dead when officers arrived. Police said they were trying to determine the motive for the shooting, and one&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}