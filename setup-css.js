let cssFile = browser.extension.getURL('/css/layout.css'),
    board = document.getElementById('board'),
    classFlex = 'layout-trello-grid';

function insertCss() {
  if (document.getElementById('layoutcss') === null) {
    let css = document.createElement('link');
    css.id = 'layoutcss';
    css.type = 'text/css';
    css.rel = 'stylesheet';
    css.href = cssFile;
    document.getElementsByTagName('head')[0].appendChild(css);
  }
}

insertCss();

browser.storage.sync.get('classList', function (result) {
  if (result.classList) {
    board.classList.add(result.classList);
  }
});
