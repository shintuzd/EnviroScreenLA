

document.addEventListener('DOMContentLoaded', () => {
    const mapButtons = document.querySelectorAll('.map-button');
    const mapDivs = document.querySelectorAll('.folium-map');

    // Show the first map in each section
    const defaultMapId = mapDivs[0].id;
    mapDivs.forEach(mapDiv => {
        if (mapDiv.id === defaultMapId) {
            mapDiv.style.display = 'block';
        } else {
            mapDiv.style.display = 'none';
        }
    });

    mapButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mapId = button.getAttribute('data-map-id');
            mapDivs.forEach(mapDiv => {
                if (mapDiv.id === mapId) {
                    mapDiv.style.display = 'block';
                } else {
                    mapDiv.style.display = 'none';
                }
            });

            mapButtons.forEach(b => {
                if (b === button) {
                    b.classList.add('selected-button');
                } else {
                    b.classList.remove('selected-button');
                }
            });
        });
    });

    // Similarly handle the second set of buttons and map divs
    const mapButtons2 = document.querySelectorAll('.map-button2');
    const mapDivs2 = document.querySelectorAll('.folium-map2');

    // Show the first map in the second section
    const defaultMapId2 = mapDivs2[0].id;
    mapDivs2.forEach(mapDiv2 => {
        if (mapDiv2.id === defaultMapId2) {
            mapDiv2.style.display = 'block';
        } else {
            mapDiv2.style.display = 'none';
        }
    });

    mapButtons2.forEach(button => {
        button.addEventListener('click', () => {
            const mapId = button.getAttribute('data-map-id');
            mapDivs2.forEach(mapDiv => {
                if (mapDiv.id === mapId) {
                    mapDiv.style.display = 'block';
                } else {
                    mapDiv.style.display = 'none';
                }
            });

            mapButtons2.forEach(b => {
                if (b === button) {
                    b.classList.add('selected-button');
                } else {
                    b.classList.remove('selected-button');
                }
            });
        });
    });
});
