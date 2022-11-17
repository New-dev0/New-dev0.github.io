import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Активный гражданин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Активный гражданин"/>
        <meta name="description" content="Trending News about Активный гражданин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Активный гражданин</h1>
            <Image width={800} height={500} src="" alt="Активный гражданин"/>
            <h3>Recent News</h3>
            <a href='https://www.bfm.ru/news/513099'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Портал «Активный гражданин» работает в штатном режиме</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Портал «Активный гражданин» работает в штатном режиме" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Портал выдерживает многотысячный приток желающих высказаться по вопросу определения формата новогодних мероприятий в столице.</p></div>
            </div>
        </a><a href='https://www.ng.ru/moscow/2022-11-16/2_8591_16112022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Москвичи определят формат празднования Нового года на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3756bFPFURdrTsNOLAHrkQ_r4eDM0BA1x1UkPuoyNd1xa-QvuaG8NG039Uqp9No5f4yQQrS_b" alt="Москвичи определят формат празднования Нового года на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мэр мегаполиса Сергей Собянин заявил, что решать горожанам, однако, по его мнению, сейчас не нужно впадать в уныние и отказываться от праздников, а посвятить их&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mos.ru/mayor/themes/16299/8732050/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сергей Собянин: Москвичи проголосуют за формат новогодних ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZp_RvFjWJzRZ7YbzYVvRnGKCIoI-t0fsOssypOo0tRJgtzf0Is6u7Iqb-xvDpcs0lmZwv7w-k" alt="Сергей Собянин: Москвичи проголосуют за формат новогодних ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В своем блоге Мэр Москвы рассказал о том, что Москва не отказывалась от праздников даже в самые трудные времена.</p></div>
            </div>
        </a><a href='https://www.interfax-russia.ru/moscow/news/moskvichi-smogut-progolosovat-za-format-prazdnovaniya-novogo-goda-na-portale-aktivnyy-grazhdanin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Москвичи смогут проголосовать за формат празднования Нового ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Москвичи смогут проголосовать за формат празднования Нового ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 16 ноября. ИНТЕРФАКС - Жители Москвы смогут проголосовать на портале &quot;Активный гражданин&quot; за формат празднования... читать далее на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}