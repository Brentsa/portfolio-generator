const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
    profileDataArr.forEach(profileDataItem => console.log(profileDataItem));
};

printProfileData(profileDataArgs);
