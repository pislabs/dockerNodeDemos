/**
 * 对指定元素进行缩放
 * @param {*} el
 */
function resizeToFullScreen(el, refEl) {
  el = getEl(el);

  if (!el) return;

  refEl = getEl(refEl) || {};

  const clientWidth = refEl.clientWidth || el.clientWidth;
  const clientHeight = refEl.clientHeight || el.clientHeight;

  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  let scaleRate = 1;

  let widthRate = parseFloat((winWidth / clientWidth).toFixed(2));
  let heightRate = parseFloat((winHeight / clientHeight).toFixed(2));

  scaleRate = widthRate < heightRate ? widthRate : heightRate;

  // 最小缩放大小
  if (scaleRate < 0.4) {
    scaleRate = 0.4;
  }

  el.style.transform = `scale(${scaleRate}, ${scaleRate})`;
  el.style.transformOrigin = "0% 0%";
}

function getEl(el) {
  if (typeof el === "string") {
    el = document.querySelector(el);
  }

  return el;
}
