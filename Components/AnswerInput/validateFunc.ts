export const checkName = (name: string) => {
    return /[A-Za-zА-Яа-я-_ ]{3}/.test(name);
};

export const checkEmail = (email: string) => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email,
    );
};
