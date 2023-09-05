const firebaseConfig = {
    apiKey: "AIzaSyBSHB1eJnH0tjLUAnH1zCO6OPiF6vXf7Oc",
    authDomain: "estudosgustavo-6e1d3.firebaseapp.com",
    databaseURL: "https://estudosgustavo-6e1d3-default-rtdb.firebaseio.com",
    projectId: "estudosgustavo-6e1d3",
    storageBucket: "estudosgustavo-6e1d3.appspot.com",
    messagingSenderId: "406516675856",
    appId: "1:406516675856:web:ef422c6f5032f8ca9e6195",
    measurementId: "G-916XVHZ5GB"
}

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

function setVlrTotal(obj){
    const values = Object.values(obj);

    const sum = values.reduce((a ,b ) => {
        return a+b;
    },0);

    return sum;
}

function setVlrTotalMoradia(obj,moradores){
    const value = Object.values(obj);

    const sum = value.reduce((a,b) =>{
        return a+b;
    },0);

    if(moradores != 0){
        return sum/moradores;

    }else{
        return sum    
    }

}


function getValue(name){
    const value = document.getElementById(`${name}`).value;

    if (value == NaN || value == null || value == ''){
        return 0;
    }else{
        return parseFloat(value);
    }
}

function getName(name){
    const value = document.getElementById(`${name}`).value;
    return value;
}

function rondValue(value){
    const newValue = parseFloat(value).toFixed(2);
    return `${newValue.toString().replace('.',',')} R$`; 
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

    despesasMensais.planSaude = getValue('planSaude'); 
    despesasMensais.ingles = getValue('ingles');
    despesasMensais.psicologo = getValue('psicologo');
    despesasMensais.atvExtra = getValue('atvExtra');
    despesasMensais.atvExtra2 = getValue('atvExtra2');
    despesasMensais.farmaciaHigiene = getValue('farmacia');
    despesasMensais.lazer = getValue('lazer');
    despesasMensais.vestimenta = getValue('vestimenta');
    despesasMensais.merenda = getValue('merenda');
    despesasMensais.deslocamento = getValue('deslocamento');
    despesasMensais.mensalidadeEscolar = getValue('mensalidadeEscolar');
    vlrTotalMensal = setVlrTotal(despesasMensais) ;

    numMoradores = getValue('moradores');
    moradia.empregada = getValue('empregada');
    moradia.eSocial = getValue('e-social');
    moradia.passagem = getValue('passagem');
    moradia.condominio = getValue('condiminio');
    moradia.iptu = getValue('iptu');
    moradia.luz = getValue('luz');
    moradia.agua = getValue('agua');
    moradia.gas = getValue('gas');
    moradia.transEscolar = getValue('transporteEscolar');
    moradia.internet = getValue('internet');
    moradia.streaming = getValue('streaming');
    moradia.tvAssinatura = getValue('tvAssinatura');
    moradia.tel = getValue('telVlr');
    moradia.aluguel = getValue('aluguel');
    vlrTotalMoradia = setVlrTotalMoradia(moradia,numMoradores);
    
    despesasAnuais.materialEscolar = getValue('materialScolar');
    despesasAnuais.uniforme = getValue('uniforme');
    despesasAnuais.dentista = getValue('dentista');
    despesasAnuais.materialDidatico = getValue('materialDidatico');
    vlrTotalAnual = setVlrTotal(despesasAnuais);
    
    nomesDespesasEventuais.despName1 = getName('nomeExtra1');
    nomesDespesasEventuais.despName2 = getName('nomeExtra2');
    nomesDespesasEventuais.despName3 = getName('nomeExtra3');
    nomesDespesasEventuais.despName4 = getName('nomeExtra4');
    nomesDespesasEventuais.despName5 = getName('nomeExtra5');
    valoresDespesasEventuais.despVlr1 = getValue('vlrDespesa1');
    valoresDespesasEventuais.despVlr2 = getValue('vlrDespesa2');
    valoresDespesasEventuais.despVlr3 = getValue('vlrDespesa3');
    valoresDespesasEventuais.despVlr4 = getValue('vlrDespesa4');
    valoresDespesasEventuais.despVlr5 = getValue('vlrDespesa5');
    vlrTotalEventual = setVlrTotal(valoresDespesasEventuais);

    let params ={
        nome: personalData.nome,
        email: personalData.email,
        telefone: personalData.tel,
        planSaude: rondValue(despesasMensais.planSaude),
        ingles: rondValue(despesasMensais.ingles),
        psicologo: rondValue(despesasMensais.psicologo),
        atvExtra: rondValue(despesasMensais.atvExtra),
        atvExtra2: rondValue(despesasMensais.atvExtra2),
        farmaciaHigiene: rondValue(despesasMensais.farmaciaHigiene),
        lazer: rondValue(despesasMensais.lazer),
        vestimenta: rondValue(despesasMensais.vestimenta),
        merenda: rondValue(despesasMensais.merenda),
        deslocamento: rondValue(despesasMensais.deslocamento),
        mensalidadeEscolar: rondValue(despesasMensais.mensalidadeEscolar),
        vlrTotalMensal: rondValue(vlrTotalMensal),

        numMoradores: numMoradores,

        empregada: rondValue(moradia.empregada),
        eSocial: rondValue(moradia.eSocial),
        passagem: rondValue(moradia.passagem),
        condominio: rondValue(moradia.condominio),
        iptu: rondValue(moradia.iptu),
        luz: rondValue(moradia.luz),
        agua: rondValue(moradia.agua),
        gas: rondValue(moradia.gas),
        transEscolar: rondValue(moradia.transEscolar),
        internet: rondValue(moradia.internet),
        streaming: rondValue(moradia.streaming),
        tvAssinatura: rondValue(moradia.tvAssinatura),
        tel: rondValue(moradia.tel),
        aluguel: rondValue(moradia.aluguel),
        vlrTotalMoradia: rondValue(vlrTotalMoradia),

        materialEscolar: rondValue(despesasAnuais.materialEscolar),
        uniforme: rondValue(despesasAnuais.uniforme),
        dentista: rondValue(despesasAnuais.dentista),
        materialDidatico: rondValue(despesasAnuais.materialDidatico),
        vlrTotalAnual: rondValue(vlrTotalAnual),

        despName1: nomesDespesasEventuais.despName1,
        despName2: nomesDespesasEventuais.despName2,
        despName3: nomesDespesasEventuais.despName3,
        despName4: nomesDespesasEventuais.despName4,
        despName5: nomesDespesasEventuais.despName5,
        despVlr1: rondValue(valoresDespesasEventuais.despVlr1),
        despVlr2: rondValue(valoresDespesasEventuais.despVlr2),
        despVlr3: rondValue(valoresDespesasEventuais.despVlr3),
        despVlr4: rondValue(valoresDespesasEventuais.despVlr4),
        despVlr5: rondValue(valoresDespesasEventuais.despVlr5),
        vlrTotalEventual: rondValue(vlrTotalEventual)

    }

    // console.log(params);

   emailjs
       .send(serviceID,templateID, params)
       .then(
           res=>{
           console.log(res);
           alert("Mensagem Enviada");   
       })
       .catch(err=>console.log(err))


}