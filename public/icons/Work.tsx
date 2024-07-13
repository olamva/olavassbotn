const Work = ({ size }: { size?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height={size ?? "24px"}
		viewBox="0 -960 960 960"
		width={size ?? "24px"}
		fill="currentColor"
	>
		<path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z" />
	</svg>
);

export const WorkOutlined = ({ size }: { size?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height={size ?? "24px"}
		viewBox="0 -960 960 960"
		width={size ?? "24px"}
		fill="currentColor"
	>
		<path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
	</svg>
);

export default Work;
