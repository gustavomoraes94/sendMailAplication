let passo = 1;

const personalData = {
    nome: '',
    email: '',
    tel: ''
}
const despesasMensais = {
    planSaude: 0,
    ingles: 0,
    psicologo: 0,
    atvExtra: 0,
    atvExtra2: 0,
    farmaciaHigiene: 0,
    lazer: 0,
    vestimenta: 0,
    merenda: 0,
    deslocamento: 0,
    mensalidadeEscolar: 0
}
const moradia = {
    empregada: 0,
    eSocial: 0,
    passagem: 0,
    condominio: 0,
    iptu: 0,
    luz: 0,
    agua: 0,
    gas: 0,
    transEscolar: 0,
    internet: 0,
    streaming: 0,
    tvAssinatura: 0,
    tel: 0,
    aluguel: 0
}
const despesasAnuais = {
    materialEscolar: 0,
    uniforme: 0,
    dentista: 0,
    materialDidatico: 0
}
const nomesDespesasEventuais = {
    despName1: '',
    despName2: '',
    despName3: '',
    despName4: '',
    despName5: ''
}
const valoresDespesasEventuais ={
    despVlr1: 0,
    despVlr2: 0,
    despVlr3: 0,
    despVlr4: 0,
    despVlr5: 0
}
function buttons(passo){
    // btnRetorno btnProximo btnEnvio
    if(passo == 1){
        document.getElementById("btnRetorno").style.display = "none"
        document.getElementById("btnProximo").style.display = "flex"
        document.getElementById("btnProximo").style.margin = "0 auto"
    }else if(passo >= 2 && passo <= 4){
        document.getElementById("btnRetorno").style.display = "flex"
        document.getElementById("btnProximo").style.display = "flex"
        document.getElementById("btnProximo").style.margin = "0"
        document.getElementById("btnEnvio").style.display = "none"
    }
    else{
        document.getElementById("btnProximo").style.display = "none"
        document.getElementById("btnEnvio").style.display = "flex"
    }
    
}

function avancaPasso(){

    if(passo < 5){
        passo = passo +1;
        if(passo == 2){
            document.getElementById("selectPass2").style.backgroundColor = "#ff3322"
            document.getElementById("selectPass2").style.color = "#ffffff"
        }
        else if(passo == 3){
            document.getElementById("selectPass3").style.backgroundColor = "#ff3322"
            document.getElementById("selectPass3").style.color = "#ffffff"
        }
        else if(passo == 4){
            document.getElementById("selectPass4").style.backgroundColor = "#ff3322"
            document.getElementById("selectPass4").style.color = "#ffffff"
        }
        else if(passo == 5){
            document.getElementById("selectPass5").style.backgroundColor = "#ff3322"
            document.getElementById("selectPass5").style.color = "#ffffff"
        }
        showPass(passo);
        buttons(passo);
        return passo;
    }else{
        console.log('limite');
    }
}

function retornarPasso(){
    if(passo > 1){
        if(passo == 2){
            document.getElementById("selectPass2").style.backgroundColor = "#ffffff"
            document.getElementById("selectPass2").style.color = "#000000"
        }
        else if(passo == 3){
            document.getElementById("selectPass3").style.backgroundColor = "#ffffff"
            document.getElementById("selectPass3").style.color = "#000000"
        }
        else if(passo == 4){
            document.getElementById("selectPass4").style.backgroundColor = "#ffffff"
            document.getElementById("selectPass4").style.color = "#000000"
        }
        else if(passo == 5){
            document.getElementById("selectPass5").style.backgroundColor = "#ffffff"
            document.getElementById("selectPass5").style.color = "#000000"
        }
        passo = passo -1;
        showPass(passo);
        buttons(passo);
        return passo;
    }else{
        console.log('limite');
    }
}

function showPass(passo){
    if(passo == 1){
        document.getElementById("passo1").style.display = "flex";
        document.getElementById("passo2").style.display = "none";
    }else if(passo == 2){
        document.getElementById("passo1").style.display = "none";
        document.getElementById("passo2").style.display = "flex";
        document.getElementById("passo3").style.display = "none";
    }else if(passo == 3){
        document.getElementById("passo2").style.display = "none";
        document.getElementById("passo3").style.display = "flex";
        document.getElementById("passo4").style.display = "none";
    }else if(passo == 4){
        document.getElementById("passo3").style.display = "none";
        document.getElementById("passo4").style.display = "flex";
        document.getElementById("passo5").style.display = "none";
    }else if(passo == 5){
        document.getElementById("passo4").style.display = "none";
        document.getElementById("passo5").style.display = "flex";
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function vlrTotal(obj){
    const values = Object.values(obj);

    const sum = values.reduce((a ,b ) => {
        return a+b;
    },0);

    return sum;
}

function vlrTotalEventual(){
    const sum = despesasEventuais.despVlr1 + despesasEventuais.despVlr2 + despesasEventuais.despVlr3 + despesasEventuais.despVlr4 + despesasEventuais.despVlr5;
    
    return sum;
}

function sendMail(){

    const serviceID = "service_wkwdtfl";
    const templateID = "template_zcfqq57";
    let numMoradores = 0;
    let vlrTotalMensal = 0;
    let vlrTotalAnual = 0;
    let vlrTotalMoradia = 0;
    let vlrTotalEventual = 0;

    personalData.nome = document.getElementById('nome').value;
    personalData.email = document.getElementById('email').value;
    personalData.tel = document.getElementById('telefone').value;

    despesasMensais.planSaude = parseFloat(document.getElementById('planSaude').value); 
    despesasMensais.ingles = parseFloat(document.getElementById('ingles').value);
    despesasMensais.psicologo = parseFloat(document.getElementById('psicologo').value);
    despesasMensais.atvExtra = parseFloat(document.getElementById('atvExtra').value);
    despesasMensais.atvExtra2 = parseFloat(document.getElementById('atvExtra2').value);
    despesasMensais.farmaciaHigiene = parseFloat(document.getElementById('farmacia').value);
    despesasMensais.lazer = parseFloat(document.getElementById('lazer').value);
    despesasMensais.vestimenta = parseFloat(document.getElementById('vestimenta').value);
    despesasMensais.merenda = parseFloat(document.getElementById('merenda').value);
    despesasMensais.deslocamento = parseFloat(document.getElementById('deslocamento').value);
    despesasMensais.mensalidadeEscolar = parseFloat(document.getElementById('mensalidadeEscolar').value);
    vlrTotalMensal = parseFloat(vlrTotal(despesasMensais)).toFixed(2);

    numMoradores = parseInt(document.getElementById('moradores').value);
    moradia.empregada = parseFloat(document.getElementById('empregada').value);
    moradia.eSocial = parseFloat(document.getElementById('e-social').value);
    moradia.passagem = parseFloat(document.getElementById('passagem').value);
    moradia.condominio = parseFloat(document.getElementById('condiminio').value);
    moradia.iptu = parseFloat(document.getElementById('iptu').value);
    moradia.luz = parseFloat(document.getElementById('luz').value);
    moradia.agua = parseFloat(document.getElementById('agua').value);
    moradia.gas = parseFloat(document.getElementById('gas').value);
    moradia.transEscolar = parseFloat(document.getElementById('transporteEscolar').value);
    moradia.internet = parseFloat(document.getElementById('internet').value);
    moradia.streaming = parseFloat(document.getElementById('streaming').value);
    moradia.tvAssinatura = parseFloat(document.getElementById('tvAssinatura').value);
    moradia.tel = parseFloat(document.getElementById('telVlr').value);
    moradia.aluguel = parseFloat(document.getElementById('aluguel').value);
    vlrTotalMoradia = parseFloat(vlrTotal(moradia)/numMoradores).toFixed(2);
    
    despesasAnuais.materialEscolar = parseFloat(document.getElementById('materialScolar').value);
    despesasAnuais.uniforme = parseFloat(document.getElementById('uniforme').value);
    despesasAnuais.dentista = parseFloat(document.getElementById('dentista').value);
    despesasAnuais.materialDidatico = parseFloat(document.getElementById('materialDidatico').value);
    vlrTotalAnual = parseFloat(vlrTotal(despesasAnuais)).toFixed(2);
    
    nomesDespesasEventuais.despName1 = document.getElementById('nomeExtra1').value;
    nomesDespesasEventuais.despName2 = document.getElementById('nomeExtra2').value;
    nomesDespesasEventuais.despName3 = document.getElementById('nomeExtra3').value;
    nomesDespesasEventuais.despName4 = document.getElementById('nomeExtra4').value;
    nomesDespesasEventuais.despName5 = document.getElementById('nomeExtra5').value;
    valoresDespesasEventuais.despVlr1 = parseFloat(document.getElementById('vlrDespesa1').value);
    valoresDespesasEventuais.despVlr2 = parseFloat(document.getElementById('vlrDespesa2').value);
    valoresDespesasEventuais.despVlr3 = parseFloat(document.getElementById('vlrDespesa3').value);
    valoresDespesasEventuais.despVlr4 = parseFloat(document.getElementById('vlrDespesa4').value);
    valoresDespesasEventuais.despVlr5 = parseFloat(document.getElementById('vlrDespesa5').value);
    vlrTotalEventual = parseFloat(vlrTotal(valoresDespesasEventuais)).toFixed(2);

    let params ={
        nome: personalData.nome,
        email: personalData.email,
        telefone: personalData.tel,
        planSaude: despesasMensais.planSaude,
        ingles: despesasMensais.ingles,
        psicologo: despesasMensais.psicologo,
        atvExtra: despesasMensais.atvExtra,
        atvExtra2: despesasMensais.atvExtra2,
        farmaciaHigiene: despesasMensais.farmaciaHigiene,
        lazer: despesasMensais.lazer,
        vestimenta: despesasMensais.vestimenta,
        merenda: despesasMensais.merenda,
        deslocamento: despesasMensais.deslocamento,
        mensalidadeEscolar: despesasMensais.mensalidadeEscolar,
        vlrTotalMensal: vlrTotalMensal,

        numMoradores: numMoradores,

        empregada: moradia.empregada,
        eSocial: moradia.eSocial,
        passagem: moradia.passagem,
        condominio: moradia.condominio,
        iptu: moradia.iptu,
        luz: moradia.luz,
        agua: moradia.agua,
        gas: moradia.gas,
        transEscolar: moradia.transEscolar,
        internet: moradia.internet,
        streaming: moradia.streaming,
        tvAssinatura: moradia.tvAssinatura,
        tel: moradia.tel,
        aluguel: moradia.aluguel,
        vlrTotalMoradia: moradia.vlrTotal,
        materialEscolar: despesasAnuais.materialEscolar,
        uniforme: despesasAnuais.uniforme,
        dentista: despesasAnuais.dentista,
        materialDidatico: despesasAnuais.materialDidatico,
        vlrTotalAnual: vlrTotalAnual,

        despName1: nomesDespesasEventuais.despName1,
        despName2: nomesDespesasEventuais.despName2,
        despName3: nomesDespesasEventuais.despName3,
        despName4: nomesDespesasEventuais.despName4,
        despName5: nomesDespesasEventuais.despName5,
        despVlr1: valoresDespesasEventuais.despVlr1,
        despVlr2: valoresDespesasEventuais.despVlr2,
        despVlr3: valoresDespesasEventuais.despVlr3,
        despVlr4: valoresDespesasEventuais.despVlr4,
        despVlr5: valoresDespesasEventuais.despVlr5,
        vlrTotalEventual: vlrTotalEventual

    }

    emailjs
        .send(serviceID,templateID, params)
        .then(
            res=>{
            console.log(res);
            alert("Mensagem Enviada");   
        })
        .catch(err=>console.log(err))


}
