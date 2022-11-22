import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogos Copa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogos Copa"/>
        <meta name="description" content="Trending News about Jogos Copa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogos Copa</h1>
            <Image width={800} height={500} src="https://classic.exame.com/wp-content/uploads/2022/11/IMG_0255.jpg?quality=70&strip=info&w=1024" alt="Jogos Copa"/>
            <h3>Recent News</h3>
            <a href='https://exame.com/esporte/jogos-da-copa-do-mundo-hoje-segunda-feira-21-onde-assistir-ao-vivo-e-horarios/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogos da Copa do Mundo hoje, segunda-feira, 21; onde assistir ao ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdh5KZlZ8umqqGorZAcVlxnHT9dcmuYuaaTs6Owz--slRj7HkX_uAWgS4IY-QBd6lQ2mNKQRZA" alt="Jogos da Copa do Mundo hoje, segunda-feira, 21; onde assistir ao ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O último jogo do dia será entre Estados Unidos e País de Gales. A atração da partida será a volta dos galeses ao Mundial após 64 anos. Comandada pelo craque&nbsp;...</p></div>
            </div>
        </a><a href='https://exame.com/esporte/como-assistir-os-jogos-da-copa-do-mundo-amanha-terca-feira-22-veja-horario/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem vai jogar na Copa do Mundo amanhã, terça-feira, 22; veja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1L97Tsz4Z6zUhkQXO9gK-RWN2_O4bZ_tBU-8rTOYHMbDu1HkauKOX0hTLhytumBll5JwwpkOQ" alt="Quem vai jogar na Copa do Mundo amanhã, terça-feira, 22; veja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo de amanhã, terça-feira às 07h entre Argentina x Arábia Saudita terá transmissão ao vivo no TV Globo, Globoplay, SporTV, FIFA+ e em tempo real na EXAME.</p></div>
            </div>
        </a><a href='https://noticiasdatv.uol.com.br/noticia/copa-na-tv/qual-jogo-da-copa-do-mundo-vai-passar-hoje-veja-agenda-do-dia-e-onde-assistir-92968'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogos da Copa do Mundo hoje (22): Veja agenda do dia e onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiOYi6FJZjwyI1mCCWYDKZzFBDgk_bH_PHJnMrh9a9VHUUbeP8676Y7mx-7fFGTQcbVChdqoLB" alt="Jogos da Copa do Mundo hoje (22): Veja agenda do dia e onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogos da Copa do Mundo hoje (22/11): Saiba horário das partidas, quem vai jogar, onde assistir e veja tabela e agenda do evento no Catar.</p></div>
            </div>
        </a><a href='https://www.techtudo.com.br/listas/2022/11/copa-do-mundo-2022-onde-assistir-aos-jogos-ao-vivo-e-online.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo 2022: onde assistir aos jogos ao vivo e online</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzwMIB-Zla6ZQ7nddYd5nvK72RS882H5nGkXaGnxwFhudhdzTG3zqRkZnxWurMV9QAm36Ua9IZ" alt="Copa do Mundo 2022: onde assistir aos jogos ao vivo e online" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Campeonato mundial de futebol é sediado no Catar e teve início no último domingo (20); veja onde assistir aos jogos da Copa do Mundo 2022 de graça pela&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/esporte/programacao-a-agenda-dos-jogos-da-copa-nesta-terca-feira-22/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Programação: a agenda dos jogos da Copa nesta terça-feira, 22</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIxyOIAJJfMZ1wCEjhU6PJ7Ta3-JwFOv1W1qZmLyt0q-zX6FnAw09R5yyOxZkfxpv9McUrOGOA" alt="Programação: a agenda dos jogos da Copa nesta terça-feira, 22" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Favoritas ao título, França e Argentina estreiam no Mundial; rodada também tem México, Polônia e Dinamarca.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/jogos-de-amanha-da-copa-do-mundo-veja-horarios-e-onde-assistir.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogos de amanhã da Copa do Mundo; veja horários e onde assistir</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSI-lB8DatBcSd3OqMVUqK2ckTjRqzozzsVaYEWOmPbT-vTLhlMuvbuuRNk-dONCsXAcLbJXL_2" alt="Jogos de amanhã da Copa do Mundo; veja horários e onde assistir" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogos de Grupos C e D vão marcar o torneio do Qatar nesta terça-feira; Messi entra em campo pela seleção argentina.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/cultura/2022/11/15125173-jogos-de-amanha-22-na-copa-do-mundo-veja-quem-vai-narrar-os-jogos-da-copa-do-mundo-nesta-terca-22-11-na-globo-e-no-sportv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JOGOS DE AMANHÃ (22) NA COPA DO MUNDO: veja quem vai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThlkx33H9yY6x_cpjkQwtShUf0oaVvLyojnE7sQ0EjusiGfO30da3OFl4ndMkDRXLH6YfS7GYq" alt="JOGOS DE AMANHÃ (22) NA COPA DO MUNDO: veja quem vai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Confira as equipes escaladas na Globo e no SporTV para os jogos do terceiro dia da Copa do Mundo de 2022.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/esportes/2022/11/15124520-jogos-da-copa-do-mundo-hoje-21-11-confira-as-partidas-desta-segunda-onde-assistir-ao-vivo-e-tabela-da-copa-do-mundo-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JOGOS DA COPA DO MUNDO HOJE (21/11): Confira as partidas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_Jt1mBnK8jFNsw4v2buS5YlEQXf1tQvh25vXTsDLJ-25cLxFqyun06Ad2aRJn4E3xjPfa4umD" alt="JOGOS DA COPA DO MUNDO HOJE (21/11): Confira as partidas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Copa do Mundo 2022 teve início neste domingo (20), com a vitória de 2x0 do Equador diante do Catar.</p></div>
            </div>
        </a><a href='https://www.opovo.com.br/copa-do-mundo-2022/2022/11/21/jogos-da-copa-do-mundo-2022-amanha-22-11-onde-assistir-ao-vivo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogos da Copa do Mundo 2022 amanhã (22/11): onde assistir ao vivo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHEy6OuE5wTR_szoM2-TQmAhUfp6ujmAZRRBli9ZX75OgNlBD9rxeOGbwCBJo34nkRRBNWSCjk" alt="Jogos da Copa do Mundo 2022 amanhã (22/11): onde assistir ao vivo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleções como Argentina e França estreiam amanhã, terça, 22 de de novembro (22/11), na Copa do Mundo 2022. Veja onde assistir ao vivo aos jogos e horário.</p></div>
            </div>
        </a><a href='https://radiojornal.ne10.uol.com.br/esportes/2022/11/15124686-copa-do-mundo-ao-vivo-gratis-saiba-onde-assistir-jogos-da-copa-do-mundo-2022-online-e-ao-vivo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COPA DO MUNDO AO VIVO GRÁTIS: Saiba onde assistir jogos da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-L3MidCqNlP-Y8hPkRYUO3y8AbsFKCITMatjlsOt9rq-Uly-HJvPPC7aQk2uDWubI0qyIjeNi" alt="COPA DO MUNDO AO VIVO GRÁTIS: Saiba onde assistir jogos da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ONDE ASSISTIR A COPA DO MUNDO 2022? No Brasil, a TV Globo vai transmitir, em sinal gratuito, 56 dos 64 jogos do Mundial no Catar. Apenas&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}