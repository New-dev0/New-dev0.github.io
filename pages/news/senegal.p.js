import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Senegal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Senegal"/>
        <meta name="description" content="Trending News about Senegal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Senegal</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/cy58zXuFy7p_C0XsoAKt19xpLYs=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/w/B/yQflUSTQ2Stm1CiowVFg/sabaly-senegal.png" alt="Senegal"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/futebol/copa-2022/senegal-x-holanda-veja-informacoes-do-jogo-pela-copa-do-mundo,8771d5dd1a08dd707c5d124b465cfcecqadejf5f.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal x Holanda: veja informações do jogo pela Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Senegal x Holanda: veja informações do jogo pela Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta segunda-feira, Senegal e Holanda vão se enfrentar pela primeira rodada da fase de grupos da Copa do Mundo no Catar. A partida será disputada às 13 horas (&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/senegal/noticia/2022/11/20/senegal-x-holanda-sem-dupla-na-esquerda-selecao-africana-improvisa-na-lateral-veja-time-provavel.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal x Holanda: sem dupla na esquerda, seleção africana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRs1OAfcFyiFHcV-4tAxc7Af-gU_XCw6GytyG8FMcd7jb-K50dSCe97UGejdvDU19wfnif0YYcI" alt="Senegal x Holanda: sem dupla na esquerda, seleção africana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aliou Cissé perde lateral-esquerdo por lesão e terá defensor versátil para cobrir a posição.</p></div>
            </div>
        </a><a href='https://www.brasildefato.com.br/2022/11/20/copa-do-mundo-2022-senegal-e-camaroes-carregam-as-maiores-esperancas-da-africa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo 2022: Senegal e Camarões carregam as maiores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQA_prMPSZJ2H31jc6cK7IFvzbKPVarxsC_MMJCbdL2FFkEiCerb7Fv0TCQQomlkvUPnOXcgdgI" alt="Copa do Mundo 2022: Senegal e Camarões carregam as maiores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pela primeira vez, todas as equipes do continente têm treinadores locais, além de talentos que atuam em grandes times.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/copa-do-mundo-senegal-e-holanda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo da Copa Ao Vivo: Senegal x Holanda</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5Hz3FuKTffIyEeEM9HLwxlDcV9ycFBcvmltvU2LeFwp4scocihO0uTBZaG02Q6cNLlie3UEKl" alt="Jogo da Copa Ao Vivo: Senegal x Holanda" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acompanhe todos os jogos da Copa ao vivo no site da CNN. Veja também, minuto a minuto, as estatísticas, lances e as escalações das seleções no Catar.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/20/senegal-x-holanda-retrospecto-provaveis-escalacoes-onde-assistir-e-arbitragem.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal x Holanda: Retrospecto, prováveis escalações, onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Senegal x Holanda: Retrospecto, prováveis escalações, onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta segunda-feira (21), Senegal e Holanda se enfrentam, no Al Thumama Stadium, em partida válida pela 1ª rodada da fase de grupos da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/copa-do-mundo/catar/2022/11/20/catar-2022,3980258/senegal-x-holanda-veja-prognosticos-para-duelo-da-copa-do-mundo.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal x Holanda: veja prognósticos para duelo da Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRF4_3aG-ptsqRKoxHtwdGQpjOHcxVUE1IkZTaXw7w7n4E10ONNm1kb2Q69e3a9s2Q-MMZNnlp7" alt="Senegal x Holanda: veja prognósticos para duelo da Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Casas de apostas atuantes no Brasil apontam seleção favorita para vencer o segundo jogo do Grupo A da Copa do Mundo no Catar; veja palpites.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/senegal-x-holanda-onde-assistir-horario-e-escalacoes-do-jogo-da-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal x Holanda: onde assistir, horário e escalações do jogo da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTclnNoGcRWxTEelLtjb-d_cCZFvr20FjTMAZ4mKte2L3CjSkAeQbT1HogsBp8u7zoX88CGQ9oo" alt="Senegal x Holanda: onde assistir, horário e escalações do jogo da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Equipes estreiam no Mundial do Qatar em jogo que promete ser agitado, válido pelo Grupo A.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/20/mane-incentiva-companheiros-de-senegal-apos-ficar-de-fora-da-copa-do-mundo-lutarao-como-um-so-homem.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mané incentiva companheiros de Senegal após ficar de fora da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Mané incentiva companheiros de Senegal após ficar de fora da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O segundo colocado na premiação da última Bola de Ouro, Sadio Mané se tornou desfalque poucos dias do início da Copa do Mundo e será uma das maiores perdas&nbsp;...</p></div>
            </div>
        </a><a href='https://radios.ebc.com.br/especiais-radio-mec/2022/11/escalacao-musical-senegal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Escalação Musical: Senegal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQgLLLTpgvsRIiLYf6P-ebk4J2e-WlYy3lUcllnncoInUENmMrTB-Zlyq9BYV7Cb6QpL2mwG_O" alt="Escalação Musical: Senegal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção senegalesa tem um histórico recente em Copas do Mundo: sua primeira participação foi em 2002, onde chegou às quartas de final.</p></div>
            </div>
        </a><a href='https://www.bemparana.com.br/noticias/senegal-tem-problemas-com-documento-e-jogador-naturalizado-preocupa-para-estreia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal tem problemas com documento e jogador naturalizado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Senegal tem problemas com documento e jogador naturalizado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Além do corte de Sadio Mané, Senegal pode ter um novo desfalque em sua lista de convocados. Por problemas em sua documentação, Ismail Jakobs, nascido na.</p></div>
            </div>
        </a>
        </Template></>;
}