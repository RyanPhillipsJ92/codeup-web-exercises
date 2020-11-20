const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersWith3Languages = users.filter(user => user.languages.length > 2);
console.log(usersWith3Languages);


let emailArr = users.map(x => x.email);
console.log(emailArr)


const totalYears = users.reduce((years, user) => {
    return years + user.yearsOfExperience;
},0);
let averageExperience = totalYears/users.length;
// console.log(`total years worked by all : ${totalYears}`)
// console.log(`total of people counted : ${users.length}`)
console.log(`the average experience : ${averageExperience}`);


const longestEmail = users.reduce((currentEmail, user) => {
    if (user.email.length > currentEmail.length){
        currentEmail = user.email
    }
    return currentEmail
}, "");
console.log(longestEmail);

const userNames = users.reduce((names, user) => {
    return `${names} ${user.name}`
}, 'Your instructors are :');

console.log(userNames);

const singleString = users.reduce(function (currentstring, instructors){
    return ` ${currentstring}  ${instructors.name}`
}, 'your instructors are')
console.log(singleString)