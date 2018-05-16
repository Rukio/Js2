var mainBlock,
    blockLayer,
    layer       = 0,
    layerY      = 0,
    scrollStep  = 20,
    blockWidth  = 400;

window.onload = function() {

    mainBlock   = document.querySelector('.main-block'),
    blockLayer  = document.querySelectorAll('.main-block__layer'),
    blocksTotal = blockLayer.length - 1;

    mainBlock.onmousewheel = function(event) {
        console.log(event);
        event = event || window.event;

        if (layer < blocksTotal & event.deltaY == 100) {
            if (layerY > -400) {
                layerY -= scrollStep;
            } else
            {
                layer++;
                layerY = 0;
            }
            blockLayer[layer].style.top = layerY + 'px';
        } else

        if (layer >= 0 & event.deltaY == -100) {
            if (layerY < 0) {
                layerY += scrollStep;
            } else
            {
                if (layer > 0) {
                    layer--;
                    layerY = -400;
                }
            }
            blockLayer[layer].style.top = layerY + 'px';
        }
        
    }

}
