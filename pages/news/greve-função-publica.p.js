import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve Função publica</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve Função publica"/>
        <meta name="description" content="Trending News about Greve Função publica" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve Função publica</h1>
            <Image width={800} height={500} src="https://eco.imgix.net/uploads/2022/05/cropped-doc-20220503-38449882-tp__5414.jpg?mark64=aHR0cHM6Ly9lY28uaW1naXgubmV0L0VDT193YXRlcm1hcmsucG5nP2ZtPXBuZw%3D%3D&markscale=33&markalign=center,left&w=1200" alt="Greve Função publica"/>
            <h3>Recent News</h3>
            <a href='https://eco.sapo.pt/2022/11/17/impacto-da-greve-da-funcao-publica-comeca-a-sentir-se-esta-noite/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve da função pública começa a sentir-se esta noite</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSinQBa9Z57x0EiSs53ipwi7Mlcot6ozSvuYOctm6snyEw-KIjMdzCet2_GJkn9EzfTOe0kP6kg" alt="Greve da função pública começa a sentir-se esta noite" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Frente Comum de Sindicatos indica que o impacto da greve vai começar a sentir-se esta quinta à noite em áreas “como a recolha de resíduos sólidos e nos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/17/economia/noticia/greve-deixara-escolas-aulas-adiara-consultas-cirurgias-antecipa-frente-comum-2028160'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve deixará escolas sem aulas e adiará consultas e cirurgias ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQySn8Cmg3dzEeR5bTiEZVnThmCqCMyOv_UyiU_jF0A8RBnyAM66VHQG35KcozDd66YnWfbZEVw" alt="Greve deixará escolas sem aulas e adiará consultas e cirurgias ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frente Comum antecipa que a greve desta sexta-feira terá visibilidade sobretudo na saúde e na educação.</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/17/economia/noticia/greve-prova-nove-insatisfacao-funcionarios-publicos-2028195'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve é a “prova dos nove” à insatisfação dos funcionários públicos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQYSU95-HF8qMPjiAjihnyublZDLFzy1AmhbkEE-V_I-RGb0mFzheo3hR2OBA7SyQDwL5sy3RW5" alt="Greve é a “prova dos nove” à insatisfação dos funcionários públicos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frente Comum convocou uma greve da função pública para esta sexta-feira, 18 de Novembro, reclamando aumentos salariais que respondam à inflação e a&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/pais/2022/11/17/recolha-do-lixo-e-o-primeiro-servico-afetado-pela-greve-da-funcao-publica/308544/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recolha do lixo é o primeiro serviço afetado pela greve da Função ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNy6pLjauae4Pv22_iybL_2EiEbu5lXcFWVh8WS-Iy_URIflGiqmAXC6ClIYhdqMhi7Qxv8-3z" alt="Recolha do lixo é o primeiro serviço afetado pela greve da Função ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Da educação à saúde, passando pelos transportes, esta sexta-feira pode ser um dia complicado para os utentes dos serviços públicos.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/economia/2114837/amanha-ha-greve-nacional-da-funcao-publica-espera-se-grande-adesao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amanhã há greve nacional da Função Pública. Espera-se &quot;grande ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8gM8r6NzS5EjXXjNPqBGCEd_n8vGgToVOe_DdQt1dg2gRvqF1je2if2KY9fFVrJKGvqclzRKz" alt="Amanhã há greve nacional da Função Pública. Espera-se &quot;grande ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Frente Comum convocou uma greve nacional para sexta-feira, dia 18 de novembro, esperando uma &quot;grande adesão&quot; ao protesto. Como é transversal, é expectável&nbsp;...</p></div>
            </div>
        </a><a href='https://noticiasdosorraia.sapo.pt/funcao-publica-em-greve-esta-sexta-feira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Função Pública em greve esta sexta-feira</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Função Pública em greve esta sexta-feira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A FENPROF associou-se a esta greve geral, pelo que são esperados grandes constrangimentos nas escolas de todo o país. Também o sector da saúde deverá ser&nbsp;...</p></div>
            </div>
        </a><a href='https://estacaodiariajornal.sapo.pt/greve-da-funcao-publica-esta-sexta-pode-fechar-escolas-e-condicionar-servicos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve da Função Pública esta sexta pode fechar escolas e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Greve da Função Pública esta sexta pode fechar escolas e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A greve nacional foi convocada para criticar o aumento salarial de 3,6% proposto pelo Governo, numa altura em que a inflação atinge os 10,1%. A greve acontece a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}