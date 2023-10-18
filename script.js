function Calcular(){
    let i = document.querySelector('input#txti')
    if (i.value.length == 0){
        alert('Digite um número para começar!')
    } else {
        let ni = Number(i.value)
        for (cont = 1; cont <= 10; cont ++) {
            let item = document.createElement('option')
            item.text = `${ni} X ${cont} = ${ni*cont}`
            lista.appendChild(item)
        }
    }
}
