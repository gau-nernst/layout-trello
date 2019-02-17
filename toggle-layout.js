if (board.classList.contains(classFlex)) {
  board.classList.remove(classFlex);
  browser.storage.sync.remove('classList');
} else {
  board.classList.add(classFlex);
  browser.storage.sync.set({'classList': classFlex});
}