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