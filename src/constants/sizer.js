export const sizer = (number) => {
  let size = '';
  if (number > 40) {
    size = 'Size: XL';
  } else if (number <= 10) {
    size = 'Size: Small';
  } else if (number > 10 && number <= 20) {
    size = 'Size: Medium';
  } else if (number > 20 && number <= 40) {
    size = 'Size: Big';
  }
  return size;
};
