const Student = require('./Student');
const Gif = require('./Gif');

const assObj = {foreignKey: {name: 'studentID', allowNull: false}}

Student.hasMany(Gif, assObj);
Gif.belongsTo(Student, assObj);

module.exports = {
    Student,
    Gif
}
