const instructor = [
    {name:'Nodi', age:28, position:'Senior'},
    {name:'Akil', age:26, position:'Junio'},
    {name:'Shobuj', age:30, position:'Senior'}
]

const filteredNames = instructor.filter(instructor => instructor.position === 'Senior');
const names = filteredNames.map(item => item.name);
console.log(names);