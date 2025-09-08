export const setNewOffset = (card, mouseMoveDir = { x: 0, y: 0 }) => {
  const offsetLeft = card.offsetLeft - mouseMoveDir.x;
  const offsetTop = card.offsetTop - mouseMoveDir.y;

  // boundaries
  const maxX = document.documentElement.clientWidth - card.offsetWidth;
  const maxY = document.documentElement.clientHeight - card.offsetHeight;

  return {
    x: Math.min(Math.max(0, offsetLeft), maxX),
    y: Math.min(Math.max(0, offsetTop), maxY),
  };
};

export function autoGrow(textAreaRef) {
  const { current } = textAreaRef;
  current.style.height = "auto";
  current.style.height = current.scrollHeight + "px";
}

export const setZIndex = (selectedCard) => {
  selectedCard.style.zIndex = 999;

  Array.from(document.getElementsByClassName("card")).forEach((card) => {
    if (card !== selectedCard) {
      card.style.zIndex = selectedCard.style.zIndex - 1;
    }
  });
};

export const bodyParser = (value) => {
  try {
    JSON.parse(value);
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};
