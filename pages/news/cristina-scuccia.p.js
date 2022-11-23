import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cristina Scuccia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cristina Scuccia"/>
        <meta name="description" content="Trending News about Cristina Scuccia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cristina Scuccia</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A3186%3A1790%3Anowe%3A36%3A24%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F21203503%2Fbefunky-collage-9.jpg" alt="Cristina Scuccia"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/21/lembra-se-da-freira-que-venceu-o-the-voice-italiano-abandonou-o-convento-e-agora-e-empregada-de-mesa-em-espanha-segui-o-meu-coracao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lembra-se da freira que venceu o The Voice italiano? Abandonou o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSuvN-5QlsDe_87RUhHQY8HLZNXkQov7lKqwzV10MYUdzyU5ydrquBuQgPb3kVcw4rg5TTAGFh5" alt="Lembra-se da freira que venceu o The Voice italiano? Abandonou o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-freira Cristina Scuccia venceu The Voice italiano em 2014, lançou dois álbuns e tornou-se uma estrela. 8 anos depois, abandonou o convento: &quot;Vejo minha&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/mundo/freira-italiana-que-venceu-the-voice-e-agora-empregada-de-mesa-15373484.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Freira italiana que venceu &quot;The Voice&quot; é agora empregada de mesa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWMyr9GBK9sDeFJoHzY5GtZ931SAyXG6G8696wOcy0QrRcoubBMEOJib_-_jq0Gcj54Tlg1Tz0" alt="Freira italiana que venceu &quot;The Voice&quot; é agora empregada de mesa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma freira, conhecida por &quot;irmã Cristina&quot;, que ficou internacionalmente famosa ao vencer o concurso de canto &quot;The Voice&quot; de Itália em 2014, anunciou que&nbsp;...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/ela/noticia/2022/11/vencedora-do-the-voice-freira-italiana-deixa-vida-religiosa-para-virar-cantora-e-trabalha-como-garconete.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vencedora do The Voice, freira italiana deixa vida religiosa para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRm4eKewsnJdZYohCZvlKeweeLN18aHjNp23AlPg0W3YJ8BOCEuyP_wUd8QjdRfngk46Ypj4Zwp" alt="Vencedora do The Voice, freira italiana deixa vida religiosa para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Nunca vi conflito entre religião e música porque fiz meu noviciado no Brasil&#39;, diz Cristina.</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/22/impar/noticia/ha-8-anos-irma-cristina-venceu-the-voice-trocou-veu-musica-2028651'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Há oito anos, a irmã Cristina venceu o &lt;i&gt;The Voice&lt;/i&gt;. Agora ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxkQUGtKY6Aea2jpuerdBEa3bBjDd0OsgBY7DNH6FnIHrcw7JP1ggS6HzV6ZdQsynt2jkQQzcR" alt="Há oito anos, a irmã Cristina venceu o &lt;i&gt;The Voice&lt;/i&gt;. Agora ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vestida de vermelho e com stilettos, Cristina Sciuccia apresentou-se renovada num programa de televisão italiano. “Mas a essência continua a ser a mesma”,&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/ansa/2022/11/21/freira-cristina-deixa-vida-religiosa-para-ser-cantora-na-italia.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Freira Cristina deixa vida religiosa para ser cantora na Itália</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Freira Cristina deixa vida religiosa para ser cantora na Itália" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ROMA, 21 NOV (ANSA) - A italiana Cristina Scuccia, vencedora do programa &quot;The Voice&quot; de 2014, anunciou que deixou a vida consagrada como freira e que agora&nbsp;...</p></div>
            </div>
        </a><a href='https://www.impala.pt/noticias/portugal-e-o-mundo/cristina-scuccia-freia-ganhou-the-voice/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lembra-se de Cristina Scuccia, a freia que ganhou o The Voice ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJB2IspQivCgk2TtHsylqha0OmyNhv9fAb8Es-xfejXiM2X8flgwLp4d4HEtPhHjbPgrXsbiu2" alt="Lembra-se de Cristina Scuccia, a freia que ganhou o The Voice ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Estávamos em 2014 quando uma freira entrou no palco da versão italiana de The Voice. Cristina Scuccia conquistou de imediato os jurados (viraram as quatro&nbsp;...</p></div>
            </div>
        </a><a href='https://mag.sapo.pt/showbiz/artigos/freira-italiana-que-venceu-o-the-voice-abandona-convento-para-ser-empregada-de-mesa-em-espanha'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Freira italiana que venceu o &quot;The Voice&quot; abandona convento para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRi2TSTAsajcVxXY3-lZ4zegAKlxNpaypIiPGKpTSkK2WP0x2uH5EXADdNBDy5fBF1sMkQbGfqG" alt="Freira italiana que venceu o &quot;The Voice&quot; abandona convento para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristina Scuccia foi uma das estrelas da versão italiana do programa de talentos.</p></div>
            </div>
        </a>
        </Template></>;
}