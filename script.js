function tabuada(){
    let num = document.getElementById('txtn')
    if (num.value.length == 0){
        alert('Insira um número!')
    } else {
        let n = Number(num.value)
        caixa.innerHTML = ''
        for (c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            caixa.appendChild(item)
        }
    }
}
