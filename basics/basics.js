//�������� �������, ������� ���������, �������� �� ����� ����� ��������� ��������� ���������
function isInteger(n) {
function isInteger(n) 
{
    return (n ^ 0) === n;
}

//�������� �������, ������� ���������� ������ ������ ����� �� 2 �� 20 ������������
function even() {
function even() 
{
    let massive = [];
    const upBorder = 20;

    for (let i = 0; i <= upBorder; i++) 
    {
        if ((i % 2 === 0) && (i !== 0))
        {
            massive.push(i);
        }
    }
    return massive;
}

//�������� �������, ��������� ����� ����� �� ��������� ��������� ����
function sumTo(n) {
function sumTo(n) 
{
    let sum = 0;

    for (let i = 1; i <= n; i++) 
    {
        sum += i;
    }
    return sum;
}

//�������� �������, ��������� ����� ����� �� ��������� ��������� ��������
function recSumTo(n) {
function recSumTo(n) 
{
    if (n === 0)
    {
        return 0;
    }
    return  n + recSumTo(n-1);
}

//�������� �������, ��������� ��������� ��������� �����
function factorial(n) {
function factorial(n) 
{
    if (n < 0)
    {
        return("Error");
    }
    if ((n === 1) || (n === 0))
    {
        return 1;
    }
    return n * factorial(n-1);
}

//�������� �������, ������� ����������, �������� �� ����� �������, ����������� � �������
function isBinary(n) {
function isBinary(n) 
{
    if (n === 1)
    {
        return true;
    }
    for(let i = 2; i <= n; i *= 2)
    {
        if (i === n)
        {
            return true;
        }
    }
    return false;
}

//�������� �������, ������� ������� N-� ����� ���������
function fibonacci(n) {
function fibonacci(n) 
{
    if (n < 1)
    {
        return("Error");
    }
    if (n === 1)
    {
		return 1;
	}
    else if (n === 2)
    {
		return 1;
	}
    else if (n > 2)
    {
		return fibonacci(n-1)+fibonacci(n-2);
	}
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}