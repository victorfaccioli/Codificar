$('form').on('submit', function(e){
  e.preventDefault()
})

let tipoCriptografia
$('#tipo_criptografia').on('change', function(e) {
    tipoCriptografia = $(this).val() // atribuindo o valor para a letiavel global
    if(tipoCriptografia === 'cesar'){
      $('#valor_rotacao').show()  
    }
    else{
        $('#valor_rotacao').hide()  
    }
})

let selecionarValor
$("input[name='codificar_decodificar']").change(function(){
   selecionarValor = $(this).val()
  if(selecionarValor === 'codificar'){
    $('#btn').text('CODIFICAR')
  }
  else{
    $('#btn').text('DECODIFICAR')
  }
})

let valorRotacao
$("#valor_rotacao").on("input", function(){
  valorRotacao = $(this).val()
});

let textoNaoCodificado
$("#text_input").on("input", function(){
  textoNaoCodificado = $(this).val()
});

function CaesarCipherCode(str, shift) {
  let texto = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    texto += c;
  }
  return texto;


}function CaesarCipherDecode(str, shift) {
  let texto = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    texto += c;
  }
  return texto;
}

function base64Encode(str) {
  return btoa(str)
}

function base64Decode(str) {
  return atob(str)
}

$('#btn').on('click', function() {
  let tipoCriptografia = $('#tipo_criptografia').val()
  let selecionarValor = $("input[name='codificar_decodificar']:checked").val()
  let valorRotacao = Number($("#valor_rotacao").val()) 
  let textoNaoCodificado = $("#text_input").val()
  if (selecionarValor === 'codificar') {
    if (tipoCriptografia === 'cesar') {
      let textoCodificado = CaesarCipherCode(textoNaoCodificado,valorRotacao)
      console.log(textoCodificado);
      $('#text_output').val(textoCodificado)
    }
      else if (tipoCriptografia === 'base64') {
      let textoCodificado = base64Encode(textoNaoCodificado)
      $('#text_output').val(textoCodificado)
}}
  else if (selecionarValor === 'decodificar') {
    if (tipoCriptografia === 'cesar') {
      let textoDecodificado = CaesarCipherDecode(textoNaoCodificado, -valorRotacao)
      $('#text_output').val(textoDecodificado);
    }else if (tipoCriptografia === 'base64') {
      let textoDecodificado = base64Decode(textoNaoCodificado)
      $('#text_output').val(textoDecodificado)
}}})