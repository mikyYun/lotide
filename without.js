const without = (first, second) => {
  const onlyItem = first.filter(el => !second.includes(el));
  console.log(onlyItem);
  return onlyItem;
};

module.without = without