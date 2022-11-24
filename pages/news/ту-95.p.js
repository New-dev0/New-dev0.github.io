import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ту-95</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ту-95"/>
        <meta name="description" content="Trending News about Ту-95" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ту-95</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/791ed104-c18a-45d5-b373-ba201e600693_w1200_r1.jpg" alt="Ту-95"/>
            <h3>Recent News</h3>
            <a href='https://www.radiosvoboda.org/a/news-kim-pivden-mozhlyvyi-obstril/32145028.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Злетіли 9 Ту-95». Кім попередив про можливі ракетні удари по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPLre8-rCaG59QuIbx5t_OK8E3DNOm7JjONPuSzzrF4rO0UbkTlQefS1BmUOiFNwOZ7C1rehzB" alt="«Злетіли 9 Ту-95». Кім попередив про можливі ракетні удари по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одеса/Миколаїв/Херсон потенційна загроза ракетних ударів із 12:00. Будуть пуски – скажу. Дев&#39;ять Ту-95 злетіли»</p></div>
            </div>
        </a><a href='https://www.5.ua/suspilstvo/rf-pidniala-u-povitria-stratehichni-bombarduvalnyky-tu-95-zafiksovano-pusky-raket-kim-293251.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>рф зі стратегічних бомбардувальників Ту-95 б&#39;є ракетами ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOxIn_zj_ZML9V3ZB0GTbmoHpWURNHDUsb-oUXAt7rzRMwDkmgrMGJkreLn2X2oABYJPHLbBXx" alt="рф зі стратегічних бомбардувальників Ту-95 б&#39;є ракетами ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>рф зі стратегічних бомбардувальників Ту-95 б&#39;є ракетами, працює ППО (оновлено). 23.11.2022 12:56 Читайте по-русски.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/ukr/section-uanews/news-na-pivdni-masshtabna-raketna-zagroza-u-nebo-zletili-9-vorozhih-tu-95-23-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На півдні масштабна ракетна загроза: у небо злетіли 9 ворожих ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2BfbBZye_8dg1g7Q87vP-yxymOn3OynJKyTdRpqUOKKV-S08baIuSTWkEtL7yjJ7I_J0sI1dS" alt="На півдні масштабна ракетна загроза: у небо злетіли 9 ворожих ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На початку російського вторгнення, 11 березня 2022 року шість літаків Ту-95МС здійснили пуск не менше 10 крилатих ракет по Дніпру, Івано-Франківську та Луцьку.</p></div>
            </div>
        </a><a href='https://suspilne.media/323032-devat-tu-95-zletili-nacalnik-mikolaivskoi-ova-poperediv-pro-zagrozu-raketnih-udariv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Дев&#39;ять Ту-95 злетіли&quot; — начальник Миколаївської ОВА ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRN9dO3hejpmYT692JCIcsPZJC9n15ZiCbCOF0Q4d4cVgEyerUn-OdEMkGUDrh4WFupKKHSHk5t" alt="&quot;Дев&#39;ять Ту-95 злетіли&quot; — начальник Миколаївської ОВА ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media На території півдня України 23 листопада є потенційна загроза ракетних ударів, про це повідомив начальник Миколаївської обласної військової&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/23/7377587/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Злетіли стратегічні бомбардувальники РФ, не менше 15 пусків ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwC7CZ36a-PxfYUsvO7h_zlTF5VWC1r8YX4jJrgecjh9pPn7wZAnGO3e7EWJtHCCNyE9OuDXNO" alt="Злетіли стратегічні бомбардувальники РФ, не менше 15 пусків ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Росія підняла в повітря стратегічні бомбардувальники Ту-95, можливий ракетний удар. Станом на 13.20 було не менше 15 пусків російських ракет.</p></div>
            </div>
        </a><a href='https://news.liga.net/ua/politics/news/rossiya-udarila-raketami-po-ukraine-pyat-puskov-s-samoletov-kim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росія вдарила ракетами по Україні зі стратегічних ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4E5uFDyvSrikkAqCpTOsZsuxgTA_aMvpF2sgl_j88mJNgDMVX9FIbfVrLZA9bzCv-zuhsn6vR" alt="Росія вдарила ракетами по Україні зі стратегічних ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 листопада країна-терорист Росія продовжила ракетний терор України. тероризм, війна, ракетний удар, ту-95.</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/ukraine/4537754-rf-pidniala-u-povitria-deviat-bombarduvalnykiv-kim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>РФ підняла у повітря дев&#39;ять бомбардувальників - Кім</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ43F8gWGCELLFOnPVoHRxyHxYGKazrU__csRax4OuRK7sLk4UMt8H_FdjJAYiPSlDhRv6TjDt7" alt="РФ підняла у повітря дев&#39;ять бомбардувальників - Кім" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>З аеродрому Енгельс злетіли стратегічні бомбардувальники Ту-95 у напрямку Волгодонська. Російські агресори можуть завдати ракетних ударів по території&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}