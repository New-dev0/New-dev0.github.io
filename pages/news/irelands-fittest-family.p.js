import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Irelands Fittest Family</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Irelands Fittest Family"/>
        <meta name="description" content="Trending News about Irelands Fittest Family" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Irelands Fittest Family</h1>
            <Image width={800} height={500} src="https://www.irishexaminer.com/cms_media/module_img/6603/3301517_13_seoimageog_NUGENTS_20with_20Coach_20Davy_1_.jpg" alt="Irelands Fittest Family"/>
            <h3>Recent News</h3>
            <a href='https://www.irishexaminer.com/lifestyle/people/arid-41011505.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland&#39;s Fittest Family winners: &#39;We&#39;ve never experienced anything ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrPzWmFt_vlgHqlTW7nKR4dTsrtTJr90YbmNuP0C_j8mjCmVnqw8F3A_SbMrcwB8VMHh_ZId5c" alt="Ireland&#39;s Fittest Family winners: &#39;We&#39;ve never experienced anything ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Nugents from Co Louth were thrilled to have Davy Fitzgerald as their coach and say there is another side to the hurling manager that we don&#39;t see.</p></div>
            </div>
        </a><a href='https://www.independent.ie/regionals/louth/news/louths-nugents-win-nail-biting-final-in-irelands-fittest-family-we-are-over-the-moon-42161456.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louth&#39;s Nugents win nail-biting final in Ireland&#39;s Fittest Family: &#39;We ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQefoXPVxmPzKMjGjQcAdQwxtnrO98PWTcY0Q2X-WpRFs0Gk7Z0FtQoyZqUozzNW8ymY2bCAN-z" alt="Louth&#39;s Nugents win nail-biting final in Ireland&#39;s Fittest Family: &#39;We ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It certainly was survival of the fittest as Drogheda&#39;s Nugent family saw off all contenders to take the title of Ireland&#39;s Fittest Family on RTE on Sunday&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.ie/news/viewers-praise-unbelievable-irelands-fittest-family-final-42160183.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viewers praise &#39;unbelievable&#39; Ireland&#39;s Fittest Family final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT3qZs3dexiqv_23Tc9GsGf597rgefe-LDyx5F9ZU6fsbLlwEesGNoVW0DSkdLOGF5tXhL7nJaT" alt="Viewers praise &#39;unbelievable&#39; Ireland&#39;s Fittest Family final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taking part in the series 10 finale was Donncha O&#39;Callaghan&#39;s Finnegan&#39;s from Cork, Davy Fitzgerald&#39;s the Nugent&#39;s from Louth and Anna Geary&#39;s two teams - the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.ie/regionals/wicklow/news/wicklow-family-finish-as-runners-up-in-irelands-fittest-family-after-nail-biting-finale-42160185.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wicklow family finish as runners-up in Ireland&#39;s Fittest Family after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ26NW7IpxtQB8WhKsRY4NshUuzPiQ6GwSKq48b6uY8fI5w213vXBqdbwkcS0pHpjxGKplxZrHi" alt="Wicklow family finish as runners-up in Ireland&#39;s Fittest Family after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Fitzsimons family from Wicklow with coach Anna Geary. wicklowpeople. Eoin Mac Raghnaill. November 21 2022 09:36 AM. Facebook&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}