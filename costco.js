//'US' dropdown menu (only activated by hover);
const dropdownUS = document.querySelector('.US-dropdown-visible');

const dropdownUSHidden = document.querySelector('.US-dropdown-selection');

dropdownUS.addEventListener('mouseover', function() {
    dropdownUSHidden.style.display = 'block';
})

dropdownUSHidden.addEventListener('mouseover', function() {
    dropdownUSHidden.style.display = 'block';
})

dropdownUSHidden.addEventListener('mouseout', function() {
    dropdownUSHidden.style.display = 'none';
})
 
dropdownUS.addEventListener('mouseout', function() {
    dropdownUSHidden.style.display = 'none';
})

//'find a warehouse' dropdown
const dropdownWarehouse = document.querySelector('.findWarehouse-visible');

const dropdownWarehouseHidden = document.querySelector('.findWarehouse-hidden');

dropdownWarehouse.addEventListener('mouseover', function() {
    dropdownWarehouseHidden.style.display = 'block';
})

dropdownWarehouseHidden.addEventListener('mouseover', function() {
    dropdownWarehouseHidden.style.display = 'block';
})

dropdownWarehouseHidden.addEventListener('mouseout', function() {
    dropdownWarehouseHidden.style.display = 'none';
})

dropdownWarehouse.addEventListener('mouseout', function() {
    dropdownWarehouseHidden.style.display='none';
})

//footer drop down MOBILE DISPLAY HIDDEN
const allIcons = document.querySelectorAll('.footer-two-mobile-nonexpand');

const allDropdowns = document.querySelectorAll('.footer-two-mobile-drop');

for (let i = 0; i<allIcons.length; i++) {
    allIcons[i].addEventListener('click', function() {
        const plus = document.querySelector(`.plus-icon${i}`);
        const minus = document.querySelector(`.minus-icon${i}`);
        const dropdown = document.querySelector(`.footer-two-mobile-drop${i}`);

        //if you click on a plus, symbol changes to minus and dropdown appears
        if (plus.style.display === 'block') { 
            plus.style.display = 'none';
            minus.style.display = 'block';
            dropdown.style.display = 'block';
            let index = i;
            console.log(index);
            //allows only one dropdown menu to be opened at a time
            for (let i = 0; i<allIcons.length; i++) {
                if (i !== index) {
                    const plus = document.querySelector(`.plus-icon${i}`);
                    const minus = document.querySelector(`.minus-icon${i}`);
                    const dropdown = document.querySelector(`.footer-two-mobile-drop${i}`);
                    dropdown.style.display = 'none';
                    plus.style.display = 'block';
                    minus.style.display = 'none';
                }
            }
        //if you click on a minus, symbol changes to plus and dropdown dissapears
        } else { 
            plus.style.display = 'block';
            minus.style.display = 'none';
            dropdown.style.display = 'none';
        }
})
}
