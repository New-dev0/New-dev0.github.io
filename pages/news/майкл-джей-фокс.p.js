import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Майкл Джей Фокс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Майкл Джей Фокс"/>
        <meta name="description" content="Trending News about Майкл Джей Фокс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Майкл Джей Фокс</h1>
            <Image width={800} height={500} src="https://cdn.forbes.ru/forbes-static/shareimages/481378.jpg?v=1669028386" alt="Майкл Джей Фокс"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.ru/forbeslife/481378-majkl-dzej-foks-polucil-special-nyj-oskar-za-vklad-v-bor-bu-s-bolezn-u-parkinsona'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Майкл Джей Фокс получил специальный «Оскар» за вклад в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOMM0ZI21kKOPTGNRueyclYMRCWmYNsEc9L0fChHJLl6AuCSLDWcG6cHx9hRuO3Q2ftR26Bo9m" alt="Майкл Джей Фокс получил специальный «Оскар» за вклад в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американская киноакадемия наградила актера Майкла Джея Фокса, известного по роли Марти Макфлая в трилогии «Назад в будущее», премией имени Джина Хершолта за&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/cybersport/news-4898389-foto-zvezda-nazad-v-buduschee-majkl-dzhej-foks-poluchaet-svoj-pervyj-oskar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фото: звезда «Назад в будущее» Майкл Джей Фокс получает ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdEVaVjJuhu4-QBmlrv87jaJbAzC_dGxSTFX3VXDVZBXT1LBjSmxbv6EwdLjPqnVQ7buQLe60x" alt="Фото: звезда «Назад в будущее» Майкл Джей Фокс получает ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актёра Майкла Джея Фокса наградили премией имени Джина Хершолта за гуманистические достижения и вклад в дело борьбы с болезнью Паркинсона. Актёр получил&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cybersport.ru/tags/other/maikl-dzhei-foks-iz-nazad-v-budushchee-poluchil-pochetnyi-oskar-za-vklad-v-borbu-s-bolezniu-parkinsona'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Майкл Джей Фокс из «Назад в будущее» получил почетный ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8f8Vgr1Vz0DvhcmMsy_xCQfVrRzN4oUm-VVF92B1OvWOU5E273m2_AUVuJlsb-D3i79s2Quvg" alt="Майкл Джей Фокс из «Назад в будущее» получил почетный ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актер Майкл Джей Фокс получил премию имени Джина Хершолта на церемонии Governors Awards. Ему вручили награду Американской киноакадемии, которую ...</p></div>
            </div>
        </a><a href='https://dtf.ru/life/1456030-foto-zvezda-nazad-v-budushchee-maykl-dzhey-foks-poluchaet-specialnuyu-premiyu-amerikanskoy-kinoakademii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фото: звезда «Назад в будущее» Майкл Джей Фокс получает ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuwJ6Gg_AmcLk2oViw5JhXT_itnwE2LSzZWGTeVS7PnSgIURPYMpsZYUyM-xhLCdl2oB_pxxPs" alt="Фото: звезда «Назад в будущее» Майкл Джей Фокс получает ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премию имени Джина Хершолта за гуманистические достижения и вклад в дело борьбы с болезнью Паркинсона актёр получил 20 ноября на церемонии Governors Awards,&nbsp;...</p></div>
            </div>
        </a><a href='https://daily.afisha.ru/news/70224-maykl-dzhey-foks-poluchil-premiyu-amerikanskoy-kinoakademii-za-vklad-v-borbu-s-boleznyu-parkinsona/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Майкл Джей Фокс получил премию Американской киноакадемии ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkEwcuvyib0D3YNeYbIczeVdbattanhaCFqaAaK-WIiM4bwQsAf8XIPpc_TrPJpVzcfbt3Im6o" alt="Майкл Джей Фокс получил премию Американской киноакадемии ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актер Майкл Джей Фокс, известный по фильмам «Назад в будущее», получил премию имени Джина Хершолта за гуманистические достижения и вклад в дело борьбы с&nbsp;...</p></div>
            </div>
        </a><a href='https://portal-kultura.ru/articles/news/346614-akter-maykl-dzhey-foks-udostoen-premii-za-vklad-v-delo-borby-s-boleznyu-parkinsona/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актер Майкл Джей Фокс удостоен премии за вклад в дело ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvEG-bbn6a5h1euqdzewGKNj6nSlBguLy0xKYGIy73ub1RUDy_MibLNJfcJ3su5QEf6X7M4Sw5" alt="Актер Майкл Джей Фокс удостоен премии за вклад в дело ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>div&gt; &lt;br /&gt; &lt;/div&gt; &lt;div&gt;Голливудский актер Майкл Джей Фокс удостоен премии имени Джина Хершолта, сообщает «Афиша Daily». Награду вручили за гуманистические&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}