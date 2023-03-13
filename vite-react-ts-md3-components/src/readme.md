# Tiny MD-3 Documentation

# Typography

Example Usage: [typography.tsx](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/frames/typography.tsx)

Use typography to present your design and content as clearly and efficiently as possible.

Textify div components by combining class names like this: <code>`<div className="text text-{type} text-{type}-{size}">Hello World!</div>`</code>

The possible different options of <code>{type}</code> are the following: 
1. <code>display</code>
2. <code>headline</code>
3. <code>title</code>
4. <code>label</code>
5. <code>body</code>

and the possible different of <code>{size}</code> are the following:
1. <code>large</code>
2. <code>medium</code>
3. <code>small</code>

# Elevation
Example Usage: [elevation.tsx](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/frames/elevation.tsx)

Use elevation to depict a third dimension of your content. There are 5 levels of elevation.

Elevate any component by adding the class name: <code>elevation-light-{level}</code> 

The possible different options of <code>{level}</code> are the following: 
1. <code>1</code>
2. <code>2</code>
3. <code>3</code>
4. <code>4</code>
5. <code>5</code>

# Buttons
Example Usage: [TODO: button.tsx]()

Use buttons to help people take actions, such as sending an email, sharing a document, or liking a comment.

Create button components like this:
<code>`         <Button
          configuration="filled"
          disabled={false}
          onClick={incrementCounter}
        >
        <div className="text text-label text-label-large">Click Me</div>
        </Button> `</code>
