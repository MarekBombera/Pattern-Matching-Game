import {colorArr, colorGeneratorArr,} from '/global_variables.js' 

export const addsClickEffect = (click) => {
    clickEffectRed(click);
    clickEffectBlue(click);
    clickEffectGreen(click);
    clickEffectYellow(click);
}

const clickEffectRed = (click) => {
    if (click.target === colorArr[0]) {
        colorArr[0].classList.add('click-effect');
        setTimeout(() => colorArr[0].classList.remove('click-effect'), 40)
    }
}

const clickEffectBlue = (click) => {
    if (click.target === colorArr[1]) {
        colorArr[1].classList.add('click-effect');
        setTimeout(() => colorArr[1].classList.remove('click-effect'), 40)
    }
}

const clickEffectGreen = (click) => {
    if (click.target === colorArr[2]) {
        colorArr[2].classList.add('click-effect');
        setTimeout(() => colorArr[2].classList.remove('click-effect'), 40)
    }
}

const clickEffectYellow = (click) => {
    if (click.target === colorArr[3]) {
        colorArr[3].classList.add('click-effect');
        setTimeout(() => colorArr[3].classList.remove('click-effect'), 40)
    }
}


export const flashesColors = () => {
    flashesRed();
    flashesBlue();
    flashesGreen();
    flashesYellow();
    colorGeneratorArr.shift();
}


const flashesRed = () => {
    if (colorGeneratorArr[0] === colorArr[0] ) {
        colorArr[0].style.backgroundColor = 'rgba(255, 0, 0, 1)';
        colorArr[0].style.border = '2px solid #000000';
        
        setTimeout(() => {
        colorArr[0].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        colorArr[0].style.border = '1px solid #000000';
        }, 600);
    }
}

const flashesBlue = () => {
    if (colorGeneratorArr[0] === colorArr[1]) {
        colorArr[1].style.backgroundColor = 'rgba(0, 0, 255, 1)';
        colorArr[1].style.border = '2px solid #000000';

        setTimeout(() => {
        colorArr[1].style.backgroundColor = 'rgba(0, 0, 255, 0.2)'
        colorArr[1].style.border = '1px solid #000000';
        }, 600)
    }
}

const flashesGreen = () => {
    if (colorGeneratorArr[0] === colorArr[2]) {
        colorArr[2].style.backgroundColor = 'rgba(0, 255, 0, 1)';
        colorArr[2].style.border = '2px solid #000000';

        setTimeout(() => {
        colorArr[2].style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        colorArr[2].style.border = '1px solid #000000';
        }, 600)
    }
}

const flashesYellow= () => {
    if (colorGeneratorArr[0] === colorArr[3]) {
        colorArr[3].style.backgroundColor = 'rgba(255, 255, 0, 1)';
        colorArr[3].style.border = '2px solid #000000';

        setTimeout(() => {
        colorArr[3].style.backgroundColor = 'rgba(255, 255, 0, 0.2)'
        colorArr[3].style.border = '1px solid #000000';
        }, 600)
    }   
}

const exportResources = {
    addsClickEffect,
    flashesColors
}