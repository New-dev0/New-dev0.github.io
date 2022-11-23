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
            <Image width={800} height={500} src="https://img.championat.com/news2/social/4/cb/4901289.jpg" alt="Evil West"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/cybersport/news-4901289-evil-west-koop-ekshen-pro-vampirov-vzlomali-pryamo-v-den-reliza.html'>
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
                <p style={{marginLeft: "15px"}}>Вампирский вестерн Evil West уже добрался до игроков, но ещё раньше совместное творение издательства Focus Entertainment и разработчиков из студии Flying&nbsp;...</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/11/22/135621/ocenki-evil-west-dobrotnyi-suter-na-paru-vecerov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оценки Evil West: Добротный шутер на пару вечеров</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1OL_XaySqmYcFJ-KXKd85OLEEbGMNqQxuKdT7DQ9zfL2S_F5UJGn4Dbtr5XmAevrSi2qBc002" alt="Оценки Evil West: Добротный шутер на пару вечеров" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня состоялся релиз Evil West — необычного экшена в сеттинге Дикого Запада с различными демонами, вампирами и другими тварями от студии Flying Wild Hog&nbsp;...</p></div>
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
        </a><a href='https://www.overclockers.ua/news/games/2022-11-22/131807/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В продажу поступил боевик Evil West</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6JMWwPyyA1NHYfFCeqk7EFX7pIyZIocaLVkq_rNOSSxAkStQ0nYAK4UmTZZSsd53n1ez21nbk" alt="В продажу поступил боевик Evil West" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Стартовали продажи новой игры от польской студии Flying Wild Hog и издателя Focus Entertainment. Боевик Evil West предлагает истреблять вампиров в антураже&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}