# 📚 Tiny React MD-3 Documentation

Use Tiny React MD-3 to create web apps, and experiences.

<ul>
<li>Download Tiny React MD-3 here https://github.com/highnet/Tiny-React-MD3.git</li>
<li>Visit the trmd3 web page here: https://tiny-react-dev.web.app/</li>

The Tiny React MD-3 Documentation helps you on your journey to learn how to use Tiny React MD-3 and its associated services. You can read it from start to finish, or use it as a reference.
    
## 🪪 Horizontal Card
## 🃏 Stacked Card

<i>Cards are versatile containers, holding anything from images to headlines, supporting text, buttons, lists, and other components.</i>

[FRAME_TEXT_PLACEHOLDER]

Place a default stacked card like this:

```JSX
<StackedCard />
```

You may supplement the following optional properties to a stacked card:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) | 
| <code>configuration</code> | <code>string</code> | <code>"outlined"</code> | <code>the style configuration of the component</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |
| <code>initial</code> | <code>string</code> | <code>"A"</code> | <code>the character of the card initial</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |
| <code>header</code> | <code>string</code> | <code>"Header"</code> | <code>header text</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |
| <code>subheader</code> | <code>string</code> | <code>"Subheader"</code> | <code>subheader text</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |    
| <code>iconButtonIconName</code> | <code>string</code> | <code>"more_vert"</code> | <code>icon button icon name</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |
| <code>title</code> | <code>string</code> | <code>"Title"</code> | <code>subheader text</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |    
| <code>subhead</code> | <code>string</code> | <code>"Subhead"</code> | <code>subhead text</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |    
| <code>text</code> | <code>string</code> | <code>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"</code> | <code>primary description text</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |    
| <code>onPrimaryButtonClick</code> | <code>() => void</code> | <code>undefined</code> | <code>function to run when primary button is clicked</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |    
| <code>primaryButtonLabel</code> | <code>string</code> | <code>""</code> | <code>primary button label text</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |    
| <code>onSecondaryButtonClick</code> | <code>() => void</code> | <code>undefined</code> | <code>function to run when secondary button is clicked</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |    
| <code>secondaryButtonLabel</code> | <code>string</code> | <code>""</code> | <code>secondary button label text</code>| [IStackedCardProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/IStackedCardsProps.tsx) |
    
The supported options of <code>{configuration}</code> are the following:

1. <code>"outlined"</code>
2. <code>"elevated"</code>
3. <code>"filled"</code>
    
## ℹ️ Assist Chip

<i>Chips help people enter information, make selections, filter content, or trigger actions.</i>

[FRAME_TEXT_PLACEHOLDER]

Place a default assist chip like this:

```JSX
<AssistChip onClick={undefined}></AssistChip>
```

You may supplement the following optional properties to a assist chip:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>onClick</code> | <code>(event: MouseEvent<HTMLButtonElement>) => void</code> | <code>c</code> | <code>d</code>| [IAssistChipProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/IAssistChipProps.tsx) |
| <code>disabled</code> | <code>boolean</code> | <code>false</code> | <code>the toggleable state of the component</code>| [IAssistChipProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/IAssistChipProps.tsx) |
| <code>children</code> | <code>React.ReactNode	</code> | <code>Label</code> | <code>the label of the component</code>| [IAssistChipProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/IAssistChipProps.tsx) |
| <code>iconType</code> | <code>string</code> | <code>undefined</code> | <code>the icontype of the component</code>| [IAssistChipProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/IAssistChipProps.tsx) |
| <code>iconName</code> | <code>string</code> | <code>local_taxi</code> | <code>the icon name of the component</code>| [IAssistChipProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/IAssistChipProps.tsx) |
| <code>elevated</code> | <code>boolean</code> | <code>false</code> | <code>the elevation state of the component</code>| [IAssistChipProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/IAssistChipProps.tsx) |
| <code>iconSrc</code> | <code>string</code> | <code> iconSrc ? iconSrc : _iconType === "favicon" ? "../../Netflix_Symbol_RGB.png" : "../../Colourful_Logo.png";</code> | <code>the path source of the component icon</code>| [IAssistChipProps.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/IAssistChipProps.tsx) |
    
The supported options of <code>{iconType}</code> are the following:

1. <code>"icon"</code>
2. <code>"favicon"</code>
3. <code>"branded"</code>
    
## 🥅 Filter Chip

## 🔌 Input Chip

<i>Chips help people enter information, make selections, filter content, or trigger actions.</i>

[FRAME_TEXT_PLACEHOLDER]

Place a default input chip like this:

```JSX
[SUBCOMPONENT_JSX_PLACEHOLDER]
```

You may supplement the following optional properties to an input chip:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
 
## 😉 Suggestion Chip

## 👉 Horizontal Divider

<i>A divider is a thin line used to group content in lists and layouts.</i>

    Dividers have an inset prop that determines how much space is left on the left and right sides of the divider. The inset prop can be either
    “none”, “right”, “left”, or “center”. The dividers also have a showInsets prop that controls whether
    or not to show the inset spaces with a different color.

Place a default horizontal divider like this:

```JSX
<HorizontalDivider inset={"none"}/>
```

You may supplement the following optional properties to a horizontal divider:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>height</code> | <code>number</code> | <code>1</code> | <code>height of the component</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>width</code> | <code>number</code> | <code>288</code> | <code>width of the component</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>inset</code> | <code>string</code> | <code>none</code> | <code>inset configuration of the component</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>insetRightWidth</code> | <code>number</code> | <code>16</code> | <code>width of the right inset</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>insetLeftWidth</code> | <code>number</code> | <code>16</code> | <code>width of the left inset</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |
| <code>showInsets</code> | <code>boolean</code> | <code>false</code> | <code>visibility of the inset</code> | [IHorizontalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/HorizontalDivider/IHorizontalDividerProps.tsx) |

## 👆 Vertical Divider

<i>A divider is a thin line used to group content in lists and layouts.</i>

    Dividers have an inset prop that determines how much space is left on the left and right sides of the divider. The inset prop can be either
    “none”, “top”, “bottom”, or “center”. The dividers also have a showInsets prop that controls whether
    or not to show the inset spaces with a different color.

Place a default vertical divider like this:

```JSX
<VerticalDivider inset={"none"}/>
```

You may supplement the following optional properties to a vertical divider:
| Property | Type | Default | Description | Interface |
| -------- | ---- | -------- | ----------- | --------- |
| <code>id</code> | <code>string</code> | <code>undefined</code> | <code>supplementary component id</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>className</code> | <code>string</code> | <code>""</code> | <code>supplementary class names</code>| [IComponentProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Component/IComponentProps.tsx) |
| <code>height</code> | <code>number</code> | <code>288</code> | <code>height of the component</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>width</code> | <code>number</code> | <code>1</code> | <code>width of the component</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>inset</code> | <code>string</code> | <code>none</code> | <code>inset configuration of the component</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>insetTopHeight</code> | <code>number</code> | <code>16</code> | <code>height of the top inset</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>insetBottomHeight</code> | <code>number</code> | <code>16</code> | <code>height of the bottom inset</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |
| <code>showInsets</code> | <code>boolean</code> | <code>false</code> | <code>visibility of the inset</code> | [IVerticalDividerProps](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/VerticalDivider/IVerticalDividerProps.tsx) |

## 🔘 [Radio Button](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Radio%20Button/Frame/radioButton.tsx)

<i>Radio buttons allow users to select one option from a set. They’re a selection control that often appears when users are asked to make decisions or select a choice from options.</i>

    Each radio button is a component and has a name, value, disabled, and defaultChecked prop. The name prop is a string that
    groups the radio buttons together. The value prop is a string that assigns a value to each radio button.
    The disabled prop is a boolean that determines whether or not the radio button is disabled and cannot be selected.
    The defaultChecked prop is a boolean that determines whether or not the radio button is selected by default.

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

    Badges come in different sizes and numbers, and are small circular indicators that can be used to show counts, statuses, or notifications
    on other elements. The Badge component takes a configuration prop to specify the size of the badge,
    an xOffset and yOffset prop to adjust the position of the badge relative to its parent element,
    and an optional label prop to display a number on the badge.

Place a default badge component like this:

```JSX
<Badge configuration={"small"} xOffset={95} yOffset={-2} /></Badge>
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

The supported options of <code>{configuration}</code> are the following:

1. <code>"small"</code>
2. <code>"single-digit"</code>
3. <code>"multiple-digits"</code>

## ☑️ [Checkbox](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Checkbox/Frame/checkbox.tsx)

<i>Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off. They’re a kind of selection control that helps users make a choice from a set of options.</i>

    Checkboxes can have different configurations, states, and styles.
    selected: a boolean value that indicates whether the checkbox is checked or not
    onChange: a function that is called when the user clicks on the checkbox
    configuration: a string that specifies the style of the checkbox, such as “default” or “error”
    disabled: a boolean value that indicates whether the checkbox is interactive or not

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

    Each icon is a span element with a class name of “material-symbols-outlined”, which uses a custom font to render the icons.
    The icons are specified by the text content of the span elements, such as “search”, “home”, “air”,
    “water”, or “check”. The code demonstrates how to use the material symbols font to create icons with
    different names and styles.

Place a default icon like this:

```JSX
[COMPONENT_JSX_PLACEHOLDER]
```

where <code>{name}</code> is the set of all accepted icon names by [Material Symbols](https://fonts.google.com/icons)

## 🔤 [Typography](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Typography/Frame/typography.tsx)

<i>Use typography to present your design and content as clearly and efficiently as possible.</i>

    Typography styles are defined using CSS classes to style text elements inside of div elements. The CSS classes specify the font family,
    size, weight, line height, and letter spacing of the text elements. There are four typography variants: display, headline, title, and body.
    Each variant has three subvariants: large, medium, and small.

Place div text components by combining class names like this:

```JSX
[COMPONENT_JSX_PLACEHOLDER]
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

## 🕹️ [Buttons](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Button/Frame/button.tsx)

<i>Use buttons to help people take actions, such as sending an email, sharing a document, or liking a comment.</i>

    Buttons are an essential part of websites that inspire action and conversion. The button component can render
    different styles of buttons based on the configuration prop, which can be either “filled” or “outlined”.
    It can also render an optional icon inside the button text based on the icon and iconName props.
    The button component also has a default click function that logs a message to the console.
    The props for the Button component are:
    configuration: a string that specifies the style of the button, such as “filled” or “outlined”
    disabled: a boolean value that indicates whether the button is interactive or not
    onClick: a function that is called when the user clicks on the button
    icon: a boolean value that indicates whether the button has an icon or not
    iconName: a string that specifies the name of the icon, such as “search” or “home” The text inside the
    button is wrapped in a div with a text-label class to apply some styling.

Create a default button component like this:

```JSX
<Button onClick={undefined}>Click Me/Button>
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
4. <code>"elevated"</code>
5. <code>"tonal"</code>

## 🔦 [Switch](https://github.com/highnet/Tiny-React-MD3/blob/master/Tiny-React-MD3/src/Switch/Frame/switch.tsx)

<i>Switches toggle the state of a single item on or off.</i>

    The Switch component is essentially a toggle button that can be selected or deselected by the user.
    The props are: selected: a boolean value that indicates whether the switch is on or off
    onChange: a function that is called when the user clicks on the switch
    disabled: a boolean value that indicates whether the switch is interactive or not
    icon: a boolean value that indicates whether the switch has an icon or not
    iconNameSelected: a string that specifies the name of the icon when the switch is on
    iconNameDeselected: a string that specifies the name of the icon when the switch is off

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
