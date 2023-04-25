/*
	1
	1682423199

	The code defines a class called StringBuilder that builds a string of class
	names. The class has two methods, add and toString. The add method takes a
	string or an array of strings and adds them to the class's internal list of
	classes, after trimming them and checking if they are valid strings. The toString
	method concatenates the list of classes into a single string separated by spaces
	and returns it. The StringBuilder class can be used to create dynamic class names
	for HTML elements based on various conditions in front-end development.
*/

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
