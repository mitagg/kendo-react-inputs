[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-react-inputs.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-react-inputs)
[![Build Status](https://travis-ci.org/telerik/kendo-react-inputs.svg?branch=master)](https://travis-ci.org/telerik/kendo-react-inputs)

# Kendo UI Inputs for React

* [Overview](https://github.com/telerik/kendo-react-inputs#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-inputs#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-inputs#installation)
* [Browser Support](https://github.com/telerik/kendo-react-inputs#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-inputs#glossary)
  * [Component](https://github.com/telerik/kendo-react-inputs#component)
  * [Package](https://github.com/telerik/kendo-react-inputs#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Inputs components for React.

Currently, the package includes only the Slider component.

Telerik works on porting the following components too:

* ColorPicker
* MaskedTextBox
* NumericTextBox
* Switch

For more information on forthcoming Inputs package features and components, refer to the [Roadmap](https://github.com/telerik/kendo-react-inputs/blob/master/docs/roadmap.md).

## Basic Usage

The Slider lets users select a value from a predefined range. These values can be increased or decreased over a pre-defined step by dragging a handle along the track, or by clicking the side arrow buttons.

```html-preview
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2
            };
        }
        onChange(e) {
            this.setState({
                value: e.value
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                />);
        }
    }
    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );

```

For more examples and available configuration options, refer to the [Slider documentation section](https://github.com/telerik/kendo-react-inputs/blob/master/docs/slider/overview.md).

## Installation

The React Inputs are published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in `http://npmjs.org/`.

Install it using NPM:

```sh
npm install --save @telerik/kendo-react-inputs;
```

Once installed, import the module:

```jsx
// ES2015 module syntax
import {Slider} from 'kendo-react-inputs';
```
```jsx
// CommonJS format
var Slider = require('kendo-react-inputs').Slider;
```

## Browser Support

The Kendo UI Inputs components for React support all browsers that are supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms that Kendo UI suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package. For example, the Kendo UI Slider, MaskedTextBox, NumericTextBox, and Switch components for React are part of the Inputs Package.
