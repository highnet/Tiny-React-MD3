import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import Typography from "../Typography/Typography";
import ReactDOM from "react-dom/client";

export const openDialogId = (elementId: string) => {
	const dialogRef = document.getElementById(elementId) as HTMLDialogElement;
	if (dialogRef) {
		dialogRef.showModal();
		dialogRef.classList.toggle("dialog-visible");
	}
};

export const closeDialogId = (elementId: string) => {
	const dialogRef = document.getElementById(elementId) as HTMLDialogElement;
	if (dialogRef) {
		dialogRef.close();
		dialogRef.classList.toggle("dialog-visible");
	}
};

export const closeDialogRef = (
	dialogRef: React.RefObject<HTMLDialogElement>
) => {
	if (dialogRef.current) {
		dialogRef.current.close();
		dialogRef.current.classList.toggle("dialog-visible");
	}
};

export const openDialogRef = (
	dialogRef: React.RefObject<HTMLDialogElement>
) => {
	if (dialogRef.current) {
		dialogRef.current.showModal();
		dialogRef.current.classList.toggle("dialog-visible");
	}
};

export const toggleSideSheet = (
	sideSheetRef: React.RefObject<HTMLDivElement>,
	isActive: boolean,
	setisActive: React.Dispatch<React.SetStateAction<boolean>>
) => {
	sideSheetRef.current?.classList.toggle("side-sheet-active");
	setisActive(!isActive);
};

export const activateSnackBarId = (
	id: string,
	seconds: number,
	message?: string,
	action?: () => void,
	actionLabel?: string,
	dismissable?: boolean
) => {
	const snackBar = document.getElementById(id);
	let timerId: NodeJS.Timeout | undefined;

	if (snackBar) {
		if (snackBar.classList.contains("snackbar-active")) {
			timerId?.refresh();
			return;
		}
		snackBar.classList.add("snackbar-active");

		let messageElement = null;
		if (message) {
			messageElement = (
				<Typography className="message-on-snackbar">{message}</Typography>
			);
		}

		let actionElement = null;
		if (action) {
			actionElement = (
				<Button
					className="button-on-snackbar"
					configuration="text"
					onClick={action}
				>
					{actionLabel || "Action"}
				</Button>
			);
		}

		let dismissElement = null;
		if (dismissable) {
			dismissElement = (
				<IconButton
					className="icon-button-on-snackbar"
					onClick={() => {
						snackBar.classList.remove("snackbar-active");
						if (timerId) {
							clearTimeout(timerId);
						}
					}}
				>
					close
				</IconButton>
			);
		}

		const root = ReactDOM.createRoot(snackBar);
		root.render(
			<div className="snackbar-container">
				{messageElement}
				<div className="actions-on-snackbar">
					{actionElement}
					{dismissElement}
				</div>
			</div>
		);

		timerId = setTimeout(() => {
			snackBar.classList.remove("snackbar-active");
			if (root) {
				root.render(null);
			}
		}, seconds * 1000);
	}
};

export function toggleMenuId(id: string): void {
	const menuElement = document.getElementById(id);
	if (menuElement) {
		menuElement.classList.toggle("menu-active");
	}
}

export function toggleNavRailId(id: string): void {
	const navRailElement = document.getElementById(id);
	if (navRailElement) {
		navRailElement.classList.toggle("navigation-rail-active");
	}
}

export function toggleDrawerId(id: string): void {
	const drawerElement = document.getElementById(id);
	if (drawerElement) {
		drawerElement.classList.toggle("navigation-drawer-active");
	}
}
