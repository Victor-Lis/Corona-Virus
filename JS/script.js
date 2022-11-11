const inputs = {

    nome: document.getElementById("nome"),
    idade: document.getElementById("idade"),
    genero: document.getElementById("genero"),
    temperatura: document.getElementById("temperatura"),
    origem: document.getElementById("origem"),
    button: document.getElementById("enviar")

}

const valueInputs = {

    nome:" ",
    idade: 0, 
    genero: " ",
    temperatura: 0,
    origem: " ",

}

const list = {

    title: document.getElementById("title"),

    total: document.getElementById("total"),
    totalPercent: document.getElementById("totalPercent"),

    totalFebril: document.getElementById("totalFebril"),
    totalFebrilPercent: document.getElementById("totalFebrilPercent"),

    grupoderisco: document.getElementById("grupoderisco"),
    grupoderiscoPercent: document.getElementById("grupoderiscoPercent"),

    febrisderisco: document.getElementById("febrisderisco"),
    febrisderiscoPercent: document.getElementById("febrisderiscoPercent"),

    masc: document.getElementById("masc"),
    mascPercent: document.getElementById("mascPercent"),

    femin: document.getElementById("femin"),
    feminPercent: document.getElementById("feminPercent"),

}

var listProgress = {

    totalFebrilPercent: document.getElementById("totalProgess"),

    grupoderiscoPercent: document.getElementById("grupoderiscoProgess"),

    febrisderiscoPercent: document.getElementById("febrisderiscoProgess"),

    mascPercent: document.getElementById("masculinoProgess"),

    feminPercent: document.getElementById("femininoProgess"),

}


var listData = {

    total: 0,
    totalFebril: 0,
    totalFebrilPercent: 0,
    grupoDeRisco: 0, 
    grupoDeRiscoPercent: 0, 
    febrisDeRisco: 0,
    febrisDeRiscoPercent: 0,
    Masculino: 0,
    MasculinoPercent: 0,
    Feminino: 0,
    FemininoPercent: 0,

}

if(localStorage.listData){

    listData = JSON.parse(localStorage.getItem('listData'))

    list.total.innerHTML = listData.total
    list.totalPercent.innerHTML = "100.00%"

    listData.totalFebrilPercent = (listData.totalFebril / listData.total) * 100
    list.totalFebril.innerHTML = listData.totalFebril
    list.totalFebrilPercent.innerHTML = listData.totalFebrilPercent.toFixed(2)+"%"
    listProgress.totalFebrilPercent.value = listData.totalFebrilPercent.toFixed(0)

    listData.grupoDeRiscoPercent = (listData.grupoDeRisco / listData.total) * 100
    list.grupoderisco.innerHTML = listData.grupoDeRisco
    list.grupoderiscoPercent.innerHTML = listData.grupoDeRiscoPercent.toFixed(2)+"%"
    listProgress.grupoderiscoPercent.value = listData.grupoDeRiscoPercent.toFixed(0)

    listData.febrisDeRiscoPercent = (listData.febrisDeRisco / listData.total) * 100
    list.febrisderisco.innerHTML = listData.febrisDeRisco
    list.febrisderiscoPercent.innerHTML = listData.febrisDeRiscoPercent.toFixed(2)+"%"
    listProgress.febrisderiscoPercent.value = listData.febrisDeRiscoPercent.toFixed(0)

    listData.MasculinoPercent = (listData.Masculino / listData.total) * 100
    list.masc.innerHTML = listData.Masculino
    list.mascPercent.innerHTML = listData.MasculinoPercent.toFixed(2)+"%"
    listProgress.mascPercent.value = listData.MasculinoPercent.toFixed(0)

    listData.FemininoPercent = (listData.Feminino / listData.total) * 100
    list.femin.innerHTML = listData.Feminino
    list.feminPercent.innerHTML = listData.FemininoPercent.toFixed(2)+"%"
    listProgress.feminPercent.value = listData.FemininoPercent.toFixed(0)

}else{
  
    localStorage.setItem('listData', JSON.stringify(listData))
    
}

inputs.button.addEventListener("click", (e) => {

    document.getElementById('datasProgress').style.display = "flex"

    valueInputs.nome = document.getElementById("nome").value
    valueInputs.idade = parseFloat(document.getElementById("idade").value)
    valueInputs.genero = document.getElementById("genero").value
    valueInputs.temperatura = parseFloat(document.getElementById("temperatura").value)
    valueInputs.origem = document.getElementById("origem").value

   console.log(valueInputs.nome == " ")
   console.log(valueInputs.nome.length)
   console.log(valueInputs.idade < 0)
   console.log(valueInputs.idade > 105 )
   console.log(valueInputs.genero == " ")
   console.log(valueInputs.temperatura < 36.0 || valueInputs.temperatura > 42.0)
   console.log(valueInputs.origem == " ")
   console.log(valueInputs.genero.toLowerCase() != 'masculino' && valueInputs.genero.toLowerCase() != 'feminino')

    if(valueInputs.nome == " " || valueInputs.nome.length <= 2 || valueInputs.idade < 0 || valueInputs.idade > 105 || valueInputs.genero == " " || valueInputs.genero.toLowerCase() != "feminino" && valueInputs.genero.toLowerCase() != "masculino" || valueInputs.temperatura < 36.0 || valueInputs.temperatura > 42.0 || valueInputs.origem == " "){

        list.title.innerHTML = "Preencha corretamente"
        return;

    }

    list.title.innerHTML = "Inserir Dados:"

    listData.total++

    if(valueInputs.temperatura > 37.8){

        listData.totalFebril++;

    }

    if(valueInputs.idade >= 60){

        listData.grupoDeRisco++

    }

    if(valueInputs.temperatura > 37.8 && valueInputs.idade >= 60){

        listData.febrisDeRisco++;

    }

    if(valueInputs.genero.toLowerCase() == "masculino"){

        listData.Masculino++;

    }

    if(valueInputs.genero.toLowerCase() == "feminino"){

        listData.Feminino++;

    }
    

    var listProgress = {

        totalFebrilPercent: document.getElementById("totalProgess"),
    
        grupoderiscoPercent: document.getElementById("grupoderiscoProgess"),
    
        febrisderiscoPercent: document.getElementById("febrisderiscoProgess"),
    
        mascPercent: document.getElementById("masculinoProgess"),
    
        feminPercent: document.getElementById("femininoProgess"),
    
    }

    list.total.innerHTML = listData.total

    listData.totalFebrilPercent = (listData.totalFebril / listData.total) * 100
    list.totalFebril.innerHTML = listData.totalFebril
    list.totalFebrilPercent.innerHTML = listData.totalFebrilPercent.toFixed(2)+"%"
    listProgress.totalFebrilPercent.value = listData.totalFebrilPercent.toFixed(0)

    if(parseFloat(listData.totalFebrilPercent) < 100){

        list.totalPercent.innerHTML = "00.00%"

    }else{

        list.totalPercent.innerHTML = "100.00%" 

    }

    listData.grupoDeRiscoPercent = (listData.grupoDeRisco / listData.total) * 100
    list.grupoderisco.innerHTML = listData.grupoDeRisco
    list.grupoderiscoPercent.innerHTML = listData.grupoDeRiscoPercent.toFixed(2)+"%"
    listProgress.grupoderiscoPercent.value = listData.grupoDeRiscoPercent.toFixed(0)

    listData.febrisDeRiscoPercent = (listData.febrisDeRisco / listData.total) * 100
    list.febrisderisco.innerHTML = listData.febrisDeRisco
    list.febrisderiscoPercent.innerHTML = listData.febrisDeRiscoPercent.toFixed(2)+"%"
    listProgress.febrisderiscoPercent.value = listData.febrisDeRiscoPercent.toFixed(0)

    listData.MasculinoPercent = (listData.Masculino / listData.total) * 100
    list.masc.innerHTML = listData.Masculino
    list.mascPercent.innerHTML = listData.MasculinoPercent.toFixed(2)+"%"
    listProgress.mascPercent.value = listData.MasculinoPercent.toFixed(0)

    listData.FemininoPercent = (listData.Feminino / listData.total) * 100
    list.femin.innerHTML = listData.Feminino
    list.feminPercent.innerHTML = listData.FemininoPercent.toFixed(2)+"%"
    listProgress.feminPercent.value = listData.FemininoPercent.toFixed(2)
    listProgress.feminPercent.value = listData.FemininoPercent.toFixed(0)

    inputs.nome.value = ""
    inputs.idade.value = null
    inputs.genero.value = " "
    inputs.temperatura.value = null
    inputs.origem.value = " "

    localStorage.setItem('listData', JSON.stringify(listData))

})