// 创建一个 p5 实例  
let sketch = function(p) {  
    // 圆形的位置  
    let x = p.width / 2;  
    let y = p.height / 2;  
  
    // 拖拽标志  
    let dragging = true;  

  
    // 当鼠标移动时  
    p.mouseMoved = function() {  
        if (dragging) {  
            x = p.mouseX;  
            y = p.mouseY;  
        }  
    };  
  
    // 初始化  
    p.setup = function() {  
        p.createCanvas(400, 400); // 创建一个 400x400 的画布  
        p.background(220); // 设置背景色  
    };  
  
    // 绘制  
    p.draw = function() {  
        p.background(220); // 清空背景  
        p.fill(255, 0, 0); // 设置圆形颜色为红色  
        p.ellipse(x, y, 50, 50); // 绘制一个半径为50的圆形  
    };  
};  
  
// 启动 p5 实例  
new p5(sketch); 