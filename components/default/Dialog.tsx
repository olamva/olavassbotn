import { ReactNode } from "react";

interface DialogProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	blurred?: boolean;
	children: ReactNode;
}
const Dialog = ({ open, setOpen, blurred, children }: DialogProps) =>
	open && (
		<div
			className={`${
				blurred ? "backdrop-blur-sm" : ""
			} fixed inset-0 flex size-full items-center justify-center`}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					setOpen(false);
				}
			}}
		>
			{children}
		</div>
	);

export default Dialog;
