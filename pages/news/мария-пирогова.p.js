import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мария Пирогова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мария Пирогова"/>
        <meta name="description" content="Trending News about Мария Пирогова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мария Пирогова</h1>
            <Image width={800} height={500} src="https://online47.ru/media/photo/article/__160792.jpg" alt="Мария Пирогова"/>
            <h3>Recent News</h3>
            <a href='https://online47.ru/2022/12/06/moy-gorod-slezami-umyt-v-donetske-pod-obstrelom-vsu-ne-zakonchiv-svoyu-pesnyu-pogibla-volonter-mariya-pirogova-170052'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мой город слезами умыт: в Донецке под обстрелом ВСУ, не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRffZz8ga-nZGWZ6ID_9Qe8wuJQuDz3lg8_0rMlGbMIy9QIEMJGttVNnSDDCyIRBcVuuUayGLW2" alt="Мой город слезами умыт: в Донецке под обстрелом ВСУ, не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее Online47 сообщал, что в Приозерском районе Ленинградской области простились с военнослужащим, погибшим в ходе проведения специальной военной операции на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.miloserdie.ru/news/volonter-mariya-pirogova-pogibshaya-v-doneczke-posmertno-nagrazhdena-ordenom-muzhestva/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Волонтер Мария Пирогова, погибшая в Донецке, посмертно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQv7EbSTHzwVL3xi3ofs5VnCZtEWBG3XSyfWolQNtNkN2Fc_Bg2QGZgI6lh6_WpKsBGW0ALVUyY" alt="Волонтер Мария Пирогова, погибшая в Донецке, посмертно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Депутат Народного совета ДНР, организатор волонтерской помощи Мария Пирогова посмертно награждена орденом Мужества. Соответствующий указ подписал президент&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5707120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Депутат парламента ДНР Мария Пирогова погибла во время ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSqfpbisPb5AZB6GQBVIeY5t3WzrpRE9DV7uVOJKxqKuUHVQ3VjC2VlcYvounPpxkD_uQgqUCpb" alt="Депутат парламента ДНР Мария Пирогова погибла во время ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Донецке погибла депутат народного совета Донецкой народной республики (ДНР) Мария Пирогова. Это произошло в результате обстрела города со стороны&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/news/2022/12/06/953999-deputat-pirogova-pogibla'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Депутат парламента ДНР Мария Пирогова погибла при обстреле ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnzroTIVU_NOrpFXPHJo7BUgfu-bvEEVI_ooo_hCLqDPq3J1bLHY3RKg2UtGHlUvizvSCg3iWd" alt="Депутат парламента ДНР Мария Пирогова погибла при обстреле ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Депутат парламента ДНР Мария Пирогова погибла в результате обстрела Донецка со стороны украинских военных, передает ТАСС со ссылкой на народную милицию&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/proisshestviya/06122022/528646'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Депутат парламента ДНР Мария Пирогова погибла при обстреле ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUxO-pygKpkLTiKlN7_3iexFihsQ3GDBgenJpuIPSS4GQkHU4ZcYWcXT8cDqwOcnO5874d7ucU" alt="Депутат парламента ДНР Мария Пирогова погибла при обстреле ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Погибла, подтверждаем&quot;, – передает ТАСС сообщение правоохранителей. Ранее сообщалось, что депутат Маслянинского района Новосибирска Дмитрий Шмаков,&nbsp;...</p></div>
            </div>
        </a><a href='https://tolknews.ru/proissestvia/135978-v-donetske-vo-vremya-obstrela-pogibla-deputat-parlamenta-dnr-mariya-pirogova'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Донецке во время обстрела погибла депутат парламента ДНР ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSg3aSLdDERfMHtWb7-QLS3SmA1RuYQUI92AEcrEZCjJZgW7GWLD_bd_5UVokNK8aoHQVenNknt" alt="В Донецке во время обстрела погибла депутат парламента ДНР ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мария Пирогова была патриотом своей страны и выступала с осуждением киевского режима. Она много помогала людям и участвовала в общественных проектах.</p></div>
            </div>
        </a><a href='https://tsargrad.tv/news/deputat-marija-pirogova-pogibla-pod-obstrelom-v-donecke_679414'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Депутат Мария Пирогова погибла под обстрелом в Донецке</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgvGW7jxD5Z5twHCy1tGjv7GoSDUK8Udft5n1QJmosSZiZzndKdIQqlQ3H8bJaks_SV5HiWlH-" alt="Депутат Мария Пирогова погибла под обстрелом в Донецке" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Средство массовой информации сетевое издание «Царьград/Tsargrad» зарегистрировано Федеральной службой по надзору в сфере связи, информационных технологий и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}