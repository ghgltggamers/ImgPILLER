// this file is responsible for layer selection
var current_active_layer = 'layer-5';

// fetching all layers
var layers_button = document.getElementsByClassName('layer-manager-layer');

function remove_Green_From_Layers(){
    for (var i = 0;i < layers_button.length;i++){
        layers_button[i].classList.remove('green');
    }
}

layers_button[0].addEventListener('click', function(){
    remove_Green_From_Layers();
    layers_button[0].classList.add('green')
    current_active_layer = 'layer-1';
})

layers_button[1].addEventListener('click', function(){
    remove_Green_From_Layers();
    layers_button[1].classList.add('green')
    current_active_layer = 'layer-2';
})

layers_button[2].addEventListener('click', function(){
    remove_Green_From_Layers();
    layers_button[2].classList.add('green')
    current_active_layer = 'layer-3';
})

layers_button[3].addEventListener('click', function(){
    remove_Green_From_Layers();
    layers_button[3].classList.add('green')
    current_active_layer = 'layer-4';
})

layers_button[4].addEventListener('click', function(){
    remove_Green_From_Layers();
    layers_button[4].classList.add('green')
    current_active_layer = 'layer-5';
})


function log_layers(){
    console.log('Current active layer is ' + current_active_layer)
}