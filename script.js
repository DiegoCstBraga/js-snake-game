let canvas = document.querySelector('#snake')
let context = canvas.getContext('2d') // atribui um contexto de 2d ao canvas
let box = 32 // proporção de cada coordenada do projeto
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = 'right'

function createBackground(){
    context.fillStyle = '#1182b2'
    context.fillRect(0, 0, 16 * box, 16 * box) // parâmetros (x, y, altura, largura)

}

function createSnake(){
    for(let i = 0; i < snake.length; i++){
        context.fillStyle = 'black'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }

}

function startGame(){
	createBackground()
	createSnake()

	let snakeX = snake[0].x
	let snakeY = snake[0].y

	if(direction == 'right') snakeX += box
	if(direction == 'left') snakeX -= box
	if(direction == 'up') snakeY += box
	if(direction == 'down') snakeY -= box

	snake.pop()
	let newHead = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(newHead)

}

let jogo = setInterval(startGame, 100)
