const getColors = document.getElementById('get-colors');
const colorsContainer = document.getElementById('colors-container');

getColors.addEventListener('click', async() => {
    
    const hexCode = document.querySelector('input[type="color"]').value.slice(1);
    const colorMode = document.querySelector('select').value.toLowerCase();
    const url = `https://www.thecolorapi.com/scheme?hex=${hexCode}&format=json&mode=${colorMode}&count=5`;
    const response = await fetch(url);
    const data = await response.json();

    colorsContainer.innerHTML = data.colors.map((color) => {
        return (
            `
                <div class="color-slot">
                    <div data-hex-code="${color.hex.value}" style="background-color: ${color.hex.value};" class="colors"></div>
                    <p data-hex-code="${color.hex.value}" class="hex-codes">${color.hex.value}</p>
                </div>
            `
        )
    }).join(''); 
});

document.addEventListener('click', (e) => {
    if(e.target.dataset.hexCode)  {
        navigator.clipboard.writeText(e.target.dataset.hexCode);
    }
    
} )

