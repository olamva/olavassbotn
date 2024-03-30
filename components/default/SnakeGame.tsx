import { Dialog, DialogContent } from "@mui/material";
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
	useEffect(() => {
		if (context && open) {
			const snake = [{ x: 200, y: 200 }];
			let food = { x: 300, y: 300 }; // Make food let to reassign
			let dx = 10;
			let dy = 0;
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
				const head = { x: snake[0].x + dx, y: snake[0].y + dy };
				snake.unshift(head);
				// Check if snake eats food
				if (snake[0].x === food.x && snake[0].y === food.y) {
					// Generate new food location
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
					snake.pop(); // Only remove the tail if food is not eaten
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
					dx = -10;
					dy = 0;
				}
				if (keyPressed === UP_KEY && !goingDown) {
					dx = 0;
					dy = -10;
				}
				if (keyPressed === RIGHT_KEY && !goingLeft) {
					dx = 10;
					dy = 0;
				}
				if (keyPressed === DOWN_KEY && !goingUp) {
					dx = 0;
					dy = 10;
				}
			};
			document.addEventListener("keydown", changeDirection);
			const gameInterval = setInterval(gameLoop, 100);
			return () => {
				document.removeEventListener("keydown", changeDirection);
				clearInterval(gameInterval);
			};
		}
	}, [context, open]);
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
			maxWidth="md"
			fullWidth
		>
			<DialogContent style={{ padding: 0, border: "2px solid black" }}>
				<canvas ref={canvasRef} width={640} height={480} />
			</DialogContent>
		</Dialog>
	);
};
export default SnakeGame;
