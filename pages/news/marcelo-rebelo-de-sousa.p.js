import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marcelo Rebelo de Sousa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marcelo Rebelo de Sousa"/>
        <meta name="description" content="Trending News about Marcelo Rebelo de Sousa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marcelo Rebelo de Sousa</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=4fd703bf-f67c-4c8e-8a1a-bbbcb3fd261e&w=800&h=420&watermark=true&t=20221117215000" alt="Marcelo Rebelo de Sousa"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/selecao/noticias/marcelo-rebelo-de-sousa-o-catar-nao-respeita-os-direitos-humanos-e-criticavel-15363223.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcelo Rebelo de Sousa: &quot;O Catar não respeita os direitos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHWX-h01JvgFWLXkaeL3ZI_qEqCoocyoAsf9u8GXHJzl1ILjR3vqVISr0mjFR5omAWVmgAuFvh" alt="Marcelo Rebelo de Sousa: &quot;O Catar não respeita os direitos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Marcelo Rebelo de Sousa, presidente da República, após o triunfo de Portugal sobre a Nigéria (4-0) no último jogo de preparação antes do&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/desporto/artigos/mundial2022-qatar-nao-respeita-os-direitos-humanos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcelo Rebelo de Sousa: “Qatar não respeita os direitos humanos”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSI9SAXC50wGYmVOVDw5ryMPTfmM_Di4LEkwFRrKFOpkInc8i4nIX-HMMpVuglRqZTUxADLiN7Q" alt="Marcelo Rebelo de Sousa: “Qatar não respeita os direitos humanos”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Presidente da República, Marcelo Rebelo de Sousa, disse hoje que “o Qatar não respeita os direitos humanos”, a três dias do arranque do Mundial2022 de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-17/portugal-marcelo-rebelo-de-sousa-comenta-a-polemica-em-torno-de-ronaldo/965157'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcelo Rebelo de Sousa comenta a polémica em torno de Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQx837rIAngOZp1FUrNEaE6UZ_FNdKScWt8qy7BZlS6mq__s2T2x1DU6rHwtycvgM_bOkmXzZI9" alt="Marcelo Rebelo de Sousa comenta a polémica em torno de Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Presidente da República, que esteve em Alvalade a assistir ao Portugal-Nigéria (4-0), não acredita que o diferendo entre Cristiano Ronaldo e o Manchester&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/17/politica/noticia/qatar-nao-respeita-direitos-humanos-marcelo-enfim-esquecamos-2028214'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Qatar não respeita os direitos humanos”, diz Marcelo. “Mas, enfim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpjnk2YwP58oh7IEqUQyT_T9PqARMfii6hrgVO1u-5a2epZ4dMjcsCBWX3biIH0bEndo9SSaCv" alt="“Qatar não respeita os direitos humanos”, diz Marcelo. “Mas, enfim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente da República vai marcar presença no jogo inaugural da selecção nacional frente ao Gana.</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/17/mundial2022-qatar-nao-respeita-os-direitos-humanos-mas-enfim-esquecamos-isto-diz-marcelo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial2022: &quot;Qatar não respeita os direitos humanos. Mas, enfim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStdnlUYfZ4M8VcVtdUnhNSV8LdOdI3KaBx8aadM18ooOlrjbTi73UvCt5CpUky61sl6jg3NQ1J" alt="Mundial2022: &quot;Qatar não respeita os direitos humanos. Mas, enfim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente da República defendeu que o país organizador do Mundial não respeita os direitos humanos, mas que o melhor a fazer, apesar de criticável,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/desporto/marcelo-rebelo-de-sousa-a-rtp-catar-nao-respeita-os-direitos-humanos-mas-concentremo-nos-na-equipa_v1447860'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcelo Rebelo de Sousa à RTP: &quot;Catar não respeita os direitos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1bNt78pks6Hom17L9LjkFCKlfngiccbykfQheZXKc-cmSy1_d6wj6C40WBT5CQbH05fudV4mw" alt="Marcelo Rebelo de Sousa à RTP: &quot;Catar não respeita os direitos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em declarações à RTP, o presidente da República reconheceu os problemas existentes no país anfitrião do próximo campeonato do mundo de futebol.</p></div>
            </div>
        </a><a href='https://leonino.pt/marcelo-rebelo-de-sousa-em-festa-jovens-entoam-cantico-de-jogador-do-sporting-na-rececao-ao-presidente-da-republica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MARCELO REBELO DE SOUSA EM FESTA: JOVENS ENTOAM ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJv1RlMKbfBgGLQPofmCSTNMzmQGquiPe5JMoidci0a5y2kouDC5VNQJ-uKqfetFoP5VZbAjqD" alt="MARCELO REBELO DE SOUSA EM FESTA: JOVENS ENTOAM ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os alunos (provavelmente Sportinguistas) quiseram receber o Presidente da República de uma forma entusiástica e adaptaram a versão com que os adeptos leoninos&nbsp;...</p></div>
            </div>
        </a><a href='https://aventar.eu/2022/11/17/aquilo-que-nao-lhe-foi-dito-sobre-o-ataque-de-marcelo-rebelo-de-sousa-a-ministra-ana-abrunhosa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aquilo que não lhe foi dito sobre o ataque de Marcelo Rebelo de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8qB1nUdYaKAGoc6Vg2UxXRB2nZOBfkgXWwJcjN5uPxaLOVDF1hfGjOwulZXVLv6dfP7iOCKOO" alt="Aquilo que não lhe foi dito sobre o ataque de Marcelo Rebelo de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Existe um detalhe que escapou a maior parte dos comentadores nacionais, sobre a forma como Marcelo Rebelo de Sousa tratou a ministra Ana Abrunhosa,&nbsp;...</p></div>
            </div>
        </a><a href='https://eco.sapo.pt/2022/11/17/esquecamos-os-direitos-humanos-no-qatar-e-concentremo-nos-na-equipa-diz-marcelo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Direitos humanos no Catar? “Concentremo-nos na equipa”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjw4STC1uVb_TtABo1YJzxeLWsrBwnOvlBQsxRGC5dxgKe_hB3cb5QK4SXS_lLZZyj__p5tTmj" alt="Direitos humanos no Catar? “Concentremo-nos na equipa”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marcelo disse que este será “um campeonato muito difícil”, pela inédita calendarização no inverno europeu e pelas “condições muito difíceis, da construção&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}