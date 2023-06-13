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

export const activateSnackBarIdSeconds = (id: string, seconds: number) => {
	const snackBar = document.getElementById(id);
	snackBar?.classList.add("snackbar-active");
	setTimeout(() => {
		snackBar?.classList.remove("snackbar-active");
	}, seconds * 1000);
};

export const activateSnackBarIdSecondsMessage = (
	id: string,
	seconds: number,
	message: string
) => {
	const snackBar = document.getElementById(id);
	snackBar?.classList.add("snackbar-active");
	if (snackBar) {
		snackBar.innerHTML = message;
	}
	setTimeout(() => {
		snackBar?.classList.remove("snackbar-active");
	}, seconds * 1000);
};
