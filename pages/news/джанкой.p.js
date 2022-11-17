import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Джанкой</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Джанкой"/>
        <meta name="description" content="Trending News about Джанкой" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Джанкой</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/_/__raketa_zbili_bpla_litak_slid_u_nebi_gettyimages_1235859181_82_1300x820.jpg" alt="Джанкой"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/dzhankoyi-progrimili-vibuhi-mozhliviy-udar-1668636547.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В сети сообщают о взрывах в Джанкое: что известно</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzVZq27ws8D0AG3U4TZhjNnnRK-13-wNsiefgFYSagCJESTfycyBtzPxdXpl7Y8s1cvOH-ti2T" alt="В сети сообщают о взрывах в Джанкое: что известно" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Крыму в оккупированном Джанкое работала российская ПВО, и сообщают в сети об ударе по военному аэродрому 16 ноября.</p></div>
            </div>
        </a><a href='https://tsargrad.tv/news/vsu-vnov-bjot-po-krymu-v-dzhankoe-slyshny-vzryvy-rabotaet-pvo_666169'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ вновь бьют по Крыму: В Джанкое слышны взрывы, работает ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRza7HycJpZAmLOt4oD5I_Qj4sBCqfyDB7RAI6Z6apRI4C-fsTpBQz_dTFwnTXQs8Hk7gTJvzF6" alt="ВСУ вновь бьют по Крыму: В Джанкое слышны взрывы, работает ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вооружённые силы Украины (ВСУ) вновь бьют по Крыму. Жители Джанкоя услышали взрывы. Предположительно, работает ПВО.</p></div>
            </div>
        </a><a href='https://korrespondent.net/ukraine/4535985-v-okkupyrovannom-dzhankoe-soobschauit-o-vzryvakh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В оккупированном Джанкое сообщают о взрывах</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSU_TrrsdJ1B3eu4pVvyu7_k20yF8q8os0h-BS0JtMLPBSOoBBhFKLLib5R9DO7PGvrjUCfo92T" alt="В оккупированном Джанкое сообщают о взрывах" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В соцсетях распространяется информация о том, что взрывы прогремели в районе аэродрома, где находились десятки единиц техники.</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/ukraina/2022-11-17/5723086-u-dzhankoi-znovu-prolunav-vibukh-mistsevi-zhiteli-skarzhatsya-na-pereboi-zi-svitlom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Джанкое сильный взрыв: местные жители жалуются на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNxu6IZqYoKndhRtgKASEvZi5Lyt_5n0nIK5eR_j0q0qEVTDzuyRpCr40xMDD_qP3IFES2ywf7" alt="В Джанкое сильный взрыв: местные жители жалуются на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Официальных подтверждений информации пока не поступало, однако в местных пабликов уже пошла информация о работе ПВО, а жители сообщают об отключении света. Судя&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/krym-bodrstvuet-v-okkupirovannom-dzhankoe-progremeli-vzryvy_n2199419'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крым не спит: в оккупированном Джанкое прогремели взрывы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmg-BRNAY4-DV-FaJzI0pB7QHItOoCNlTdFWY7S2w7bPHUX2V7AU65-pBwisHkk80BmpiDwCJh" alt="Крым не спит: в оккупированном Джанкое прогремели взрывы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во временно оккупированном Крыму 16 ноября 2022 года раздался взрыв. Сообщают, что хлопок – в Джанкое. Смотрите видео взрыва в Крыму - Новости Украины - 24&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ru/rubric-crimea/3616155-v-seti-soobsaut-o-vzryvah-v-dzankoe.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В сети сообщают о взрывах в Джанкое</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGXTUSFHL9ZEOLgdnZwqNq-ay6cXErm13LAZ8SkoUU1z64EuSO-N2qwlQa68PUsN0oMrje8x98" alt="В сети сообщают о взрывах в Джанкое" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В оккупированном рф украинском Джанкое зафиксирована работа российских систем противовоздушной обороны поздно вечером 16 ноября. — Укринформ.</p></div>
            </div>
        </a><a href='https://www.ostro.org/general/society/news/652279/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В оккупированном Джанкое сообщают о взрыве (ВИДЕО)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8OrpqrDe8qRK1ExsqM5aHCJRy8yh71waGwVN148GrJvrfRCLoZalcBvyyg4CFC4njxyg7GH6l" alt="В оккупированном Джанкое сообщают о взрыве (ВИДЕО)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сильные взрывы прогремели сегодня вечером в оккупированном Джанкой - похоже, что на военном аэродроме. Об этом сообщают в местных соцсетях 16 ноября.</p></div>
            </div>
        </a>
        </Template></>;
}