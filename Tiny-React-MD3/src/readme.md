# Tiny React MD-3 Documentation

## 👆 Horizontal Divider

<i>A divider is a thin line used to group content in lists and layouts.</i>

Place a default horizontal divider like this:

```JSX
<HorizontalDivider inset={"none"}/>
```

You may supplement the following optional properties to a horizontal divider:
| Property | Type |  Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>id</code> | <code>string</code> |  <code>undefined</code> | <code>supplementary component id</code>|  [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>height</code> | <code>number</code> |  <code>1</code> | <code>height of the component</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>width</code> | <code>number</code> |  <code>288</code> | <code>width of the component</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>inset</code> | <code>string</code> | <code>none</code> | <code>inset configuration of the component</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>insetRightWidth</code> | <code>number</code> | <code>16</code> | <code>width of the right inset</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>insetLeftWidth</code> | <code>number</code> | <code>16</code> | <code>width of the left inset</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>showInsets</code> | <code>boolean</code> | <code>false</code> | <code>visibility of the inset</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |

## 👉 Vertical Divider

<i>A divider is a thin line used to group content in lists and layouts.</i>

Place a default vertical divider like this:

```JSX
<VerticalDivider inset={"none"}/>
```
You may supplement the following optional properties to a vertical divider:
| Property | Type |  Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>id</code> | <code>string</code> |  <code>undefined</code> | <code>supplementary component id</code>|  [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>height</code> | <code>number</code> |  <code>288</code> | <code>height of the component</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>width</code> | <code>number</code> |  <code>1</code> | <code>width of the component</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>inset</code> | <code>string</code> | <code>none</code> | <code>inset configuration of the component</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>insetTopHeight</code> | <code>number</code> | <code>16</code> | <code>height of the top inset</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>insetBottomHeight</code> | <code>number</code> | <code>16</code> | <code>height of the bottom inset</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>showInsets</code> | <code>boolean</code> | <code>false</code> | <code>visibility of the inset</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |


## 🔘 [Radio Button](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Radio%20Button/Frame/radioButton.tsx)

<i>Radio buttons allow users to select one option from a set. They’re a selection control that often appears when users are asked to make decisions or select a choice from options.</i>

Place a default radio button like this:
```JSX
<RadioButton name={"tiny md3"} value={"option-1"}/>
```

You may supplement the following optional properties to a radio button:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>disabled</code> | <code>boolean</code> | <code>false</code> | <code>flag to indicate if the component is disabled</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>children</code> | <code>React.ReactNode</code> | <code>undefined</code> | <code>children components</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>onClick</code> | <code>MouseEvent<HTMLDivElement></code> | <code>undefined</code> | <code>on click event</code> | [IRadioButtonProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Radio%20Button/IRadioButtonProps.tsx) |
| <code>name</code> | <code>string</code> | <code>"radio"</code> | <code>name of the component group</code> | [IRadioButtonProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Radio%20Button/IRadioButtonProps.tsx) |
| <code>value</code> | <code>string</code> | <code>"radio"</code> | <code>value of the component</code> | [IRadioButtonProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Radio%20Button/IRadioButtonProps.tsx) |
| <code>defaultChecked</code> | <code>boolean</code> | <code>false</code> | <code>default checked state of the component</code> | [IRadioButtonProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Radio%20Button/IRadioButtonProps.tsx) |

## 📛 [Badge](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Badge/Frame/badge.tsx)

<i>Badges are used to convey dynamic information, such as a count or status. A badge can include text, labels, or numbers.</i>

Place a default badge component like this:

```JSX
<Badge configuration={"single-digit"} xOffset={93} yOffset={-4} label={"3"}></Badge>
```
 
You may supplement the following optional properties to a badge:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>children</code> | <code>React.ReactNode</code> | <code>undefined</code> | <code>children components</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>configuration</code> | <code>`string`</code> | <code>"small"</code> | <code>configuration of the component</code>| [IBadgeProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Badge/IBadgeProps.tsx) |
| <code>xOffset</code> | <code>`number`</code> | <code>0</code> | <code>x axis offset percentage</code>| [IBadgeProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Badge/IBadgeProps.tsx) | 
| <code>yOffset</code> | <code>`number`</code> | <code>0</code> | <code>y axis offset percentage</code>| [IBadgeProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Badge/IBadgeProps.tsx) | 
| <code>label</code> | <code>`string`</code> | <code>""</code> | <code>label inside the badge</code>| [IBadgeProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Badge/IBadgeProps.tsx) |

The supported options of <code>{configuration}</code> are the following: 
1. <code>"small"</code>
2. <code>"single-digit"</code>
3. <code>"multiple-digits"</code>

## ☑️ [Checkbox](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Checkbox/Frame/checkbox.tsx)

<i>Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off. They’re a kind of selection control that helps users make a choice from a set of options.</i>

 Place a default checkbox component like this:

```JSX
<Checkbox selected={true} onChange={undefined}></Checkbox>
```
 
You may supplement the following optional properties to a checkbox:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>disabled</code> | <code>boolean</code> | <code>false</code> | <code>flag to indicate if the component is disabled</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>children</code> | <code>React.ReactNode</code> | <code>undefined</code> | <code>children components</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>onChange</code> | <code>`MouseEvent<HTMLDivElement>`</code> | <code>undefined</code> | <code>on change event</code>| [ICheckboxProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Checkbox/ICheckboxProps.tsx) | 
| <code>configuration</code> | <code>string</code> | <code>"filled"</code> | <code>configuration of the component style</code>| [ICheckboxProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Checkbox/ICheckboxProps.tsx) |
| <code>selected</code> | <code>boolean</code> | <code>false</code> | <code>flag to indicate if the component is selected</code>| [ICheckboxProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Checkbox/ICheckboxProps.tsx) | 

The supported options of <code>{configuration}</code> are the following: 
1. <code>"default"</code>
2. <code>"error"</code>

## 💟 [Icons](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Icon/Frame/icon.tsx)

<i>Use icons to symbolize common actions, files, devices, and directories.</i>

Place a default icon like this:

```JSX
<span className="material-symbols-outlined">{name}</span>
```

 where <code>{name}</code> is the set of all accepted icon names by [Material Symbols](https://fonts.google.com/icons)

## 🔤 [Typography](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Typography/Frame/typography.tsx)

<i>Use typography to present your design and content as clearly and efficiently as possible.</i>

Place div text components by combining class names like this: 

```JSX
<div className="text text-{type} text-{type}-{size}">Hello World!</div>
```

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

## 🏔️ [Elevation](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Elevation/Frame/elevation.tsx)

<i>Use elevation to depict a third dimension of your content.</i>

Elevate any component by adding the class name like this:

```JSX
<div className="elevation-light-{level}"></div>
```

The supported options of <code>{level}</code> are the following: 
1. <code>1</code>
2. <code>2</code>
3. <code>3</code>
4. <code>4</code>
5. <code>5</code>

## 🕹️ [Buttons](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Button/Frame/button.tsx)

<i>Use buttons to help people take actions, such as sending an email, sharing a document, or liking a comment.</i>

 Create a default button component like this:

```JSX
<Button onClick={undefined}> <div className="text text-label text-label-large">Click Me</div></Button>
```
 
You may supplement the following optional properties to a button:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>disabled</code> | <code>boolean</code> | <code>false</code> | <code>flag to indicate if the button is disabled</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>children</code> | <code>React.ReactNode</code> | <code>undefined</code> | <code>children components</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>onClick</code> | <code>`MouseEvent<HTMLButtonElement>`</code> | <code>undefined</code> | <code>on click event</code>| [IButtonProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Button/IButtonProps.tsx) | 
| <code>configuration</code> | <code>string</code> | <code>"filled"</code> | <code>configuration of the button style</code>| [IButtonProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Button/IButtonProps.tsx) |
| <code>icon</code> | <code>boolean</code> | <code>false</code> | <code>flag to indicate if the component has an icon on display</code>| [IButtonProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Button/IButtonProps.tsx) |
| <code>iconName</code> | <code>string</code> | <code>"search"</code> | <code>the name of the icon on display</code>| [IButtonProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Button/IButtonProps.tsx) |
  
The supported options of <code>{configuration}</code> are the following: 
1. <code>"filled"</code>
2. <code>"outlined"</code>
3. <code>"text"</code>
3. <code>"elevated"</code>
4. <code>"tonal"</code>

## 🔦 [Switch](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Switch/Frame/switch.tsx)
      
<i>Switches toggle the state of a single item on or off.</i>

 Create a default switch component like this:

```JSX
<Switch onChange={undefined}></Switch>
```
 
You may supplement the following optional properties to a switch:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>disabled</code> | <code>boolean</code> | <code>false</code> | <code>flag to indicate if the button is disabled</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>children</code> | <code>React.ReactNode</code> | <code>undefined</code> | <code>children components</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>selected</code> | <code>boolean</code> | <code>false</code> | <code>flag to indicate if the component is selected</code>| [ISwitchProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Switch/Switch.tsx) | 
| <code>onChange</code> | <code>`MouseEvent<HTMLDivElement>`</code> | <code>undefined</code> | <code>on change event</code>| [ISwitchProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Switch/Switch.tsx) |
| <code>icon</code> | <code>boolean</code> | <code>false</code> | <code>flag to indicate if the component has an icon on display</code>| [ISwitchProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Switch/Switch.tsx) |
| <code>iconNameSelected</code> | <code>string</code> | <code>"check"</code> | <code>the name of the icon on display when selected</code>| [ISwitchProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Switch/Switch.tsx) |
| <code>iconNameDeselected</code> | <code>string</code> | <code>"close"</code> | <code>the name of the icon on display when deselected</code>| [ISwitchProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Switch/Switch.tsx) |
