import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hakeem Jeffries</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hakeem Jeffries"/>
        <meta name="description" content="Trending News about Hakeem Jeffries" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hakeem Jeffries</h1>
            <Image width={800} height={500} src="" alt="Hakeem Jeffries"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/2022/11/30/us/politics/house-democrats-hakeem-jeffries.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries Elected Leader of House Democrats</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR2sgtjn2ZTwqFmIhXSMTLsqcCk7xEtU287HD_-UdNYBf7YzqR3od_837BFX0-LGdSohedR_8I4" alt="Hakeem Jeffries Elected Leader of House Democrats" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A new trio, including Representatives Katherine Clark of Massachusetts as No. 2 and Pete Aguilar of California as No. 3, will take the reins in January,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kbia.org/2022-11-30/rep-hakeem-jeffries-elected-as-leader-of-the-house-democrats'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rep. Hakeem Jeffries elected as leader of the House Democrats</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiHaynpfCMfAcJjSv2_rursA8dbvZjiJr2o-ZrZXIfSsiMIk8Kec1tV6jCHzKsHBx2VOrt6LOZ" alt="Rep. Hakeem Jeffries elected as leader of the House Democrats" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jeffries will replace Rep. Nancy Pelosi as the top elected Democratic leader. He represents a generational shift and faces challenges in a GOP House in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/30/politics/hakeem-jeffries-profile/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>With Hakeem Jeffries&#39; rise, his members see &#39;Democrats in total array&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiaqNon63MiWkgql3rFSkcIg5iyGfvi5rQhXLNCj8hM8sncSEu2H3rmfnEk8MbmRxVCk6cb5RB" alt="With Hakeem Jeffries&#39; rise, his members see &#39;Democrats in total array&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakeem Jeffries pulled off a quiet revolution on Wednesday, becoming the first leader of the House Democrats to be born after the end of World War II and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.axios.com/2022/11/30/hakeem-jeffries-house-democratic-leader-election'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries elected House Democratic leader</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTgjl8hRNLTvy3FRr2m-W25s1S5OudYw_9mF5ocFVoo1v1Itnj9Izq7g5tASgZUNkEohYYoqSG" alt="Hakeem Jeffries elected House Democratic leader" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Why it matters: He is the first new Democratic leader in two decades and the first Black leader of a party in Congress. House Speaker Nancy Pelosi (D-Calif.),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/politics/2022/11/30/house-democrats-jeffries-rail-strike/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Post Politics Now: Democrats pick Jeffries as leader; House votes to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBfpaf0ZUchLnIQUjVWE1mCH_yhkbcOMqb7mc5FTGUOsPlmkWWpQxaFGqePILRO3NU44QNzSCJ" alt="Post Politics Now: Democrats pick Jeffries as leader; House votes to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>House Democrats elected Rep. Hakeem Jeffries as their leader, making the New Yorker the first Black lawmaker to lead a party in Congress.</p></div>
            </div>
        </a><a href='https://www.pbs.org/newshour/politics/hakeem-jeffries-to-head-house-dems-in-next-congress-as-1st-black-leader'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Hakeem Jeffries to head House Dems in next Congress as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRo_2P6kYlsBlCPo_X6HjTTPDwwE7DEMd20Wx-ZykL-AxiDZo_XvXOBJ9MjRcPql-HYscA0Rs7n" alt="WATCH: Hakeem Jeffries to head House Dems in next Congress as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Democrats met Wednesday behind closed doors for the internal party elections as Speaker Nancy Pelosi and her team step aside. House Democrats are ushering&nbsp;...</p></div>
            </div>
        </a><a href='https://cnnespanol.cnn.com/2022/11/30/los-democratas-de-la-camara-de-representantes-eligen-a-hakeem-jeffries-para-suceder-a-nancy-pelosi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Los demócratas de la Cámara de Representantes eligen a Hakeem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTE6cu4oXLvntNioZKiU6d_4RMmup6pIGswITiNhZ74iUSmT8BN2X_xmSHXu9DXFzhO4fSQcqzL" alt="Los demócratas de la Cámara de Representantes eligen a Hakeem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los demócratas de la Cámara de Representantes eligieron al presidente de su bancada, Hakeem Jeffries de Nueva York, para suceder a Nancy Pelosi.</p></div>
            </div>
        </a><a href='https://eltiempolatino.com/2022/11/30/politica/democratas-eligen-a-hakeem-jeffries-el-sucesor-de-pelosi-que-hace-historia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Demócratas eligen a Hakeem Jeffries, el sucesor de Pelosi que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsS_4ZiDmBZpvKPIe-6D1OCZU_IyQLo0oaPz_b_tRMqRWDKkA8N2O_3Clr-zi2atshoJ5pB9jh" alt="Demócratas eligen a Hakeem Jeffries, el sucesor de Pelosi que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jeffries anunció de manera oficial su candidatura para líder demócrata de la Cámara de Representantes el viernes 18 de noviembre.</p></div>
            </div>
        </a><a href='https://eldiariony.com/2022/11/30/democratas-eligen-a-hakeem-jeffries-como-nuevo-lider-en-la-camara/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Demócratas eligen a Hakeem Jeffries como nuevo líder en la Cámara</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwg65zhMZG3D4NYF3y3X606FLHODnWXHI-2S92ND6LNwuxWe3lisedIfKRCyzOvJfXCAjBsj5I" alt="Demócratas eligen a Hakeem Jeffries como nuevo líder en la Cámara" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El representante de Nueva York, Hakeem Jeffries, será el nuevo líder de los demócratas en la Cámara de Representantes, en lugar de la actual portavoz,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.univision.com/noticias/politica/jeffries-elegido-lider-democrata-camara-representantes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries se convierte en el primer congresista negro al ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZ1QSaUJSYLv4oBADkoXci7aDXuFHOhxlEXqrn-dkWTh0onbGvbQ7mOrbXxjJ_Jx-N-Xi0dW33" alt="Hakeem Jeffries se convierte en el primer congresista negro al ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El representante democrata por Nueva York Hakeem Jeffries fue elegido este miércoles por los representantes demócratas como supróximo líder en la Cámara de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}