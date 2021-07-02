let canvas = document.querySelector('#snake')
let context = canvas.getContext('2d') // atribui um contexto de 2d ao canvas
let box = 32 // proporção de cada coordenada do projeto
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = 'right'

// Define um local onde aparecerá a fruta
let food = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
}

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

function drawFood (){
	context.fillStyle = 'red'
	context.fillRect(food.x, food.y, box, box)
}


// Obter a info de qual tecla foi adicionada para que mude a direção da cobra
document.addEventListener('keydown', updateDirection)

function updateDirection(event) {
	if (event.keyCode == 37 && direction != 'right') direction = 'left'
	if (event.keyCode == 38 && direction != 'down') direction = 'up'
	if (event.keyCode == 39 && direction != 'left') direction = 'right'
	if (event.keyCode == 40 && direction != 'up') direction = 'down'
	
}

function startGame(){
	// Define um loop para que quando a cobra chegar em alguma das bordas, ela apareça no outro lado
	if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
	if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
	if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
	if(snake[0].y < 0 && direction == 'up') snake[0].y = 16	* box

	createBackground()
	createSnake()
	drawFood()

	// Define que a cobra apareça inicialmente no meio do canvas
	let snakeX = snake[0].x
	let snakeY = snake[0].y

	// Calcula a localização da cobra a partir do array
	if(direction == 'right') snakeX += box
	if(direction == 'left') snakeX -= box
	if(direction == 'up') snakeY -= box
	if(direction == 'down') snakeY += box

	if(snakeX != food.x || snakeY != food.y){
		// Retira a posição da calda cobra
		snake.pop()

	} else {
		food.x = Math.floor(Math.random() * 15 + 1) * box,
		food.y = Math.floor(Math.random() * 15 + 1) * box

	}

	// Define nova posição da cabeça da cobra
	let newHead = {
		x: snakeX,
		y: snakeY
	}

	// Adiciona a posição da cobra ao inicio do array
	snake.unshift(newHead)

}

let jogo = setInterval(startGame, 100)
