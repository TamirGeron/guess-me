var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var STORAGE_KEY = 'questDB'

function createQuestsTree() {
  var questsTree = loadFromStorage(STORAGE_KEY)
  if (!questsTree) {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    _saveQuestToStorage();
  }
  gCurrQuest = gQuestsTree
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  };
}

function isChildless(node) {
  return node.yes === null && node.no === null;
}

function moveToNextQuest(res) {
  // update the gPrevQuest, gCurrQuest global vars
  gPrevQuest = gCurrQuest
  gCurrQuest = gCurrQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  // Create and Connect the 2 Quests to the quetsions tree
  // debugger
  console.log('gPrevQuest',gPrevQuest);
  console.log('gQuestsTree',gQuestsTree);
  gPrevQuest[lastRes] = createQuest(newQuestTxt)
  gPrevQuest[lastRes].no = gCurrQuest
  gPrevQuest[lastRes].yes = createQuest(newGuessTxt)
  _saveQuestToStorage()
}

function getCurrQuest() {
  return gCurrQuest;
}

function resetGame() {
  gLastRes = null;
  gQuestsTree = loadFromStorage(STORAGE_KEY)
  gCurrQuest=gQuestsTree
}

function _saveQuestToStorage() {
  console.log('save', gQuestsTree);
  saveToStorage(STORAGE_KEY, gQuestsTree)
}
