import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Evil West</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Evil West"/>
        <meta name="description" content="Trending News about Evil West" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Evil West</h1>
            <Image width={800} height={500} src="https://media.kg-portal.ru/games/e/evilwest/trailers/51241t.jpg" alt="Evil West"/>
            <h3>Recent News</h3>
            <a href='https://kg-portal.ru/comments/109957-evil-west-premernyj-trejler/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Evil West — премьерный трейлер отличного духовного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJbhuS9Y_3YFOfj0b30AvhfIG9fTE7k0ps3wh-NVuV6P5ZQb8z7dBMjIAs4adMfKqJYeFZlJ9E" alt="Evil West — премьерный трейлер отличного духовного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На днях состоялся релиз вдохновлённого God of War экшена Evil West от создателей современной трилогии Shadow Warrior — студии Flying Wild Hog.</p></div>
            </div>
        </a><a href='https://www.championat.com/cybersport/news-4901289-evil-west-koop-ekshen-pro-vampirov-vzlomali-pryamo-v-den-reliza.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Evil West, кооп-экшен про вампиров, взломали прямо в день релиза</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSluJVJeE0FKvy4sz4vZWPYuNiF4CtU2joW0_e1b6ByJNNKqnui0OX8Nd51y0nA_Lr8aUD03-Ke" alt="Evil West, кооп-экшен про вампиров, взломали прямо в день релиза" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Evil West — новая игра от студии Flying Wild Hog, создателей Shadow Warrior 3. Действие игры разворачивается в альтернативной версии Дикого Запада, где&nbsp;...</p></div>
            </div>
        </a><a href='https://3dnews.ru/1077730/beskhitrostnoe-vesele-vampirskiy-vestern-evil-west-vernul-igrokov-i-kritikov-vo-vremena-ps2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бесхитростное веселье: вампирский вестерн Evil West вернул ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBt-2awndtPRhniMdpFynAXuOi6wNQaXpwew4uV4FqeNKmZ01MdF8k2WMz_MFBzjb9l-JvYuAh" alt="Бесхитростное веселье: вампирский вестерн Evil West вернул ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рейтинг Evil West варьируется от 73 (PC, Xbox Series X и S) до 75 % (PS5). Новый проект Flying Wild Hog встал в один ряд с другими релизами студии 2022 года:&nbsp;...</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/11/23/135641/eksen-evil-west-sravnili-na-pc-ps5-i-xbox-series-xs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экшен Evil West сравнили на PC, PS5 и Xbox Series X/S</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-JQ0gHXehn4X4jP8niFtlDTdm8IeOVTX_9Iib26rpdlvRV3Yc9N0hqps8dNJ2MTEHgX-VAijcPg" alt="Экшен Evil West сравнили на PC, PS5 и Xbox Series X/S" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На канале ElAnalistaDeBits вышло видео, в котором можно увидеть сравнение экшена Evil West на PC, PS5 и Xbox Series X/S. Лучше всего игра выглядит на PC при&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goha.ru/obzor-evil-west-slavnyj-boevik-iz-nostalgicheskogo-proshlogo-x1kVVA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обзор Evil West — славный боевик из ностальгического прошлого</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXosQlGcSIBYh0d_s03kYBAX3wZvKzhNXRY7shqYwJo76dszfTNZt7SiVYg8f1u2VWF-Yrn8_L" alt="Обзор Evil West — славный боевик из ностальгического прошлого" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мне кажется, именно в таком ключе размышляли разработчики из студии Flying Wild Hog, когда работали над Evil West — экшеном от третьего лица в сеттинге Дикого&nbsp;...</p></div>
            </div>
        </a><a href='https://gamemag.ru/news/173470/evil-west-reviews'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ван Хельсинг на Диком Западе&quot;: Вышел экшен Evil West ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGKLbw0JSMm-PNXkKVhjiYlRS6ptXByFOFhfoTdyH-zVeEpcZT3i3GsrSlf7m7a7duhf64boPvwA" alt="&quot;Ван Хельсинг на Диком Западе&quot;: Вышел экшен Evil West ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Focus Entertainment представила релизный трейлер Evil West, вышедшего сегодня экшена про охотника на вампиров на Диком Западе. Разработкой проекта&nbsp;...</p></div>
            </div>
        </a><a href='https://www.igromania.ru/news/120924/Kovboy_protiv_vampirov_i_demonov-sostoyalsya_reliz_yekshena_Evil_West.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ковбой против вампиров и демонов — состоялся релиз экшена ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQClkMmAYjHNySIUcdVPcfVg5CZh5jfWJj-C5wj8zeNaEopvoGAvWVWuNk3pqpya-XvclrVeWsz" alt="Ковбой против вампиров и демонов — состоялся релиз экшена ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Focus Entertainment и Flying Wild Hog выпустили вампирский экшен Evil West, представив по этому случаю зрелищный релизный трейлер проекта.</p></div>
            </div>
        </a>
        </Template></>;
}