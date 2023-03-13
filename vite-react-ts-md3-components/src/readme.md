# Tiny React MD-3 Documentation

# 💟 Icons
Example Usage: [icon.tsx](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/frames/icon.tsx)

Use icons to symbolize common actions, files, devices, and directories.

Place icons like this: <code>`<span className="material-symbols-outlined">{name}
      </span>`</code>
 where <code>{name}</code> is the set of all accepted icon names according to [Material Symbols](https://fonts.google.com/icons)

# 🔤 Typography

Example Usage: [typography.tsx](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/frames/typography.tsx)

Use typography to present your design and content as clearly and efficiently as possible.

Place div text components by combining class names like this: <code>`<div className="text text-{type} text-{type}-{size}">Hello World!</div>`</code>

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

# 🏔️ Elevation
Example Usage: [elevation.tsx](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/frames/elevation.tsx)

Use elevation to depict a third dimension of your content.

Elevate any component by adding the class name like this : <code>`<div className="elevation-light-{level}"></div>`</code>

The possible different options of <code>{level}</code> are the following: 
1. <code>1</code>
2. <code>2</code>
3. <code>3</code>
4. <code>4</code>
5. <code>5</code>

# 🕹️ Buttons
Example Usage: [button.tsx](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/frames/button.tsx)

Use buttons to help people take actions, such as sending an email, sharing a document, or liking a comment.

You may pass the following properties to a button:
| Property | Type |  Default | Description |
| --- | ----------- |  --- | --- |
| <code>children</code> | <code>React.ReactNode</code> |  <code>undefined</code> | <code>children components</code>| 
| <code>onClick</code> | <code>(event: MouseEvent<HTMLButtonElement>) => void</code> |  <code>undefined</code> | <code>on click event</code>| 
| <code>configuration</code> | <code>string</code> |  <code>"filled"</code> | <code>configuration of the button style</code>| 
| <code>icon</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the button has an icon on display</code>| 
| <code>iconName</code> | <code>string</code> |  <code>"search"</code> | <code>the name of the icon on display</code>| 
| <code>disabled</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the button is disabled</code>| 
  
Create button components like this:
<code>`<Button onClick={undefined} configuration={{configuration}} icon={true} iconName={"search"} disabled={false}> <div className="text text-label text-label-large">Click Me</div> </Button>`</code>
  
  
The possible different options of <code>{configuration}</code> are the following: 
1. <code>"filled"</code>
2. <code>"outlined"</code>
