// �������� �������, ����������� ��� �����, ���, ��� sum(a)(b) == a + b (������� � ����� ������ ���������� �� ������������� - ���������� ����� ���������� �����)
function sum(a) {
function sum(a) 
{
  return function(b)
  {
  return a+b;
  }
}

// �������� ���������, ������� ����� ��������� ����� � ������� ������� �������������� �� ���� ���������� ����� ����� (���� ������� �� �� ����� ������� - ���������� ����� :) )
function average() {
function average() 
{
  let count=0;
  let sum=0;

  return function(number)
  {
    sum += number;
    count++;
    return sum/count;
  }
}

module.exports = {
  sum,
  average
};