// �������� �������, ������� ��������� ��� ������������ � ����������
// ������ ������� ��� �������
function fioToName() {}
function fioToName(str) 
{
    let [lastName, firstName, middleName] = str.split(" ");
    return `${firstName} ${lastName}`;
}

// ������������ ������ ����� ���, ����� � ��� �������� ������
// ���������� ��������
// ������������� � ��������� "Set"
function filterUnique() {}
function filterUnique(array) 
{
    let uniqArray = new Set(array);
    return Array.from(uniqArray);
}

// ������: ������� �������
// � ������� �������� ������ �� n ������� ����������� �����
// ���� ������ ����������, �� ������� ��� �������� ������ �������������������
// ���������� ��������� �������� ������ ������������������
// ������������� � ������ .reduce
function calculateSalaryDifference() {}
function calculateSalaryDifference(array) 
{
    if (array.length === 0)
    {
        return null;
    }
    let [highestSalary, lowestSalary] = array.reduce(function([highestSalary, lowestSalary], temp)
    {
        if (temp >= highestSalary)
        {
            highestSalary = temp;
        }
        if (temp <= lowestSalary)
        {
            lowestSalary = temp;
        }
        return [highestSalary, lowestSalary];
    }, [0, 999999]); //���� �������� �� infinity ������ ������� �����, � �������� ������� �������� ���������

    return highestSalary / lowestSalary;
}

// ������� � ������������� fooBar
// �������� �������, ������� ��������� n
// ���������� ������ ����� �� 1 �� n, ��� ������ �����, ������� ������� �� 3 � "Foo",
// �����, ������� ������� �� 5 � "Bar", � �� 15 � "FooBar"
// * �������� �������
function fooBar() {}
function fooBar(n) 
{
  let array = [];
  for (let i = 0; i < n; i++)
  {
      if ((i + 1) % 15 === 0)
      {
        array.push("FooBar");
      }
      else if ((i + 1) % 3 === 0)
      {
        array.push("Foo");
      }
      else if ((i + 1) % 5 === 0)
      {
        array.push("Bar");
      }
      else 
      {
        array.push(i + 1);
      }
  }
    return array;
}

// ���������� ����� "������� ����"
// ����� ������ ���� ���������� � �������� ������ �� �������
// ������������� � ��������� "Map"
// * �������� ����� �������
class Dictionary {}
class Dictionary 
{
    constructor() 
    {
        this.vocabulary = new Map();
    }

    addWordToDict(newWord, definition) 
    {
        if (typeof(newWord) !== 'string' || typeof(definition) !== 'string') 
        {
            return null;
        }
        this.vocabulary.set(newWord, definition);
    }

    deleteWordFromDict(deletedWord, definition) 
    {
        if (typeof(deletedWord) !== 'string' || !(this.vocabulary.has(deletedWord)) || typeof(definition) !== 'string') 
        {
            return null;
        }
        this.vocabulary.delete(deletedWord, definition);
    }

    getDefinition(tempWord) {
        if (typeof(tempWord) !== 'string' || !(this.vocabulary.has(tempWord))) 
        {
            return null;
        }
        return this.vocabulary.get(tempWord);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    fooBar,
    Dictionary,
    calculateSalaryDifference
};