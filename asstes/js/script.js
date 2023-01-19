

$('#tipo_criptografia').on('change', function(e) {
    const tipoCriptografia = e.target.value
    if(tipoCriptografia === 'cesar'){
      $('#valor_rotacao').show()  
    }
    else{
        $('#valor_rotacao').hide()  
    }
});

$('input[name="codificar_decodificar"]').on('change', function(e) {
    const codificar_decodificar = e.target.value
    if(codificar_decodificar === 'codificar'){
        $('#btn').text('CODIFICAR')
    }
    else{
        $('#btn').text('DECODIFICAR')
    }
});







































// const form = document.querySelector('form')
// const radio= document.querySelector('.radio')
// const myradio= document.querySelector('myradio')
// const rota= document.querySelector('#rota')
// const radio2= document.querySelector('#base')






// function textAreaOn(valor){

//     if(valor === 'cesar'){
//     const formText = document.createElement('div')
//     formText.setAttribute ('class','formText')
//     form.appendChild(formText)

//     const label = document.createElement('label')
//     label.setAttribute('for','text')
//     formText.appendChild(label)

//     const textLabel = document.createTextNode('Digite seu texto:')
//     label.appendChild(textLabel)

//     const textArea = document.createElement('textarea')
//     textArea.setAttribute('id','text')
//     textArea.setAttribute('name','text')
//     textArea.setAttribute('rows','9')
//     textArea.setAttribute('cols','50')
//     formText.appendChild(textArea)

//     const description = document.createElement('div')
//     description.setAttribute ('class','description1')
//     form.appendChild(description)

//     const paragrafo = document.createElement('p')
//     description.appendChild(paragrafo)
//     const texto = document.createTextNode('Clique na opção desejada para o resultado.')
//     paragrafo.appendChild(texto)

//     radio.style.display = 'flex'

    // const labelradio1 = document.createElement('label')
    // radio.appendChild(labelradio1)
    // const inputradio1 = document.createElement('input')
    // inputradio1.setAttribute('type','radio')
    // inputradio1.setAttribute('value','codificar')
    // inputradio1.setAttribute('name','my-radio')
    // inputradio1.addEventListener("onchange", codificar())
    // labelradio1.appendChild(inputradio1)
    // const textLabelRadio1 = document.createTextNode('Codificar')
    // labelradio1.appendChild(textLabelRadio1)

    // const labelradio2 = document.createElement('label')
    // radio.appendChild(labelradio2)
    // const inputradio2 = document.createElement('input')
    // inputradio2.setAttribute('type','radio')
    // inputradio2.setAttribute('value','decodificar')
    // inputradio2.setAttribute('name','my-radio')
    // inputradio2.addEventListener("onchange", decodificar())
    // labelradio2.appendChild(inputradio2)
    // const textLabelRadio2 = document.createTextNode('Decodificar')
    // labelradio2.appendChild(textLabelRadio2)
// }
// }