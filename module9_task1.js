const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const studentNode = xmlDOM.querySelectorAll('student');
const nameNode = xmlDOM.querySelectorAll('name');
const firstNode = xmlDOM.querySelectorAll('first');
const secondNode = xmlDOM.querySelectorAll('second');
const ageNode = xmlDOM.querySelectorAll('age');
const profNode = xmlDOM.querySelectorAll('prof');

const result = {
    list: []
}

for (let i = 0; i < studentNode.length; i++) {
    result.list.push (
        {
            name: `${firstNode[i].textContent} ${secondNode[i].textContent}`,
            age: +ageNode[i].textContent,
            prof: profNode[i].textContent,
            lang: nameNode[i].getAttribute('lang')
        }
    );
}

console.log(result)