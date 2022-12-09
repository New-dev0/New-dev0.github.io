import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Зеленский</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Зеленский"/>
        <meta name="description" content="Trending News about Владимир Зеленский" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Зеленский</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/02490000-0aff-0242-79b5-08dad8997db1_w1200_r1.jpg" alt="Владимир Зеленский"/>
            <h3>Recent News</h3>
            <a href='https://www.svoboda.org/a/zelenskiy-dopustil-chto-voyna-v-ukraine-zakonchitsya-v-2023-godu/32167042.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский допустил, что война в Украине закончится в 2023 году</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREX87B9Ip4WNcKtG_vqRBH__C9_7vjsFgYF0u_Hdl1FgST7maI_CW7ok9viZlrknNTsQ80BR1U" alt="Зеленский допустил, что война в Украине закончится в 2023 году" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Путин вчера заявил, что война в Украине, которую он называет &quot;специальной военной операцией&quot;, может стать &quot;длительным процессом&quot;</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63889432'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Журнал Time назвал Владимира Зеленского человеком года ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTThuAi0wot54iexdUiAloV4lDjaX7b9J0lKxTqJxFNUA_7J73nW3RWGyS6kC7ajy5euTNdhC7U" alt="Журнал Time назвал Владимира Зеленского человеком года ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Накануне человеком года Зеленского объявила и британская газета Financial Times, но именно решение американского Time каждый год освещают в новостях и обсуждают&nbsp;...</p></div>
            </div>
        </a><a href='https://1plus1.ua/ru/novyny/prezident-ukraini-volodimir-zelenskij-stav-ludinou-roku-za-versieu-zurnalu-time'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президент Украины Владимир Зеленский и &quot;украинский дух ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSuaQhq16bbHCtp_e6o25hDSv9hvO2qaiRkMfWGqJIjZilrG3vTLsHy2zkICbe-h9TcRJOiEUxO" alt="Президент Украины Владимир Зеленский и &quot;украинский дух ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Успех Владимира Зеленского как военного лидера основывается на том, что мужество заразно, отметили в Time. Также издание отметило украинский дух, и вскоре&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/12/8/7379788/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Politico признало Зеленского самым влиятельным человеком ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCgBVc3_fCfZ3_kk6dVGrlrjKYtB0UQCXazhMh2_WTdegmNpSWgNsfugVGyoxVshKrk2XGd1Vl" alt="Politico признало Зеленского самым влиятельным человеком ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Украины Владимир Зеленский стал самым влиятельным человеком Европы в 2022 году по версии издания Politico.</p></div>
            </div>
        </a><a href='https://focus.ua/world/540062-kumir-dlya-es-politico-nazvalo-vladimira-zelenskogo-samym-vliyatelnym-chelovekom-evropy-2022-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кумир для ЕС: Politico назвало Владимира Зеленского самым ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1g_h74mLj3QsOkJR8xhA9zS2e2O2gnvSpz89r8cOU7Soh28t2XrZSSoTqZJtKa6nHpQp-2f_U" alt="Кумир для ЕС: Politico назвало Владимира Зеленского самым ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По оценкам журналистов, европейские лидеры восхищаются и хотят подражать президенту Украины. Военный лидер способен двигать Евросоюз в нужном ему&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/feature/2022/12/07/v-ukraine-otmetili-den-vsu-vladimir-zelenskiy-priehal-k-voennym-na-peredovuyu-v-donbass'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Украине отметили День ВСУ. Владимир Зеленский приехал к ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSP3vBGN0-t37HoRzKxu2eYUA2M_BJdAYUQBFOzLVwI_tnltipdRzL8bx3eodWsK_xfIXXSAZZE" alt="В Украине отметили День ВСУ. Владимир Зеленский приехал к ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Каждый день с начала российского вторжения редакторы «Медузы» выбирают главные кадры, сделанные в течение предыдущего дня войны. Эти снимки содержат сцены&nbsp;...</p></div>
            </div>
        </a><a href='https://sud.ua/ru/news/ukraine/256162-mirnoe-vremya-v-ukraine-mozhet-nastupit-v-sleduyuschem-godu-vladimir-zelenskiy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мирное время в Украине может наступить в следующем году ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOS9nVYEaIDadwgFw62WRLrS-gDxw6_c1T_EMHymBN7TZQjP_kODvDqHR6fOkxlQc4h1wu_wN5" alt="Мирное время в Украине может наступить в следующем году ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент считает, что в 2023 году война в Украине может закончиться.</p></div>
            </div>
        </a><a href='https://kp.ua/politics/a660768-chelovekom-hoda-time-stali-vladimir-zelenskij-i-dukh-ukraintsev'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Человеком года по версии TIME стал Владимир Зеленский</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqs0Yfe5M8-_ivi2D4tlig9oFB7FyFC6N1sQMIGXMj5nf825ETny4yXw21OsWpkVKBeoxsImuh" alt="Человеком года по версии TIME стал Владимир Зеленский" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Журнал Time назвал Человеком года президента Владимира Зеленского и дух украинцев.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5706972'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Зеленский посетил Славянск</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYFhLf6SS1Gr5OymOrnRKUavNS3IS6_AzsDxfIFUfgKVYfcsg80LRM-tfoRHJKJ_FZu9qH6Bk2" alt="Владимир Зеленский посетил Славянск" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Украины Владимир Зеленский сообщил, что приехал в Донецкую область. Он опубликовал в Telegram видео, снятое около стелы на въезде в город&nbsp;...</p></div>
            </div>
        </a><a href='https://centralasia.media/news:1831486'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Зеленский посетил Славянск в Донбассе. Фото</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqmuLGEsdwpHDTJVozuK5JjMONpHyeL4bWmnE5r8-U94Bznzl11NdIhRjSykczc677gWe1bR5K" alt="Владимир Зеленский посетил Славянск в Донбассе. Фото" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Украины Владимир Зеленский сообщил, что приехал в Донецкую область. Он опубликовал в Telegram видео, снятое около стелы на въезде в город&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}