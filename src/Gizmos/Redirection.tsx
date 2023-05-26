export function openLinkInNewTab(url: string) {
	if (url == undefined || url == "") return;
	window.open(url, "_blank");
}
