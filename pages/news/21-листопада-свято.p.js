import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>21 листопада свято</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,21 листопада свято"/>
        <meta name="description" content="Trending News about 21 листопада свято" /></Head><Template>
            <h1 style={{fontSize: "30"}}>21 листопада свято</h1>
            <Image width={800} height={500} src="https://www.volynnews.com/files/news/2022/11-20/350764/18_main-v1605793455.jpg" alt="21 листопада свято"/>
            <h3>Recent News</h3>
            <a href='https://www.volynnews.com/news/all/21-lystopada-sviata-podiyi-fakty-den-hidnosti-ta-svobody-i-den-desantno-shturmovykh-viysk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>21 листопада: свята події, факти. День гідності та свободи і День ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR6DAquNgEbhbAc1GUD2YGH4Z8p0XKmdb4inVD6zEcvdrAmhf5aedoh3za7EsxTIBIIFPqSsT8S" alt="21 листопада: свята події, факти. День гідності та свободи і День ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21 листопада в Україні святкується День гідності та свободи та День Десантно-штурмових військ Збройних сил. У світі відзначають Всесвітній день телебачення,&nbsp;...</p></div>
            </div>
        </a><a href='https://glavcom.ua/country/society/21-listopada-jake-sohodni-svjato-traditsiji-i-zaboroni-890350.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>21 листопада: яке сьогодні свято, традиції і заборони</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvtwuygpXe5-4GjVK0smmG3PLleDyiECwilI6-HtpScVabZwaVglJbS7VjdNZonYXP9MS90jrp" alt="21 листопада: яке сьогодні свято, традиції і заборони" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У цей день, згідно з повір&#39;ями, не можна робити ніяку роботу в корисливих цілях.</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/den-hidnosti-ta-svobodi-istorija.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День Гідності та Свободи: історія</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3cMskB5hue9fEYQtVYc3dDg_SfyNxeUEerFa_UW2lnh7HxTfs9gEa8VgIUAeRH1OOJsoN7LIG" alt="День Гідності та Свободи: історія" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Хоч це і відносно молоде свято, воно дуже важливе для українців, оскільки присвячене Помаранчевій революції 2004 та Революції Гідності 2014 років. Особливого&nbsp;...</p></div>
            </div>
        </a><a href='https://povin.com.ua/385933-21-11.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>21 листопада 2022 року — яке сьогодні свято та які пам&#39;ятні події ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="21 листопада 2022 року — яке сьогодні свято та які пам&#39;ятні події ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Яке свято 21 листопада. Сьогодні в Україні — День гідності та свободи. Його відзначають на честь початку двох революцій: Помаранчевої у 2004-му та Революції&nbsp;...</p></div>
            </div>
        </a><a href='https://volyninfo.com/den-gidnosti-ta-svobody-shho-vidbuvatymetsya-u-lutsku-21-lystopada/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День Гідності та Свободи: що відбуватиметься у Луцьку 21 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQptBeFDBogHs2hlcl-7980oChcx-6uk-x1fbfCXuV5CdIhDx8tGiPJNo64zrly8Hq5YDNexHbN" alt="День Гідності та Свободи: що відбуватиметься у Луцьку 21 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Це свято встановлено на честь двох доленосних подій у новітній українській історії – Помаранчевої революції 2004 року та Революції Гідності 2013 року. Цього дня&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}