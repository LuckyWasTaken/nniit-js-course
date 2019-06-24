//�������� �������, ������� ������ ������ ������ ������ ��������� (������� �� ���������� - ��������������� ������ �����)
function capitalize(str) {}
function capitalize(str) 
{
  if (str === "")
  {
    return str;
  }
  let defaultArr = str.split(" ");
  let upperArr = defaultArr.map(function(word)
  {
    return word[0].toUpperCase() + word.substr(1);
  })
  return upperArr.join(" ");
}

//�������� �������, ������� ������ ������, ��������� �� n �������� � ��������� � ����� ���������� (���� n > ����� ������ - ������ ������ �� ����)
function truncate(str, n) {}
function truncate(str, n) 
{
  if (str.length > n) 
  {
    return str.substring(0, n) + "...";
  }
return str;
}

//����������, ���� �� ������
function isEmpty(obj) {}
function isEmpty(obj) 
{
  for (let key in obj) 
  {
    return false;
  }
  return true;
}

//�������� �������, ���������� ��������� �������� �� 2
function multiply(obj) {}
function multiply(obj) 
{
  for (let key in obj)
  {
    if (isFinite(obj[key]) === true) 
    {
      obj[key]*=2;
    }
  }
  return obj;
}

//�������� �������, ��������� ����� ���� ��������� ������� (���������� ������������ reduce)
function sumArr(arr) {}
function sumArr(arr) 
{
  let sumArray = arr.reduce(function(sumArray, current) {return sumArray + current;});
  return sumArray;
}

//�������� �������, ������������, �������� �� ������ ����� �����������
function isPali(str) {}
function isPali(str) 
{
  for (let i = 0; i < str.length/2; i++)
  {
    if (str[i]!==str[str.length-i-1])
    {
      return false;
    }
  }
  return true;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};