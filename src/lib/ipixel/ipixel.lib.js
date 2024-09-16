// ipixel is an pixeling library for javascript designed by ImgPILLER

// mouse pos
const Mouse = {
  
    x(){
      
      var mouse;
      function get_X(event){
        var pos = event.clientX;
        mouse = pos;
      }
      get_X(event);
      
      return mouse;
      
    },
    
    
    y(){
      
      var mouse;
      function get_Y(event){
        var pos = event.clientY;
        mouse = pos;
      }
      get_Y(event);
      
      return mouse;
      
    },
    
    get_Pos(){
      var x = Mouse.x();
      var y = Mouse.y();
      var build = x + "," + y;
      return build;
    }
    
  }

// pvec2() variable
function pvec2(x, y){
    return x || y;
}

// pixel function
function pixel(coord_x, coord_y){
    // render the pixel
    var span = document.createElement('span');
    span.style.background = 'black';
    span.style.height = '1px';
    span.style.width = '1px';
    span.style.position = 'absolute';
    span.style.top = coord_y+'px';
    span.style.left = coord_x+'px';
    document.body.appendChild(span);
}