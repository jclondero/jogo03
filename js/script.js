var lista = new Array();
lista[0] = "balao_de_fundo_redondo";
lista[1] = "balao_volumetrico";
lista[2] = "bastao_de_vidro";
lista[3] = "bequer";
lista[4] = "bico_de_bunsen";
lista[5] = "bureta";
lista[6] = "calice_graduado";
lista[7] = "condensador_de_refluxo";
lista[8] = "dessecador";
lista[9] = "enlenmeyer";
lista[10] = "extrator_soxhlet";
lista[11] = "funil_de_buchner";
lista[12] = "funil_de_decantacao";
lista[13] = "funil_de_vidro";
lista[14] = "gral_e_pistilo_de_ceramica";
lista[15] = "kitasso";
lista[16] = "pera";
lista[17] = "pipeta_graduada";
lista[18] = "pipeta_volumetrica";
lista[19] = "placa_de_petri";
lista[20] = "proveta";
lista[21] = "tubo_de_ensaio";
lista[22] = "vidro_de_relogio";

function populaCampos(){
    // Popula Primeiro Valor
    var aux = Math.floor(Math.random() * 7);
    document.getElementById("imgVidraria1").src = "img/"+lista[aux]+".jpg";
    tmp = lista[aux];
    tmp = tmp.replace(/_/g," ");
    tmp = capitalizaNomesVidrarias(tmp);
    document.getElementById("txtVidraria1").innerHTML = tmp;

    // Popula Demais Valores
    var aux2 = Math.floor(Math.random() * 3 + 1);
    aux += aux2;
    document.getElementById("imgVidraria2").src = "img/"+lista[aux]+".jpg";
    tmp = lista[aux];
    tmp = tmp.replace(/_/g," ");
    tmp = capitalizaNomesVidrarias(tmp);
    document.getElementById("txtVidraria2").innerHTML = tmp;
    randomiza();
    aux += aux2;
    document.getElementById("imgVidraria3").src = "img/"+lista[aux]+".jpg";
    tmp = lista[aux];
    tmp = tmp.replace(/_/g," ");
    tmp = capitalizaNomesVidrarias(tmp);
    document.getElementById("txtVidraria3").innerHTML = tmp;
    randomiza();
    aux += aux2;
    document.getElementById("imgVidraria4").src = "img/"+lista[aux]+".jpg";
    tmp = lista[aux];
    tmp = tmp.replace(/_/g," ");
    tmp = capitalizaNomesVidrarias(tmp);
    document.getElementById("txtVidraria4").innerHTML = tmp;
    randomiza();
    aux += aux2;
    document.getElementById("imgVidraria5").src = "img/"+lista[aux]+".jpg";
    tmp = lista[aux];
    tmp = tmp.replace(/_/g," ");
    tmp = capitalizaNomesVidrarias(tmp);
    document.getElementById("txtVidraria5").innerHTML = tmp;
    randomiza();
    aux += aux2;
    document.getElementById("imgVidraria6").src = "img/"+lista[aux]+".jpg";
    tmp = lista[aux];
    tmp = tmp.replace(/_/g," ");
    tmp = capitalizaNomesVidrarias(tmp);
    document.getElementById("txtVidraria6").innerHTML = tmp;
}

// Randomiza Segundo Auxiliar
function randomiza(){
    aux2 = Math.floor(Math.random() * 3 + 1);
}

function capitalizaNomesVidrarias(nomesVidrarias) {
    return nomesVidrarias.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

populaCampos();
//setInterval(populaCampos, 3000);

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    //var n = document.getElementById(data).childElementCount;
    //alert(ev.target.childElementCount);
    //alert(document.getElementById(ev.target.id));
    if(ev.target.childElementCount < 1 && ev.target.className != 'imagem'){
        ev.target.appendChild(document.getElementById(data));
        validaCampos(ev);
    }
    //alert(document.getElementById(data));
}

function dropInicial(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    //var n = document.getElementById(data).childElementCount;
    //alert(ev.target.childElementCount);
    if(ev.target.className != 'imagem'){
        ev.target.appendChild(document.getElementById(data));
    }
    //alert(document.getElementById(data));
}

function validaCampos() {
    /*
    if(total === 3){
        alert("Entrou aqui 1");
        if ($("#vidraria1 > img[src*='img/balao_volumetrico.jpg']").length){
            if ($("#vidraria2 > img[src*='img/bastao_de_vidro.jpg']").length){
                if ($("#vidraria3 > img[src*='img/bequer.jpg']").length){
                    if ($("#vidraria4 > img[src*='img/extrator_soxhlet.jpg']").length){
                        alert("Acerto mizeravi");
                    }
                }
            }
        }
        */
    if(document.getElementById("vidrarias").childElementCount == 0){
        alert("Fodase");
    }
}