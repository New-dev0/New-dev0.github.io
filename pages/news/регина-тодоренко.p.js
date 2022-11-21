import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Регина Тодоренко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Регина Тодоренко"/>
        <meta name="description" content="Trending News about Регина Тодоренко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Регина Тодоренко</h1>
            <Image width={800} height={500} src="https://mediabum.info/wp-content/uploads/2022/11/2-5852.jpg" alt="Регина Тодоренко"/>
            <h3>Recent News</h3>
            <a href='https://mediabum.info/druzi-oplakujut-reginu-todorenko-probach-shho-ne-vberig.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Друзі оплакують Регіну Тодоренко: «пробач, що не вберіг ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQH_jHHeJajW-YIfu7iQjYu7LFfRnB9zrMB2biPtjw2Wd-dfUWDvJc72-Fi1kvZYJ6gqeSEjE5" alt="Друзі оплакують Регіну Тодоренко: «пробач, що не вберіг ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Регіна Тодоренко впала з великої висоти. Фотографії співачки з моторошними травмами вже розлетілися Мережею. Друзі та колеги зірки в шоці від того,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}