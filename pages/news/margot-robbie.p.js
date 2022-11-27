import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Margot Robbie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Margot Robbie"/>
        <meta name="description" content="Trending News about Margot Robbie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Margot Robbie</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/1818563/v5596d0/og_image.jpg" alt="Margot Robbie"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2866291'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Sehr, sehr nervös“ - Margot Robbie trank vor Nacktdreh Tequila-Shots</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTuq8WxfubuTPLXz5-aHkR9BdyB_4-oEG4wzLs7kAmNcAcmQZjR9-FPUlNBJ-mnqZZQ9LM_mKHb" alt="„Sehr, sehr nervös“ - Margot Robbie trank vor Nacktdreh Tequila-Shots" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In „Wolf of Wall Street“ ist Margot Robbie neben Leonardo DiCaprio vor der Kamera gestanden - und das unter anderem auch nackt. In einem Interview ...</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/kino/id_100087486/margot-robbie-verraet-details-ueber-beruehmte-nacktszene.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie verrät Details über berühmte Nacktszene</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJTIUTaSkE6EGC22zu7lDTYxT7kzFTbYJiiCWugzmlSEbZZzycDXCn10AFh6PcjkngRsrSHMs0" alt="Margot Robbie verrät Details über berühmte Nacktszene" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es war eine der aufsehenerregendsten Szenen in einem ohnehin spektakulären Film. &quot;The Wolf of Wall Street&quot; zeigte 2013 das Leben des ehemaligen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bild.de/bild-plus/unterhaltung/leute/leute/wolf-of-wall-street-star-margot-robbie-das-geheimnis-meiner-beruehmten-nackt-sze-82067268.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Wolf of Wall Street“-Star Margot Robbie: Das Geheimnis meiner ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6ckPFwL4heD5YV50fPi-ASyMLfV6BOZh-YE54Zt3YK9GHqv_DqDek1q2SGFA17STWteujmTO_" alt="„Wolf of Wall Street“-Star Margot Robbie: Das Geheimnis meiner ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Erfolgsfilm „The Wolf of Wall Street“ von 2013 geht es um Geld und Macht – und da darf Sex natürlich nicht fehlen. Leonardo DiCaprio (48) glänzte als&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fan-lexikon.de/film-tv/news/margot-robbie-tequila-fuer-die-nerven.255899.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie: Tequila für die Nerven</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Margot Robbie: Tequila für die Nerven" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Star hat vor den Dreharbeiten zu ihrer Nacktszene in &#39;The Wolf of Wall Street&#39; &quot;ein paar Shots Tequila&quot; getrunken. (Film + TV News)</p></div>
            </div>
        </a><a href='https://www.viply.de/news/margot-robbie-vor-ihrer-nacktszene-mit-leonardo-dicaprio-brauchte-sie-einen-tequila/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie: Vor ihrer Nacktszene mit Leonardo DiCaprio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoWVe5UjQdMR_xZm8SH863c3zZUdhzBTXI5jGb0I0RkGBivsgJxSl7dVmAySjVxz5lxLHGgXWZ" alt="Margot Robbie: Vor ihrer Nacktszene mit Leonardo DiCaprio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch für große Stars sind Nackszenen nicht unbedingt Routine, wie Margot Robbie jetzt verriet. Der Schauspielerin flatterten vor einer Szene mit ihrem&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}