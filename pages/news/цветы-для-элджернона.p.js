import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Цветы для Элджернона</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Цветы для Элджернона"/>
        <meta name="description" content="Trending News about Цветы для Элджернона" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Цветы для Элджернона</h1>
            <Image width={800} height={500} src="https://medialeaks.ru/wp-content/uploads/2022/11/fb-tanya3-5-1.jpg" alt="Цветы для Элджернона"/>
            <h3>Recent News</h3>
            <a href='https://medialeaks.ru/1711tat-str-sct-flowers-algernon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Читатели занижают рейтинг книги «Цветы для Элджернона ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcHCKB2hlMEQ7Szv68XwCkV__BeQmETjOnokW0bCWdoXBbslS3rBaVm7q6vQ7k-VP4W0IQJ8Gv" alt="Читатели занижают рейтинг книги «Цветы для Элджернона ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Читатели «Цветы для Элджернона» занижают рейтинг книги на Ozon и Wildberries из-за орфографических ошибок. По сюжету, рассказ пишет умственно отсталый&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirf.ru/news/oshibka-na-oshibke-v-seti-vysmeyali-otzyvy-chitatelej-k-romanu-cvety-dlya-eldzhernona/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ошибка на ошибке»: в сети высмеяли отзывы читателей к ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTRktQfgxIlJQQIRr13XITSWHheqxuY5afX_LR_I4tSxgbei5tLwFKZxED2dbrcj4eJzxSzN5Wd" alt="«Ошибка на ошибке»: в сети высмеяли отзывы читателей к ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Роман «Цветы для Элджернона» Дэниела Киза в жанре «мягкой» научной фантастики рассказывает о молодом умственно отсталом человеке Чарли, который становится&nbsp;...</p></div>
            </div>
        </a><a href='https://gorvesti.ru/society/volgogradtsy-vozmuscheny-prodavtsom-knigi-tsvety-dlya-eldzhernona-iz-za-kuchi-oshibok-v-tekste-128180.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Волгоградцы возмущены продавцом книги «Цветы для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzukpNoItVIn5_GOj4U9bN42VRYyl8nGUaZpDtUb6R-Wk73-nj-GKy3xqEMVLJsXX5cYvlvDy_" alt="Волгоградцы возмущены продавцом книги «Цветы для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Роман «Цветы для Элджернона» - всемирно известное произведение Дэниела Киза. Книга пользуется популярностью у современных читателей.</p></div>
            </div>
        </a><a href='https://mosregtoday.ru/soc/na-wildberries-razgorelsya-skandal-iz-za-populyarnoj-knigi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Wildberries разгорелся скандал из-за популярной книги</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4BHrTRe6klZtGXSsQmckCZPEGLbiXV8bMhuDamvzZFkQ6-Gn_2I9pfOPg8dPF4sy6NTPrcAMj" alt="На Wildberries разгорелся скандал из-за популярной книги" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Читатели известной книги Дэниела Киза «Цветы для Элджернона», выставленной на продажу в интернет-магазине Wildberries, возмущены орфографическими ошибками в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}