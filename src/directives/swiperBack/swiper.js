
export default function (el, vm) {
    let move = 50;
    let angle;
    let startX, startY, endX, endY, dx, dy;
    el.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    })
    el.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].pageX;
        endY = e.changedTouches[0].pageY;
        dx = endX - startX;
        dy = endY - startY;
        console.log(dx);
        if (Math.abs(dx) < move) {  //Math.abs()去得数的绝对值
            return;
        }
        angle = Math.atan2(dy, dx) * 180 / Math.PI;
        // Math.PI 表示一个圆的周长与直径的比例  圆周率
        // atan2()有两个参数, y坐标是作为第一个参数传递， X坐标作为第二个参数传递。 返回的值表示坐标（x，y）与 X轴之间的角度的弧度
        if (angle >= -45 && angle <= 45) {
            vm.$router.go(-1);
        }
    })
}