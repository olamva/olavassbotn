import { Dialog, DialogContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FC, useEffect, useRef, useState } from "react";

interface SnakeGameProps {
	open: boolean;
	onClose: () => void;
}
const SnakeGame: FC<SnakeGameProps> = ({ open, onClose }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(
		null
	);
	const theme = useTheme();
	useEffect(() => {
		if (context && open) {
			let snake = [{ x: 200, y: 200 }];
			let food = { x: 300, y: 300 };
			let dx = 10;
			let dy = 0;
			let nextDirection = { dx: 10, dy: 0 };
			const drawSnakePart = (snakePart: { x: number; y: number }) => {
				context.fillStyle = "green";
				context.strokeStyle = "darkgreen";
				context.fillRect(snakePart.x, snakePart.y, 10, 10);
				context.strokeRect(snakePart.x, snakePart.y, 10, 10);
			};
			const drawSnake = () => {
				snake.forEach(drawSnakePart);
			};
			const moveSnake = () => {
				if (snake.length > 0) {
					const head = { x: snake[0].x + dx, y: snake[0].y + dy };
					if (canvasRef.current) {
						const canvasWidth = canvasRef.current.width;
						const canvasHeight = canvasRef.current.height;
						head.x = (head.x + canvasWidth) % canvasWidth;
						head.y = (head.y + canvasHeight) % canvasHeight;
					}
					snake.unshift(head);
					// Check for collision with the snake's own body
					for (let i = 1; i < snake.length; i++) {
						if (snake[i].x === head.x && snake[i].y === head.y) {
							// Reset the game
							food = { x: 300, y: 300 }; // Reset food to initial position
							snake = [{ x: 200, y: 200 }]; // Reset snake to initial position
							dx = 10; // Reset direction
							dy = 0;
							nextDirection = { dx: 10, dy: 0 }; // Reset next direction
							return; // Exit the function to prevent further execution
						}
					}
					if (snake[0].x === food.x && snake[0].y === food.y) {
						if (canvasRef.current) {
							food = {
								x:
									Math.round(
										(Math.random() *
											(canvasRef.current.width - 10)) /
											10
									) * 10,
								y:
									Math.round(
										(Math.random() *
											(canvasRef.current.height - 10)) /
											10
									) * 10,
							};
						}
					} else {
						snake.pop();
					}
				}
			};
			const drawFood = () => {
				context.fillStyle = "red";
				context.fillRect(food.x, food.y, 10, 10);
			};
			const clearCanvas = () => {
				if (canvasRef.current) {
					context.clearRect(
						0,
						0,
						canvasRef.current.width,
						canvasRef.current.height
					);
				}
			};
			const gameLoop = () => {
				clearCanvas();
				if (context && canvasRef.current) {
					context.fillStyle = theme.palette.secondary.contrastText;
					context.fillRect(
						0,
						0,
						canvasRef.current.width,
						canvasRef.current.height
					);
				}
				dx = nextDirection.dx;
				dy = nextDirection.dy;
				drawFood();
				moveSnake();
				drawSnake();
			};
			const changeDirection = (event: KeyboardEvent) => {
				const LEFT_KEY = 37;
				const RIGHT_KEY = 39;
				const UP_KEY = 38;
				const DOWN_KEY = 40;
				const keyPressed = event.keyCode;
				const goingUp = dy === -10;
				const goingDown = dy === 10;
				const goingRight = dx === 10;
				const goingLeft = dx === -10;
				if (keyPressed === LEFT_KEY && !goingRight) {
					nextDirection = { dx: -10, dy: 0 };
				} else if (keyPressed === UP_KEY && !goingDown) {
					nextDirection = { dx: 0, dy: -10 };
				} else if (keyPressed === RIGHT_KEY && !goingLeft) {
					nextDirection = { dx: 10, dy: 0 };
				} else if (keyPressed === DOWN_KEY && !goingUp) {
					nextDirection = { dx: 0, dy: 10 };
				}
			};
			document.addEventListener("keydown", changeDirection);
			const gameInterval = setInterval(gameLoop, 100);
			return () => {
				document.removeEventListener("keydown", changeDirection);
				clearInterval(gameInterval);
			};
		}
	}, [context, open, theme.palette.secondary.contrastText]);
	return (
		<Dialog
			open={open}
			onClose={onClose}
			TransitionProps={{
				onEntered: () => {
					if (canvasRef.current) {
						const renderCtx = canvasRef.current.getContext("2d");
						setContext(renderCtx);
					}
				},
			}}
		>
			<DialogContent
				sx={{
					padding: 0,
					width: "600px",
					height: "480px",
					backgroundColor: theme.palette.secondary.contrastText,
				}}
			>
				<canvas ref={canvasRef} width="600" height="480" />
			</DialogContent>
		</Dialog>
	);
};
export default SnakeGame;
