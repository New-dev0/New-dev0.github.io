import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sporting</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sporting"/>
        <meta name="description" content="Trending News about Sporting" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sporting</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/10/04/615x300/1_design_sem_nome__2_-21823149.jpg" alt="Sporting"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/blogs/torcedor/futebol-na-tv/2022/11/15132144-onde-assistir-sporting-x-farense-ao-vivo-veja-horario-escalacoes-e-onde-assistir-ao-vivo-a-taca-da-liga-de-portugal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDE ASSISTIR SPORTING X FARENSE AO VIVO: Veja horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8pWG2hwqQnLoH4EOcXESi5kKb-cn51eIQSv3ODXhk29y70sH-i5Fueq_2z2qXbucm1KnqjtM2" alt="ONDE ASSISTIR SPORTING X FARENSE AO VIVO: Veja horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partida do Sporting na Taça de Portugal nesta quarta (30), terá transmissão ao vivo do ESPN 4, TV fechada e Star+, serviço de streaming.</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15132130-onde-asssitir-o-jogo-do-sporting-em-directo-vai-passar-na-rtp-veja-onde-vai-passar-sporting-x-farense-hoje.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDE ASSSITIR O JOGO DO SPORTING EM DIRECTO: vai passar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8pWG2hwqQnLoH4EOcXESi5kKb-cn51eIQSv3ODXhk29y70sH-i5Fueq_2z2qXbucm1KnqjtM2" alt="ONDE ASSSITIR O JOGO DO SPORTING EM DIRECTO: vai passar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na noite desta quarta-feira (30), Sporting x Farense duelam pela Taça da Liga de Portugal. O duelo vale pela jornada 1 do grupo da competição.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-30/taca-da-liga-sporting-farense-direto/966681'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting-Farense DIRETO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzL_hK7CJgp3F4SecV1lW0C2XIhciwCi63BqGwjYFeB9Cvm_jUrmg0Ga-608ROYhWCj3_Ab2zB" alt="Sporting-Farense DIRETO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sporting e Farense esgrimem forças esta noite na estreia de leões e algarvios na Taça da Liga. A partida, que faz parte do Grupo B da competição (no qual&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/sporting-goleia-secundario-farense-na-estreia-na-taca-da-liga-15408324.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting goleia &#39;secundário&#39; Farense na estreia na Taça da Liga</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSz5ec3YPpAjuNXXHkHYyBz6GRDl-5nxo_lbUPSIiy9erwe1TXSUFqkCYUkN0CCWL945rEHRHbe" alt="Sporting goleia &#39;secundário&#39; Farense na estreia na Taça da Liga" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dois golos de Paulinho abriram caminho para goleada do Sporting na receção ao Farense (6-0), no jogo inaugural do Grupo B da Taça da Liga.</p></div>
            </div>
        </a><a href='https://mauaagora.com.br/2022/11/30/sporting-x-farense-onde-assistir-ao-vivo-escalacoes-e-palpites-taca-da-liga-de-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting x Farense: ONDE ASSISTIR AO VIVO, ESCALAÇÕES E ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Sporting x Farense: ONDE ASSISTIR AO VIVO, ESCALAÇÕES E ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo entre Sporting x Farense pela TAÇA DA LIGA DE PORTUGAL, acontece hoje, HOJE (30/11) às 17:45 hs. O mandante desta partida será o Sporting , que busca&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/taca-da-liga/artigos/farense-sporting-conheca-os-onzes-que-vao-estar-em-campo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting-Farense: Conheça os onzes que vão estar em campo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjAAmEHzZvKpV_Pla52hS3aPhV04aDkwNAx8k0utWZfBmYzmbzzd1YDITyvxESgFhrUy8Ob-Fq" alt="Sporting-Farense: Conheça os onzes que vão estar em campo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Equipa inicial: Ricardo Velho, Muscat, Marcos Paulo, John Velasquez, Rui Costa, Cristian, Claúdio Falcão, Abner, Talocha, Marco Matias e Vítor Gonçalves.</p></div>
            </div>
        </a><a href='https://www.ogol.com.br/apostas/noticias/sporting-surge-como-favorito-para-assinar-com-cristiano-ronaldo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting surge como favorito para assinar com Cristiano Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSW080Dncfk4ggqU7Ywf3pp-7xMA5klfO1n0GhJEIlTOAwr97bYeYLtuL1Ecf7MomB8x9XR8C1v" alt="Sporting surge como favorito para assinar com Cristiano Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo parece estar de saída do Manchester United e as casas de apostas esportivas colocam o Sporting como destino. Veja os clubes mais cotados&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/1a-liga/sporting/noticias/paulinho-bisa-no-sporting-farense-em-apenas-dois-minutos-veja-os-golos-15407933.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paulinho bisa no Sporting-Farense em apenas dois minutos: veja os ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQySbRjbOAblwXxBkfU8FYKThkG95NPbxHdZgjaWPGRtNA0Fu9F_kfk8uNiFNgy7JDMBmP2e728" alt="Paulinho bisa no Sporting-Farense em apenas dois minutos: veja os ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Minuto 20: Marsà abriu em Nuno Santos, o ala toca de primeira e Trincão na esquerda encontra Paulinho para o 1-0. Boa finalização do dianteiro leonino;&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/30/amorim-luta-todos-os-dias-pela-vida-mesmo-com-renovacao-promete-jogadores-a-dar-tudo-pelo-sporting-e-diz-que-caminho-e-ideia-sao-claros/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amorim luta “todos os dias pela vida” mesmo com renovação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFbID3uMH42Lek6i9FSuS0HsWboDRBK5TACynAwNH7ufebGZi8m1i0-7TagQfA3xL4h_x2ykDX" alt="Amorim luta “todos os dias pela vida” mesmo com renovação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após a renovação do treinador, Sporting venceu Farense por 6-0. Amorim elogiou exibições de Essugo e Mateus Fernandes, deixou palavra especial para Jovane e&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/taca-da-liga/sporting/taca-da-liga-sporting-farense-6-0-cronica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Sporting-Farense, 6-0 (crónica)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSu8mWEQmb6EqF6VNzGMS6nON42OyxFw5wkAebMP2tMWDLGuLCnTr4DrXlX8pLR8AcJvQLZgHR1" alt="Taça da Liga: Sporting-Farense, 6-0 (crónica)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vestidos de branco, os rapazes de Ruben Amorim apresentaram-se com fome de bola em Alvalade e, depois dezassete dias sem competição, golearam o Farense com&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}