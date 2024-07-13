import Dialog from "@/components/default/Dialog";
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
	const unitSize = 40;
	const canvasWidth =
		Math.round((window.innerWidth * 0.7) / unitSize) * unitSize;
	const canvasHeight =
		Math.round((window.innerHeight * 0.7) / unitSize) * unitSize;
	useEffect(() => {
		if (canvasRef.current && context === null) {
			const renderCtx = canvasRef.current.getContext("2d");
			setContext(renderCtx);
		}
		if (context && open) {
			let snake = [{ x: 5 * unitSize, y: 5 * unitSize }];
			let food = { x: 0, y: 0 };
			const respawnFood = () => {
				if (canvasRef.current) {
					let foodX: number, foodY: number;
					do {
						foodX =
							Math.round(
								(Math.random() *
									(canvasRef.current.width - unitSize)) /
									unitSize
							) * unitSize;
						foodY =
							Math.round(
								(Math.random() *
									(canvasRef.current.height - unitSize)) /
									unitSize
							) * unitSize;
					} while (
						snake.some(
							(part) => part.x === foodX && part.y === foodY
						)
					);
					food = { x: foodX, y: foodY };
				}
			};
			respawnFood();
			let dx = unitSize;
			let dy = 0;
			const nextDirections = [{ dx: unitSize, dy: 0 }];
			const drawSnakePart = (snakePart: { x: number; y: number }) => {
				context.fillStyle = "green";
				context.strokeStyle = "darkgreen";
				context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
				context.strokeRect(
					snakePart.x,
					snakePart.y,
					unitSize,
					unitSize
				);
			};
			const drawSnake = () => snake.forEach(drawSnakePart);
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
					for (let i = 1; i < snake.length; i++) {
						if (snake[i].x === head.x && snake[i].y === head.y) {
							respawnFood();
							snake = [{ x: 5 * unitSize, y: 5 * unitSize }];
							dx = unitSize;
							dy = 0;
							nextDirections.push({ dx: unitSize, dy: 0 });
							return;
						}
					}
					if (snake[0].x === food.x && snake[0].y === food.y) {
						respawnFood();
					} else {
						snake.pop();
					}
				}
			};
			const drawFood = () => {
				context.fillStyle = "red";
				context.fillRect(food.x, food.y, unitSize, unitSize);
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
				const nextDirection = nextDirections.pop();
				if (nextDirection) {
					dx = nextDirection.dx;
					dy = nextDirection.dy;
				}
				drawFood();
				moveSnake();
				drawSnake();
			};
			const changeDirection = (event: KeyboardEvent) => {
				event.preventDefault();
				const keyPressed = event.key;
				const lastDirection = nextDirections[
					nextDirections.length - 1
				] || { dx, dy };
				switch (keyPressed) {
					case "ArrowLeft":
						if (dx !== unitSize && lastDirection.dx !== -unitSize) {
							nextDirections.push({ dx: -unitSize, dy: 0 });
						}
						break;
					case "ArrowUp":
						if (dy !== unitSize && lastDirection.dy !== -unitSize) {
							nextDirections.push({ dx: 0, dy: -unitSize });
						}
						break;
					case "ArrowRight":
						if (dx !== -unitSize && lastDirection.dx !== unitSize) {
							nextDirections.push({ dx: unitSize, dy: 0 });
						}
						break;
					case "ArrowDown":
						if (dy !== -unitSize && lastDirection.dy !== unitSize) {
							nextDirections.push({ dx: 0, dy: unitSize });
						}
						break;
					default:
						break;
				}
			};
			let xDown: number | null = null;
			let yDown: number | null = null;
			let handlingSwipe = false;
			const handleTouchStart = (e: TouchEvent) => {
				const firstTouch = e.touches[0];
				xDown = firstTouch.clientX;
				yDown = firstTouch.clientY;
			};
			const handleTouchMove = (e: TouchEvent) => {
				if (!xDown || !yDown || handlingSwipe) {
					return;
				}
				const xUp = e.touches[0].clientX;
				const yUp = e.touches[0].clientY;
				const xDiff = xDown - xUp;
				const yDiff = yDown - yUp;
				const sensitivity = 20; // * Increase if more wiggle room is wanted
				if (Math.abs(xDiff) > Math.abs(yDiff)) {
					if (Math.abs(xDiff) > sensitivity) {
						handlingSwipe = true;
						if (xDiff > 0 && dx !== unitSize) {
							nextDirections.push({ dx: -unitSize, dy: 0 });
						} else if (xDiff < 0 && dx !== -unitSize) {
							nextDirections.push({ dx: unitSize, dy: 0 });
						}
						xDown = xUp;
						yDown = yUp;
					}
				} else {
					if (Math.abs(yDiff) > sensitivity) {
						handlingSwipe = true;
						if (yDiff > 0 && dy !== unitSize) {
							nextDirections.push({ dx: 0, dy: -unitSize });
						} else if (yDiff < 0 && dy !== -unitSize) {
							nextDirections.push({ dx: 0, dy: unitSize });
						}
						xDown = xUp;
						yDown = yUp;
					}
				}
				if (handlingSwipe) {
					setTimeout(() => (handlingSwipe = false), 100);
				}
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
	}, [context, open, unitSize]);
	return (
		<Dialog open={open} setOpen={onClose}>
			<div className="p-0 size-fit overflow-hidden bg-white dark:bg-black">
				<canvas
					ref={canvasRef}
					width={canvasWidth}
					height={canvasHeight}
				/>
			</div>
		</Dialog>
	);
};
export default SnakeGame;
