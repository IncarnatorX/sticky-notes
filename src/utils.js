export const setNewOffset = (card, mouseMoveDir = { x: 0, y: 0 }) => {
  if (!card) return { x: 0, y: 0 };

  // Use offsetLeft/Top as base but get robust viewport values from window
  const offsetLeft = card.offsetLeft - (mouseMoveDir.x || 0);
  const offsetTop = card.offsetTop - (mouseMoveDir.y || 0);

  // boundaries — use window inner size so changes from devtools / resize are accounted for
  const maxX = Math.max(0, window.innerWidth - card.offsetWidth);
  const maxY = Math.max(0, window.innerHeight - card.offsetHeight);

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
    return error;
  }
};
