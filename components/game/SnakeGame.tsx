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
	const canvasWidth = Math.round((window.innerWidth * 0.7) / 10) * 10;
	const canvasHeight = Math.round((window.innerHeight * 0.7) / 10) * 10;
	const theme = useTheme();
	useEffect(() => {
		if (context && open) {
			let snake = [{ x: 200, y: 200 }];
			let food = { x: 100, y: 100 };
			let dx = 10;
			let dy = 0;
			let nextDirections = [{ dx: 10, dy: 0 }];
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
							nextDirections.push({ dx: 10, dy: 0 }); // Reset next direction
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
				const nextDirection = nextDirections.pop();
				if (nextDirection) {
					const goingUp = dy === -10;
					const goingDown = dy === 10;
					const goingRight = dx === 10;
					const goingLeft = dx === -10;
					if (
						(nextDirection.dx === -10 && !goingRight) ||
						(nextDirection.dx === 10 && !goingLeft) ||
						(nextDirection.dy === -10 && !goingDown) ||
						(nextDirection.dy === 10 && !goingUp)
					) {
						dx = nextDirection.dx;
						dy = nextDirection.dy;
					}
				}
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
					nextDirections.push({ dx: -10, dy: 0 });
				} else if (keyPressed === UP_KEY && !goingDown) {
					nextDirections.push({ dx: 0, dy: -10 });
				} else if (keyPressed === RIGHT_KEY && !goingLeft) {
					nextDirections.push({ dx: 10, dy: 0 });
				} else if (keyPressed === DOWN_KEY && !goingUp) {
					nextDirections.push({ dx: 0, dy: 10 });
				}
			};
			let xDown: number | null = null;
			let yDown: number | null = null;
			const handleTouchStart = (e: TouchEvent) => {
				const firstTouch = e.touches[0];
				xDown = firstTouch.clientX;
				yDown = firstTouch.clientY;
			};
			const handleTouchMove = (e: TouchEvent) => {
				if (!xDown || !yDown) {
					return;
				}
				const xUp = e.touches[0].clientX;
				const yUp = e.touches[0].clientY;
				const xDiff = xDown - xUp;
				const yDiff = yDown - yUp;
				if (Math.abs(xDiff) > Math.abs(yDiff)) {
					if (xDiff > 0) {
						/* left swipe */
						nextDirections.push({ dx: -10, dy: 0 });
					} else {
						/* right swipe */
						nextDirections.push({ dx: 10, dy: 0 });
					}
				} else {
					if (yDiff > 0) {
						/* up swipe */
						nextDirections.push({ dx: 0, dy: -10 });
					} else {
						/* down swipe */
						nextDirections.push({ dx: 0, dy: 10 });
					}
				}
				xDown = null;
				yDown = null;
			};
			const preventDefault = (e: TouchEvent) => e.preventDefault();
			document.addEventListener("keydown", changeDirection);
			document.addEventListener("touchstart", handleTouchStart, false);
			document.addEventListener("touchmove", handleTouchMove, false);
			document.addEventListener("touchmove", preventDefault, {
				passive: false,
			});
			const gameInterval = setInterval(gameLoop, 100);
			return () => {
				document.removeEventListener("keydown", changeDirection);
				document.removeEventListener("touchstart", handleTouchStart);
				document.removeEventListener("touchmove", handleTouchMove);
				document.removeEventListener("touchmove", preventDefault);
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
			maxWidth="xl"
			PaperProps={{
				style: {
					width: canvasWidth,
					height: canvasHeight,
				},
			}}
		>
			<DialogContent sx={{ padding: 0, overflow: "hidden" }}>
				<canvas
					ref={canvasRef}
					width={canvasWidth}
					height={canvasHeight}
				/>
			</DialogContent>
		</Dialog>
	);
};
export default SnakeGame;
