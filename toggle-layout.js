if (board.classList.contains(classMixed)) {
  board.classList.remove(classMixed);
  board.classList.add(classVertical);
  browser.storage.sync.set({'classList': classVertical});
} else if (board.classList.contains(classVertical)) {
  board.classList.remove(classVertical);
  browser.storage.sync.remove('classList');
} else {
  board.classList.add(classMixed);
  browser.storage.sync.set({'classList': classMixed});
}
