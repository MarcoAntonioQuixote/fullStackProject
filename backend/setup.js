const { sequelize } = require("./connection");
const { Gif, Student } = require("./models/associations");

async function syncTables() {
  try {
    // sequelize.sync({force: true})
    await Student.sync({force: true});
    await Gif.sync({force: true});
    console.log('Tables DID sync!')
  } catch (err) {
    console.log('Tables not synced', err);
  }
}

const students = [
    {
      name: 'John Doe', age: 22 },
    {
      name: 'Jane Smith', age: 22 },
    {
      name: 'Michael Johnson', age: 22 },
    {
      name: 'Emily Brown', age: 22 },
    {
      name: 'William Lee', age: 22 },
    {
      name: 'Sophia Taylor', age: 22 },
    {
      name: 'Daniel Martinez', age: 22 },
    {
      name: 'Olivia Anderson', age: 22 },
    {
      name: 'Liam Wilson', age: 22 },
];

const gifs = [
  {url: 'https://giphy.com/gifs/manutd-mufc-ggmu-casemiro-g5IzndDINNzZj78oIP/giphy.gif', howFunny: 5, studentID: 1 },
{url: 'https://giphy.com/clips/manutd-mufc-ggmu-david-de-gea-QNGxf9BVz8mJvQ9YuG/giphy.gif', howFunny: 4, studentID: 1 },
{url: 'https://giphy.com/gifs/reaction-surprised-pee-wee-herman-bdTxWolHXUtbi/giphy.gif', howFunny: 2, studentID: 3 },
{url: 'https://giphy.com/gifs/legal-wee-scandals-UwNDeWxOolRug/giphy.gif', howFunny: 1, studentID: 4 },
{url: 'https://giphy.com/clips/showtime-season-2-episode-3-yellowjackets-krYo2uTA76NZwoVm2r/giphy.gif', howFunny: 5, studentID: 5 },
{url: 'https://media0.giphy.com/media/MVDPX3gaKFPuo/giphy.gif?cid=ecf05e473371n9hhwfvdayxp1oeunbbivcx3uo4hja68b7ct&ep=v1_gifs_gifId&rid=giphy.gif&ct=g', howFunny: 7, studentID: 6 },
{url: 'https://giphy.com/clips/studiosoriginals-happy-excited-victory-lYv10cDlosFnA0toPb', howFunny: 3, studentID: 1 },
{url: 'https://giphy.com/clips/studiosoriginals-prince-ENmhj3DL1Jp5tQ3XdA', howFunny: 2, studentID: 8 },
{url: 'https://giphy.com/gifs/fun-animation-illustrated-n8Pg2AtbkAcDP04JuH/giphy.gif', howFunny: 8, studentID: 9 },
{url: 'https://giphy.com/clips/studiosoriginals-2zZBXds0OPHVnWQF66', howFunny: 8, studentID: 1 },
]

async function uploadData() {
  try {
    await Student.bulkCreate(students);
    await Gif.bulkCreate(gifs);
    console.log('Uploaded')
  } catch (err) {
    console.log('Did not load data: ', err);
  }
}

module.exports = {syncTables, uploadData}

