import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Das Wunder von Bern</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Das Wunder von Bern"/>
        <meta name="description" content="Trending News about Das Wunder von Bern" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Das Wunder von Bern</h1>
            <Image width={800} height={500} src="https://media.news.de/images/857781561/images/ce/09/f98f2eb8732d855f9785d9139df3/nopic/no_pic/1200/675/1/1/-/-/1280/720/-/-/das-wunder-von-bern-bei-kabel-eins_857781561_1200x675_4d69f7fd4a50bb37f597874417ff0280.jpg" alt="Das Wunder von Bern"/>
            <h3>Recent News</h3>
            <a href='https://www.news.de/tv-aktuell/856595367/das-wunder-von-bern-im-tv-und-online-als-live-stream-in-der-kabel-1-mediathek-so-koennen-sie-den-tv-film-am-16-11-2022-sehen/1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Das Wunder von Bern&quot; bei Kabel 1 im Stream und TV: TV-Tipp bei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXJ8HI_mhHH1f83itEx-LzmdE2lMIMvJ6JGKV10Nnwv2arj74pderw-1ANfi2XVFon25v-_9gb" alt="&quot;Das Wunder von Bern&quot; bei Kabel 1 im Stream und TV: TV-Tipp bei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heute, am 16.11.2022, wird &quot;Das Wunder von Bern&quot; von Sönke Wortmann im Fernsehen gezeigt. Wo Sie den Streifen schauen können, ob nur im &quot;klassischen&quot; TV&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}