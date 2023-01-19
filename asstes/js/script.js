const form = document.querySelector('form')


function textAreaOn(valor){

    if(valor === 'cesar'){
    const formText = document.createElement('div')
    formText.setAttribute ('class','formText')
    form.appendChild(formText)

    const label = document.createElement('label')
    label.setAttribute('for','text')
    formText.appendChild(label)

    const textLabel = document.createTextNode('Digite seu texto:')
    label.appendChild(textLabel)

    const textArea = document.createElement('textarea')
    textArea.setAttribute('id','text')
    textArea.setAttribute('name','text')
    textArea.setAttribute('rows','9')
    textArea.setAttribute('cols','50')
    formText.appendChild(textArea)

    const description = document.createElement('div')
    description.setAttribute ('class','description1')
    form.appendChild(description)

    const paragrafo = document.createElement('p')
    description.appendChild(paragrafo)
    const texto = document.createTextNode('Clique na opção desejada para o resultado.')
    paragrafo.appendChild(texto)

    const radio = document.createElement('div')
    radio.setAttribute('class','radio')
    form.appendChild(radio)

    const labelradio1 = document.createElement('label')
    radio.appendChild(labelradio1)
    const inputradio1 = document.createElement('input')
    inputradio1.setAttribute()













}
}
