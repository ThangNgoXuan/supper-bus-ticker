function mapModifiers(baseClassName, ...modifiers) {
  return modifiers
  .reduce(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `-${m}`)
    .reduce(
      (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
      baseClassName,
    );
}

export default mapModifiers;

export const handleScrollYCenter = (
  ref,
  classNameChild,
  index,
) => {
  const eleScroll = ref.current;
  if (!eleScroll) return;
  const eleActive = ref?.current?.querySelectorAll(classNameChild)[index];
  if (!eleActive) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().height;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().y;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().height;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().y;
  // get position sroll bar
  const positionScroll = eleScroll.scrollTop;
  const scrollX = xEleActive
    - xEleScroll
    + widthEleActive / 2
    - widthEleScroll / 2;

  let startTime;

  const animateScroll = (timeStamp = 0) => {
    if (!startTime) {
      startTime = timeStamp;
    }
    const escaped = timeStamp - startTime;

    const scrollPercent = scrollX * Math.min((escaped / 400), 1);
    eleScroll.scrollTop = positionScroll + scrollPercent;
    if (escaped < 400) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};

export const handleScrollXCenter = (
  ref,
  classNameEleActive
) => {
  const eleScroll = ref.current;
  const eleActive = document.querySelector(classNameEleActive);
  if (!eleActive || !eleScroll) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().width;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().x;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().width;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().x;
  // get position sroll bar
  const positionScroll = eleScroll.scrollLeft;
  const scrollX = xEleActive
    - xEleScroll
    + widthEleActive / 2
    + positionScroll
    - widthEleScroll / 2;
  eleScroll.scroll({
    left: scrollX,
    behavior: 'smooth',
  });
};