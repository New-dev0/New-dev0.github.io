import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Пермь</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Пермь"/>
        <meta name="description" content="Trending News about Пермь" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Пермь</h1>
            <Image width={800} height={500} src="https://media.slovoidilo.ua/media/scimage/171/170058-ru.png" alt="Пермь"/>
            <h3>Recent News</h3>
            <a href='https://ru.slovoidilo.ua/2022/11/30/novost/mir/rossijskoj-permi-gorit-krupnejshaya-tecz-foto-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В российской Перми горит крупнейшая ТЭЦ – фото, видео</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSmDYmwfgUSmaPTTZd6qWY8T2z95QGcuTNodEd9ZoonRu89A0foYiaXx2Jo9MgmaNhrJKciu66" alt="В российской Перми горит крупнейшая ТЭЦ – фото, видео" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В российском городе Пермь сегодня утром, 30 ноября, произошел большой пожар на ТЭЦ-9. Причины пожара пока неизвестны. Об этом сообщают российские СМИ.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/30/7378596/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В российской Перми горит ТЭЦ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjPOupKjVamLr5j-9GEvnSIHB0CkQT2AzU_BXs4vcRiW1y6AHV9bU-6GI34G2TBlrmVla-fzY2" alt="В российской Перми горит ТЭЦ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В России уже второй за утро масштабный пожар – горит ТЄЦ в Перми. Видео, фото.</p></div>
            </div>
        </a><a href='https://focus.ua/world/539038-den-pozharov-v-rossii-goryat-tec-v-permi-i-sklad-s-plastikom-v-volgograde-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День пожаров в России: горят ТЭЦ в Перми и склад с пластиком в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTww_-0FFvnOdxqbNaGOAgXMo4S0LwW86Amnt-ocPLEmBE4l7U0MoRFaG04eCcnXhvUs2u14Gtu" alt="День пожаров в России: горят ТЭЦ в Перми и склад с пластиком в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>К полудню 30 ноября в России произошли уже три масштабных возгорания. Из-за инцидента на электростанции пришлось эвакуировать 500 человек, площадь пожара&nbsp;...</p></div>
            </div>
        </a><a href='https://permnews.ru/novosti/society/2022/11/30/obschestvennyy_sovet_pri_permskoy_gorodskoy_dume_obsudil_razvitie_oopt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Общественный совет при Пермской городской думе обсудил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaGl4JtlggOGdN9wl2aynm2WwOQC2QjdKXz024ijiDOCX95wHtGrGiS6WGexiVIDAFgsuno35T" alt="Общественный совет при Пермской городской думе обсудил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чиновники доложили о состоянии и перспективах особо охраняемых природных территорий. «Пермь отнесена к числу благополучных городов по такому показателю как&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/proisshestvija/20221130-u-rosijskomu-misti-perm-spalahnula-masshtabna-pozhezha-na-tecz/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В российском городе Пермь вспыхнул масштабный пожар на ТЭЦ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoa1P0PobB3xeqWyT-kUDAO1FPzmCkysoOpobuZ2SagvU0lWm48lIG_2mB4KG_0RlYQlwZI81t" alt="В российском городе Пермь вспыхнул масштабный пожар на ТЭЦ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В городе Пермь на ТЭЦ произошел пожар. Подробности возникновени пожара в Перми на ТЭЦ 30 ноября 2022, смотрите в нашем материале.</p></div>
            </div>
        </a><a href='https://59.ru/text/incidents/2022/11/30/71857331/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В домах может похолодать. На мощнейшей в Перми ТЭЦ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShP_fTh59r5m7udb6_4AZuVNBrVO5NG0Fbfp9a3cD8S8qsWhu8opYDvLYqGDMuQlgHMl6y1LM-" alt="В домах может похолодать. На мощнейшей в Перми ТЭЦ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В социальных сетях начали публиковать видео, на котором заметно сильное задымление возле ТЭЦ-9 в Перми. Мы будем собирать здесь всю поступающую информацию о&nbsp;...</p></div>
            </div>
        </a><a href='https://korrespondent.net/world/4539892-v-permy-zahorelas-tets-sotssety'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Перми загорелась ТЭЦ - соцсети</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRehm8beyBz93lCQ2ZqdnmC1x9h1ktw6VovcWUEEcT3pCb9G1dy7wRY-2ycMzkVReLYcNhRMAkE" alt="В Перми загорелась ТЭЦ - соцсети" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пожар произошел на местной теплоэлектроцентрали, на месте инцидента работали спасательные службы. В российском городе Пермь вспыхнул пожар на ТЭЦ-9 в среду,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}