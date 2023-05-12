// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combine = first.concat(second);
// console.log(combine)

// const clone = [...first, 'a', ...second, 'b'];
// console.log(first)
// console.log(clone)

const first = { name: 'Luke' };
const second = { job: 'Instructor'};

const combined = { ...first, ...second, location: 'Australia'};
console.log(combined);