# Tiny React MD-3 Documentation

## ☑️ [Checkbox](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Checkbox/Frame/checkbox.tsx)

<i>Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off. They’re a kind of selection control that helps users make a choice from a set of options.</i>

You may supplement the following optional properties to a checkbox:
| Property | Type |  Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>disabled</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the button is disabled</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>children</code> | <code>React.ReactNode</code> |  <code>undefined</code> | <code>children components</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>id</code> | <code>string</code> |  <code>undefined</code> | <code>supplementary component id</code>|  [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> |  <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>onChange</code> | <code>`MouseEvent<HTMLDivElement>`</code> | <code>undefined</code> | <code>on change event</code>| [ICheckboxProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Checkbox/ICheckboxProps.tsx) | 
| <code>configuration</code> | <code>string</code> |  <code>"filled"</code> | <code>configuration of the button style</code>| [ICheckboxProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Checkbox/ICheckboxProps.tsx) |
| <code>selected</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the component is selected</code>| [ICheckboxProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Checkbox/ICheckboxProps.tsx) | 

The possible different options of <code>{configuration}</code> are the following: 
1. <code>"default"</code>
2. <code>"error"</code>

Place a default checkbox component like this: <code>`<Checkbox selected={true} onChange={undefined}></Checkbox>`</code>

## 💟 [Icons](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Icon/Frame/icon.tsx)

<i>Use icons to symbolize common actions, files, devices, and directories.</i>

Place a default icon like this: <code>`<span className="material-symbols-outlined">{name}
      </span>`</code>
 where <code>{name}</code> is the set of all accepted icon names by [Material Symbols](https://fonts.google.com/icons)

## 🔤 [Typography](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Typography/Frame/typography.tsx)

<i>Use typography to present your design and content as clearly and efficiently as possible.</i>

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

## 🏔️ [Elevation](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Elevation/Frame/elevation.tsx)

<i>Use elevation to depict a third dimension of your content.</i>

Elevate any component by adding the class name like this: <code>`<div className="elevation-light-{level}"></div>`</code>

The possible different options of <code>{level}</code> are the following: 
1. <code>1</code>
2. <code>2</code>
3. <code>3</code>
4. <code>4</code>
5. <code>5</code>

## 🕹️ [Buttons](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Button/Frame/button.tsx)

<i>Use buttons to help people take actions, such as sending an email, sharing a document, or liking a comment.</i>

You may supplement the following optional properties to a button:
| Property | Type |  Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>disabled</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the button is disabled</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>children</code> | <code>React.ReactNode</code> |  <code>undefined</code> | <code>children components</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>id</code> | <code>string</code> |  <code>undefined</code> | <code>supplementary component id</code>|  [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> |  <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>onClick</code> | <code>`MouseEvent<HTMLButtonElement>`</code> | <code>undefined</code> | <code>on click event</code>| [IButtonProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Button/IButtonProps.tsx) | 
| <code>configuration</code> | <code>string</code> |  <code>"filled"</code> | <code>configuration of the button style</code>| [IButtonProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Button/IButtonProps.tsx) |
| <code>icon</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the component has an icon on display</code>| [IButtonProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Button/IButtonProps.tsx) |
| <code>iconName</code> | <code>string</code> | <code>"search"</code> | <code>the name of the icon on display</code>| [IButtonProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Button/IButtonProps.tsx) |

Create a default button component like this:
<code>`<Button onClick={undefined}> <div className="text text-label text-label-large">Click Me</div> </Button>`</code>
  
The possible different options of <code>{configuration}</code> are the following: 
1. <code>"filled"</code>
2. <code>"outlined"</code>
3. <code>"text"</code>
3. <code>"elevated"</code>
4. <code>"tonal"</code>

## 🔦 [Switch](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Switch/Frame/switch.tsx)
      
<i>Switches toggle the state of a single item on or off.</i>

You may supplement the following optional properties to a switch:
| Property | Type |  Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>disabled</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the button is disabled</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>children</code> | <code>React.ReactNode</code> |  <code>undefined</code> | <code>children components</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>id</code> | <code>string</code> |  <code>undefined</code> | <code>supplementary component id</code>|  [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> |  <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Component/IComponentProps.tsx) |
| <code>selected</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the component is selected</code>| [ISwitchProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Switch/Switch.tsx) | 
| <code>onChange</code> | <code>`MouseEvent<HTMLDivElement>`</code> | <code>undefined</code> | <code>on change event</code>| [ISwitchProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Switch/Switch.tsx) |
| <code>icon</code> | <code>boolean</code> |  <code>false</code> | <code>flag to indicate if the component has an icon on display</code>| [ISwitchProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Switch/Switch.tsx) |
| <code>iconNameSelected</code> | <code>string</code> |  <code>"check"</code> | <code>the name of the icon on display when selected</code>| [ISwitchProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Switch/Switch.tsx) |
| <code>iconNameDeselected</code> | <code>string</code> |  <code>"close"</code> | <code>the name of the icon on display when deselected</code>| [ISwitchProps](https://github.com/highnet/vite-react-ts-md3-components/blob/master/vite-react-ts-md3-components/src/Switch/Switch.tsx) |

Create a default switch component like this:
<code>`<Switch onChange={undefined}></Switch>`</code>
