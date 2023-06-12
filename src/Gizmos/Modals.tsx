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

export const toggleSideSheet = (sideSheetRef: React.RefObject<HTMLDivElement>, isActive: boolean, setisActive: React.Dispatch<React.SetStateAction<boolean>>) => {
	sideSheetRef.current?.classList.toggle("side-sheet-active");
	setisActive(!isActive);
  };