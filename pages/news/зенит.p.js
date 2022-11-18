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
            <Image width={800} height={500} src="https://img.championat.com/news/social/7/c7/4893809.jpg" alt="Зенит"/>
            <h3>Recent News</h3>
            <a href='https://fc-zenit.ru/news/2022-11-17-zenit-2010-goda-rozhdeniya-primet-uchastie-v-turnire-v-minske-.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» 2010 года рождения примет участие в турнире в Минске ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Зенит» 2010 года рождения примет участие в турнире в Минске ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Международный турнир памяти Александра Прокопенко впервые пройдет в столице Беларуси. - новости футбольного клуба Зенит.</p></div>
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
        </a><a href='https://www.kommersant.ru/doc/5669321'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» со счетом 2:0 обыграл воронежский «Факел» в матче ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Зенит» со счетом 2:0 обыграл воронежский «Факел» в матче ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Петербургский футбольный клуб «Зенит» обыграл воронежский «Факел» в матче пятого тура группового этапа турнира «ФОНБЕТ Кубок России».</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-11-17/828312-zenit-pri-semake-zabil-400-i-401-goly-do-rekorda-morozova-19-myachej/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» при Семаке забил 400 и 401 голы, до рекорда ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTN1Z9GVp6xdxztnfpE-hHIpGcKJZtIm8mzQQjC4zAqJ7DnRc-WT3FVbYoQJpXP24mXLEh9IY3u" alt="«Зенит» при Семаке забил 400 и 401 голы, до рекорда ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Петербургский футбольный клуб &quot;Зенит&quot; под руководством главного тренера Сергея Семака забил 400 и 401 годы. Это случилось в матче пятого тура группового&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-17/zenit-pod-rukovodstvom-semaka-idet-na-rekord-po-kolichestvu-zabityh-myachey'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» под руководством Семака идет на рекорд по количеству ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQO41rFnFz5lt5dKlgswacoRQnElnZAj3WmoVkbHTGQDru5m7tH5DLShsC4ADUcJwge-OuX1rA_" alt="«Зенит» под руководством Семака идет на рекорд по количеству ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Первый мяч Малкома в игре против воронежского «Факела» в рамках группового этапа Кубка России стал юбилейным для главного тренера «Зенита» Сергея Семака,&nbsp;...</p></div>
            </div>
        </a><a href='https://fc-zenit.ru/news/2022-11-16-fakel-zenit-peterburzhtsy-oderzhali-sukhuyu-pobedu-na-vyezde.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Факел» — «Зенит»: петербуржцы одержали сухую победу на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLKi5RrMvoO_1K6upfzfTtQP8jINsAdJbQMuv3ojghq8Qdi-Y2TR6hpjpRrSyribzUSB4nR3Qs" alt="«Факел» — «Зенит»: петербуржцы одержали сухую победу на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вышедший на замену Малком оформил дубль и принес зенитовцам три очка. - новости футбольного клуба Зенит.</p></div>
            </div>
        </a>
        </Template></>;
}