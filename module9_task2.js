const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}`;

const data = JSON.parse(jsonString);

const result = {
    list: []
}

for (let i = 0; i < data.list.length; i++) {
    result.list.push (
        {
            name: data.list[i].name,
            age: +data.list[i].age,
            prof: data.list[i].prof,
        }
    );
}

console.log(result)