import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoSlider from '../src/KendoSlider';

const state = {
    max: 10,
    min: -4,
    value: 4,
    step: 2,
    fixedTickWidth: 10,
    decreaseButtonTitle: "Dec",
    increaseButtonTitle: "Inc",
    buttons: true,
    tickPlacement: "both",
    onChange: function(e) {
        state.value = e.value;
        render();
    },
    title: function(value) {
        if (value % 2 === 0) {
            return 'even';
        }
        return 'odd';
    }
};
const render = () => {
    ReactDOM.render(
        <KendoSlider
            buttons = {state.buttons}
            decreaseButtonTitle = {state.decreaseButtonTitle}
            fixedTickWidth = {state.fixedTickWidth}
            increaseButtonTitle = {state.increaseButtonTitle}
            max = {state.max}
            min = {state.min}
            onChange = {state.onChange}
            smallStep = {state.step}
            tickPlacement = {state.tickPlacement}
            title = {state.title}
            value = {state.value}
            vertical
        />,
        document.getElementById('app')
    );
};

render();
