import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Catarina Furtado</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Catarina Furtado"/>
        <meta name="description" content="Trending News about Catarina Furtado" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Catarina Furtado</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/62ecd2ce0cf2f9a86eb02c12/og/selfie" alt="Catarina Furtado"/>
            <h3>Recent News</h3>
            <a href='https://selfie.iol.pt/catarina-furtado/the-voice-portugal/muito-feliz-catarina-furtado-anuncia-novidade-a-missao-de-vida-que-escolhi/20221120/637a16000cf2254fb2832afa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Muito feliz, Catarina Furtado anuncia novidade: &quot;A missão de vida ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSojjLjDaEzBkU3AU_cVHnyAk6Ves48FsRymO_6SzjpntS8owrDP8amokhGhH0lo6W3kUCAIyK" alt="Muito feliz, Catarina Furtado anuncia novidade: &quot;A missão de vida ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Decorreu no passado sábado, dia 19, o evento GQ Men of the Year 2022, que visa premiar figuras públicas - nacionais e internacionais - que se destacaram,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/rtp/catarina-furtado-surpreende-com-look-arrasador-no-the-voice-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Catarina Furtado surpreende com look arrasador no &#39;The Voice ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDZxdwsZw9m73pqVXkivaDloQtvXMi29qkFT2Rj6g5N65RpiNjhKJGmmylvpb0iN68Ij5j5IQ_" alt="Catarina Furtado surpreende com look arrasador no &#39;The Voice ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catarina Furtado conquistou rasgados elogios na primeira emissão em direto do &#39;The Voice Portugal&#39;. A apresentadora surpreendeu com um vestido cheio de.</p></div>
            </div>
        </a><a href='https://www.hiper.fm/catarina-furtado-distinguida-com-premio-de-direitos-humanos-fico-mesmo-muito-lisonjeada/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Catarina Furtado distinguida com prémio de Direitos Humanos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-oXau01JUUagiVkzBTGy1hx1updeUeXOQfsvixKqnNmnwNgdEg2ChffRDXVvb8D8_Atem8eF3" alt="Catarina Furtado distinguida com prémio de Direitos Humanos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No sábado, dia 19 de novembro, decorreu a gala &#39;Men of the Year 2022&#39;, da GQ Portugal, no Teatro Tivoli. Um dos prémios deste ano voltou a destacar a &#39;luta&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/rtp/catarina-furtado-volta-a-ser-distinguida-com-premio-de-direitos-humanos-fico-mesmo-muito-lisonjeada/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Catarina Furtado volta a ser distinguida com prémio de Direitos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnNUZA7ianBVEesIX2jJOt8JRjPy6hThKq6n0dx-DFfBvm759WtQeFGVOVqA0eVlAkWksctj1d" alt="Catarina Furtado volta a ser distinguida com prémio de Direitos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No passado sábado, dia 19 de novembro, realizou-se mais uma gala da GQ Portugal &#39;Men of The Year&#39;. Catarina Furtado marcou presença no evento, onde foi.</p></div>
            </div>
        </a>
        </Template></>;
}