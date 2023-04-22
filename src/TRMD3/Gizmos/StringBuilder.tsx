export class StringBuilder {
	private classes: string[] = [];

	add(className: string | string[]): StringBuilder {
		if (Array.isArray(className)) {
			className.forEach((name) => {
				if (typeof name === "string" && name.trim().length > 0) {
					this.classes.push(name.trim());
				}
			});
		} else if (typeof className === "string" && className.trim().length > 0) {
			this.classes.push(className.trim());
		}

		return this;
	}

	toString(): string {
		return this.classes.join(" ");
	}
}
