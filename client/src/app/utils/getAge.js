export function getAge(date) {
    if (typeof date === "number") {
        return new Date(Date.now()).getFullYear() - new Date(date).getFullYear();
    } else {
        return new Date(Date.now()).getFullYear() - date.split("-")[0];
    }
};
