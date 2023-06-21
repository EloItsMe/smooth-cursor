const cursors = document.querySelectorAll('.cursor');
const cursorSize = 20;
let cursorSizeDown = cursorSize / cursors.length;
let count = 0;

cursors.forEach(cursor => {
  count += cursorSizeDown;
  cursor.style.height = cursorSize - count + 'px';
  cursor.style.width = cursorSize - count + 'px';
  cursor.style.transition = 'all ' + (count * 5) + 'ms';
});

window.addEventListener('mousemove', e => {
  const x = e.pageX;
  const y = e.pageY;

  cursors.forEach(cursor => {
    cursor.style.transform = "translate(" + (x - (parseInt(cursor.style.height, 10)/2)) + "px, " + (y - (parseInt(cursor.style.height, 10)/2)) + "px)";
  });
});
