import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Зенит</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Зенит"/>
        <meta name="description" content="Trending News about Зенит" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Зенит</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/f/9e/4893969.jpg" alt="Зенит"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/basketball/article-4893969-16-noyabrya-obzor-matcha-edinoj-ligi-vtb-lokomotiv-kuban-zenit-62-68.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Триллер в Лиге ВТБ! «Зенит» едва не уступил «Локо», выдав ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQG5_vX_2Db2i7mykoy7up6YZWPZ3H4mKdZVvMzX1xA6eNSOED6icNcbdgJaPNvQxSQMhu4Aa75" alt="Триллер в Лиге ВТБ! «Зенит» едва не уступил «Локо», выдав ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Команды устроили на площадке настоящее сумасшествие, дважды перевернув ход встречи во второй половине! Однако победа в крайне напряжённой концовке всё же&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/article-4893809-fakel-zenit-0-2-obzor-matcha-kubok-rossii-16-noyabrya-2022-goda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» целый тайм страдал в Кубке. Но потом вышел Малком</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMGIig3IciWAvuYBdN7OKqnffryT2ZInb7wHLMaCG10TYbmfkYH55iXwfgZSeXYRMtDfJVHszQ" alt="«Зенит» целый тайм страдал в Кубке. Но потом вышел Малком" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Последнюю гостевую игру в 2022 году «Зенит» провёл в Воронеже, где сыграл с «Факелом» в 5-м туре группового этапа. Из-за вызова в национальную сборную не все&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/rus_cup/news/fakel-zenit-startovye-sostavy-komand-kubok-rossii-16-noyabrya-2022-goda-1998852/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Факел» — «Зенит»: стартовые составы команд. Чистяков ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXXa_6edoAnTs9qBRhibariJRgztYF-PVbjI1LUDM1jYCCmzsgBtBr-uc6ml5MoMRzEPYq3XhD" alt="«Факел» — «Зенит»: стартовые составы команд. Чистяков ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Факел» на своем поле примет «Зенит» в матче 5-го тура группового этапа Пути РПЛ Кубка России.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/16/71821985/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» обыграл «Факел» в Воронеже</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2cbHfnEOh1ukolMYF7FeI5a1tXNDpLi0czexhskhb4mYTp9fBzXP3v5rRnnhBEZsL6e6nxdFm" alt="«Зенит» обыграл «Факел» в Воронеже" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Победой футбольного клуба «Зенит» завершился матч группового этапа Кубка России против «Факела» из Воронежа. Встреча проходила - Спорт - 16 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/basketball/vtb-league/news/lokomotiv-kuban-zenit-62-68-rezultat-matcha-edinoy-ligi-vtb-16-noyabrya-2022-goda-1998995/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» вырвал победу у «Локомотива-Кубани»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQP0LAcoVNgvHc1ZKlZYmQdH7HDT36fzCFN4T8o4uwkGE7V6Fkrz8wXYUOpjAQmrjgPQUoSlBbk" alt="«Зенит» вырвал победу у «Локомотива-Кубани»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Зенит» вырвал победу у «Локомотива-Кубани» в матче регулярного чемпионата Единой лиги ВТБ — 68:62.</p></div>
            </div>
        </a><a href='https://fc-zenit.ru/news/2022-11-16-fakel-zenit-peterburzhtsy-oderzhali-sukhuyu-pobedu-na-vyezde.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Факел» — «Зенит»: петербуржцы одержали сухую победу на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Факел» — «Зенит»: петербуржцы одержали сухую победу на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вышедший на замену Малком оформил дубль и принес зенитовцам три очка. - новости футбольного клуба Зенит.</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-16/zenit-vyigral-kubkovyy-match-u-fakela'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» выиграл кубковый матч у «Факела»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRabNLm7kS1Qar568n5ZtvnjhkZ10JoFKLMQ_Y1AeGIBJTbSDHKIbjKIFybdEvi3xowXNsJ6vnT" alt="«Зенит» выиграл кубковый матч у «Факела»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча 5-го тура группового этапа «Пути Премьер-лиги» Кубка России в Воронеже завершилась победой петербуржцев (2:0), оба мяча забил лучший бомбардир&nbsp;...</p></div>
            </div>
        </a><a href='https://fc-zenit.ru/news/2022-11-16-zenit-zabil-400-y-myach-pod-rukovodstvom-sergeya-semaka.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» забил 400-й мяч под руководством Сергея Семака ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Зенит» забил 400-й мяч под руководством Сергея Семака ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Первый мяч Малкома в игре с воронежским «Факелом» стал юбилейным для главного тренера сине-бело-голубых. - новости футбольного клуба Зенит.</p></div>
            </div>
        </a><a href='https://matchtv.ru/basketball/matchtvnews_NI1725190_Zenit_pereigral_Lokomotiv_Kuban_v_matche_Jedinoj_ligi_sovershiv_v_tretjej_chetverti_ryvok_291'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» переиграл «Локомотив-Кубань» в матче Единой лиги ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcReHygXv0kmEQzgqZPFvzNGoRq42t0Pfd5UAsTtSYTRpC7SWDenAVdMLh_v9eu-x2q6f501lmge" alt="«Зенит» переиграл «Локомотив-Кубань» в матче Единой лиги ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Петербургский «Зенит» обыграл краснодарский «Локомотив‑Кубань» в матче регулярного чемпионата Единой лиги ВТБ.</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113288142-zenit-vyigral-6-iz-7-poslednix-matchej-s-obshhim-schetom-171-i-ustupil.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» выиграл 6 из 7 последних матчей с общим счетом 17:1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2fHLdrBG1hDbOHoWZP_H4m4FKpNthKskYgONUckuRQ8oV2Y7zgFwWiFk_VMCRZbwnYd0EU-o7" alt="«Зенит» выиграл 6 из 7 последних матчей с общим счетом 17:1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Зенит» лишь раз за последние семь игр не сумел добиться победы.</p></div>
            </div>
        </a>
        </Template></>;
}