import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Polônia x Chile</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Polônia x Chile"/>
        <meta name="description" content="Trending News about Polônia x Chile" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Polônia x Chile</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/12/27/615x300/1_fbl_wc_2018_pol_nig_friendly-20360210.jpg" alt="Polônia x Chile"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15121612-onde-assistir-polonia-x-chile-ao-vivo-lewandowski-vai-jogar-veja-horario-e-qual-canal-vai-passar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDE ASSISTIR POLONIA X CHILE AO VIVO: Lewandowski vai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTl_uprUbdzFkqX8vcjFNZJXjzgobX9u7DYcfO58e-tApXwfVe6YfsfrIbf6enZTmqCzlZZ80fS" alt="ONDE ASSISTIR POLONIA X CHILE AO VIVO: Lewandowski vai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A bola rola a partir das 14h, horário de Brasília, na Pepsi Arena, em Varsóvia - capital da Polonia. COPA DO MUNDO 2022: Veja o grupo da Polonia.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/polonia/adversaria-da-argentina-na-copa-polonia-vence-o-chile-em-amistoso-sem-lewandowski.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adversária da Argentina na Copa, Polônia vence o Chile em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOkYYIVK_JCTCpCaFw-Fmi3MACnihEJCfs0XdBaYeggWa_z0An_GHQPZXPi11nXO9GP3A1_DmC" alt="Adversária da Argentina na Copa, Polônia vence o Chile em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sem Robert Lewandowski, a Polônia, adversária da Argentina na Copa do Mundo, venceu o Chile por 1 a 0 antes de viajar para o Qatar.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/16/amistoso-internacional-polonia-x-cilhe.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sem Lewa, Polônia vence Chile em último jogo antes da Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWNvSMxAyDaP-kFh7dQJp3p1FEq4RnVwexFYrYOn0PQ_LzRAzh687oiOjDHe8PquSg-y1xIDO_" alt="Sem Lewa, Polônia vence Chile em último jogo antes da Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os donos da casa marcaram com Piatek no final do jogo e não contaram com seu principal jogador, Lewandowski. O Chile não se classificou para a Copa do&nbsp;...</p></div>
            </div>
        </a><a href='https://esportenewsmundo.com.br/ao-vivo-polonia-x-chile/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LANCE A LANCE – Polônia 1 x 0 Chile</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTj-GUaYYkRitqYPCmDmJ_LO4z-8r1XqqoiOJYVqR_ehebSbLRmOBQNrlYXBn64fvn68XHMI-X9" alt="LANCE A LANCE – Polônia 1 x 0 Chile" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Confira a transmissão em tempo real do Esporte News Mundo para Polônia x Chile, amistoso internacional.</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/sports/futebol/polonia-x-chile-saiba-onde-assistir-amistoso-internacional-1.2767039'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia x Chile: saiba onde assistir amistoso internacional</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2em_2z2Cyy4P1pERU_6vnLfazplb0JStE_ZbqGtitrTTtuQlW56rTOU0m-n2sX_TvcmhPXeSE" alt="Polônia x Chile: saiba onde assistir amistoso internacional" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Será a última apresentação da Seleção Polonesa antes da estreia na Copa do Mundo no dia 22 de novembro, contra o México, em Doha. O amistoso entre Polônia e&nbsp;...</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15121642-onde-assistir-ao-vivo-polonia-x-chile-hoje-16-11-qual-canal-vai-passar-o-jogo-veja-onde-assistir-polonia-x-chile.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Onde assistir ao vivo Polônia x Chile hoje, 16/11? Qual canal vai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYQlWxMYhXGiDBajkqaPYjxdCN5E5yUMq3eh0FZTeoFRz0FPM628OWVzoLBJ-JaeJ0NR0mvbuO" alt="Onde assistir ao vivo Polônia x Chile hoje, 16/11? Qual canal vai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polônia e Chile fazem, na tarde desta quarta-feira (16), um amistoso entre seleções. A partida será disputada na Pepsi Arena, em Varsóvia, na Polônia.</p></div>
            </div>
        </a>
        </Template></>;
}