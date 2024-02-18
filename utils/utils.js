import AsyncStorage from '@react-native-async-storage/async-storage';

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

export function isFav(job, favJobArr) {
    if (favJobArr && favJobArr.length)
        new Error(`${favJobArr} IS NOT AN ARRAY`);
    return favJobArr.some(ele => ele.job_id === job.job_id);
}

export async function getDataFromStorage(path) {
    const res = await AsyncStorage.getItem(path);
    const data = JSON.parse(res);
    return data;
}
