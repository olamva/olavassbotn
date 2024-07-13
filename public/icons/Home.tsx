const Home = ({ size }: { size?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height={size ?? "24px"}
		viewBox="0 -960 960 960"
		width={size ?? "24px"}
		fill="currentColor"
	>
		<path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
	</svg>
);

export const HomeOutlined = ({ size }: { size?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height={size ?? "24px"}
		viewBox="0 -960 960 960"
		width={size ?? "24px"}
		fill="currentColor"
	>
		<path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
	</svg>
);

export default Home;
