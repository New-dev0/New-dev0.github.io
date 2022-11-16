import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мудрик</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мудрик"/>
        <meta name="description" content="Trending News about Мудрик" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мудрик</h1>
            <Image width={800} height={500} src="https://static.ua-football.com/img/upload/21/2a1f9d.jpeg" alt="Мудрик"/>
            <h3>Recent News</h3>
            <a href='https://www.ua-football.com/ukrainian/high/1668545610-mudrik-navernoe-vybral-by-byt-igrokom-starta-v-arsenale-chem-zapasnym-v-reale.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мудрик: Наверное, выбрал бы быть игроком старта в Арсенале ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScyrrx5rBLyN50Hcu_6Xnby3Re8D7zYz5ppVHzbWkBGxIwxEK15QjoWpo8rJNvSo6-Z4Wp5CJg" alt="Мудрик: Наверное, выбрал бы быть игроком старта в Арсенале ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15-11-2022 ✓ Премьер-лига. Болельщики Арсенала зовут украинца в Лондон: Украинский вингер Шахтера Михаил Мудрик поделился мыслями об интересе Арсенала. Я&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/mudrik_na_rozdorizhzhi_arsenal__daleko_ne_yediniy_nespodivaniy_variant_u_la_lizi_n747437/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мудрик на роздоріжжі, Арсенал – далеко не єдиний ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFeLk190jg53ifvXaa6nMxIf-895uECCjWyg9HyNGNkDT5dpMGzgys8TIjFs3fZZBoruE3k4qb" alt="Мудрик на роздоріжжі, Арсенал – далеко не єдиний ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вінгер Шахтаря та збірної України Михайло Мудрик є одним із головних футбольних ньюзмейкерів. Інтерес до українця приписують майже кожному провідному клубу&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ua/ukrainian/high/1668545610-mudrik-napevno-vibrav-bi-buti-gravcem-startu-v-arsenali-nizh-zapasnim-u-reali.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мудрик: Напевно, вибрав би бути гравцем старту в Арсеналі, ніж ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScyrrx5rBLyN50Hcu_6Xnby3Re8D7zYz5ppVHzbWkBGxIwxEK15QjoWpo8rJNvSo6-Z4Wp5CJg" alt="Мудрик: Напевно, вибрав би бути гравцем старту в Арсеналі, ніж ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15-11-2022 ✓ Прем&#39;єр-Ліга. Вболівальники Арсеналу кличуть українця до Лондона: Український вінгер Шахтаря Михайло Мудрик поділився думками про інтерес&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4892179-mihail-mudrik-esli-vybirat-zapas-reala-i-osnovu-arsenala-ya-vyberu-vtoroe.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Михаил Мудрик: если выбирать запас «Реала» и основу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeCUaXn4DimZe_7wQR-RXme9H0EGp_1uhi40SqIQRPyEQxDMmelPmiSrqKQBTgyNi9VR6nxTIE" alt="Михаил Мудрик: если выбирать запас «Реала» и основу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Полузащитник «Шахтёра» Михаил Мудрик, в услугах которого заинтересован ряд европейских команд, выбрал бы быть игроком основного состава лондонского&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ua/ru/football/news/30370-mudrik-mog-okazatsja-v-dinamo-superzvezda-shahtera-raskryl-neozhidannye-podrobnosti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мудрик мог оказаться в Динамо – суперзвезда Шахтера ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8I6pkbHMCKs_QBXafkKShWQv5QS8hIt0cI6OBE0cjcuzh6gXstPKLp8bbo8Uo3H-bZre2__ps" alt="Мудрик мог оказаться в Динамо – суперзвезда Шахтера ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вингер Шахтера Михаил Мудрик вспомнил, как когда-то выбирал между двумя грандами УПЛ — Спорт 24.</p></div>
            </div>
        </a><a href='https://sport.unian.ua/football/lider-shahtarya-mudrik-pidtverdiv-bazhannya-pokinuti-klub-vzimku-i-nazvav-prioritetni-varianti-12046482.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лідер Шахтаря Мудрик підтвердив бажання покинути клуб взимку ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIZGov1lRxTgHAVGanzpaTCkp0iPMvWgthPByJ2b1rlvulAgLyffgSwxNPBOMcc_5KTa6YLfJX" alt="Лідер Шахтаря Мудрик підтвердив бажання покинути клуб взимку ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Півзахисник донецького Шахтаря і збірної України Михайло Мудрик повідомив, що засмутиться, якщо не перейде в іншу команду в зимове трансферне вікно.</p></div>
            </div>
        </a><a href='https://football24.ua/ru/mudrik_priznalsja_chto_byl_blizok_k_perehodu_v_dinamo_n747460/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мудрик признался, что был близок к переходу в Динамо ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFsz2LZYHZYwLZig08fCzisskMDG_geLQAlu8jUWuqQ6QPzQDnE-U0B14HsTbQ5VL8442Lj2M-" alt="Мудрик признался, что был близок к переходу в Динамо ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Суперзвезда Шахтера Михаил Мудрик рассказал, что на старте своей карьеры мог стать игроком Динамо. Новости футбола Футбол 24.</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/ru/mudrik-rasskazal-rasstroitsja-li-esli-ne-pokinet-shahter_n2198415'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мудрик признался, расстроится ли, если зимой не покинет Шахтер</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtbOsr-8E-CF5N_iqY9xLLVtNqJquD1Fo-16CtrkHquTu4oaNiI5wLtELwbIZiD6YlkHf2umNs" alt="Мудрик признался, расстроится ли, если зимой не покинет Шахтер" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В будущее зимнее трансферное окно Михаил Мудрик может покинуть УПЛ. Футболист Шахтера рассказал, хочет ли уйти из донецкого клуба ради выступлений в Европе.</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/mudrik-rozpoviv-zasmutitsya-yakshho-ne-pokine-shahtar_n2198362'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мудрик зізнався, чи засмутиться, якщо взимку не покине Шахтар</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtbOsr-8E-CF5N_iqY9xLLVtNqJquD1Fo-16CtrkHquTu4oaNiI5wLtELwbIZiD6YlkHf2umNs" alt="Мудрик зізнався, чи засмутиться, якщо взимку не покине Шахтар" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У майбутнє зимове трансферне вікно Михайло Мудрик може покинути УПЛ. Футболіст Шахтаря розповів, чи хоче піти з донецького клубу заради виступів у Європі.</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ukrainian/high/1668506983-mudrik-priznalsya-chto-samyy-dorogoy-igrok-serii-a-prosil-u-nego-futbolku.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мудрик признался, что самый дорогой игрок Серии А просил у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRL9pyfmfBNtmdTrZgjk_V7u1pTwS5W7PwhfaI3aA-N15gCiv2X_SeOmWFpdCo07rb4z7f5wEO-" alt="Мудрик признался, что самый дорогой игрок Серии А просил у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15-11-2022 ✓ Премьер-лига. Рафаэль Леау в восторге от украинского таланта: Нападающий Милана и сборной Португалии Рафаэль Леау написал вингеру донецкого&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}