const Clear = ({ size }: { size?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height={size ?? "24px"}
		viewBox="0 -960 960 960"
		width={size ?? "24px"}
		fill="currentColor"
	>
		<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
	</svg>
);

export default Clear;
