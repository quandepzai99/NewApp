export const compose = (...fns) => (...args) =>
  _.initial(fns).reduceRight((acc, fn) => fn(acc), _.last(fns)(...args));
