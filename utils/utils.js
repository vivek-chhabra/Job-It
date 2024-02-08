export function truncateText(string, end) {
  if (string.length < end) return string;
  return string.slice(0, end) + '...';
}

String.prototype.truncateTextWithWords = function (end) {
  return this.split(' ').slice(0, end).join(' ');
};

export const checkImgUrl = url => {
  if (!url) return;
  else {
    const pattern = new RegExp(
      '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
      'i'
    );
    return pattern.test(url);
  }
};
