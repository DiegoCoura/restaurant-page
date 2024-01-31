const customCreateElement = (elementTag, props = {}) =>{
    const element = document.createElement(elementTag);

    Object.entries(props).forEach(([key, value]) => {
        element[key] = value;
    })

    return element
}

export default customCreateElement;