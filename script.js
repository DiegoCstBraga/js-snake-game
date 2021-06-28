let canvas = document.querySelector('#snake')
let context = canvas.getContext('2d') // atribui um contexto de 2d ao canvas
let box = 32 //

function createBackground(){
    context.fillStyle = '#1182b2'
    context.fillRect(0, 0, 16 * box, 16 * box) // parâmetros (x, y, altura, largura)
}

createBackground()
