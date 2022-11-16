import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sanatorio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sanatorio"/>
        <meta name="description" content="Trending News about Sanatorio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sanatorio</h1>
            <Image width={800} height={500} src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/hbf2hibfhib4e.png?w=1200" alt="Sanatorio"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnbrasil.com.br/internacional/video-de-suposto-fantasma-em-sanatorio-na-argentina-viraliza-confira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vídeo de suposto “fantasma” em sanatório na Argentina viraliza ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1G5lWMAjyyUwP8krArSmbkzQYPpWwsofVzx4e0NDSoOAYLGS6TM1tSdhh6ZbKPNFsrGYoPgfe" alt="Vídeo de suposto “fantasma” em sanatório na Argentina viraliza ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>flipboard. Ouvir notícia. Viralizou neste fim de semana um vídeo de um suposto fantasma que apareceu no Sanatório Finochietto, um hospital geral na região de&nbsp;...</p></div>
            </div>
        </a><a href='https://hugogloss.uol.com.br/buzz/seguranca-de-sanatorio-aparece-conversando-com-fantasma-em-video-e-desfecho-da-historia-e-surpreendente-assista/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Segurança de sanatório aparece &quot;conversando com fantasma&quot; em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSR67IQkw42tLjvVkWBFqRdu-FHeQBHg_o-DfvYnei5QimJghpDeHhPwf6i-8fUkTUeWEkIDij1" alt="Segurança de sanatório aparece &quot;conversando com fantasma&quot; em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O guarda chegou a anotar os dados do fantasma e até a pegar uma cadeira de rodas. Horas depois, a história ganhou um final chocante.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/mundo/fantasma-video-mostra-guarda-de-sanatorio-conversando-com-espirito'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fantasma? Vídeo mostra guarda de sanatório conversando com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStsU8ooqHp69cFGbtC1LmnMX_2L1s89szZq1FMaz2ceUINz7HGT5cc63CedH7Q9lra5VGuarmq" alt="Fantasma? Vídeo mostra guarda de sanatório conversando com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um vídeo bizarro tem circulado nas redes sociais. Nas imagens, um funcionário do Sanatório Finochietto, em Buenos Aires, na Argentina, aparece recepcionando&nbsp;...</p></div>
            </div>
        </a><a href='https://www.portaltucuma.com.br/sobrenatural-video-mostra-seguranca-conversando-com-fantasma-em-sanatorio-mf18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sobrenatural: Vídeo mostra segurança conversando com fantasma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJRdvlGXIS6mdVAtV7DoGCC2afOnjcqihWIaFVdPi6HNN6cJlEm2Q3yQxt4smzq8NPfV2M1-qI" alt="Sobrenatural: Vídeo mostra segurança conversando com fantasma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neste último sábado (12), um vídeo assustador viralizou em toda a internet, causando medo e curiosidade nos internautas. As cenas capturadas por câmeras de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.contioutra.com/assombacao-existe-video-flagra-funcionario-de-sanatorio-conversando-com-espirito/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assombação existe? Vídeo flagra funcionário de sanatório ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRoYo6uuEYREgv_nRUcQ3jpAHoTVaduciuDziQmBDJ-hpFSIzSdbTYneoJTUL3kNnDXVfw4AExh" alt="Assombação existe? Vídeo flagra funcionário de sanatório ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O caso abaixo recentemente viralizou na internet. Nas imagens capturadas um trabalhador argentino do Sanatório Finochietto, em Buenos Aires, é filmado recebendo&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}