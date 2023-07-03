import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import Typography from "../Typography/Typography";
import ReactDOMServer from "react-dom/server";

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

		let messageString = "";
		if (message) {
			messageString = ReactDOMServer.renderToString(
				<Typography className="message-on-snackbar">{message}</Typography>
			);
		}
		let actionString = "";
		if (action) {
			actionString = ReactDOMServer.renderToString(
				<Button className="button-on-snackbar" configuration="text">
					{actionLabel || "Action"}
				</Button>
			);
		}
		let dismissString = "";
		if (dismissable) {
			dismissString = ReactDOMServer.renderToString(
				/*
				<div className="icon-container-on-snackbar">
					<Icon className="icon-on-snackbar">close</Icon>{" "}
				</div>
				*/
				<IconButton className="icon-button-on-snackbar">close</IconButton>
			);
		}
		snackBar.innerHTML =
			messageString +
			"<div class=actions-on-snackbar>" +
			actionString +
			dismissString +
			"</div>";
		if (action) {
			const actionButton = snackBar.querySelector(".button-on-snackbar");
			actionButton?.addEventListener("click", action);
		}
		if (dismissable) {
			const dismissDiv = snackBar.querySelector(".icon-button-on-snackbar");
			dismissDiv?.addEventListener("click", () => {
				snackBar.classList.remove("snackbar-active");
				if (timerId) {
					clearTimeout(timerId);
				}
			});
		}
		timerId = setTimeout(() => {
			snackBar.classList.remove("snackbar-active");
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
		drawerElement.classList.toggle("nav-drawer-scroll-active");
	}
}
