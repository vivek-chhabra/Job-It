export function truncateText(string, end) {
    if (string.length < end) return string;
    return string.slice(0, end) + '...';
}

export function truncateTextWithWords(string, end) {
    const wordsArr = string.split(' ');
    const truncate = wordsArr.length > end ? '...' : '';
    
    return wordsArr.slice(0, end).join(' ') + truncate;
}

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
