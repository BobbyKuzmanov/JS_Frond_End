function extract(content) {

    const contentElement = document.getElementById(content).textContent;
    const pattern = /\([^()]*\)/g;
    const result = contentElement.match(pattern);

    return result.join(";")

}