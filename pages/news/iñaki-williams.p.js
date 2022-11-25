import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Iñaki Williams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Iñaki Williams"/>
        <meta name="description" content="Trending News about Iñaki Williams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Iñaki Williams</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=bb8d48eb-f1ba-467b-86b5-eb37348af8ec&w=800&h=420&watermark=true&t=20221124114300" alt="Iñaki Williams"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/desporto/a-historia-de-superacao-de-inaki-williams-o-craque-ganes-que-quer-ofuscar-ronaldo-15382990.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A história de superação de Iñaki Williams, o craque ganês que quer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAAB1wvRq3sir78ohz-JFqxO0zQLl1_6kV7AZfMRMSQWiS1EoQcJ0LU6P2NxYtX_PgEW6Q_ubj" alt="A história de superação de Iñaki Williams, o craque ganês que quer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A vida do avançado do Athletic Bilbao foi toda passada em Espanha, mas a história de superação dos pais - ganeses - e uma visita ao avô pesaram na decisão&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zerozero.pt/news.php?id=424012'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iñaki Williams: «Os meus pais arriscaram a vida por mim e pelo Nico ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzYz_rQV3gNfFD2sNvArKhHuWdP6pB2SCzZxVVPsMLyvsVhTG5KDcuo4CbDifeLPgzqFcollQy" alt="Iñaki Williams: «Os meus pais arriscaram a vida por mim e pelo Nico ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nasceu em Bilbau, mas representa o Gana. Iñaki Williams é um dos craques do Athletic Bilbao e da seleção ganesa e defronta Portugal esta quinta-feira.</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15127880-quem-e-inaki-williams-conheca-o-jogador-de-gana-que-recusou-a-espanha-e-esta-na-copa-do-mundo-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>QUEM É IÑAKI WILLIAMS? Conheça o JOGADOR DE GANA que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR4ERVQWMISsJV5oZts-k3FR-i_5K1mhci5YNfRimlNCR390yB7yG_2n0tKMebmUU4xJ6eUPhzm" alt="QUEM É IÑAKI WILLIAMS? Conheça o JOGADOR DE GANA que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador do Athletic Bilbao optou por defender as cores de Gana na Copa do Mundo 2022.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/selecao/noticias/se-ronaldo-vai-ao-chao-e-mais-facil-apitar-penalti-com-a-sua-hierarquia-15386002.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Se Ronaldo vai ao chão é mais fácil apitar penálti, com a sua ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSEhnUxHZyuN_GvsoWGx79W3Gzc3gR1ll9KYNUHXujWLBIcKemNX3Tke8N9dOV3LnWSwpqbP19" alt="&quot;Se Ronaldo vai ao chão é mais fácil apitar penálti, com a sua ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Iñaki Williams, jogador do Gana, após a derrota com Portugal (3-2) na primeira jornada do Grupo H.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-24/gana-adversario-de-portugal-inaki-ganha-alcunha-no-balneario/965956'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adversário de Portugal, Iñaki ganha alcunha no balneário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQicVMwoDQBLTDt8IplJm15Ci5PqBCZvPspyT_9UcPRuCJQmSguS1sUwmSj3249pCSxBWq9VP1P" alt="Adversário de Portugal, Iñaki ganha alcunha no balneário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iñaki Williams, avançado de 28 anos que é figura de destaque do Athletic Bilbao, optou recentemente pela nacionalidade ganesa, sendo por isso chamado a&nbsp;...</p></div>
            </div>
        </a><a href='https://visao.sapo.pt/atualidade/desporto/mundial2022/2022-11-23-uma-carrinha-apinhada-os-pes-a-queimar-no-saara-e-a-mentira-para-entrar-na-europa-a-historia-dos-irmaos-williams-que-vao-jogar-por-paises-diferentes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uma carrinha apinhada, os pés a queimar no Saara e a mentira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR--MTq69SWaJeXhM87hQ2zVmKSB_faYRxNdwy3W4sGMd9_ZSJPfI-5prAckURaCMxKu3EQR1ks" alt="Uma carrinha apinhada, os pés a queimar no Saara e a mentira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O extremo Nico Williams, 20 anos, conquistou esta época a titularidade no Atlético de Bilbau, juntando-se no “onze” ao mano Iñaki, o ponta-de-lança da equipa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sambafoot.com/br/noticias/inaki-e-nico-williams-repetem-feito-de-outros-irmaos-que-disputaram-copas-do-mundo-por-selecoes-diferentes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iñaki e Nico Williams repetem feito de outros irmãos que disputaram ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMcgou30U0qBJsqvtxQbX3PZ1RTGGhWgPLayRSwaQ_B75CrrpMFcjySqpjEpHDmNlAo_yXS50b" alt="Iñaki e Nico Williams repetem feito de outros irmãos que disputaram ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos principais jogadores da equipe africana é Iñaki Williams, atacante do Athletic Bilbao. Ele faz parte das histórias mais curiosas do Mundial. Isso porque&nbsp;...</p></div>
            </div>
        </a><a href='https://tribuna.expresso.pt/mundial-2022/2022-11-23-Jovens-ambiciosos-e-a-procura-da-inspiracao-de-2010-o-retrato-dos-ganeses-que-vao-enfrentar-Portugal-5247d602'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jovens, ambiciosos e à procura da inspiração de 2010: o retrato dos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoeFwZxb0yZCEtID0Md7hY0mp3UgqlaReUr9WRmOybttEEJX09TplLA6IFWarucZ8WtY9X61XT" alt="Jovens, ambiciosos e à procura da inspiração de 2010: o retrato dos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Partey como lançador, Kudus como acelerador, Iñaki Williams à procura do melhor espaço para atacar e ainda a hipótese de um desequilibrador como Sulemana&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}