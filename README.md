# Tailwind_UI :fire: &nbsp;&nbsp;&nbsp; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

React UI components build on top of TailwindCSS
<br/>
<br/>

Preview URL(incomplete): https://5imqx.sse.codesandbox.io/

# Components :electric_plug:

###### component name: Alert 
##### props accept:
```javascript
children, variant = 'default', type = 'default', onClose, className}
```

###### component name: Avatar
##### props accept:
```javascript
src, altText, rounded = 'full', size = 'large', className, ...rest 
```

###### component name: Base
##### props accept:
```javascript
classes, component: Component = "div", bordered = false, rounded = "lg", shadow = "lg", ...rest 
```

###### component name: Breadcrumbs
##### props accept:
```javascript
children, variant = 'default', separator = '/', className, ...rest 
```

###### component name: Button
##### props accept:
```javascript
type = 'neutral', variant = 'default', LeftIcon, RightIcon, className, hoverAnimation = false, disabled = false, children, ...rest 
```

###### component name: Card
##### props accept:
```javascript
children, shadow = 'md', rounded = 'md', classes, ...rest 
```

###### component name: Dropdown 
> List
##### props accept:
```javascript
children, isOpen = false, align = 'left', onClose, className, ...rest 
```
> Item
##### props accept:
```javascript
props accept: children, className, ...rest
```

###### component name: HelperText 
##### props accept:
```javascript
children, type = 'info', className, ...rest
```

###### component name: Label
##### props accept:
```javascript
children, variant = 'default', className, ...rest
```

###### component name: Link
##### props accept:
```javascript
children, href, variant = 'default', className, ...rest
```

###### component name: List
> List
##### props accept:
```javascript
children, header, Component = 'ul', headerClassName, className, ...rest 
```
> Item
##### props accept:
```javascript
children, Component = 'li', className, ...rest
```

###### component name: Modal
##### props accept:
```javascript
children, onClose, isOpen = false, className, ...other
```

###### component name: Pill
##### props accept:
```javascript
children, type, iconBefore, iconAfter, className = '', ...rest
```

###### component name: Select
> Option 
##### props accept:
```javascript
props accept:  className, ...rest 
```
> Select
##### props accept:
```javascript
props accept: className, valid, invalid, ...rest
```

###### component name: Table
##### props accept:
```javascript
children, className, separated = false, ...other 
```

> Tbody, Td, Tfoot, Th, Thead
##### props accept:
```javascript
children, className, ...other
```

> Tr
##### props accept:
```javascript
children, className, type = 'odd', ...other
```

###### component name: TextArea
##### props accept:
```javascript
children, valid, invalid, disabled, bordered = true, className, ...rest 
```

###### component name: TextInput
##### props accept:
```javascript
type = 'text', disabled = false, bordered = true, labelVariant, labelChild, helperType, helperChild, valid, invalid, className, ...rest
```

###### component name: ToggleSwitch
##### props accept:
```javascript
variant = 'primary', checked = false, disabled = false, className, ...rest
```

###### component name: Transition
##### props accept:
```javascript
children, variant = '', ...rest
```

## :handshake: Contributing

We welcome all contributions, whether you're reporting an issue, helping us fix bugs, improve the docs, or spread the word. We also welcome your suggestions and feedback.
